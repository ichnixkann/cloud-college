import Link from "next/link";
import { SUBJECT_LABELS } from "@/lib/lessons";

const SUBJECTS = Object.values(SUBJECT_LABELS);

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-slate-950 text-white">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-10 px-6 py-24 text-center">
        <div className="flex flex-col gap-4">
          <span className="mx-auto rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
            Free. Forever. For everyone.
          </span>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Cloud College
          </h1>
          <p className="mx-auto max-w-xl text-lg text-white/70">
            A free, scroll-based college for kids and young adults. Lessons hit like
            your feed — fast hooks, one idea at a time, a quick check, then the next.
            No cost, no signup wall, no ads aimed at kids.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {SUBJECTS.map((label) => (
            <span
              key={label}
              className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/80"
            >
              {label}
            </span>
          ))}
        </div>

        <Link
          href="/learn"
          className="rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-white/10 transition-transform hover:scale-105"
        >
          Start learning ↓
        </Link>

        <p className="text-sm text-white/40">
          No account needed. Your streak is saved on this device.
        </p>
      </main>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/40">
        Cloud College is a free educational project. Always will be free for students.
      </footer>
    </div>
  );
}
