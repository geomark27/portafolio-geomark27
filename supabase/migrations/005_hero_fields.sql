alter table public.site_profile
  add column if not exists hero_title text not null default 'Building Efficient Distributed Systems',
  add column if not exists hero_description text not null default '',
  add column if not exists hero_role text not null default 'Software Developer & AWS Solutions Architect',
  add column if not exists availability_text text not null default 'Available for work',
  add column if not exists is_available boolean not null default true,
  add column if not exists hero_technologies jsonb not null default '[]'::jsonb,
  add column if not exists hero_primary_cta_text text not null default 'View Projects',
  add column if not exists hero_secondary_cta_text text not null default 'Get in Touch',
  add column if not exists hero_third_stat_value text not null default '99%',
  add column if not exists hero_third_stat_label text not null default 'Client Satisfaction',
  add column if not exists hero_third_stat_icon text not null default '⭐';
