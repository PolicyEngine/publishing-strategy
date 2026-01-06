import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './EndToEndDelivery.module.css';

const deliverySteps = [
  {
    number: '01',
    title: 'Who is this for?',
    description: 'Identify your target audience before you write. Policymakers? Journalists? Researchers? Advocates?',
    color: 'blue',
  },
  {
    number: '02',
    title: 'Who are your contacts?',
    description: 'Source specific people who will receive this. Build your distribution list as you research, not after.',
    color: 'green',
  },
  {
    number: '03',
    title: 'What\'s the outlet?',
    description: 'Know where this will land. Blog + newsletter? Direct outreach? Partner amplification? Media pitch?',
    color: 'purple',
  },
  {
    number: '04',
    title: 'What action do you want?',
    description: 'Define success. A meeting? A share? Coverage? Policy consideration? Make the ask clear.',
    color: 'orange',
  },
];

const outletTypes = [
  { name: 'Newsletter (Thursday)', desc: 'Weekly digest to all subscribers — broad reach', primary: true },
  { name: 'Targeted Outreach', desc: 'Direct email to specific contacts who need this piece', primary: true },
  { name: 'Partner Amplification', desc: 'Co-promotion with aligned organizations', primary: false },
  { name: 'Media Pitch', desc: 'Journalists, reporters, editors', primary: false },
  { name: 'Social Thread', desc: 'Twitter/LinkedIn for quick takes', primary: false },
];

export function EndToEndDelivery() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section className={styles.endToEnd} id="delivery" ref={ref}>
      <span className={`${styles.sectionLabel} ${isVisible ? styles.visible : ''}`}>
        Beyond Publishing
      </span>
      <h2 className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}>
        End-to-End Delivery
      </h2>

      <p className={`${styles.intro} ${isVisible ? styles.visible : ''}`}>
        Don't just publish — <strong>deliver</strong>. Every piece should have a clear
        audience, sourced contacts, and a distribution plan before you start writing.
      </p>

      {/* Delivery Framework */}
      <div className={`${styles.framework} ${isVisible ? styles.visible : ''}`}>
        <h3 className={styles.subsectionTitle}>Before You Write</h3>
        <div className={styles.stepsGrid}>
          {deliverySteps.map((step, index) => (
            <div
              key={step.number}
              className={`${styles.stepCard} ${styles[step.color]}`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepTitle}>{step.title}</div>
              <div className={styles.stepDescription}>{step.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Outlets */}
      <div className={`${styles.outlets} ${isVisible ? styles.visible : ''}`}>
        <h3 className={styles.subsectionTitle}>Outlet Options</h3>
        <div className={styles.outletsList}>
          {outletTypes.map((outlet) => (
            <div key={outlet.name} className={styles.outletItem}>
              <span className={styles.outletName}>{outlet.name}</span>
              <span className={styles.outletDesc}>{outlet.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Message */}
      <div className={`${styles.keyMessage} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.keyIcon}>💡</div>
        <div className={styles.keyText}>
          <strong>The mindset shift:</strong> You're not a writer hoping someone reads.
          You're delivering value to specific people who need it.
        </div>
      </div>
    </section>
  );
}
