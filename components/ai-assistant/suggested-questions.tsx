"use client";

import { Lightbulb } from "lucide-react";
import { SuggestedQuestion } from "@/types";
import { cn } from "@/lib/cn";

interface SuggestedQuestionsProps {
  questions: SuggestedQuestion[];
  onSelect: (question: string) => void;
}

const categoryColors: Record<SuggestedQuestion["category"], string> = {
  basics: "bg-[var(--color-info-light)] text-[var(--color-info)] hover:bg-[var(--color-info)]/20",
  ratios: "bg-[var(--color-success-light)] text-[var(--color-success)] hover:bg-[var(--color-success)]/20",
  company: "bg-[var(--color-warning-light)] text-[var(--color-warning)] hover:bg-[var(--color-warning)]/20",
  investing: "bg-[var(--color-soft-teal)] text-[var(--color-muted-teal)] hover:bg-[var(--color-muted-teal)]/20",
};

export function SuggestedQuestions({ questions, onSelect }: SuggestedQuestionsProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-[var(--text-body-sm)] text-[var(--color-cool-gray)]">
        <Lightbulb className="h-4 w-4" />
        <span>Suggested questions to get started:</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {questions.map((question) => (
          <button
            key={question.id}
            onClick={() => onSelect(question.text)}
            className={cn(
              "px-3 py-2 rounded-[var(--radius-full)] text-[var(--text-body-sm)] font-medium",
              "transition-colors cursor-pointer",
              categoryColors[question.category]
            )}
          >
            {question.text}
          </button>
        ))}
      </div>
    </div>
  );
}
