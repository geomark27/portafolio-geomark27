export type SiteProfile = {
  id: boolean;
  name: string;
  headline: string;
  summary: string;
  email: string;
  github_url: string;
  linkedin_url: string;
  years_experience: number;
  professional_roles: number;
  certification: string;
  skills_summary: string;
  architecture_title: string;
  architecture_description: string;
  cloud_title: string;
  cloud_description: string;
  performance_title: string;
  performance_description: string;
  hero_title: string;
  hero_description: string;
  hero_role: string;
  availability_text: string;
  is_available: boolean;
  hero_technologies: HeroTechnology[];
  hero_primary_cta_text: string;
  hero_secondary_cta_text: string;
  hero_third_stat_value: string;
  hero_third_stat_label: string;
  hero_third_stat_icon: string;
};

export type HeroTechnology = {
  icon: string;
  label: string;
  title: string;
};

export type ExperienceRecord = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  sort_order: number;
  is_pinned: boolean;
};
