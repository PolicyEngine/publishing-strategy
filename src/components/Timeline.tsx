import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './Timeline.module.css';

const months = [
  {
    month: 1,
    label: 'Month 1',
    title: 'Foundation',
    stats: [
      { label: 'Per Person', value: '1 piece total' },
      { label: 'Team Total', value: '~1-2/week' },
    ],
    mix: [
      '1-2 interactives',
      '1 newsletter (Thu)',
      'No webinar yet',
    ],
  },
  {
    month: 2,
    label: 'Month 2',
    title: 'Building Rhythm',
    stats: [
      { label: 'Per Person', value: '2 pieces total' },
      { label: 'Team Total', value: '~3/week' },
    ],
    mix: [
      '1-2 interactives',
      '1-2 blog posts',
      '1 newsletter (Thu)',
      '1 webinar this month',
    ],
  },
  {
    month: 3,
    label: 'Month 3',
    title: 'Full Capacity',
    stats: [
      { label: 'Per Person', value: '1 piece/week' },
      { label: 'Team Total', value: '5-6/week' },
    ],
    mix: [
      '2-3 interactives',
      '2-3 blog posts',
      '1 newsletter (Thu)',
      '1 webinar/month',
    ],
  },
];

export function Timeline() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({ threshold: 0.3 });

  return (
    <section className={styles.timeline} id="timeline" ref={ref}>
      <span className={`${styles.sectionLabel} ${isVisible ? styles.visible : ''}`}>
        The Ramp-Up
      </span>
      <h2 className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}>
        3-Month Implementation Timeline
      </h2>

      <div className={styles.timelineContainer}>
        <div className={styles.timelineTrack}>
          <div
            className={styles.timelineProgress}
            style={{ width: isVisible ? '100%' : '0%' }}
          />
        </div>

        <div className={styles.timelineMonths}>
          {months.map((m, index) => (
            <div
              key={m.month}
              className={`${styles.timelineMonth} ${isVisible ? styles.active : ''}`}
              style={{ transitionDelay: `${0.3 * (index + 1)}s` }}
            >
              <div className={styles.timelineDot} />
              <div className={styles.timelineMonthLabel}>{m.label}</div>
              <div className={styles.timelineMonthTitle}>{m.title}</div>
              <div className={styles.timelineStats}>
                {m.stats.map((stat) => (
                  <div key={stat.label} className={styles.timelineStat}>
                    <span className={styles.timelineStatLabel}>{stat.label}</span>
                    <span className={styles.timelineStatValue}>{stat.value}</span>
                  </div>
                ))}
                {m.mix && (
                  <div className={styles.contentMix}>
                    <div className={styles.mixLabel}>Weekly Mix</div>
                    <ul className={styles.mixList}>
                      {m.mix.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
