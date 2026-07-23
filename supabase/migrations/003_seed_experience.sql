insert into public.experiences (role, company, period, location, highlights, sort_order, is_pinned)
select
  'Senior Software Engineer',
  'Global Hitss (T&T Group)',
  'Sep 2025 – Present',
  'Guayaquil, Ecuador',
  array[
    'Designed critical modules for a customs management platform covering import/export workflows, invoicing, inspections, evidence, and document management.',
    'Led legacy-code migration initiatives to modern architectures while maintaining operational continuity and zero downtime.',
    'Developed deploy-doc, a Go CLI that automates deployment documentation from Jira and Git and was adopted by the development team.'
  ],
  0,
  true
where not exists (
  select 1 from public.experiences
  where role = 'Senior Software Engineer' and company = 'Global Hitss (T&T Group)'
);

insert into public.experiences (role, company, period, location, highlights, sort_order, is_pinned)
select
  'ERP Project Engineer',
  'Code Plus',
  'Apr 2023 – Sep 2025',
  'Guayaquil, Ecuador',
  array[
    'Led backend development of a multitenant SaaS ERP for electronic invoicing, point-of-sale modules, and commission calculations.',
    'Designed asynchronous processing for XML transmission and reception, removing bottlenecks during high-volume periods.',
    'Integrated production workflows with Ecuador’s SRI and applied I/O reduction, task parallelization, and graph algorithms to improve throughput.'
  ],
  1,
  false
where not exists (
  select 1 from public.experiences
  where role = 'ERP Project Engineer' and company = 'Code Plus'
);

insert into public.experiences (role, company, period, location, highlights, sort_order, is_pinned)
select
  'Full-Stack Developer',
  'SpearHead',
  'Aug 2022 – Aug 2023',
  'Guayaquil, Ecuador',
  array[
    'Designed the core architecture of a scalable e-commerce platform with Java, Spring Boot, and Spring Cloud.',
    'Built high-performance REST APIs and integrated real-time notifications, payment gateways, and point-of-sale systems.',
    'Worked across database design, backend business logic, and frontend components to reduce time to market.'
  ],
  2,
  false
where not exists (
  select 1 from public.experiences
  where role = 'Full-Stack Developer' and company = 'SpearHead'
);
