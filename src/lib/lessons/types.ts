export type Quiz = {
  question: string;
  options: string[];
  correctIndex: number;
};

export type Subject =
  | "math"
  | "science"
  | "reading"
  | "money"
  | "coding"
  | "career"
  | "thinking";

export type Lesson = {
  id: string;
  subject: Subject;
  hook: string;
  concept: string;
  detail: string;
  quiz: Quiz;
  accent: string;
  /** Book or guide this lesson's idea is drawn from, in our own words. */
  source?: string;
};

export const SUBJECT_LABELS: Record<Subject, string> = {
  math: "Math",
  science: "Science",
  reading: "Reading & Writing",
  money: "Money Skills",
  coding: "Coding",
  career: "Career Skills",
  thinking: "Critical Thinking",
};
