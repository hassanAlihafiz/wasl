-- Waitlist / join list signups (run in Supabase SQL Editor or via CLI migrate)
-- Table: joinlist_users

create table if not exists public.joinlist_users (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now(),
  constraint joinlist_users_email_key unique (email),
  constraint joinlist_users_email_format check (
    char_length(trim(email)) >= 3
    and email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  )
);

comment on table public.joinlist_users is 'Wasl landing waitlist signups';

create index if not exists joinlist_users_created_at_idx
  on public.joinlist_users (created_at desc);

alter table public.joinlist_users enable row level security;

drop policy if exists "Allow anon insert for waitlist" on public.joinlist_users;

-- Inserts from the browser using the anon API key
create policy "Allow anon insert for waitlist"
  on public.joinlist_users
  for insert
  to anon
  with check (true);

-- No SELECT/UPDATE/DELETE for anon (service role bypasses RLS for admin)

grant usage on schema public to anon;
grant insert on table public.joinlist_users to anon;
