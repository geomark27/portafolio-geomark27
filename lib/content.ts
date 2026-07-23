import { experience as fallbackExperience } from './profile';
import type { ExperienceRecord, SiteProfile } from './admin-types';
import { isSupabaseConfigured } from './supabase/env';
import { createSupabaseServerClient } from './supabase/server';

const fallbackProfile: SiteProfile = {
  id: true,
  name: 'Marcos Ramos Jacome',
  headline: 'Senior Software Engineer',
  summary: 'Software Engineer with over 3 years of experience building high-performance backend systems, microservice architectures, and cloud solutions in production environments.',
  email: 'rmarcosgeovanny1027@gmail.com',
  github_url: 'https://github.com/geomark27',
  linkedin_url: 'https://linkedin.com/in/marcos-ramos-831475207/',
  years_experience: 4,
  professional_roles: 3,
  certification: 'AWS',
  skills_summary: 'I specialize in Spring Boot, .NET Core, Go, and PHP/Laravel, with experience designing REST APIs, asynchronous processing, legacy-system migrations, and AWS solutions. I\'m passionate about performance optimization and building scalable platforms that drive business impact.',
  architecture_title: '🏗️ System Architecture',
  architecture_description: 'Design of distributed architectures, microservices, event-driven systems, and high availability patterns.',
  cloud_title: '☁️ Cloud & DevOps',
  cloud_description: 'AWS Solutions Architect certified, with hands-on experience in EC2, Lambda, RDS Aurora, CloudFront, infrastructure as code, and cloud-native delivery.',
  performance_title: '⚡ Performance & Scalability',
  performance_description: 'I/O optimization, caching strategies, database indexing, and architectures that scale horizontally under high demand.',
  hero_title: 'Building Efficient Distributed Systems',
  hero_description: 'Backend developer specialized in high-performance architectures and I/O optimization for multitenant SaaS. Cloud-native solutions with AWS expertise.',
  hero_role: 'Software Developer & AWS Solutions Architect',
  availability_text: 'Available for work',
  is_available: true,
  hero_technologies: [
    { icon: '🐹', label: 'Go', title: 'Primary language for microservices' },
    { icon: '☁️', label: 'AWS', title: 'Cloud platform and architecture' },
    { icon: '🗄️', label: 'SQL Server', title: 'Enterprise database systems' },
    { icon: '🐳', label: 'Docker', title: 'Container orchestration' },
  ],
  hero_primary_cta_text: 'View Projects',
  hero_secondary_cta_text: 'Get in Touch',
  hero_third_stat_value: '99%',
  hero_third_stat_label: 'Client Satisfaction',
  hero_third_stat_icon: '⭐',
};

function fallbackExperiences(): ExperienceRecord[] {
  return fallbackExperience.map((item, index) => ({
    id: `${item.company}-${item.role}`,
    ...item,
    highlights: [...item.highlights],
    sort_order: index,
    is_pinned: index === 0,
  }));
}

export async function getSiteProfile(): Promise<SiteProfile> {
  if (!isSupabaseConfigured) return fallbackProfile;

  try {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.from('site_profile').select('*').eq('id', true).maybeSingle();
    if (!data) return fallbackProfile;

    return {
      ...fallbackProfile,
      ...(data as Partial<SiteProfile>),
      name: data.name || fallbackProfile.name,
      headline: data.headline || fallbackProfile.headline,
      summary: data.summary || fallbackProfile.summary,
      skills_summary: data.skills_summary || fallbackProfile.skills_summary,
      architecture_title: data.architecture_title || fallbackProfile.architecture_title,
      architecture_description: data.architecture_description || fallbackProfile.architecture_description,
      cloud_title: data.cloud_title || fallbackProfile.cloud_title,
      cloud_description: data.cloud_description || fallbackProfile.cloud_description,
      performance_title: data.performance_title || fallbackProfile.performance_title,
      performance_description: data.performance_description || fallbackProfile.performance_description,
      hero_title: data.hero_title || fallbackProfile.hero_title,
      hero_description: data.hero_description || fallbackProfile.hero_description,
      hero_role: data.hero_role || fallbackProfile.hero_role,
      availability_text: data.availability_text || fallbackProfile.availability_text,
      hero_technologies: Array.isArray(data.hero_technologies) && data.hero_technologies.length > 0
        ? data.hero_technologies
        : fallbackProfile.hero_technologies,
      hero_primary_cta_text: data.hero_primary_cta_text || fallbackProfile.hero_primary_cta_text,
      hero_secondary_cta_text: data.hero_secondary_cta_text || fallbackProfile.hero_secondary_cta_text,
      hero_third_stat_value: data.hero_third_stat_value || fallbackProfile.hero_third_stat_value,
      hero_third_stat_label: data.hero_third_stat_label || fallbackProfile.hero_third_stat_label,
      hero_third_stat_icon: data.hero_third_stat_icon || fallbackProfile.hero_third_stat_icon,
    };
  } catch {
    return fallbackProfile;
  }
}

export async function getExperiences(): Promise<ExperienceRecord[]> {
  if (!isSupabaseConfigured) return fallbackExperiences();

  try {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase
      .from('experiences')
      .select('*')
      .order('is_pinned', { ascending: false })
      .order('sort_order', { ascending: true });
    if (data && data.length > 0) return data as ExperienceRecord[];
  } catch {
    // Use the local CV content when Supabase is unavailable.
  }

  return fallbackExperiences();
}
