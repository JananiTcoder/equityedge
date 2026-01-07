"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function ChatInput({
  onSend,
  disabled = false,
  placeholder = "Ask about financial concepts, ratios, or company analysis...",
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
    }
  }, [message]);

  const handleSubmit = () => {
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex gap-3 items-end">
      <div className="flex-1 relative">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
          className={cn(
            "w-full resize-none rounded-[var(--radius-lg)] border border-[var(--color-surface-muted)]",
            "bg-[var(--color-surface)] px-4 py-3 pr-12",
            "text-[var(--text-body)] text-[var(--color-text-primary)]",
            "placeholder:text-[var(--color-cool-gray)]",
            "focus:outline-none focus:ring-2 focus:ring-[var(--color-muted-teal)] focus:border-transparent",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "transition-shadow"
          )}
        />
        <Button
          type="button"
          variant="primary"
          size="icon"
          onClick={handleSubmit}
          disabled={disabled || !message.trim()}
          className="absolute right-2 bottom-2 h-8 w-8"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
