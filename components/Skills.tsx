import Image from 'next/image';
import styles from './Skills.module.css';

type Skill = {
  name: string;
  icon?: string;
  text?: string;
};

export default function Skills() {
  const skills: {
    languages: Skill[];
    cloud: Skill[];
    database: Skill[];
    devops: Skill[];
  } = {
    languages: [
      { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: '.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
      { name: 'gRPC', text: 'gRPC' },
    ],
    cloud: [
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Digital Ocean', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg' },
    ],
    database: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
      { name: 'DynamoDB', text: 'DDB' },
      { name: 'Elasticsearch', text: 'ES' },
    ],
    devops: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'GitLab CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
      { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
      { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
    ],
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <p className={styles.subtitle}>
          Building Efficient Distributed Systems
        </p>
        
        <div className={styles.skillsContainer}>
          <div className={styles.skillSection}>
            <h3 className={styles.sectionTitle}>Languages & Frameworks</h3>
            <div className={styles.iconGrid}>
              {skills.languages.map((skill) => (
                <div key={skill.name} className={styles.skillItem} title={skill.name}>
                  {skill.icon ? (
                    <Image 
                      src={skill.icon} 
                      alt={skill.name} 
                      width={36} 
                      height={36} 
                      className={styles.skillIcon}
                      unoptimized
                    />
                  ) : (
                    <span className={styles.skillText}>{skill.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skillSection}>
            <h3 className={styles.sectionTitle}>Cloud & Infrastructure</h3>
            <div className={styles.iconGrid}>
              {skills.cloud.map((skill) => (
                <div key={skill.name} className={styles.skillItem} title={skill.name}>
                  {skill.icon ? (
                    <Image 
                      src={skill.icon} 
                      alt={skill.name} 
                      width={36} 
                      height={36} 
                      className={styles.skillIcon}
                      unoptimized
                    />
                  ) : (
                    <span className={styles.skillText}>{skill.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skillSection}>
            <h3 className={styles.sectionTitle}>Databases</h3>
            <div className={styles.iconGrid}>
              {skills.database.map((skill) => (
                <div key={skill.name} className={styles.skillItem} title={skill.name}>
                  {skill.icon ? (
                    <Image 
                      src={skill.icon} 
                      alt={skill.name} 
                      width={36} 
                      height={36} 
                      className={styles.skillIcon}
                      unoptimized
                    />
                  ) : (
                    <span className={styles.skillText}>{skill.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skillSection}>
            <h3 className={styles.sectionTitle}>DevOps & Tools</h3>
            <div className={styles.iconGrid}>
              {skills.devops.map((skill) => (
                <div key={skill.name} className={styles.skillItem} title={skill.name}>
                  {skill.icon ? (
                    <Image 
                      src={skill.icon} 
                      alt={skill.name} 
                      width={36} 
                      height={36} 
                      className={styles.skillIcon}
                      unoptimized
                    />
                  ) : (
                    <span className={styles.skillText}>{skill.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
