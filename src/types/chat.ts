export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  sources?: ChatSource[];
}

export interface ChatSource {
  title: string;
  type: "concept" | "company" | "ratio";
  link?: string;
}

export interface SuggestedQuestion {
  id: string;
  text: string;
  category: "basics" | "ratios" | "company" | "investing";
}
