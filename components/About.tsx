import styles from './About.module.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        
        <div className={styles.aboutContent}>
          <div className={styles.mainContent}>
            <p className={styles.intro}>
              Backend Developer y AWS Solutions Architect con más de 3 años de experiencia 
              diseñando y construyendo sistemas distribuidos de alta demanda.
            </p>
            
            <p>
              Mi especialidad es crear arquitecturas escalables y resilientes para plataformas 
              empresariales complejas, incluyendo CRM, ERP y soluciones SaaS multitenant. 
              He trabajado en proyectos que manejan millones de transacciones diarias, 
              optimizando rendimiento y reduciendo costos de infraestructura.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <h3>🏗️ Arquitectura de Sistemas</h3>
                <p>
                  Diseño de arquitecturas distribuidas, microservicios, event-driven systems 
                  y patrones de alta disponibilidad.
                </p>
              </div>

              <div className={styles.highlight}>
                <h3>☁️ Cloud & DevOps</h3>
                <p>
                  Experiencia profunda en AWS (EC2, Lambda, RDS, S3, CloudFormation). 
                  Implementación de pipelines CI/CD robustos y automatización de infraestructura.
                </p>
              </div>

              <div className={styles.highlight}>
                <h3>⚡ Performance & Escalabilidad</h3>
                <p>
                  Optimización de I/O, caching strategies, database indexing, y arquitecturas 
                  que escalan horizontalmente bajo alta demanda.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>3+</div>
              <div className={styles.statLabel}>Años de Experiencia</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>50+</div>
              <div className={styles.statLabel}>Proyectos Completados</div>
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
