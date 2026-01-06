import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './NextSteps.module.css';

export function NextSteps() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  const scrollToQuestions = () => {
    document.getElementById('questions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.nextSteps} id="next" ref={ref}>
      <span className={`${styles.sectionLabel} ${isVisible ? styles.visible : ''}`}>
        Let's Decide
      </span>
      <h2 className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}>
        Next Steps
      </h2>

      <div className={styles.ctaContainer}>
        <p className={`${styles.ctaText} ${isVisible ? styles.visible : ''}`}>
          Before we finalize the implementation plan, the team needs to align on
          the 16 strategic questions above. Schedule a working session to make
          these decisions together.
        </p>

        <div className={`${styles.ctaButtons} ${isVisible ? styles.visible : ''}`}>
          <button className={styles.ctaButtonPrimary} onClick={() => window.print()}>
            📄 Export as PDF
          </button>
          <button className={styles.ctaButtonSecondary} onClick={scrollToQuestions}>
            ↑ Review Questions
          </button>
        </div>

        <p className={`${styles.footerNote} ${isVisible ? styles.visible : ''}`}>
          PolicyEngine Publishing Strategy • Draft for Team Discussion
        </p>
      </div>
    </section>
  );
}
