import { mathLessons } from "./math";
import { scienceLessons } from "./science";
import { readingLessons } from "./reading";
import { moneyLessons } from "./money";
import { codingLessons } from "./coding";
import { careerLessons } from "./career";
import { thinkingLessons } from "./thinking";

export type { Lesson, Quiz, Subject } from "./types";
export { SUBJECT_LABELS } from "./types";

export const lessons = [
  ...mathLessons,
  ...scienceLessons,
  ...readingLessons,
  ...moneyLessons,
  ...codingLessons,
  ...careerLessons,
  ...thinkingLessons,
];
