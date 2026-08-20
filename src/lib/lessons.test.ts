import { describe, expect, test } from "vitest";
import { lessons } from "./lessons";

describe("lessons data", () => {
  test("has at least one lesson", () => {
    expect(lessons.length).toBeGreaterThan(0);
  });

  test("every lesson has a unique id", () => {
    const ids = lessons.map((lesson) => lesson.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test("every quiz correctIndex points at a real option", () => {
    for (const lesson of lessons) {
      expect(lesson.quiz.correctIndex).toBeGreaterThanOrEqual(0);
      expect(lesson.quiz.correctIndex).toBeLessThan(lesson.quiz.options.length);
    }
  });

  test("every lesson has non-empty hook, concept, and detail text", () => {
    for (const lesson of lessons) {
      expect(lesson.hook.length).toBeGreaterThan(0);
      expect(lesson.concept.length).toBeGreaterThan(0);
      expect(lesson.detail.length).toBeGreaterThan(0);
    }
  });
});
