import { experience } from '@/lib/profile';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={`section ${styles.experienceSection}`} id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className={styles.subtitle}>
          Building reliable systems across customs, ERP, SaaS, and e-commerce platforms.
        </p>

        <div className={styles.timeline}>
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className={styles.item}>
              <div className={styles.marker} aria-hidden="true" />
              <div className={styles.card}>
                <div className={styles.header}>
                  <div>
                    <h3>{item.role}</h3>
                    <p className={styles.company}>{item.company}</p>
                  </div>
                  <div className={styles.period}>
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                  </div>
                </div>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
