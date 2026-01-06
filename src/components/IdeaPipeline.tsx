import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './IdeaPipeline.module.css';

const vettingCriteria = [
  { id: 1, text: 'Relevant to PolicyEngine\'s mission?' },
  { id: 2, text: 'Clear angle or hook?' },
  { id: 3, text: 'Completable in one week?' },
  { id: 4, text: 'Doesn\'t overlap with recent content?' },
  { id: 5, text: 'Data/analysis is feasible?' },
];

const pipelineRules = [
  {
    icon: '🎯',
    title: 'Specialization First',
    description: 'Prioritize ideas in your specialty area. Pick general topics only if nothing specialized is urgent.',
  },
  {
    icon: '📋',
    title: '3-4 Ideas Per Person',
    description: 'Each team member maintains a backlog of 3-4 pre-vetted ideas ready to go.',
  },
  {
    icon: '✅',
    title: 'Vetted at Monday Standup',
    description: 'New ideas are pitched and vetted during the weekly editorial standup.',
  },
  {
    icon: '🚫',
    title: 'Never Start Empty',
    description: 'Never start a week without knowing your topic. Pipeline reviewed at Thursday retro.',
  },
  {
    icon: '⚠️',
    title: 'Below 3? Prioritize Ideation',
    description: 'If your backlog drops below 3 ideas, prioritize ideation during Friday research time.',
  },
];

export function IdeaPipeline() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section className={styles.ideaPipeline} id="pipeline" ref={ref}>
      <span className={`${styles.sectionLabel} ${isVisible ? styles.visible : ''}`}>
        Staying Ahead
      </span>
      <h2 className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}>
        Idea Pipeline
      </h2>

      <div className={styles.content}>
        {/* Pipeline Rules */}
        <div className={`${styles.rulesSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.rulesGrid}>
            {pipelineRules.map((rule, index) => (
              <div
                key={rule.title}
                className={styles.ruleCard}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={styles.ruleIcon}>{rule.icon}</div>
                <div className={styles.ruleContent}>
                  <div className={styles.ruleTitle}>{rule.title}</div>
                  <div className={styles.ruleDescription}>{rule.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vetting Criteria */}
        <div className={`${styles.vettingSection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.subsectionTitle}>Vetting Criteria</h3>
          <p className={styles.vettingIntro}>
            Before an idea enters your backlog, it should pass these checks:
          </p>
          <div className={styles.vettingList}>
            {vettingCriteria.map((criteria, index) => (
              <div
                key={criteria.id}
                className={styles.vettingItem}
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className={styles.vettingCheck}>✓</div>
                <div className={styles.vettingText}>{criteria.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* At Scale Note */}
        <div className={`${styles.scaleNote} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.scaleIcon}>📊</div>
          <div className={styles.scaleContent}>
            <div className={styles.scaleTitle}>At Full Scale: 300+ Ideas/Year</div>
            <div className={styles.scaleText}>
              With 5-6 people publishing weekly, you'll need 260+ ideas per year.
              Build a shared idea backlog and dedicate time each week to pipeline health.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
