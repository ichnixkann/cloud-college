import { describe, expect, test } from "vitest";
import { lessons, SUBJECT_LABELS } from "./lessons";

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

  test("every lesson's subject has a matching label", () => {
    for (const lesson of lessons) {
      expect(SUBJECT_LABELS[lesson.subject]).toBeTruthy();
    }
  });

  test("every subject has at least one lesson", () => {
    for (const subject of Object.keys(SUBJECT_LABELS)) {
      const count = lessons.filter((lesson) => lesson.subject === subject).length;
      expect(count).toBeGreaterThan(0);
    }
  });

  test("source attributions, when present, are non-empty strings", () => {
    for (const lesson of lessons) {
      if (lesson.source !== undefined) {
        expect(lesson.source.length).toBeGreaterThan(0);
      }
    }
  });
});
