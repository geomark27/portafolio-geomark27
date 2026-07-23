import styles from './About.module.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className={styles.aboutContent}>
          <div className={styles.mainContent}>
            <p className={styles.intro}>
              Senior Software Engineer with over 3 years of experience building high-performance
              backend systems, microservice architectures, and cloud solutions for production environments.
            </p>
            
            <p>
              I specialize in Spring Boot, .NET Core, Go, and PHP/Laravel, with experience designing
              REST APIs, asynchronous processing, legacy-system migrations, and AWS solutions.
              I&apos;m passionate about performance optimization and building scalable platforms that drive business impact.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <h3>🏗️ System Architecture</h3>
                <p>
                  Design of distributed architectures, microservices, event-driven systems, 
                  and high availability patterns.
                </p>
              </div>

              <div className={styles.highlight}>
                <h3>☁️ Cloud & DevOps</h3>
                <p>
                  AWS Solutions Architect certified, with hands-on experience in EC2, Lambda, RDS Aurora,
                  CloudFront, infrastructure as code, and cloud-native delivery.
                </p>
              </div>

              <div className={styles.highlight}>
                <h3>⚡ Performance & Scalability</h3>
                <p>
                  I/O optimization, caching strategies, database indexing, and architectures 
                  that scale horizontally under high demand.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>3+</div>
              <div className={styles.statLabel}>Years of Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>3</div>
              <div className={styles.statLabel}>Professional Roles</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>AWS</div>
              <div className={styles.statLabel}>Solutions Architect</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
