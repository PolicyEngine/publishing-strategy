import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './ContentTypes.module.css';

interface ContentType {
  icon: string;
  title: string;
  description: string;
  badge: string;
  primary?: boolean;
  details: {
    effort: string;
    cadence: string;
    examples: string[];
    tips: string[];
  };
}

const contentTypes: ContentType[] = [
  {
    icon: '🖥️',
    title: 'Interactives',
    description:
      'Interactive policy calculators, explorations, and in-depth analysis. Our primary format for all substantive work.',
    badge: 'Primary Focus',
    primary: true,
    details: {
      effort: 'Medium-High (2-5 days)',
      cadence: 'Multiple per week across team',
      examples: [
        'Tax calculator for specific policy',
        'Benefit eligibility explorer',
        'Policy comparison tool',
        'State-by-state impact map',
        'OBBBA impact analysis',
        'Research findings with embedded charts',
      ],
      tips: [
        'Start with a clear user question',
        'Keep the interface simple',
        'Test with real scenarios',
        'Include shareable results',
      ],
    },
  },
  {
    icon: '✍️',
    title: 'Blog Posts',
    description:
      'Short, reactive pieces — quick takes on breaking news, announcements, and model updates.',
    badge: 'Quick Takes',
    primary: false,
    details: {
      effort: 'Low (0.5-1 day)',
      cadence: 'As news breaks — same day or next day',
      examples: [
        'Data insight on trending policy debate',
        'Quick analysis of proposed legislation',
        'Model update announcement',
        'Dashboard version release (V2, V3, etc.)',
        'Feature release or tutorial',
        'Event recap or partnership news',
      ],
      tips: [
        'React fast — publish same day if possible',
        'One chart, one insight, one takeaway',
        'Keep under 500 words',
        'Link to interactive for deeper exploration',
      ],
    },
  },
  {
    icon: '🎥',
    title: 'Webinars',
    description:
      'Live presentations, demos, and interactive sessions. Higher effort but high engagement value.',
    badge: 'Live Events',
    primary: false,
    details: {
      effort: 'High (prep + live)',
      cadence: 'Start: 1/month → Scale to: 1/week',
      examples: [
        'Policy deep dive presentation',
        'Live model demo',
        'Q&A with stakeholders',
        'Training session',
      ],
      tips: [
        'Rotate hosting across team',
        'Record for replay value',
        'Promote 1 week in advance',
        'Prepare backup slides for tech issues',
      ],
    },
  },
];

export function ContentTypes() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (title: string) => {
    setExpandedCard(expandedCard === title ? null : title);
  };

  return (
    <section className={styles.contentTypes} id="content" ref={ref}>
      <span className={`${styles.sectionLabel} ${isVisible ? styles.visible : ''}`}>
        What Counts
      </span>
      <h2 className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}>
        Publication Types
      </h2>
      <p className={`${styles.subtitle} ${isVisible ? styles.visible : ''}`}>
        Click each card to see details, examples, and tips.
      </p>

      <div className={styles.contentGrid}>
        {/* Primary - Interactives (full width) */}
        {contentTypes.filter(t => t.primary).map((type, index) => (
          <div
            key={type.title}
            className={`${styles.contentCard} ${styles.primary} ${
              expandedCard === type.title ? styles.expanded : ''
            } ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            onClick={() => toggleCard(type.title)}
          >
            <div className={styles.cardHeader}>
              <div className={styles.contentIcon}>{type.icon}</div>
              <div className={styles.headerText}>
                <div className={styles.contentTitle}>{type.title}</div>
                <div className={styles.contentDesc}>{type.description}</div>
              </div>
              <div className={`${styles.expandIcon} ${expandedCard === type.title ? styles.rotated : ''}`}>
                ▼
              </div>
            </div>

            <div className={`${styles.contentBadge} ${styles.primaryBadge}`}>
              {type.badge}
            </div>

            {expandedCard === type.title && (
              <div className={styles.detailsPanel}>
                <div className={styles.detailsGrid}>
                  <div className={styles.detailItem}>
                    <div className={styles.detailLabel}>Effort</div>
                    <div className={styles.detailValue}>{type.details.effort}</div>
                  </div>
                  <div className={styles.detailItem}>
                    <div className={styles.detailLabel}>Cadence</div>
                    <div className={styles.detailValue}>{type.details.cadence}</div>
                  </div>
                </div>

                <div className={styles.detailSection}>
                  <div className={styles.detailLabel}>Examples</div>
                  <ul className={styles.detailList}>
                    {type.details.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.detailSection}>
                  <div className={styles.detailLabel}>Tips</div>
                  <ul className={styles.detailList}>
                    {type.details.tips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Secondary row - Blog Posts & Webinars */}
        <div className={styles.secondaryRow}>
          {contentTypes.filter(t => !t.primary).map((type, index) => (
            <div
              key={type.title}
              className={`${styles.contentCard} ${
                expandedCard === type.title ? styles.expanded : ''
              } ${isVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${0.1 * (index + 2)}s` }}
              onClick={() => toggleCard(type.title)}
            >
              <div className={styles.cardHeader}>
                <div className={styles.contentIcon}>{type.icon}</div>
                <div className={styles.headerText}>
                  <div className={styles.contentTitle}>{type.title}</div>
                  <div className={styles.contentDesc}>{type.description}</div>
                </div>
                <div className={`${styles.expandIcon} ${expandedCard === type.title ? styles.rotated : ''}`}>
                  ▼
                </div>
              </div>

              <div className={styles.contentBadge}>
                {type.badge}
              </div>

              {expandedCard === type.title && (
                <div className={styles.detailsPanel}>
                  <div className={styles.detailsGrid}>
                    <div className={styles.detailItem}>
                      <div className={styles.detailLabel}>Effort</div>
                      <div className={styles.detailValue}>{type.details.effort}</div>
                    </div>
                    <div className={styles.detailItem}>
                      <div className={styles.detailLabel}>Cadence</div>
                      <div className={styles.detailValue}>{type.details.cadence}</div>
                    </div>
                  </div>

                  <div className={styles.detailSection}>
                    <div className={styles.detailLabel}>Examples</div>
                    <ul className={styles.detailList}>
                      {type.details.examples.map((example) => (
                        <li key={example}>{example}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.detailSection}>
                    <div className={styles.detailLabel}>Tips</div>
                    <ul className={styles.detailList}>
                      {type.details.tips.map((tip) => (
                        <li key={tip}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className={`${styles.note} ${isVisible ? styles.visible : ''}`}>
        <strong>Note:</strong> Newsletter editing is a supporting role, not counted
        toward individual publication goals.
      </p>
    </section>
  );
}
