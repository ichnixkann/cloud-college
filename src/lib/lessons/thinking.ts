import type { Lesson } from "./types";

export const thinkingLessons: Lesson[] = [
  {
    id: "thinking-1",
    subject: "thinking",
    hook: "You have two thinkers in your head, and one of them is lazy on purpose.",
    concept: "Fast, automatic gut reactions and slow, effortful reasoning are two different modes — and most of your day runs on the fast one.",
    detail:
      "Your brain has a quick, intuitive mode that answers instantly (is this face friendly? what's 2+2?) and a slow, deliberate mode that kicks in for harder problems (what's 17×24?). The fast mode is efficient but prone to snap judgments and bias. Knowing which mode you're using helps you catch mistakes before they happen — especially on decisions that feel obvious but deserve a second look.",
    quiz: {
      question: "What's a risk of relying only on fast, automatic thinking?",
      options: [
        "It's always slower than careful reasoning",
        "It can lead to snap judgments and bias on complex questions",
        "It only works for math problems",
        "It requires conscious effort every time",
      ],
      correctIndex: 1,
    },
    accent: "from-slate-500 to-zinc-700",
    source: "Dual-process framing from Daniel Kahneman's Thinking, Fast and Slow",
  },
  {
    id: "thinking-2",
    subject: "thinking",
    hook: "You can't control the storm. You can control how you sail.",
    concept: "Separate what's actually in your control (your effort, choices, reactions) from what isn't (other people, outcomes, the past) — and stop spending energy on the second list.",
    detail:
      "An ancient piece of advice, still used by athletes and leaders today: worrying about things outside your control drains energy without changing anything. Redirecting that same energy toward your own preparation, attitude, and next action is where real influence actually lives.",
    quiz: {
      question: "According to this idea, where should you focus your energy?",
      options: [
        "On worrying about outcomes you can't control",
        "On your own effort, choices, and reactions",
        "On what other people think of you",
        "On replaying past mistakes",
      ],
      correctIndex: 1,
    },
    accent: "from-zinc-600 to-stone-700",
    source: "Core idea from Stoic philosophy, e.g. Marcus Aurelius's Meditations",
  },
  {
    id: "thinking-3",
    subject: "thinking",
    hook: "\"You're wrong because you're a bad person\" isn't actually an argument.",
    concept: "A logical fallacy is a flaw in reasoning that can make a weak argument feel convincing — learning to spot them makes you harder to fool.",
    detail:
      "Attacking the person instead of their argument (ad hominem), assuming only two options exist when more are possible (false dilemma), or claiming something is true just because a lot of people believe it (bandwagon) are all common patterns. None of them actually prove the original claim true or false — but they're persuasive because they feel like arguments.",
    quiz: {
      question: "Attacking someone's character instead of their argument is called:",
      options: ["A false dilemma", "An ad hominem", "A bandwagon fallacy", "A syllogism"],
      correctIndex: 1,
    },
    accent: "from-stone-500 to-slate-700",
  },
];
