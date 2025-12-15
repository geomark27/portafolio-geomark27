'use client';
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Software Developer & AWS Solutions Architect';

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
  }, []);

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
                  <span className={styles.terminalTitle}>marcos@portfolio:~</span>
                  <div style={{width: '52px'}}></div>
                </div>
                <div className={styles.terminalBody}>
                  <div className={styles.terminalLine}>
                    <span className={styles.prompt}>$</span> whoami
                  </div>
                  <div className={styles.terminalOutput}>Marcos Ramos</div>
                  
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
                  
                  <div 
                    className={`${styles.terminalLine} ${styles.clickable}`}
                    onClick={() => handleNavigate('about')}
                    title="Navigate to About section"
                  >
                    <span className={styles.prompt}>$</span> cd ./about
                  </div>
                  
                  <div 
                    className={`${styles.terminalLine} ${styles.clickable}`}
                    onClick={() => handleNavigate('skills')}
                    title="Navigate to Skills section"
                  >
                    <span className={styles.prompt}>$</span> cd ./skills
                  </div>
                  
                  <div 
                    className={`${styles.terminalLine} ${styles.clickable}`}
                    onClick={() => handleNavigate('projects')}
                    title="Navigate to Projects section"
                  >
                    <span className={styles.prompt}>$</span> cd ./projects
                  </div>
                
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className={styles.statsGrid}>
                <div className={styles.statCard} onClick={() => handleNavigate('about')}>
                  <div className={styles.statValue}>3+</div>
                  <div className={styles.statLabel}>Years Experience</div>
                  <div className={styles.statIcon}>📅</div>
                </div>
                <div className={styles.statCard} onClick={() => handleNavigate('projects')}>
                  <div className={styles.statValue}>20+</div>
                  <div className={styles.statLabel}>Projects Delivered</div>
                  <div className={styles.statIcon}>🚀</div>
                </div>
                <div className={styles.statCard} onClick={() => handleNavigate('contact')}>
                  <div className={styles.statValue}>99%</div>
                  <div className={styles.statLabel}>Client Satisfaction</div>
                  <div className={styles.statIcon}>⭐</div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className={styles.heroText}>
              <div className={styles.badge}>
                <span className={styles.badgeDot}>●</span>
                Available for work
              </div>
              
              <h1 className={`${styles.title} fade-in-up`}>
                Building Efficient Distributed Systems
              </h1>

              <p className={`${styles.subtitle} fade-in-up`}>
                Backend developer specialized in high-performance architectures and I/O, optimization for multitenant SaaS. Cloud-native solutions with AWS expertise.
              </p>

              {/* Tech Badges */}
              <div className={styles.techStack}>
                <span className={styles.techBadge} title="Primary language for microservices">🐹 Go</span>
                <span className={styles.techBadge} title="Cloud platform & architecture">☁️ AWS</span>
                <span className={styles.techBadge} title="Enterprise database systems">🗄️ SQL Server</span>
                <span className={styles.techBadge} title="Container orchestration">🐳 Docker</span>
              </div>
              
              <div className={`${styles.cta} fade-in-up`}>
                <a href="#projects" className="btn btn-primary">
                  <span>View Projects</span>
                  <span className={styles.arrow}>→</span>
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <span>Get in Touch</span>
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
