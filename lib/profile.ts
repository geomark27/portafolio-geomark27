export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Global Hitss (T&T Group)',
    period: 'Sep 2025 – Present',
    location: 'Guayaquil, Ecuador',
    highlights: [
      'Designed critical modules for a customs management platform covering import/export workflows, invoicing, inspections, evidence, and document management.',
      'Led legacy-code migration initiatives to modern architectures while maintaining operational continuity and zero downtime.',
      'Developed deploy-doc, a Go CLI that automates deployment documentation from Jira and Git and was adopted by the development team.',
    ],
  },
  {
    role: 'ERP Project Engineer',
    company: 'Code Plus',
    period: 'Apr 2023 – Sep 2025',
    location: 'Guayaquil, Ecuador',
    highlights: [
      'Led backend development of a multitenant SaaS ERP for electronic invoicing, point-of-sale modules, and commission calculations.',
      'Designed asynchronous processing for XML transmission and reception, removing bottlenecks during high-volume periods.',
      'Integrated production workflows with Ecuador’s SRI and applied I/O reduction, task parallelization, and graph algorithms to improve throughput.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'SpearHead',
    period: 'Aug 2022 – Aug 2023',
    location: 'Guayaquil, Ecuador',
    highlights: [
      'Designed the core architecture of a scalable e-commerce platform with Java, Spring Boot, and Spring Cloud.',
      'Built high-performance REST APIs and integrated real-time notifications, payment gateways, and point-of-sale systems.',
      'Worked across database design, backend business logic, and frontend components to reduce time to market.',
    ],
  },
] as const;

export const featuredWork = [
  {
    name: 'deploy-doc',
    description: 'Go CLI that generates Confluence deployment documentation from Jira and Git data.',
    technologies: ['Go', 'Jira', 'Git', 'Confluence'],
    url: 'https://github.com/geomark27/deploy-doc',
  },
  {
    name: 'Loom',
    description: 'Go CLI for creating and scaling backend projects with a professional architecture.',
    technologies: ['Go', 'CLI', 'Backend Architecture'],
    url: 'https://github.com/geomark27/loom',
  },
];
