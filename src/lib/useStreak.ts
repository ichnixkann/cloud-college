"use client";

import { useCallback, useSyncExternalStore } from "react";

type StreakState = {
  streak: number;
  lastDay: string | null;
  completedIds: string[];
};

const STORAGE_KEY = "cloud-college:streak";
const EMPTY_STATE: StreakState = { streak: 0, lastDay: null, completedIds: [] };

let listeners: Array<() => void> = [];

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round(
    (new Date(b + "T00:00:00").getTime() - new Date(a + "T00:00:00").getTime()) / msPerDay
  );
}

function readState(): StreakState {
  if (typeof window === "undefined") return EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StreakState) : EMPTY_STATE;
  } catch {
    return EMPTY_STATE;
  }
}

function writeState(next: StreakState): void {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void): () => void {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((listener) => listener !== callback);
  };
}

function getServerSnapshot(): StreakState {
  return EMPTY_STATE;
}

export function useStreak() {
  const state = useSyncExternalStore(subscribe, readState, getServerSnapshot);

  const completeLesson = useCallback((lessonId: string) => {
    const today = todayKey();
    const prev = readState();
    const alreadyDoneToday = prev.lastDay === today;
    const completedIds = prev.completedIds.includes(lessonId)
      ? prev.completedIds
      : [...prev.completedIds, lessonId];

    let streak = prev.streak;
    if (!alreadyDoneToday) {
      const isConsecutive = prev.lastDay ? daysBetween(prev.lastDay, today) === 1 : false;
      streak = prev.lastDay === null ? 1 : isConsecutive ? prev.streak + 1 : 1;
    }

    writeState({ streak, lastDay: today, completedIds });
  }, []);

  return {
    streak: state.streak,
    completedCount: state.completedIds.length,
    completedIds: state.completedIds,
    completeLesson,
  };
}
