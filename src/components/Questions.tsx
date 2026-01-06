import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { questionCategories } from '../data/questions';
import styles from './Questions.module.css';

export function Questions() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  // Count answered questions
  const totalQuestions = questionCategories.reduce((acc, cat) => acc + cat.questions.length, 0);
  const answeredCount = questionCategories.reduce(
    (acc, cat) => acc + cat.questions.filter((q) => q.answer).length,
    0
  );

  return (
    <section className={styles.questions} id="questions" ref={ref}>
      <div className={`${styles.questionsIntro} ${isVisible ? styles.visible : ''}`}>
        <span className={styles.sectionLabel}>Decisions</span>
        <h2 className={styles.sectionTitle}>Strategic Questions</h2>
        <p>
          These decisions shape how we implement the publishing strategy.
        </p>
        <div className={styles.progressIndicator}>
          <span className={styles.progressCount}>{answeredCount} of {totalQuestions} answered</span>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className={styles.questionCategories}>
        {questionCategories.map((category, catIndex) => (
          <div
            key={category.id}
            className={`${styles.questionCategory} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: `${0.1 * catIndex}s` }}
          >
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>{category.icon}</div>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
            </div>
            <div className={styles.questionCards}>
              {category.questions.map((question) => (
                <div
                  key={question.id}
                  className={`${styles.questionCard} ${question.answer ? styles.answered : ''}`}
                >
                  <div className={styles.questionNumber}>
                    Question {String(question.id).padStart(2, '0')}
                    {question.answer && <span className={styles.answeredBadge}>✓ Decided</span>}
                  </div>
                  <div className={styles.questionText}>{question.text}</div>
                  {question.answer && (
                    <div className={styles.answerBlock}>
                      <div className={styles.answerLabel}>Decision:</div>
                      <div className={styles.answerText}>{question.answer}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
