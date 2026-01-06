import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './Vision.module.css';

export function Vision() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section className={styles.vision} id="vision" ref={ref}>
      <span className={`${styles.sectionLabel} ${isVisible ? styles.visible : ''}`}>
        The Ambitious Goal
      </span>
      <div className={`${styles.visionNumber} ${isVisible ? styles.visible : ''}`}>
        5-6
      </div>
      <div className={`${styles.visionLabel} ${isVisible ? styles.visible : ''}`}>
        Publications Per Week
      </div>

      <div className={`${styles.visionEquation} ${isVisible ? styles.visible : ''}`}>
        <span>5-6 team members</span>
        <span className={styles.operator}>×</span>
        <span>1 publication each</span>
        <span className={styles.operator}>=</span>
        <span className={styles.result}>5-6 weekly outputs</span>
      </div>

      <div className={`${styles.visionBreakdown} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.visionItem}>
          <div className={styles.visionItemNumber}>~260</div>
          <div className={styles.visionItemLabel}>Publications per year</div>
        </div>
        <div className={styles.visionItem}>
          <div className={styles.visionItemNumber}>5×</div>
          <div className={styles.visionItemLabel}>Current output increase</div>
        </div>
        <div className={styles.visionItem}>
          <div className={styles.visionItemNumber}>52</div>
          <div className={styles.visionItemLabel}>Pieces per person/year</div>
        </div>
      </div>

      <div className={`${styles.shiftCallout} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.shiftText}>
          <strong>The shift:</strong> Content is becoming our primary responsibility —
          not a side task alongside model development.
        </div>
      </div>
    </section>
  );
}
