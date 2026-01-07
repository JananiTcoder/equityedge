"use client";

import { Bot, User, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ChatMessage } from "@/types";
import { cn } from "@/lib/cn";
import { formatRelativeTime } from "@/lib/format";

interface ChatMessageProps {
  message: ChatMessage;
}

export function ChatMessageBubble({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex gap-3",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
          isUser
            ? "bg-[var(--color-muted-teal)]"
            : "bg-[var(--color-soft-teal)]"
        )}
      >
        {isUser ? (
          <User className="h-4 w-4 text-white" />
        ) : (
          <Bot className="h-4 w-4 text-[var(--color-muted-teal)]" />
        )}
      </div>

      {/* Message content */}
      <div
        className={cn(
          "max-w-[80%] rounded-[var(--radius-lg)] p-4",
          isUser
            ? "bg-[var(--color-muted-teal)] text-white"
            : "bg-[var(--color-surface-subtle)]"
        )}
      >
        {/* Message text with markdown-like formatting */}
        <div
          className={cn(
            "text-[var(--text-body-sm)] prose prose-sm max-w-none",
            isUser ? "text-white prose-invert" : "text-[var(--color-text-primary)]",
            "[&_strong]:font-semibold",
            "[&_code]:bg-[var(--color-surface-muted)] [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[var(--text-body-xs)]",
            "[&_pre]:bg-[var(--color-surface-muted)] [&_pre]:p-3 [&_pre]:rounded-[var(--radius-md)] [&_pre]:overflow-x-auto [&_pre]:text-[var(--text-body-xs)]",
            "[&_ul]:list-disc [&_ul]:pl-4 [&_ul]:space-y-1",
            "[&_ol]:list-decimal [&_ol]:pl-4 [&_ol]:space-y-1"
          )}
          dangerouslySetInnerHTML={{
            __html: formatMarkdown(message.content),
          }}
        />

        {/* Sources */}
        {message.sources && message.sources.length > 0 && (
          <div className="mt-3 pt-3 border-t border-[var(--color-surface-muted)]">
            <span className="text-[var(--text-body-xs)] text-[var(--color-cool-gray)]">
              Related topics:
            </span>
            <div className="mt-1 flex flex-wrap gap-2">
              {message.sources.map((source, i) => (
                <Badge
                  key={i}
                  variant={
                    source.type === "ratio"
                      ? "blue"
                      : source.type === "company"
                      ? "outline"
                      : "default"
                  }
                  className="text-[var(--text-body-xs)]"
                >
                  {source.link ? (
                    <a href={source.link} className="flex items-center gap-1">
                      {source.title}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    source.title
                  )}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Timestamp */}
        <div
          className={cn(
            "mt-2 text-[var(--text-body-xs)]",
            isUser ? "text-white/70" : "text-[var(--color-cool-gray)]"
          )}
        >
          {formatRelativeTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
}

// Simple markdown formatter
function formatMarkdown(text: string): string {
  return text
    // Code blocks
    .replace(/```(\w*)\n?([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    // Headers
    .replace(/^### (.+)$/gm, '<h4 class="font-semibold mt-3 mb-1">$1</h4>')
    .replace(/^## (.+)$/gm, '<h3 class="font-semibold mt-4 mb-2">$1</h3>')
    // Lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    // Line breaks
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br/>')
    // Wrap in paragraph
    .replace(/^([\s\S]+)$/, '<p>$1</p>')
    // Clean up empty paragraphs
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<h[34])/g, '$1')
    .replace(/(<\/h[34]>)<\/p>/g, '$1')
    .replace(/<p>(<pre>)/g, '$1')
    .replace(/(<\/pre>)<\/p>/g, '$1')
    .replace(/<p>(<ul>)/g, '$1')
    .replace(/(<\/ul>)<\/p>/g, '$1');
}
