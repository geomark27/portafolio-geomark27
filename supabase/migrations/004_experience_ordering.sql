alter table public.experiences
  add column if not exists is_pinned boolean not null default false;

update public.experiences
set is_pinned = false;

update public.experiences
set is_pinned = true
where id = (
  select id
  from public.experiences
  order by sort_order asc, created_at asc
  limit 1
);
