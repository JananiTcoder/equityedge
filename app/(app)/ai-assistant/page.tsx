"use client";

import { Bot, GraduationCap, AlertCircle } from "lucide-react";
import { ChatInterface } from "@/components/ai-assistant";
import { Card } from "@/components/ui/card";

export default function AIAssistantPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-soft-teal)] mb-4">
          <Bot className="h-8 w-8 text-[var(--color-muted-teal)]" />
        </div>
        <h1 className="text-[var(--text-display-sm)] font-bold text-[var(--color-deep-navy)]">
          AI Learning Assistant
        </h1>
        <p className="mt-2 text-[var(--text-body)] text-[var(--color-cool-gray)] max-w-2xl mx-auto">
          Your personal guide to understanding financial concepts, ratios, and company analysis.
          Ask questions and learn at your own pace.
        </p>
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card variant="learning" className="p-4">
          <div className="flex gap-3">
            <GraduationCap className="h-5 w-5 text-[var(--color-muted-teal)] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-[var(--color-deep-navy)]">
                Educational Focus
              </h3>
              <p className="mt-1 text-[var(--text-body-sm)] text-[var(--color-cool-gray)]">
                Get clear explanations of financial concepts, from basic terms to
                complex ratios. Perfect for beginners and intermediate learners.
              </p>
            </div>
          </div>
        </Card>

        <Card variant="ghost" className="p-4 border border-[var(--color-warning)]/30 bg-[var(--color-warning-light)]">
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 text-[var(--color-warning)] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-[var(--color-deep-navy)]">
                Not Financial Advice
              </h3>
              <p className="mt-1 text-[var(--text-body-sm)] text-[var(--color-cool-gray)]">
                This assistant provides educational information only. Always consult
                qualified professionals for investment decisions.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Chat interface */}
      <Card className="overflow-hidden">
        <ChatInterface />
      </Card>
    </div>
  );
}
