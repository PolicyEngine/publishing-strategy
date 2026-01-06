import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './CurrentState.module.css';

export function CurrentState() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section className={styles.currentState} id="current" ref={ref}>
      <span className={`${styles.sectionLabel} ${isVisible ? styles.visible : ''}`}>
        Where We Are Today
      </span>
      <h2 className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}>
        Current State
      </h2>

      <div className={`${styles.textBlock} ${isVisible ? styles.visible : ''}`}>
        <p>
          Today, our publishing is <strong>ad-hoc</strong>. We publish when there's
          a big story — like OBBBA analysis or major policy changes — but there's no
          regular cadence or predictable output.
        </p>
        <p>
          The newsletter goes out <strong>sporadically</strong>, driven by availability
          rather than a set schedule. Content depends on whoever has bandwidth, not a
          systematic process.
        </p>
        <p>
          This approach has worked for high-impact moments, but it leaves gaps in our
          presence and misses opportunities for consistent audience engagement.
        </p>
      </div>
    </section>
  );
}
