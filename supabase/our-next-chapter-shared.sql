-- Our Next Chapter shared household backend (Supabase/PostgreSQL 17)
-- Requires a dedicated project. All household financial records are private under RLS.
-- Never store service_role or any secret key in the browser.
begin;
create schema if not exists onc_internal;
revoke all on schema onc_internal from public, anon, authenticated;
grant usage on schema onc_internal to authenticated;

create table if not exists public.onc_households (
 id uuid primary key default gen_random_uuid(),
 created_by uuid not null references auth.users(id) on delete cascade,
 invite_hash text unique,
 invite_expires_at timestamptz,
 created_at timestamptz not null default now()
);
create table if not exists public.onc_members (
 household_id uuid not null references public.onc_households(id) on delete cascade,
 user_id uuid not null references auth.users(id) on delete cascade,
 role text not null check(role in ('owner','member')),
 joined_at timestamptz not null default now(),
 primary key (household_id,user_id),
 unique (user_id)
);
create table if not exists public.onc_documents (
 household_id uuid primary key references public.onc_households(id) on delete cascade,
 content jsonb not null,
 revision bigint not null default 1 check(revision > 0),
 updated_at timestamptz not null default now(),
 updated_by uuid references auth.users(id)
);

alter table public.onc_households enable row level security;
alter table public.onc_members enable row level security;
alter table public.onc_documents enable row level security;

revoke all on public.onc_households from anon, authenticated;
revoke all on public.onc_members from anon, authenticated;
revoke all on public.onc_documents from anon, authenticated;
grant select on public.onc_households,public.onc_members,public.onc_documents to authenticated;

create policy onc_members_view_own on public.onc_members for select to authenticated
 using (user_id=(select auth.uid()));
create policy onc_households_view_member on public.onc_households for select to authenticated
 using (exists(select 1 from public.onc_members m where m.household_id=id and m.user_id=(select auth.uid())));
create policy onc_documents_view_member on public.onc_documents for select to authenticated
 using (exists(select 1 from public.onc_members m where m.household_id=onc_documents.household_id and m.user_id=(select auth.uid())));

-- Private security-definer operations: constrained to verified auth.uid() and strict document ownership.
create or replace function onc_internal.onc_create(p_content jsonb,p_invite text)
returns uuid language plpgsql security definer set search_path=''
as $$
declare me uuid := auth.uid(); hid uuid;
begin
 if me is null then raise exception 'Sign-in required' using errcode='28000';end if;
 if jsonb_typeof(p_content) <> 'object' or octet_length(p_content::text)>2000000 then
   raise exception 'Invalid household document' using errcode='22023'; end if;
 if p_invite !~ '^[a-f0-9]{48}$' then raise exception 'Invite must be a generated 48-character code' using errcode='22023'; end if;
 if exists(select 1 from public.onc_members where user_id=me) then
   raise exception 'Already in a household' using errcode='23505'; end if;
 insert into public.onc_households(created_by,invite_hash,invite_expires_at)
 values(me,encode(sha256(convert_to(p_invite,'UTF8')),'hex'),now()+interval '14 days')
 returning id into hid;
 insert into public.onc_members(household_id,user_id,role) values(hid,me,'owner');
 insert into public.onc_documents(household_id,content,updated_by) values(hid,p_content,me);
 return hid;
end;$$;

create or replace function onc_internal.onc_accept(p_invite text)
returns uuid language plpgsql security definer set search_path=''
as $$
declare me uuid:=auth.uid(); hid uuid; members integer;
begin
 if me is null then raise exception 'Sign-in required' using errcode='28000';end if;
 if p_invite !~ '^[a-f0-9]{48}$' then raise exception 'Invalid code' using errcode='22023';end if;
 if exists(select 1 from public.onc_members where user_id=me) then raise exception 'Already in a household' using errcode='23505';end if;
 select id into hid from public.onc_households
 where invite_hash=encode(sha256(convert_to(p_invite,'UTF8')),'hex') and invite_expires_at>now()
 for update;
 if hid is null then raise exception 'Invite invalid, used, or expired' using errcode='22023';end if;
 select count(*) into members from public.onc_members where household_id=hid;
 if members>=2 then raise exception 'Household already has two members' using errcode='22023';end if;
 insert into public.onc_members(household_id,user_id,role) values(hid,me,'member');
 update public.onc_households set invite_hash=null,invite_expires_at=null where id=hid;
 return hid;
end;$$;

create or replace function onc_internal.onc_update(p_household uuid,p_expected bigint,p_content jsonb)
returns bigint language plpgsql security definer set search_path=''
as $$
declare me uuid:=auth.uid(); next_revision bigint;
begin
 if me is null then raise exception 'Sign-in required' using errcode='28000';end if;
 if not exists(select 1 from public.onc_members where household_id=p_household and user_id=me) then
    raise exception 'Access denied' using errcode='42501';end if;
 if jsonb_typeof(p_content)<>'object' or octet_length(p_content::text)>2000000 then
    raise exception 'Invalid household document' using errcode='22023';end if;
 update public.onc_documents set content=p_content,revision=revision+1,updated_at=now(),updated_by=me
 where household_id=p_household and revision=p_expected
 returning revision into next_revision;
 return coalesce(next_revision,-1);
end;$$;

create or replace function onc_internal.onc_new_invite()
returns text language plpgsql security definer set search_path=''
as $$
declare me uuid:=auth.uid(); hid uuid; invite text;
begin
 if me is null then raise exception 'Sign-in required' using errcode='28000';end if;
 select household_id into hid from public.onc_members where user_id=me and role='owner';
 if hid is null then raise exception 'Only owner can invite' using errcode='42501';end if;
 if (select count(*) from public.onc_members where household_id=hid)>=2 then
   raise exception 'Household already has two members' using errcode='22023';end if;
 invite:=substr(replace(gen_random_uuid()::text,'-','')||replace(gen_random_uuid()::text,'-',''),1,48);
 update public.onc_households set invite_hash=encode(sha256(convert_to(invite,'UTF8')),'hex'),invite_expires_at=now()+interval '14 days' where id=hid;
 return invite;
end;$$;

-- Routines live in non-Data-API schema; public wrappers are invoker-only RPC endpoints.
create or replace function public.onc_create_household(p_content jsonb,p_invite text)
returns uuid language sql security invoker set search_path=''
as $$ select onc_internal.onc_create(p_content,p_invite) $$;
create or replace function public.onc_accept_invite(p_invite text)
returns uuid language sql security invoker set search_path=''
as $$ select onc_internal.onc_accept(p_invite) $$;
create or replace function public.onc_write_document(p_household uuid,p_expected bigint,p_content jsonb)
returns bigint language sql security invoker set search_path=''
as $$ select onc_internal.onc_update(p_household,p_expected,p_content) $$;
create or replace function public.onc_rotate_invite()
returns text language sql security invoker set search_path=''
as $$ select onc_internal.onc_new_invite() $$;

revoke execute on all functions in schema onc_internal from public,anon,authenticated;
grant execute on function onc_internal.onc_create(jsonb,text),
 onc_internal.onc_accept(text),
 onc_internal.onc_update(uuid,bigint,jsonb),
 onc_internal.onc_new_invite() to authenticated;
revoke execute on function public.onc_create_household(jsonb,text),
 public.onc_accept_invite(text),public.onc_write_document(uuid,bigint,jsonb),
 public.onc_rotate_invite() from public,anon;
grant execute on function public.onc_create_household(jsonb,text),
 public.onc_accept_invite(text),public.onc_write_document(uuid,bigint,jsonb),
 public.onc_rotate_invite() to authenticated;

-- Authorized household members can receive document change notifications.
do $$ begin
 if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='onc_documents')
 then alter publication supabase_realtime add table public.onc_documents; end if;
end $$;
commit;

-- Post-deployment verification:
-- select tablename,rowsecurity from pg_tables where schemaname='public' and tablename like 'onc_%';
-- select policyname,cmd,roles,qual from pg_policies where schemaname='public' and tablename like 'onc_%';
-- select to_regclass('public.onc_documents');
