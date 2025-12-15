export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  stars: number;
  forks: number;
  url: string;
  homepage?: string;
  language?: string;
}

export interface Skill {
  name: string;
  category: 'backend' | 'cloud' | 'database' | 'devops' | 'other';
  icon?: string;
}

export interface ContactLink {
  name: string;
  url: string;
  icon: string;
}
