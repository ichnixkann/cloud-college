import type { Lesson } from "./types";

export const readingLessons: Lesson[] = [
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
    id: "reading-2",
    subject: "reading",
    hook: "Good writing isn't about adding more words — it's about cutting them.",
    concept: "Every word that doesn't pull weight should go. Short, direct sentences hit harder.",
    detail:
      "Instead of 'due to the fact that it was raining, we decided to postpone,' try 'we postponed because of rain.' Same meaning, half the words, way more punch. Great editors don't add flair — they remove clutter until only the essential sentence remains.",
    quiz: {
      question: "What's the core move behind tighter writing?",
      options: [
        "Using longer, more impressive words",
        "Cutting words that don't add meaning",
        "Adding more adjectives",
        "Writing longer sentences",
      ],
      correctIndex: 1,
    },
    accent: "from-pink-500 to-rose-700",
    source: "Principle popularized in Strunk & White's The Elements of Style",
  },
  {
    id: "reading-3",
    subject: "reading",
    hook: "\"She was sad\" vs. her hands shaking as she read the letter twice.",
    concept: "Show, don't tell: let actions and details reveal emotion instead of naming it directly.",
    detail:
      "Telling the reader a character 'was angry' explains a feeling from the outside. Showing it — clenched jaw, a door slammed too hard, a reply typed and deleted three times — lets the reader feel it themselves. It's slower to write but far more memorable to read.",
    quiz: {
      question: "Which is an example of 'showing' rather than 'telling'?",
      options: [
        "He was nervous before the interview.",
        "He kept checking his phone for a time that hadn't changed.",
        "She felt happy about the news.",
        "The weather was cold that day.",
      ],
      correctIndex: 1,
    },
    accent: "from-rose-600 to-red-600",
  },
];
