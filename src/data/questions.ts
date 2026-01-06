export interface Question {
  id: number;
  text: string;
  answer?: string;
}

export interface QuestionCategory {
  id: string;
  title: string;
  icon: string;
  questions: Question[];
}

export const questionCategories: QuestionCategory[] = [
  {
    id: 'team',
    title: 'Team & Capacity',
    icon: '👥',
    questions: [
      {
        id: 1,
        text: 'What % of time is content work? Is publishing each person\'s primary responsibility, or alongside model development?',
        answer: 'Content work is the primary responsibility. We\'re moving toward a content-first organization.',
      },
      {
        id: 2,
        text: 'Are all 6 people at similar writing levels? Or do some need mentorship/heavier editing in months 1-2?',
        answer: 'Experience levels vary, but we\'re focusing on interactive-driven publications. The development load for interactives is much lower than it used to be, making this accessible to all skill levels.',
      },
      {
        id: 3,
        text: 'Who handles editorial load? At 5-6 pieces/week, peer review becomes ~1 review per person per week. Sustainable?',
        answer: 'More experienced team members help with editorial, but it\'s done collaboratively. The author retains full ownership of their project.',
      },
    ],
  },
  {
    id: 'content',
    title: 'Content Strategy',
    icon: '📝',
    questions: [
      {
        id: 4,
        text: 'Specialization vs generalist? Does each person own a "beat" (US federal, state policy, UK, model features)?',
        answer: 'Hybrid approach: Team members have topic specializations, but are free to work on general topics if nothing specialized is prioritized for the week.',
      },
      {
        id: 5,
        text: 'What\'s the content mix target? e.g., "3 policy analyses, 1 model update, 1 explainer, 1 webinar per week"',
        answer: '2-3 interactives/week, 2-3 blog posts/week, 1 newsletter (Thu), 1 webinar/month. Interactives are our primary format; blog posts are quick takes and announcements.',
      },
      {
        id: 6,
        text: 'Quality bar at scale? At 5-6× volume, do we accept shorter/lighter posts, or maintain the same depth?',
        answer: 'Maintain quality and depth for interactives. Blog posts can be lighter — they\'re reactive quick takes. Factor in media cycles: speed matters for reactive content, depth matters for flagship work.',
      },
      {
        id: 7,
        text: 'How do articles relate to the model? Do pieces require new PolicyEngine features/analysis? Who coordinates?',
      },
    ],
  },
  {
    id: 'process',
    title: 'Coordination & Process',
    icon: '⚙️',
    questions: [
      {
        id: 8,
        text: 'Who assigns topics / prevents overlap? With 6 people writing, how do we avoid 3 covering the same news?',
        answer: 'Monday Editorial Standup. Everyone pitches their topic for the week — overlaps are caught and resolved in real-time.',
      },
      {
        id: 9,
        text: 'What\'s the publishing calendar? All on Tuesday, or spread across the week (Mon/Tue/Wed/Thu/Fri)?',
        answer: 'Spread across Mon-Fri, ~1 per day. Publish days assigned Thursday during retro so everyone knows their target before starting Friday research.',
      },
      {
        id: 10,
        text: 'What happens to the newsletter? Does it become a weekly digest of the 5-6 pieces? Who owns it?',
        answer: 'Weekly digest every Thursday. Ownership rotates based on load — whoever has the lightest week drafts the digest. Newsletter reaches subscribers; individual pieces go to tailored audiences.',
      },
      {
        id: 11,
        text: 'What about webinars? High-effort. Count as someone\'s "1 per week" for that week, or additional?',
        answer: 'Start with 1 webinar per month, scale to 1 per week. Rotated across team members. Counts as that person\'s publication for the week.',
      },
    ],
  },
  {
    id: 'risk',
    title: 'Risk & Sustainability',
    icon: '🛡️',
    questions: [
      {
        id: 12,
        text: 'What\'s the coverage plan? Vacation, sick days, busy weeks — does someone pick up slack, or accept gaps?',
        answer: 'Accept coverage gaps in volume — if someone is out, we publish fewer pieces that week. Only newsletter and webinar are irreplaceable and need backup coverage.',
      },
      {
        id: 13,
        text: 'Idea pipeline at scale? 1 piece/week = 52/year per person. Where do 300+ ideas come from?',
        answer: 'Specialization-driven: each person is responsible for self-sourcing their own pipeline within their topic area. Stay close to your beat, monitor news, and maintain a running backlog.',
      },
    ],
  },
  {
    id: 'success',
    title: 'Success Definition',
    icon: '🎯',
    questions: [
      {
        id: 15,
        text: 'What does "success" look like at month 3? Raw output (6 pieces/week)? Quality metrics? Something else?',
      },
      {
        id: 16,
        text: 'When would we scale back? What signals would tell us 5-6/week is too ambitious?',
      },
    ],
  },
];
