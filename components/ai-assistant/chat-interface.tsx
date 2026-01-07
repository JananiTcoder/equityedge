"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, Sparkles } from "lucide-react";
import { ChatMessageBubble } from "./chat-message";
import { ChatInput } from "./chat-input";
import { SuggestedQuestions } from "./suggested-questions";
import { ChatMessage } from "@/types";
import { suggestedQuestions, getMockAIResponse } from "@/data/mock-ai-responses";

export function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI thinking
    setIsTyping(true);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Get mock response
    const response = getMockAIResponse(content);

    const assistantMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response.content,
      timestamp: new Date(),
      sources: response.sources,
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, assistantMessage]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)]">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        {messages.length === 0 ? (
          // Empty state
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--color-soft-teal)] flex items-center justify-center mb-4">
              <Bot className="h-8 w-8 text-[var(--color-muted-teal)]" />
            </div>
            <h2 className="text-[var(--text-h3)] font-semibold text-[var(--color-deep-navy)]">
              Financial Learning Assistant
            </h2>
            <p className="mt-2 text-[var(--text-body)] text-[var(--color-cool-gray)] max-w-md">
              Ask me anything about financial concepts, company analysis, or investment fundamentals.
              I&apos;m here to help you learn!
            </p>
            <div className="mt-6 w-full max-w-2xl">
              <SuggestedQuestions
                questions={suggestedQuestions}
                onSelect={handleSendMessage}
              />
            </div>
          </div>
        ) : (
          // Messages
          <>
            {messages.map((message) => (
              <ChatMessageBubble key={message.id} message={message} />
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-soft-teal)] flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-[var(--color-muted-teal)]" />
                </div>
                <div className="bg-[var(--color-surface-subtle)] rounded-[var(--radius-lg)] p-4">
                  <div className="flex items-center gap-2 text-[var(--color-cool-gray)]">
                    <Sparkles className="h-4 w-4 animate-pulse" />
                    <span className="text-[var(--text-body-sm)]">Thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input area */}
      <div className="border-t border-[var(--color-surface-muted)] p-4 bg-[var(--color-background)]">
        {messages.length > 0 && messages.length < 3 && (
          <div className="mb-4">
            <SuggestedQuestions
              questions={suggestedQuestions.slice(0, 3)}
              onSelect={handleSendMessage}
            />
          </div>
        )}
        <ChatInput onSend={handleSendMessage} disabled={isTyping} />
        <p className="mt-2 text-center text-[var(--text-body-xs)] text-[var(--color-cool-gray)]">
          Educational purposes only. Not financial advice.
        </p>
      </div>
    </div>
  );
}
