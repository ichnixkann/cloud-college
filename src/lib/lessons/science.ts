import type { Lesson } from "./types";

export const scienceLessons: Lesson[] = [
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
    id: "science-2",
    subject: "science",
    hook: "Giraffes don't have long necks because they wanted them.",
    concept: "Natural selection isn't about effort — it's about which random traits happened to survive and reproduce.",
    detail:
      "Individuals are born with small, random variations. Traits that happen to help an individual survive and have offspring get passed on more often. Over huge stretches of time, small advantages stack up. No giraffe stretched its neck on purpose — the ones with longer necks just out-reproduced the ones without, generation after generation.",
    quiz: {
      question: "What actually drives natural selection?",
      options: [
        "Animals trying hard to change",
        "Random variation plus differences in survival and reproduction",
        "A single mutation happening instantly in one generation",
        "Animals choosing which traits to pass on",
      ],
      correctIndex: 1,
    },
    accent: "from-fuchsia-500 to-purple-700",
    source: "Core idea from Charles Darwin's On the Origin of Species",
  },
  {
    id: "science-3",
    subject: "science",
    hook: "Are you carrying your genes around, or are your genes carrying you?",
    concept: "One useful way to see evolution: genes that are better at getting copied stick around — regardless of what happens to any one individual.",
    detail:
      "This 'gene's-eye view' reframes evolution: a behavior spreads not because it helps the individual, but because it helps copies of the genes behind it get made. It explains puzzling things like self-sacrifice in ants or bees — helping close relatives survive still spreads shared genes, even at a cost to the helper.",
    quiz: {
      question: "The 'gene's-eye view' explains self-sacrifice in animals by pointing to:",
      options: [
        "Animals being naturally kind",
        "Helping relatives spreads shared genes, even at a cost to the helper",
        "Random chance with no pattern",
        "Animals learning it from humans",
      ],
      correctIndex: 1,
    },
    accent: "from-violet-500 to-fuchsia-700",
    source: "Framing popularized in Richard Dawkins' The Selfish Gene",
  },
];
