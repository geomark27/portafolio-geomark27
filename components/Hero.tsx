import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className="section" id="hero">
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.terminalDots}>●●●</span>
              <span className={styles.terminalTitle}>~/portfolio</span>
            </div>
            <div className={styles.terminalBody}>
              <p className={styles.terminalLine}>
                <span className={styles.prompt}>$</span> whoami
              </p>
              <p className={styles.terminalOutput}>Backend Developer & AWS Solutions Architect</p>
            </div>
          </div>

          <h1 className={`${styles.title} fade-in-up`}>
            Building Scalable
            <br />
            Distributed Systems
          </h1>

          <p className={`${styles.subtitle} fade-in-up`}>
            +3 years designing high-demand architectures for CRM, ERP, and multitenant SaaS platforms.
            Specialized in I/O optimization, CI/CD pipelines, and cloud-native solutions.
          </p>

          <div className={`${styles.cta} fade-in-up`}>
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}
