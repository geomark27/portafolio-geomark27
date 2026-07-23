-- Run this script in Supabase SQL Editor.

create table if not exists public.site_profile (
  id boolean primary key default true check (id = true),
  name text not null default 'Marcos Ramos',
  headline text not null default 'Senior Software Engineer',
  summary text not null default '',
  email text not null default '',
  github_url text not null default '',
  linkedin_url text not null default '',
  years_experience integer not null default 3,
  professional_roles integer not null default 3,
  certification text not null default 'AWS',
  skills_summary text not null default '',
  architecture_title text not null default '🏗️ System Architecture',
  architecture_description text not null default '',
  cloud_title text not null default '☁️ Cloud & DevOps',
  cloud_description text not null default '',
  performance_title text not null default '⚡ Performance & Scalability',
  performance_description text not null default '',
  hero_title text not null default 'Building Efficient Distributed Systems',
  hero_description text not null default '',
  hero_role text not null default 'Software Developer & AWS Solutions Architect',
  availability_text text not null default 'Available for work',
  is_available boolean not null default true,
  hero_technologies jsonb not null default '[]'::jsonb,
  hero_primary_cta_text text not null default 'View Projects',
  hero_secondary_cta_text text not null default 'Get in Touch',
  hero_third_stat_value text not null default '99%',
  hero_third_stat_label text not null default 'Client Satisfaction',
  hero_third_stat_icon text not null default '⭐',
  updated_at timestamptz not null default now()
);

create table if not exists public.experiences (
  id uuid primary key default gen_random_uuid(),
  role text not null,
  company text not null,
  period text not null,
  location text not null default '',
  highlights text[] not null default '{}',
  sort_order integer not null default 0,
  is_pinned boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.site_profile enable row level security;
alter table public.experiences enable row level security;

create policy "Public can read profile"
  on public.site_profile for select using (true);

create policy "Authenticated users can manage profile"
  on public.site_profile for all to authenticated using (true) with check (true);

create policy "Public can read experiences"
  on public.experiences for select using (true);

create policy "Authenticated users can manage experiences"
  on public.experiences for all to authenticated using (true) with check (true);

insert into public.site_profile (id)
values (true)
on conflict (id) do nothing;
