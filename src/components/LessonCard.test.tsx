import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { LessonCard } from "./LessonCard";
import type { Lesson } from "@/lib/lessons";

const lesson: Lesson = {
  id: "test-1",
  subject: "math",
  hook: "Test hook",
  concept: "Test concept",
  detail: "Test detail",
  quiz: {
    question: "Test question?",
    options: ["Wrong", "Right"],
    correctIndex: 1,
  },
  accent: "from-blue-500 to-indigo-600",
};

describe("LessonCard", () => {
  test("walks through hook -> concept -> quiz and calls onComplete on a correct answer", () => {
    const onComplete = vi.fn();
    render(<LessonCard lesson={lesson} onComplete={onComplete} isDone={false} />);

    fireEvent.click(screen.getByText("Test hook"));
    fireEvent.click(screen.getByText("Quick check →"));
    fireEvent.click(screen.getByText("Right"));

    expect(onComplete).toHaveBeenCalledWith("test-1");
    expect(screen.getByText(/that's correct/i)).toBeInTheDocument();
  });

  test("does not call onComplete on a wrong answer", () => {
    const onComplete = vi.fn();
    render(<LessonCard lesson={lesson} onComplete={onComplete} isDone={false} />);

    fireEvent.click(screen.getByText("Test hook"));
    fireEvent.click(screen.getByText("Quick check →"));
    fireEvent.click(screen.getByText("Wrong"));

    expect(onComplete).not.toHaveBeenCalled();
    expect(screen.getByText(/not quite/i)).toBeInTheDocument();
  });

  test("shows the learned badge when isDone is true", () => {
    render(<LessonCard lesson={lesson} onComplete={vi.fn()} isDone={true} />);
    expect(screen.getByText(/learned/i)).toBeInTheDocument();
  });
});
