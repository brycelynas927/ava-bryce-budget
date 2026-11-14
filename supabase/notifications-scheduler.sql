create policy push_deliveries_server_only on public.onc_push_deliveries for all to service_role using(true) with check(true);
select cron.schedule('onc-phone-reminders','*/5 * * * *',
$$select net.http_post(url:='https://hrpfheuvgbabwanjqewz.supabase.co/functions/v1/onc-notifications',headers:=jsonb_build_object('Content-Type','application/json','x-onc-cron',(select decrypted_secret from vault.decrypted_secrets where name='cron_secret')),body:='{}'::jsonb);$$);
