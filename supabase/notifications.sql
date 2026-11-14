create extension if not exists pg_cron;
create extension if not exists pg_net with schema extensions;
create table public.onc_push_subscriptions(
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete cascade,
 household_id uuid not null references public.onc_households(id) on delete cascade,
 endpoint text not null unique check(length(endpoint)<3000 and endpoint like 'https://%'),
 subscription jsonb not null check(jsonb_typeof(subscription)='object' and subscription->>'endpoint'=endpoint and subscription->'keys'->>'auth' is not null and subscription->'keys'->>'p256dh' is not null),
 person text not null check(person in ('ava','bryce')),
 daily_time text not null default '08:00' check(daily_time ~ '^([01][0-9]|2[0-3]):[0-5][0-9]$'),
 daily_enabled boolean not null default true,
 show_details boolean not null default false,
 enabled boolean not null default true,
 created_at timestamptz not null default now()
);
alter table public.onc_push_subscriptions enable row level security;
revoke all on public.onc_push_subscriptions from public,anon,authenticated;
grant select,insert,update,delete on public.onc_push_subscriptions to authenticated;
grant all on public.onc_push_subscriptions to service_role;
create policy own_push_read on public.onc_push_subscriptions for select to authenticated using(user_id=(select auth.uid()));
create policy own_push_insert on public.onc_push_subscriptions for insert to authenticated with check(user_id=(select auth.uid()) and exists(select 1 from public.onc_members m where m.user_id=(select auth.uid()) and m.household_id=onc_push_subscriptions.household_id));
create policy own_push_update on public.onc_push_subscriptions for update to authenticated using(user_id=(select auth.uid())) with check(user_id=(select auth.uid()) and exists(select 1 from public.onc_members m where m.user_id=(select auth.uid()) and m.household_id=onc_push_subscriptions.household_id));
create policy own_push_delete on public.onc_push_subscriptions for delete to authenticated using(user_id=(select auth.uid()));
create index onc_push_user_idx on public.onc_push_subscriptions(user_id);
create index onc_push_household_idx on public.onc_push_subscriptions(household_id);
create table public.onc_push_deliveries(
 subscription_id uuid not null references public.onc_push_subscriptions(id) on delete cascade,
 delivery_key text not null,
 created_at timestamptz not null default now(),
 primary key(subscription_id,delivery_key)
);
alter table public.onc_push_deliveries enable row level security;
revoke all on public.onc_push_deliveries from public,anon,authenticated;
grant all on public.onc_push_deliveries to service_role;
create index onc_push_deliveries_created_idx on public.onc_push_deliveries(created_at);
-- Signing keys and scheduler credentials are read only by server code.
create function onc_internal.notification_config() returns jsonb language sql security definer set search_path='' as $$
 select jsonb_object_agg(name,decrypted_secret) from vault.decrypted_secrets where name in ('public_key','private_key','cron_secret');
$$;
revoke all on function onc_internal.notification_config() from public,anon,authenticated;
grant execute on function onc_internal.notification_config() to service_role;
grant usage on schema onc_internal to service_role;
create function public.onc_notification_server_config() returns jsonb language sql security invoker set search_path='' as $$ select onc_internal.notification_config() $$;
revoke all on function public.onc_notification_server_config() from public,anon,authenticated;
grant execute on function public.onc_notification_server_config() to service_role;
