import styles from './About.module.css';
import { getSiteProfile } from '@/lib/content';

export default async function About() {
  const profile = await getSiteProfile();

  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className={styles.aboutContent}>
          <div className={styles.mainContent}>
            <p className={styles.intro}>
              {profile.headline}: {profile.summary}
            </p>
            
            <p>
              {profile.skills_summary}
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <h3>{profile.architecture_title}</h3>
                <p>{profile.architecture_description}</p>
              </div>

              <div className={styles.highlight}>
                <h3>{profile.cloud_title}</h3>
                <p>{profile.cloud_description}</p>
              </div>

              <div className={styles.highlight}>
                <h3>{profile.performance_title}</h3>
                <p>{profile.performance_description}</p>
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>{profile.years_experience}+</div>
              <div className={styles.statLabel}>Years of Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>{profile.professional_roles}</div>
              <div className={styles.statLabel}>Professional Roles</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>{profile.certification}</div>
              <div className={styles.statLabel}>Solutions Architect</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
