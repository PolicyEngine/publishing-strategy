import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './InteractiveDriven.module.css';

const benefits = [
  {
    icon: '⚡',
    title: 'Lower Development Load',
    description: 'Building interactives is now faster than ever. What used to take weeks can be done in days.',
  },
  {
    icon: '🎯',
    title: 'Accessible to All Skill Levels',
    description: 'You don\'t need to be a senior developer. Anyone on the team can create compelling interactives.',
  },
  {
    icon: '🔄',
    title: 'Reusable & Updatable',
    description: 'Interactives stay relevant. Update the data, and the story updates itself.',
  },
  {
    icon: '📈',
    title: 'Higher Engagement',
    description: 'People explore, not just read. Interactives drive deeper understanding and more shares.',
  },
];

export function InteractiveDriven() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section className={styles.interactiveDriven} id="interactive" ref={ref}>
      <div className={styles.content}>
        <div className={styles.left}>
          <span className={`${styles.sectionLabel} ${isVisible ? styles.visible : ''}`}>
            The Format Shift
          </span>
          <h2 className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}>
            Interactive-Driven Publishing
          </h2>
          <p className={`${styles.intro} ${isVisible ? styles.visible : ''}`}>
            We're not just writing blog posts. Our publications are built around
            <strong> interactive policy calculators and explorations</strong> that let
            users discover insights themselves.
          </p>
          <div className={`${styles.comparison} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.oldWay}>
              <div className={styles.comparisonLabel}>Old approach</div>
              <div className={styles.comparisonText}>Write article → hope people read it</div>
            </div>
            <div className={styles.arrow}>→</div>
            <div className={styles.newWay}>
              <div className={styles.comparisonLabel}>New approach</div>
              <div className={styles.comparisonText}>Build interactive → people explore & share</div>
            </div>
          </div>
        </div>

        <div className={`${styles.right} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={styles.benefitCard}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <div className={styles.benefitContent}>
                  <div className={styles.benefitTitle}>{benefit.title}</div>
                  <div className={styles.benefitDesc}>{benefit.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.ownershipNote} ${isVisible ? styles.visible : ''}`}>
        <strong>Full ownership:</strong> The author of each interactive owns their project
        end-to-end. More experienced team members support editorial collaboratively,
        but the creator drives the vision.
      </div>
    </section>
  );
}
