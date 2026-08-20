import type { Lesson } from "./types";

export const careerLessons: Lesson[] = [
  {
    id: "career-1",
    subject: "career",
    hook: "Your resume has 6 seconds to not get trashed.",
    concept: "Recruiters skim — lead with impact, not duties.",
    detail:
      "'Helped with social media' gets ignored. 'Grew Instagram from 200 to 4,000 followers in 3 months' gets read. Always show a number and a result, not just a task.",
    quiz: {
      question: "What makes a resume line stand out?",
      options: [
        "Long paragraphs",
        "A measurable result",
        "Fancy fonts",
        "Listing every task ever done",
      ],
      correctIndex: 1,
    },
    accent: "from-cyan-500 to-blue-600",
  },
  {
    id: "career-2",
    subject: "career",
    hook: "\"Follow your passion\" might be backwards advice.",
    concept: "Rare, valuable skills — built through deliberate practice — tend to create passion, not the other way around.",
    detail:
      "Chasing a pre-existing passion often leads nowhere, because most people don't start with one clear passion for a specific job. Instead, getting genuinely excellent at something valuable tends to build autonomy, respect, and enjoyment over time — and that combination is what people usually mean by 'passion' for their work.",
    quiz: {
      question: "What does this framing suggest builds career passion?",
      options: [
        "Waiting to discover a pre-existing passion first",
        "Becoming excellent at something valuable through deliberate practice",
        "Switching jobs frequently until one feels right",
        "Following whatever pays the most",
      ],
      correctIndex: 1,
    },
    accent: "from-blue-500 to-cyan-700",
    source: "Career-capital argument from Cal Newport's So Good They Can't Ignore You",
  },
  {
    id: "career-3",
    subject: "career",
    hook: "People remember how interested you were in them, not how impressive you sounded.",
    concept: "Genuine curiosity about other people builds trust faster than trying to look impressive.",
    detail:
      "In interviews, networking, and every day at work, asking real questions and actually listening to the answers makes people feel valued — and that's what they remember. Trying to dominate a conversation with your own achievements tends to do the opposite, even when the achievements are real.",
    quiz: {
      question: "What tends to build trust fastest in a conversation?",
      options: [
        "Talking mostly about your own achievements",
        "Asking real questions and genuinely listening",
        "Using impressive vocabulary",
        "Keeping the conversation as short as possible",
      ],
      correctIndex: 1,
    },
    accent: "from-sky-500 to-blue-700",
    source: "Principle popularized in Dale Carnegie's How to Win Friends and Influence People",
  },
];
