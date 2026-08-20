import type { Lesson } from "./types";

export const moneyLessons: Lesson[] = [
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
    id: "money-2",
    subject: "money",
    hook: "A car isn't 'an asset' just because it's worth money.",
    concept: "An asset puts money in your pocket over time. A liability takes money out.",
    detail:
      "A rental property that pays you monthly rent is an asset. A car that costs you gas, insurance, and repairs every month is a liability — even though it's worth something if you sold it. The habit of buying assets before liabilities, again and again, is what actually builds wealth over time.",
    quiz: {
      question: "What makes something an asset in this framing?",
      options: [
        "It looks expensive",
        "It puts money in your pocket over time",
        "You paid a lot for it",
        "Other people are impressed by it",
      ],
      correctIndex: 1,
    },
    accent: "from-teal-500 to-emerald-700",
    source: "Asset vs. liability framing popularized in Robert Kiyosaki's Rich Dad Poor Dad",
  },
  {
    id: "money-3",
    subject: "money",
    hook: "A janitor who saved patiently outbuilt Wall Street pros. How?",
    concept: "Behavior with money — patience, avoiding panic, living below your means — matters more than raw financial knowledge.",
    detail:
      "Ronald Read, a gas station attendant and janitor, quietly invested small amounts for decades and left behind millions. Meanwhile, plenty of highly paid experts make emotional decisions and underperform simple, boring, consistent investing. The lesson: managing your own behavior (not panic-selling, not chasing trends) beats knowing fancy formulas.",
    quiz: {
      question: "What was the key to Ronald Read's success?",
      options: [
        "A high salary",
        "Insider stock tips",
        "Decades of patient, consistent saving and investing",
        "Advanced finance degrees",
      ],
      correctIndex: 2,
    },
    accent: "from-green-500 to-teal-700",
    source: "Story and framing from Morgan Housel's The Psychology of Money",
  },
];
