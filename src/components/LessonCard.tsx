"use client";

import { useState } from "react";
import type { Lesson } from "@/lib/lessons";
import { SUBJECT_LABELS } from "@/lib/lessons";

type Stage = "hook" | "concept" | "quiz" | "result";

export function LessonCard({
  lesson,
  onComplete,
  isDone,
}: {
  lesson: Lesson;
  onComplete: (id: string) => void;
  isDone: boolean;
}) {
  const [stage, setStage] = useState<Stage>("hook");
  const [selected, setSelected] = useState<number | null>(null);

  const correct = selected === lesson.quiz.correctIndex;

  function handleAnswer(index: number) {
    if (selected !== null) return;
    setSelected(index);
    setStage("result");
    if (index === lesson.quiz.correctIndex) {
      onComplete(lesson.id);
    }
  }

  function reset() {
    setStage("hook");
    setSelected(null);
  }

  return (
    <section
      className={`relative h-[100dvh] w-full snap-start flex flex-col justify-between bg-gradient-to-br ${lesson.accent} text-white overflow-hidden`}
    >
      <div className="flex items-center justify-between px-5 pt-6 text-sm font-medium uppercase tracking-wide text-white/80">
        <span>{SUBJECT_LABELS[lesson.subject]}</span>
        {isDone && (
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs">✓ Learned</span>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 gap-6">
        {stage === "hook" && (
          <button
            onClick={() => setStage("concept")}
            className="text-left group"
          >
            <p className="text-3xl sm:text-4xl font-bold leading-tight">
              {lesson.hook}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-white/90 text-sm font-semibold group-hover:gap-3 transition-all">
              Tap to find out ↓
            </p>
          </button>
        )}

        {stage === "concept" && (
          <div>
            <p className="text-2xl sm:text-3xl font-bold leading-snug">
              {lesson.concept}
            </p>
            <p className="mt-4 text-white/90 text-base leading-relaxed">
              {lesson.detail}
            </p>
            <button
              onClick={() => setStage("quiz")}
              className="mt-8 rounded-full bg-white text-slate-900 px-6 py-3 font-semibold text-sm"
            >
              Quick check →
            </button>
          </div>
        )}

        {(stage === "quiz" || stage === "result") && (
          <div>
            <p className="text-xl sm:text-2xl font-bold mb-5">
              {lesson.quiz.question}
            </p>
            <div className="flex flex-col gap-3">
              {lesson.quiz.options.map((opt, i) => {
                const isSelected = selected === i;
                const isCorrectOpt = i === lesson.quiz.correctIndex;
                let styles = "bg-white/15 hover:bg-white/25 border-white/30";
                if (selected !== null) {
                  if (isCorrectOpt) {
                    styles = "bg-emerald-400/90 border-emerald-200 text-slate-900";
                  } else if (isSelected) {
                    styles = "bg-red-400/80 border-red-200 text-slate-900";
                  } else {
                    styles = "bg-white/10 border-white/20 opacity-70";
                  }
                }
                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={selected !== null}
                    className={`text-left rounded-xl border px-4 py-3 text-sm sm:text-base font-medium transition-colors ${styles}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {stage === "result" && (
              <div className="mt-6">
                <p className="font-semibold text-lg">
                  {correct ? "Nice — that's correct! 🔥" : "Not quite — check the highlighted answer."}
                </p>
                <button
                  onClick={reset}
                  className="mt-4 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold"
                >
                  Review again
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="px-6 pb-8 text-xs text-white/70">
        Swipe up for the next lesson ↑
      </div>
    </section>
  );
}
