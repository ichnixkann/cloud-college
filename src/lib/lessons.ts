export type Quiz = {
  question: string;
  options: string[];
  correctIndex: number;
};

export type Lesson = {
  id: string;
  subject: "math" | "science" | "reading" | "money" | "coding" | "career";
  hook: string;
  concept: string;
  detail: string;
  quiz: Quiz;
  accent: string;
};

export const SUBJECT_LABELS: Record<Lesson["subject"], string> = {
  math: "Math",
  science: "Science",
  reading: "Reading & Writing",
  money: "Money Skills",
  coding: "Coding",
  career: "Career Skills",
};

export const lessons: Lesson[] = [
  {
    id: "math-1",
    subject: "math",
    hook: "Why does 0.999... actually equal 1?",
    concept: "Repeating decimals aren't 'almost' a number — they ARE that number.",
    detail:
      "If x = 0.999..., then 10x = 9.999... Subtract: 10x - x = 9.999... - 0.999... = 9x = 9, so x = 1. It's not a rounding trick — it's exact.",
    quiz: {
      question: "What is 10x − x when x = 0.999...?",
      options: ["0.999...", "9", "10", "1"],
      correctIndex: 1,
    },
    accent: "from-blue-500 to-indigo-600",
  },
  {
    id: "science-1",
    subject: "science",
    hook: "Why do astronauts float — is it 'no gravity'?",
    concept: "Nope. Gravity is still ~90% as strong up there. They're actually falling — forever.",
    detail:
      "The ISS orbits so fast (17,500 mph) that as it falls toward Earth, the ground curves away underneath it at the same rate. That endless fall feels weightless.",
    quiz: {
      question: "Why do astronauts on the ISS feel weightless?",
      options: [
        "There's no gravity in space",
        "They're in constant free-fall around Earth",
        "The station blocks gravity",
        "Their suits cancel gravity",
      ],
      correctIndex: 1,
    },
    accent: "from-purple-500 to-fuchsia-600",
  },
  {
    id: "money-1",
    subject: "money",
    hook: "$10/week from age 16 could beat $10,000 saved at 30.",
    concept: "Compound interest rewards time more than amount.",
    detail:
      "At ~7% average market return, $10/week from 16–65 grows to roughly $280,000+. Waiting until 30 to start, even saving 3x more per week, ends up behind — because it had less time to compound.",
    quiz: {
      question: "What matters most for compound growth?",
      options: [
        "How much you invest each time",
        "How early you start",
        "The bank you use",
        "Your starting salary",
      ],
      correctIndex: 1,
    },
    accent: "from-emerald-500 to-teal-600",
  },
  {
    id: "coding-1",
    subject: "coding",
    hook: "A for-loop is just you, being lazy, on purpose.",
    concept: "Loops repeat a task instead of you writing it 100 times.",
    detail:
      "`for (let i = 0; i < 5; i++) { print(i) }` prints 0-4. Instead of writing 5 print statements, you describe the pattern once and let the computer repeat it.",
    quiz: {
      question: "What does a for-loop let you avoid?",
      options: [
        "Writing repetitive code by hand",
        "Using variables",
        "Writing functions",
        "Using the internet",
      ],
      correctIndex: 0,
    },
    accent: "from-orange-500 to-amber-600",
  },
  {
    id: "reading-1",
    subject: "reading",
    hook: "Every good story is secretly the same shape.",
    concept: "It's called the story arc: setup, conflict, climax, resolution.",
    detail:
      "Whether it's a movie, a novel, or a TikTok skit — something normal gets disrupted (conflict), tension builds (rising action), things peak (climax), then settle (resolution). Spot the shape and any story gets easier to read or write.",
    quiz: {
      question: "What comes right after the setup in a story arc?",
      options: ["Resolution", "Climax", "Conflict", "Credits"],
      correctIndex: 2,
    },
    accent: "from-rose-500 to-pink-600",
  },
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
];
