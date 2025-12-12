import { GitHubRepo, Project } from './types';

const GITHUB_API_BASE = 'https://api.github.com';

/**
 * Fetches public repositories for a given GitHub username
 * @param username - GitHub username
 * @param token - Optional GitHub personal access token for higher rate limits
 * @returns Array of repositories
 */
export async function fetchGitHubRepos(
  username: string,
  token?: string
): Promise<GitHubRepo[]> {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    if (token) {
      headers['Authorization'] = `token ${token}`;
    }

    const response = await fetch(
      `${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers,
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const repos: GitHubRepo[] = await response.json();
    
    // Filter out forks and sort by stars
    return repos
      .filter(repo => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

/**
 * Transforms GitHub repository data into Project format
 * @param repos - Array of GitHub repositories
 * @param limit - Maximum number of projects to return
 * @returns Array of projects
 */
export function transformReposToProjects(
  repos: GitHubRepo[],
  limit: number = 6
): Project[] {
  return repos.slice(0, limit).map(repo => ({
    id: repo.id,
    title: repo.name,
    description: repo.description || 'No description available',
    technologies: repo.topics.length > 0 ? repo.topics : [repo.language].filter(Boolean) as string[],
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    url: repo.html_url,
    homepage: repo.homepage || undefined,
    language: repo.language || undefined,
  }));
}

/**
 * Fetches and transforms GitHub repositories into projects
 * @param username - GitHub username
 * @param limit - Maximum number of projects to return
 * @returns Array of projects
 */
export async function getProjects(
  username: string,
  limit: number = 6
): Promise<Project[]> {
  const token = process.env.GITHUB_TOKEN;
  const repos = await fetchGitHubRepos(username, token);
  return transformReposToProjects(repos, limit);
}
