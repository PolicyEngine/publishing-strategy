import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './WeeklyRhythm.module.css';

interface MonthData {
  label: string;
  subtitle: string;
  outputGoal: string;
  meetings: {
    name: string;
    day: string;
    duration: string;
    purpose: string;
  }[];
  dailyBreakdown: {
    day: string;
    tasks: string[];
    type: string;
  }[];
}

const monthsData: MonthData[] = [
  {
    label: 'Month 1',
    subtitle: 'Getting Started',
    outputGoal: '1 piece per person (total for month)',
    meetings: [
      {
        name: 'Editorial Standup',
        day: 'Monday',
        duration: '30 min',
        purpose: 'Pitch topics, catch overlaps, get light feedback',
      },
      {
        name: 'Peer Review Block',
        day: 'Tuesday',
        duration: '30 min',
        purpose: 'Practice reviewing each other\'s work (lighter load)',
      },
      {
        name: 'Weekly Retro',
        day: 'Thursday',
        duration: '15 min',
        purpose: 'Reflect on first publications, build the habit',
      },
    ],
    dailyBreakdown: [
      {
        day: 'Week 1-2',
        tasks: ['Choose topic from backlog', 'Deep research phase', 'Learn interactive tooling'],
        type: 'research',
      },
      {
        day: 'Week 2-3',
        tasks: ['Build interactive or draft article', 'Get informal feedback', 'Iterate on approach'],
        type: 'drafting',
      },
      {
        day: 'Week 3-4',
        tasks: ['Finalize and polish', 'Peer review', 'Publish first piece'],
        type: 'publish',
      },
    ],
  },
  {
    label: 'Month 2',
    subtitle: 'Building Rhythm',
    outputGoal: '2 pieces per person (1 every ~2 weeks)',
    meetings: [
      {
        name: 'Editorial Standup',
        day: 'Monday',
        duration: '30 min',
        purpose: 'Pitch topics, catch overlaps, assign reviewers',
      },
      {
        name: 'Peer Review Block',
        day: 'Tuesday',
        duration: '45 min',
        purpose: 'Dedicated time for reviewing drafts',
      },
      {
        name: 'Weekly Retro',
        day: 'Thursday',
        duration: '15 min',
        purpose: 'Review what shipped, assign publish days + newsletter owner',
      },
    ],
    dailyBreakdown: [
      {
        day: 'Thu',
        tasks: ['Weekly Retro', 'Assign publish days + newsletter owner', 'Select topic, begin research'],
        type: 'planning',
      },
      {
        day: 'Fri-Mon',
        tasks: ['Deep research & drafting', 'Build interactive or write', 'Editorial Standup (Mon)'],
        type: 'drafting',
      },
      {
        day: 'Tue',
        tasks: ['Peer Review Block', 'Incorporate feedback', 'Polish and finalize'],
        type: 'review',
      },
      {
        day: 'Wed-Thu',
        tasks: ['Publish on assigned day', 'Social promotion', 'Support teammates\' launches'],
        type: 'publish',
      },
    ],
  },
  {
    label: 'Month 3',
    subtitle: 'Full Cadence',
    outputGoal: '1 piece per person per week = 5-6 publications/week',
    meetings: [
      {
        name: 'Editorial Standup',
        day: 'Monday',
        duration: '30 min',
        purpose: 'Pitch topics, catch overlaps, assign peer reviewers',
      },
      {
        name: 'Peer Review Block',
        day: 'Tuesday',
        duration: '1 hour',
        purpose: 'Dedicated time for reviewing each other\'s drafts',
      },
      {
        name: 'Weekly Retro',
        day: 'Thursday',
        duration: '15 min',
        purpose: 'Review metrics, assign publish days + newsletter owner for next week',
      },
    ],
    dailyBreakdown: [
      {
        day: 'Thursday',
        tasks: ['Retro: review last week\'s metrics', 'Assign publish days for next week', 'Select topic, begin research'],
        type: 'planning',
      },
      {
        day: 'Friday',
        tasks: ['Deep research & outlining', 'Rough draft or interactive build', 'Identify data/charts needed'],
        type: 'research',
      },
      {
        day: 'Monday',
        tasks: ['Complete draft', 'Editorial Standup', 'Draft newsletter (if assigned)'],
        type: 'drafting',
      },
      {
        day: 'Tuesday',
        tasks: ['Peer review block', 'Incorporate feedback', 'Publish', 'Social promotion'],
        type: 'publish',
      },
      {
        day: 'Wed',
        tasks: ['Publish (if assigned)', 'Draft newsletter digest', 'Compile week\'s publications'],
        type: 'publish',
      },
      {
        day: 'Thu AM',
        tasks: ['Send newsletter digest', 'Weekly Retro', 'Assign publish days + newsletter owner'],
        type: 'newsletter',
      },
    ],
  },
];

export function WeeklyRhythm() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();
  const [selectedMonth, setSelectedMonth] = useState(0);

  const currentMonth = monthsData[selectedMonth];

  return (
    <section className={styles.weeklyRhythm} id="rhythm" ref={ref}>
      <span className={`${styles.sectionLabel} ${isVisible ? styles.visible : ''}`}>
        How We Work
      </span>
      <h2 className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}>
        Weekly Rhythm
      </h2>

      {/* Month Selector */}
      <div className={`${styles.monthSelector} ${isVisible ? styles.visible : ''}`}>
        {monthsData.map((month, index) => (
          <button
            key={month.label}
            className={`${styles.monthButton} ${selectedMonth === index ? styles.active : ''}`}
            onClick={() => setSelectedMonth(index)}
          >
            <span className={styles.monthLabel}>{month.label}</span>
            <span className={styles.monthSubtitle}>{month.subtitle}</span>
          </button>
        ))}
      </div>

      {/* Output Goal */}
      <div className={`${styles.outputGoal} ${isVisible ? styles.visible : ''}`}>
        <span className={styles.goalIcon}>🎯</span>
        <span className={styles.goalText}>{currentMonth.outputGoal}</span>
      </div>

      <div className={styles.content}>
        {/* Meetings */}
        <div className={`${styles.meetingsSection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.subsectionTitle}>Recurring Meetings</h3>
          <div className={styles.meetingsGrid}>
            {currentMonth.meetings.map((meeting, index) => (
              <div
                key={meeting.name}
                className={styles.meetingCard}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={styles.meetingDay}>{meeting.day}</div>
                <div className={styles.meetingName}>{meeting.name}</div>
                <div className={styles.meetingDuration}>{meeting.duration}</div>
                <div className={styles.meetingPurpose}>{meeting.purpose}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Breakdown */}
        <div className={`${styles.dailySection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.subsectionTitle}>
            {selectedMonth === 0 ? 'Monthly Breakdown' : 'Weekly Breakdown'}
          </h3>
          <div className={styles.dailyTimeline} style={{
            gridTemplateColumns: `repeat(${currentMonth.dailyBreakdown.length}, 1fr)`
          }}>
            {currentMonth.dailyBreakdown.map((day, index) => (
              <div
                key={day.day}
                className={`${styles.dayCard} ${styles[day.type]}`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={styles.dayName}>{day.day}</div>
                <ul className={styles.dayTasks}>
                  {day.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
