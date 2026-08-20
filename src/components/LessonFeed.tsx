"use client";

import { lessons } from "@/lib/lessons";
import { useStreak } from "@/lib/useStreak";
import { LessonCard } from "@/components/LessonCard";
import Link from "next/link";

export function LessonFeed() {
  const { streak, completedIds, completeLesson } = useStreak();

  return (
    <div className="relative">
      <div className="fixed top-0 inset-x-0 z-10 flex items-center justify-between px-5 py-4 bg-gradient-to-b from-black/40 to-transparent text-white">
        <Link href="/" className="text-sm font-semibold">
          ← Cloud College
        </Link>
        <div className="flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-sm font-semibold">
          🔥 {streak} day streak
        </div>
      </div>

      <div className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            onComplete={completeLesson}
            isDone={completedIds.includes(lesson.id)}
          />
        ))}
        <section className="h-[100dvh] w-full snap-start flex flex-col items-center justify-center bg-slate-900 text-white px-8 text-center gap-4">
          <p className="text-2xl font-bold">That&apos;s today&apos;s set 🎉</p>
          <p className="text-white/70">
            {completedIds.length} of {lessons.length} lessons completed. Come back tomorrow to keep your streak alive.
          </p>
          <Link
            href="/"
            className="mt-4 rounded-full bg-white text-slate-900 px-6 py-3 font-semibold text-sm"
          >
            Back to home
          </Link>
        </section>
      </div>
    </div>
  );
}
