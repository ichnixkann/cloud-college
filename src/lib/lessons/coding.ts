import type { Lesson } from "./types";

export const codingLessons: Lesson[] = [
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
    id: "coding-2",
    subject: "coding",
    hook: "`x` tells you nothing. `daysUntilExpiry` tells you everything.",
    concept: "Good variable and function names replace the need for most comments.",
    detail:
      "Code is read far more often than it's written. A function called `calc(a, b)` forces every future reader to dig through the body to understand it. A function called `calculateMonthlyPayment(principal, rate)` explains itself at a glance. Naming well is one of the highest-leverage coding skills — and it's free.",
    quiz: {
      question: "Why does good naming matter so much in code?",
      options: [
        "It makes the code run faster",
        "It reduces the file size",
        "It lets readers understand intent without extra comments",
        "It's required by every compiler",
      ],
      correctIndex: 2,
    },
    accent: "from-amber-500 to-orange-700",
    source: "Naming principles popularized in Robert C. Martin's Clean Code",
  },
  {
    id: "coding-3",
    subject: "coding",
    hook: "Why does searching 1 million records feel instant, but sorting them can feel slow?",
    concept: "Big O notation describes how an algorithm's speed scales as data grows — not just how fast it is on today's small example.",
    detail:
      "Looking up a value by its exact key in a hash map stays fast no matter how much data you add — that's O(1). But a poorly written sort that compares every item to every other item slows down dramatically as data grows — that's O(n²). Two algorithms can look equally fast on 10 items and wildly different on 10 million.",
    quiz: {
      question: "What does Big O notation actually describe?",
      options: [
        "The exact runtime in seconds",
        "How performance scales as input size grows",
        "How many lines of code a function has",
        "The programming language's speed",
      ],
      correctIndex: 1,
    },
    accent: "from-orange-600 to-red-600",
  },
];
