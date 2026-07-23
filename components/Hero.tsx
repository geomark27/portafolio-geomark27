'use client';
import { useEffect, useState } from 'react';
import type { SiteProfile } from '@/lib/admin-types';
import styles from './Hero.module.css';

export default function Hero({ profile }: { profile: SiteProfile }) {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = profile.hero_role;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [fullText]);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="section" id="hero">
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroGrid}>
            {/* Terminal Section */}
            <div className={styles.terminalContainer}>
              <div className={styles.terminal}>
                <div className={styles.terminalHeader}>
                  <div className={styles.terminalButtons}>
                    <span className={styles.terminalBtn} style={{background: '#ff5f56'}}></span>
                    <span className={styles.terminalBtn} style={{background: '#ffbd2e'}}></span>
                    <span className={styles.terminalBtn} style={{background: '#27c93f'}}></span>
                  </div>
                  <span className={styles.terminalTitle}>{profile.name.split(' ')[0].toLowerCase()}@portfolio:~</span>
                  <div style={{width: '52px'}}></div>
                </div>
                <div className={styles.terminalBody}>
                  <div className={styles.terminalLine}>
                    <span className={styles.prompt}>$</span> whoami
                  </div>
                  <div className={styles.terminalOutput}>{profile.name}</div>
                  
                  <div className={styles.terminalLine}>
                    <span className={styles.prompt}>$</span> cat role.txt
                  </div>
                  <div className={styles.terminalOutput}>
                    {displayedText}<span className={styles.cursor}>_</span>
                  </div>
                  
                  <div className={styles.terminalLine}>
                    <span className={styles.prompt}>$</span> ls -la ~/portfolio
                  </div>
                  <div className={styles.terminalOutput}>
                    <div className={styles.fileList}>
                      <div className={styles.fileItem}>drwxr-xr-x  about/</div>
                      <div className={styles.fileItem}>drwxr-xr-x  skills/</div>
                      <div className={styles.fileItem}>drwxr-xr-x  projects/</div>
                    </div>
                  </div>
                  
                  <button
                    type="button"
                    className={`${styles.terminalLine} ${styles.clickable}`}
                    onClick={() => handleNavigate('about')}
                    title="Navigate to About section"
                  >
                    <span className={styles.prompt}>$</span> cd ./about
                  </button>
                  
                  <button
                    type="button"
                    className={`${styles.terminalLine} ${styles.clickable}`}
                    onClick={() => handleNavigate('skills')}
                    title="Navigate to Skills section"
                  >
                    <span className={styles.prompt}>$</span> cd ./skills
                  </button>
                  
                  <button
                    type="button"
                    className={`${styles.terminalLine} ${styles.clickable}`}
                    onClick={() => handleNavigate('projects')}
                    title="Navigate to Projects section"
                  >
                    <span className={styles.prompt}>$</span> cd ./projects
                  </button>
                
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className={styles.statsGrid}>
                <button type="button" className={styles.statCard} onClick={() => handleNavigate('about')}>
                  <div className={styles.statValue}>{profile.years_experience}+</div>
                  <div className={styles.statLabel}>Years Experience</div>
                  <div className={styles.statIcon}>📅</div>
                </button>
                <button type="button" className={styles.statCard} onClick={() => handleNavigate('projects')}>
                <div className={styles.statValue}>{profile.professional_roles}</div>
                <div className={styles.statLabel}>Professional Roles</div>
                  <div className={styles.statIcon}>🚀</div>
                </button>
                <button type="button" className={styles.statCard} onClick={() => handleNavigate('contact')}>
                  <div className={styles.statValue}>{profile.hero_third_stat_value}</div>
                  <div className={styles.statLabel}>{profile.hero_third_stat_label}</div>
                  <div className={styles.statIcon}>{profile.hero_third_stat_icon}</div>
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className={styles.heroText}>
              <div className={`${styles.badge} ${!profile.is_available ? styles.badgeUnavailable : ''}`}>
                <span className={styles.badgeDot} aria-hidden="true">{profile.is_available ? '●' : '○'}</span>
                {profile.availability_text}
              </div>
              
              <h1 className={`${styles.title} fade-in-up`}>
                {profile.hero_title}
              </h1>

              <p className={`${styles.subtitle} fade-in-up`}>
                {profile.hero_description}
              </p>

              {/* Tech Badges */}
              <div className={styles.techStack}>
                {profile.hero_technologies.map((technology) => (
                  <span key={`${technology.icon}-${technology.label}`} className={styles.techBadge} title={technology.title}>
                    {technology.icon} {technology.label}
                  </span>
                ))}
              </div>
              
              <div className={`${styles.cta} fade-in-up`}>
                <a href="#projects" className="btn btn-primary">
                  <span>{profile.hero_primary_cta_text}</span>
                  <span className={styles.arrow}>→</span>
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <span>{profile.hero_secondary_cta_text}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={styles.scrollIndicator}>
            <span>Scroll to explore</span>
            <div className={styles.mouse}>
              <div className={styles.wheel}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
