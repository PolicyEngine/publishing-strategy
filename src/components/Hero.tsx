import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>Strategic Planning 2025</div>
        <h1 className={styles.heroTitle}>
          PolicyEngine
          <br />
          <span>Publishing Strategy</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Scaling our content output from 1 article per week to a team-wide
          publishing machine — 5-6 publications every week.
        </p>
      </div>
      <div className={styles.scrollIndicator}>SCROLL TO EXPLORE</div>
    </section>
  );
}
