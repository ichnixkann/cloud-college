import type { Lesson } from "./types";

export const mathLessons: Lesson[] = [
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
    id: "math-2",
    subject: "math",
    hook: "The Pythagorean theorem isn't a formula — it's a picture.",
    concept: "a² + b² = c² is literally about the areas of squares on a triangle's sides.",
    detail:
      "Draw a right triangle. Build a square on each of its three sides. The theorem says: the area of the square on the long side (hypotenuse) exactly equals the combined area of the two smaller squares. You can prove it by physically rearranging the pieces — no algebra required.",
    quiz: {
      question: "In a²+b²=c², what does c represent?",
      options: [
        "Any side of the triangle",
        "The shortest side",
        "The hypotenuse (side opposite the right angle)",
        "The triangle's area",
      ],
      correctIndex: 2,
    },
    accent: "from-blue-600 to-cyan-600",
  },
  {
    id: "math-3",
    subject: "math",
    hook: "Stuck on a problem? Work backwards from the answer.",
    concept: "One of the most useful problem-solving moves: start at the goal and ask what step leads there.",
    detail:
      "Mathematician George Pólya taught this in his classic problem-solving guide: if you can't see how to start, imagine you've already solved it, then ask 'what would the step right before the answer look like?' Repeat until you're back at what you already know. It works for math proofs, debugging code, and planning projects.",
    quiz: {
      question: "What's the 'work backwards' strategy?",
      options: [
        "Guess randomly until something works",
        "Start from the goal and ask what step leads there",
        "Always redo the first step you tried",
        "Skip hard problems entirely",
      ],
      correctIndex: 1,
    },
    accent: "from-indigo-500 to-blue-700",
    source: "Problem-solving approach popularized in George Pólya's How to Solve It",
  },
];
