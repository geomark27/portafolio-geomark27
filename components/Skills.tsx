import styles from './Skills.module.css';

export default function Skills() {
  const skills = {
    backend: [
      'Node.js', 'Python', 'Java', 'Go',
      'Express', 'NestJS', 'FastAPI', 'Spring Boot',
      'REST APIs', 'GraphQL', 'gRPC', 'WebSockets'
    ],
    cloud: [
      'AWS EC2', 'AWS Lambda', 'AWS RDS', 'AWS S3',
      'CloudFormation', 'AWS ECS', 'API Gateway', 'CloudWatch',
      'Terraform', 'Docker', 'Kubernetes'
    ],
    database: [
      'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
      'DynamoDB', 'Elasticsearch', 'SQL Optimization'
    ],
    devops: [
      'CI/CD', 'GitHub Actions', 'Jenkins', 'GitLab CI',
      'Nginx', 'Linux', 'Bash Scripting', 'Monitoring'
    ]
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Stack Tecnológico</h2>
        
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <span className={styles.icon}>⚙️</span>
              <h3>Backend & APIs</h3>
            </div>
            <div className={styles.skillTags}>
              {skills.backend.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <span className={styles.icon}>☁️</span>
              <h3>Cloud & Infrastructure</h3>
            </div>
            <div className={styles.skillTags}>
              {skills.cloud.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <span className={styles.icon}>💾</span>
              <h3>Databases</h3>
            </div>
            <div className={styles.skillTags}>
              {skills.database.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <span className={styles.icon}>🚀</span>
              <h3>DevOps & Tools</h3>
            </div>
            <div className={styles.skillTags}>
              {skills.devops.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.expertise}>
          <h3>Áreas de Especialización</h3>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseItem}>
              <div className={styles.expertiseIcon}>🏗️</div>
              <h4>Arquitectura Distribuida</h4>
              <p>Microservicios, Event-Driven, CQRS, Saga Pattern</p>
            </div>
            <div className={styles.expertiseItem}>
              <div className={styles.expertiseIcon}>⚡</div>
              <h4>Performance</h4>
              <p>Caching, Load Balancing, Database Optimization</p>
            </div>
            <div className={styles.expertiseItem}>
              <div className={styles.expertiseIcon}>🔒</div>
              <h4>Seguridad</h4>
              <p>OAuth, JWT, Encryption, Security Best Practices</p>
            </div>
            <div className={styles.expertiseItem}>
              <div className={styles.expertiseIcon}>📊</div>
              <h4>Observabilidad</h4>
              <p>Logging, Monitoring, Tracing, Alerting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
