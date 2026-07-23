alter table public.site_profile
  add column if not exists years_experience integer not null default 3,
  add column if not exists professional_roles integer not null default 3,
  add column if not exists certification text not null default 'AWS',
  add column if not exists skills_summary text not null default '',
  add column if not exists architecture_title text not null default '🏗️ System Architecture',
  add column if not exists architecture_description text not null default '',
  add column if not exists cloud_title text not null default '☁️ Cloud & DevOps',
  add column if not exists cloud_description text not null default '',
  add column if not exists performance_title text not null default '⚡ Performance & Scalability',
  add column if not exists performance_description text not null default '';
