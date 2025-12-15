import styles from './About.module.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className={styles.aboutContent}>
          <div className={styles.mainContent}>
            <p className={styles.intro}>
              Backend Developer and AWS Solutions Architect with over 3 years of experience 
              designing and building high-demand distributed systems.
            </p>
            
            <p>
              My specialty is creating scalable and resilient architectures for complex 
              enterprise platforms, including CRM, ERP, and multitenant SaaS solutions. 
              I've worked on projects handling hundreds of daily transactions, 
              optimizing performance and reducing infrastructure costs.
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
                  Deep experience in AWS (EC2, Lambda, RDS, S3, CloudFormation). 
                  Implementation of robust CI/CD pipelines and infrastructure automation.
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
              <div className={styles.statValue}>20+</div>
              <div className={styles.statLabel}>Completed Projects</div>
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
