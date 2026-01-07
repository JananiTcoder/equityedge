# EquityEdge Complete Build Prompt for Claude Code IDE

## Project Initialization Command

```
/brainstorm then /write-plan then /execute-plan
```

---

## 🎯 MASTER CONTEXT: EquityEdge - Financial Education Platform

### Project Overview

Build **EquityEdge**, an education-first financial intelligence platform that empowers retail investors in India to understand market fundamentals and company financials. The platform transforms tip-driven investing into knowledge-driven confidence.

**Core Value Proposition:** "Learn to Read Companies, Not Tips"

**Target Launch:** MVP (Web)  
**Primary Audience:** Retail investors in India  
**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, shadcn/ui

---

## 📋 PHASE 1: PROJECT SETUP & CONTEXT ENGINEERING

### 1.1 Initialize Next.js Project

```bash
npx create-next-app@latest equityedge --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd equityedge
```

### 1.2 Install Core Dependencies

```bash
# UI & Animation
npm install framer-motion motion lucide-react @radix-ui/react-icons @radix-ui/react-slot class-variance-authority clsx tailwind-merge

# Shadcn UI Setup
npx shadcn@latest init

# Additional Components
npm install embla-carousel-react usehooks-ts recharts

# Fonts
npm install @fontsource-variable/plus-jakarta-sans @fontsource/jetbrains-mono

# Form & Validation
npm install react-hook-form zod @hookform/resolvers

# Data Fetching
npm install @tanstack/react-query axios
```

### 1.3 Create Directory Structure

```
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                    # Landing page
│   │   └── layout.tsx
│   ├── (app)/
│   │   ├── market-statistics/
│   │   │   └── page.tsx                # Market Statistics Dashboard
│   │   ├── company/
│   │   │   ├── [ticker]/
│   │   │   │   ├── page.tsx            # Company Fundamentals
│   │   │   │   ├── ratios/page.tsx     # Financial Ratios
│   │   │   │   └── layout.tsx
│   │   │   └── search/page.tsx         # Company Search
│   │   ├── learn/
│   │   │   └── page.tsx                # Learning Hub
│   │   └── layout.tsx
│   ├── api/
│   │   ├── companies/
│   │   │   ├── search/route.ts
│   │   │   └── [ticker]/route.ts
│   │   ├── market-stats/route.ts
│   │   └── ai-assistant/route.ts
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/                             # shadcn/ui + custom components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── tooltip.tsx
│   │   ├── display-cards.tsx           # 21st.dev component
│   │   ├── sidebar.tsx                 # 21st.dev component
│   │   ├── expandable-tabs.tsx         # 21st.dev component
│   │   ├── container-scroll-animation.tsx
│   │   ├── bento-grid.tsx
│   │   ├── gallery4.tsx
│   │   ├── text-shimmer.tsx
│   │   ├── morphing-popover.tsx
│   │   └── text-rotate.tsx
│   ├── landing/
│   │   ├── hero-section.tsx
│   │   ├── value-proposition.tsx
│   │   ├── how-it-works.tsx
│   │   ├── social-proof.tsx
│   │   └── educational-disclaimer.tsx
│   ├── market-stats/
│   │   ├── statistics-cards.tsx
│   │   ├── stat-card.tsx
│   │   ├── behavioral-charts.tsx
│   │   └── stat-modal.tsx
│   ├── company/
│   │   ├── search-bar.tsx
│   │   ├── search-autocomplete.tsx
│   │   ├── recent-searches.tsx
│   │   ├── popular-companies.tsx
│   │   ├── fundamentals-overview.tsx
│   │   ├── metrics-cards.tsx
│   │   ├── revenue-profit-chart.tsx
│   │   ├── cash-flow-chart.tsx
│   │   └── financial-ratios.tsx
│   ├── ratios/
│   │   ├── ratio-row.tsx
│   │   ├── ratio-detail-modal.tsx
│   │   ├── ratio-sparkline.tsx
│   │   └── industry-comparison.tsx
│   ├── ai-assistant/
│   │   ├── chat-panel.tsx
│   │   ├── chat-button.tsx
│   │   ├── message-bubble.tsx
│   │   ├── starter-prompts.tsx
│   │   └── typing-indicator.tsx
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── mobile-nav.tsx
│   │   ├── footer.tsx
│   │   └── page-container.tsx
│   └── shared/
│       ├── skeleton-loader.tsx
│       ├── error-boundary.tsx
│       ├── tooltip-educational.tsx
│       ├── progress-bar.tsx
│       └── badge.tsx
├── lib/
│   ├── utils.ts
│   ├── cn.ts
│   └── api-client.ts
├── hooks/
│   ├── use-click-outside.ts
│   ├── use-local-storage.ts
│   ├── use-recent-searches.ts
│   ├── use-recent-companies.ts
│   └── use-media-query.ts
├── types/
│   ├── company.ts
│   ├── market-stats.ts
│   └── ratios.ts
├── data/
│   ├── mock-companies.ts
│   ├── mock-statistics.ts
│   └── educational-content.ts
└── styles/
    └── design-tokens.css
```

---

## 📐 PHASE 2: DESIGN SYSTEM IMPLEMENTATION

### 2.1 Tailwind Configuration (`tailwind.config.ts`)

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "deep-navy": "#0D1B2A",
        "slate-blue": "#1B263B",
        "warm-white": "#FAFBFC",
        
        // Secondary Colors
        "muted-teal": "#2D6A6A",
        "soft-teal": "#E8F4F4",
        "cool-gray": "#64748B",
        
        // Accent Colors
        "amber-gold": "#D4A853",
        "warm-amber": "#F5C469",
        "copper-glow": "#C4956A",
        
        // Functional Colors
        success: {
          DEFAULT: "#2E7D5A",
          light: "#E6F5EE",
        },
        warning: {
          DEFAULT: "#E5A428",
          light: "#FFF8E6",
        },
        error: {
          DEFAULT: "#C4432B",
          light: "#FDEEEC",
        },
        info: {
          DEFAULT: "#3B7DBD",
          light: "#EBF5FF",
        },
        
        // Background Colors
        canvas: "#FFFFFF",
        surface: {
          DEFAULT: "#FAFBFC",
          subtle: "#F1F5F9",
          muted: "#E2E8F0",
        },
        
        // Shadcn compatibility
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "SF Mono", "Consolas", "monospace"],
      },
      fontSize: {
        // Display & Headlines
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-1.5px", fontWeight: "800" }],
        "display-sm": ["36px", { lineHeight: "44px", letterSpacing: "-1px", fontWeight: "700" }],
        "h1": ["32px", { lineHeight: "40px", letterSpacing: "-0.5px", fontWeight: "700" }],
        "h2": ["24px", { lineHeight: "32px", letterSpacing: "-0.3px", fontWeight: "700" }],
        "h3": ["20px", { lineHeight: "28px", letterSpacing: "-0.2px", fontWeight: "600" }],
        "h4": ["18px", { lineHeight: "26px", letterSpacing: "-0.1px", fontWeight: "600" }],
        "h5": ["16px", { lineHeight: "24px", letterSpacing: "0", fontWeight: "600" }],
        // Body Text
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "22px", letterSpacing: "0.1px", fontWeight: "400" }],
        "body-xs": ["12px", { lineHeight: "18px", letterSpacing: "0.2px", fontWeight: "400" }],
        // Special Text
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.3px", fontWeight: "500" }],
        "label": ["12px", { lineHeight: "16px", letterSpacing: "0.4px", fontWeight: "500" }],
        "label-sm": ["10px", { lineHeight: "14px", letterSpacing: "0.5px", fontWeight: "500" }],
        "metric-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.5px", fontWeight: "700" }],
        "metric": ["28px", { lineHeight: "36px", letterSpacing: "-0.3px", fontWeight: "600" }],
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "10px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "20px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03)",
        md: "0 4px 12px rgba(0, 0, 0, 0.06), 0 12px 32px rgba(0, 0, 0, 0.05)",
        lg: "0 8px 32px rgba(0, 0, 0, 0.12)",
        "gold": "0 2px 8px rgba(212, 168, 83, 0.25)",
        "gold-hover": "0 4px 16px rgba(212, 168, 83, 0.35)",
        "metric": "0 4px 16px rgba(13, 27, 42, 0.15)",
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "8": "32px",
        "10": "40px",
        "12": "48px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
      },
      backgroundImage: {
        "gradient-premium": "linear-gradient(135deg, #0D1B2A 0%, #1B263B 50%, #2D3A4F 100%)",
        "gradient-gold": "linear-gradient(135deg, #D4A853 0%, #F5C469 50%, #C4956A 100%)",
        "gradient-progress": "linear-gradient(90deg, #2D6A6A 0%, #3D8A8A 100%)",
        "gradient-card": "linear-gradient(180deg, #FFFFFF 0%, #FAFBFC 100%)",
      },
      keyframes: {
        "page-enter": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        celebrate: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "page-enter": "page-enter 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        shimmer: "shimmer 1.5s infinite",
        celebrate: "celebrate 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        pulse: "pulse 1.5s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

### 2.2 CSS Variables (`globals.css`)

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Primary Colors */
    --color-deep-navy: #0D1B2A;
    --color-slate-blue: #1B263B;
    --color-warm-white: #FAFBFC;
    
    /* Secondary Colors */
    --color-muted-teal: #2D6A6A;
    --color-soft-teal: #E8F4F4;
    --color-cool-gray: #64748B;
    
    /* Accent Colors */
    --color-amber-gold: #D4A853;
    --color-warm-amber: #F5C469;
    --color-copper-glow: #C4956A;
    
    /* Functional Colors */
    --color-success: #2E7D5A;
    --color-success-light: #E6F5EE;
    --color-warning: #E5A428;
    --color-warning-light: #FFF8E6;
    --color-error: #C4432B;
    --color-error-light: #FDEEEC;
    --color-info: #3B7DBD;
    --color-info-light: #EBF5FF;
    
    /* Background Colors */
    --color-canvas: #FFFFFF;
    --color-surface: #FAFBFC;
    --color-surface-subtle: #F1F5F9;
    --color-surface-muted: #E2E8F0;
    
    /* Shadcn Variables */
    --background: 0 0% 100%;
    --foreground: 210 29% 11%;
    --card: 0 0% 100%;
    --card-foreground: 210 29% 11%;
    --popover: 0 0% 100%;
    --popover-foreground: 210 29% 11%;
    --primary: 180 38% 30%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 210 29% 11%;
    --muted: 210 40% 96%;
    --muted-foreground: 215 16% 47%;
    --accent: 39 56% 58%;
    --accent-foreground: 210 29% 11%;
    --destructive: 9 65% 47%;
    --destructive-foreground: 210 40% 98%;
    --border: 214 32% 91%;
    --input: 214 32% 91%;
    --ring: 180 38% 30%;
    --radius: 10px;
    
    /* Typography */
    --font-primary: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
    --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
    
    /* Transitions */
    --transition-fast: 150ms ease-out;
    --transition-normal: 200ms ease-out;
    --transition-slow: 400ms ease-out;
    
    /* Gradients */
    --gradient-premium: linear-gradient(135deg, #0D1B2A 0%, #1B263B 50%, #2D3A4F 100%);
    --gradient-gold: linear-gradient(135deg, #D4A853 0%, #F5C469 50%, #C4956A 100%);
    --gradient-progress: linear-gradient(90deg, #2D6A6A 0%, #3D8A8A 100%);
  }
  
  .dark {
    --background: 222 47% 5%;
    --foreground: 210 40% 98%;
    --card: 222 47% 8%;
    --card-foreground: 210 40% 98%;
    --popover: 222 47% 8%;
    --popover-foreground: 210 40% 98%;
    --primary: 160 51% 49%;
    --primary-foreground: 222 47% 5%;
    --secondary: 222 47% 12%;
    --secondary-foreground: 210 40% 98%;
    --muted: 222 47% 12%;
    --muted-foreground: 215 20% 65%;
    --accent: 42 71% 61%;
    --accent-foreground: 222 47% 5%;
    --destructive: 0 62% 50%;
    --destructive-foreground: 210 40% 98%;
    --border: 215 28% 24%;
    --input: 215 28% 24%;
    --ring: 160 51% 49%;
    
    /* Dark Mode Colors */
    --color-deep-navy: #F0F6FC;
    --color-slate-blue: #E6EDF3;
    --color-muted-teal: #4ECCA3;
    --color-soft-teal: #1A3D3D;
    --color-amber-gold: #E8B94F;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Focus States */
  :focus-visible {
    @apply outline-2 outline-muted-teal outline-offset-2;
  }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-surface-subtle;
}

::-webkit-scrollbar-thumb {
  @apply bg-surface-muted rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-cool-gray;
}

/* Skeleton Animation */
.skeleton {
  @apply animate-pulse bg-surface-subtle;
  background: linear-gradient(90deg, #F1F5F9 25%, #E2E8F0 50%, #F1F5F9 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```

---

## 🧩 PHASE 3: COMPONENT INTEGRATION

### 3.1 Install & Configure 21st.dev Components

Create the following components in `/src/components/ui/`:

#### Display Cards Component
```typescript
// src/components/ui/display-cards.tsx
"use client";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-amber-gold" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-amber-gold",
  titleClassName = "text-amber-gold",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-surface-muted bg-canvas/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-muted-teal/20 hover:bg-canvas [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-muted-teal/20 p-1">
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg text-deep-navy dark:text-warm-white">{description}</p>
      <p className="text-cool-gray">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards: DisplayCardProps[] = [
    {
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];
  
  const displayCards = cards || defaultCards;
  
  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}

export { DisplayCard, DisplayCards };
```

### 3.2 Create Custom Hooks

```typescript
// src/hooks/use-click-outside.ts
import { RefObject, useEffect } from 'react';

type Handler = (event: MouseEvent | TouchEvent) => void;

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current;
      const target = event.target;
      if (!el || !target || el.contains(target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener(mouseEvent, listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener(mouseEvent, listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, mouseEvent]);
}
```

```typescript
// src/hooks/use-local-storage.ts
"use client";
import { useState, useEffect, useCallback } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
    }
    setIsLoaded(true);
  }, [key]);

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return { value: storedValue, setValue, removeValue, isLoaded };
}
```

```typescript
// src/hooks/use-recent-companies.ts
"use client";
import { useLocalStorage } from './use-local-storage';

export interface RecentCompany {
  name: string;
  ticker: string;
  sector: string;
  lastViewed: string;
}

export function useRecentCompanies(maxItems: number = 10) {
  const { value: companies, setValue, removeValue, isLoaded } = useLocalStorage<RecentCompany[]>(
    'recentCompanies',
    []
  );

  const addCompany = (company: Omit<RecentCompany, 'lastViewed'>) => {
    setValue((prev) => {
      const filtered = prev.filter((c) => c.ticker !== company.ticker);
      return [
        { ...company, lastViewed: new Date().toISOString() },
        ...filtered,
      ].slice(0, maxItems);
    });
  };

  const clearAll = () => removeValue();

  const removeCompany = (ticker: string) => {
    setValue((prev) => prev.filter((c) => c.ticker !== ticker));
  };

  return { companies, addCompany, clearAll, removeCompany, isLoaded };
}
```

---

## 🏠 PHASE 4: PAGE IMPLEMENTATIONS

### 4.1 Landing Page (`/app/(marketing)/page.tsx`)

**Specifications from Feature Spec:**
- Hero section with "Learn to Read Companies, Not Tips" headline
- Subheadline: Educational value proposition
- Primary CTA: "Explore Market Statistics"
- Secondary CTA: "Search a Company"
- Tertiary Link: "New to investing? Start with the basics →"
- Abstract illustration (NOT stock charts)
- "How It Works" 3-step section
- Educational disclaimer (always visible)

**Components to use:**
- `ContainerScroll` for hero scroll animation
- `TextRotate` for dynamic headline text
- `TextShimmer` for loading states
- `DisplayCards` for feature highlights
- `BentoGrid` for "How It Works" section

**Animation requirements:**
- Staggered fade-in: headline (0ms) → subheadline (100ms) → CTAs (200ms) → visual (300ms)
- 400ms duration with ease-out timing
- Respects `prefers-reduced-motion`

### 4.2 Market Statistics Dashboard (`/app/(app)/market-statistics/page.tsx`)

**Specifications from Feature Spec:**
- Grid of 3-4 statistics cards (2x2 desktop, 1 column mobile)
- Each card: Large number, descriptor, source citation, "Learn why →" link
- Cards:
  1. "89% of retail traders lose money in F&O" (SEBI data)
  2. "Average holding period: 15 days vs. recommended 3+ years"
  3. "₹1.8 lakh crore lost by retail traders (2023)"
  4. "70% of trades happen within 24 hours of receiving a tip"
- Hover: Card elevates with increased shadow
- Expanded modal with detailed explanation
- Behavioral pattern visualizations below

**Components to use:**
- Custom `StatCard` component with Framer Motion
- `MorphingPopover` for expanded details
- Recharts for behavioral visualizations
- `Gallery4` for case studies carousel

### 4.3 Company Search (`/app/(app)/company/search/page.tsx`)

**Specifications from Feature Spec:**
- Search bar: 600px max-width, 48px height
- Placeholder: "Search by company name or ticker (e.g., Reliance, TCS)"
- Autocomplete dropdown after 2 characters
- Result item: Company name (bold) + Ticker (muted) + Sector tag
- Fuzzy matching support
- Recent searches section (local storage)
- Popular companies section
- Browse by sector tags

**Components to use:**
- `ExpandableTabs` for sector filtering
- Custom `SearchAutocomplete` with debounced input
- `Sidebar` for mobile filter navigation

### 4.4 Company Fundamentals (`/app/(app)/company/[ticker]/page.tsx`)

**Specifications from Feature Spec:**
- Header: Company name, ticker, sector tag
- Tab navigation: "Overview" | "Ratios" | "AI Assistant"
- Metrics cards grid (2x2):
  1. Revenue with YoY trend
  2. Net Profit with trend
  3. Profit Margin with industry avg
  4. Debt-to-Equity with indicator
- Educational tooltips on hover/tap
- Revenue & Profit chart (combined bar + line)
- Cash flow chart

**Components to use:**
- Recharts for financial charts
- Custom `MetricCard` with tooltip integration
- `MorphingPopover` for detailed metric explanations

### 4.5 Financial Ratios (`/app/(app)/company/[ticker]/ratios/page.tsx`)

**Specifications from Feature Spec:**
- Ratio rows with 3-level progressive disclosure:
  - Level 1: Name + Value + Badge (always visible)
  - Level 2: Expanded section with explanation + sparkline + comparison
  - Level 3: Deep dive modal with full education
- Key ratios: P/E, ROE, Current Ratio, D/E, P/B
- Color-coded interpretation badges
- Industry comparison visualizations

**Components to use:**
- Custom `RatioRow` with accordion behavior
- `MorphingPopover` for deep dive modal
- Recharts sparklines for trends

### 4.6 AI Assistant (Floating Chat Panel)

**Specifications from Feature Spec:**
- Floating button: Bottom-right, 56px, chat icon
- Panel: 400px width (desktop), full width (mobile)
- Context badge showing current company
- Starter prompts before first message
- Polite redirect for buy/sell questions
- Message bubbles with typing indicator

**AI Response Pattern:**
- Structure: Concept → Context → Practical Meaning
- Offer educational alternatives for tip requests
- Link to relevant learning content

---

## 📊 PHASE 5: DATA LAYER

### 5.1 Type Definitions

```typescript
// src/types/company.ts
export interface Company {
  id: string;
  name: string;
  ticker: string;
  exchange: string;
  sector: string;
  industry: string;
  description: string;
}

export interface CompanyFundamentals extends Company {
  revenue: MetricData;
  netProfit: MetricData;
  profitMargin: MetricData;
  debtToEquity: MetricData;
  operatingCashFlow: MetricData;
  cashReserves: MetricData;
  lastUpdated: string;
  dataSource: string;
}

export interface MetricData {
  value: number;
  formatted: string;
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
  history: { year: number; value: number }[];
  industryAvg?: number;
}

// src/types/ratios.ts
export interface FinancialRatio {
  id: string;
  name: string;
  fullName: string;
  value: number;
  formatted: string;
  industryAvg: number;
  interpretation: 'excellent' | 'good' | 'neutral' | 'concerning' | 'red-flag';
  interpretationLabel: string;
  history: { year: number; value: number }[];
  education: {
    summary: string;
    whatItMeans: string;
    howCalculated: string;
    whatAffectsIt: string[];
    goodVsBad: { good: string; bad: string };
    limitations: string[];
  };
}

// src/types/market-stats.ts
export interface MarketStatistic {
  id: string;
  value: string;
  description: string;
  source: string;
  sourceUrl?: string;
  lastUpdated: string;
  explanation: {
    why: string;
    whatYouCanDo: string;
    learnMoreLink: string;
  };
}

export interface BehavioralPattern {
  id: string;
  title: string;
  type: 'line' | 'bar' | 'area';
  data: any[];
  annotations: {
    point: number;
    label: string;
    description: string;
  }[];
}
```

### 5.2 Mock Data Files

```typescript
// src/data/mock-companies.ts
export const mockCompanies: Company[] = [
  {
    id: "reliance",
    name: "Reliance Industries",
    ticker: "RELIANCE.NS",
    exchange: "NSE",
    sector: "Oil & Gas",
    industry: "Integrated Oil & Gas",
    description: "India's largest conglomerate..."
  },
  // Add 20+ Indian companies
];

// src/data/mock-statistics.ts
export const marketStatistics: MarketStatistic[] = [
  {
    id: "retail-loss",
    value: "89%",
    description: "of retail traders lose money in F&O",
    source: "SEBI Study, 2023",
    sourceUrl: "https://www.sebi.gov.in/...",
    lastUpdated: "2024-01-15",
    explanation: {
      why: "Retail investors often trade based on tips...",
      whatYouCanDo: "Instead of following tips, learn to evaluate companies...",
      learnMoreLink: "/learn/fundamentals-101"
    }
  },
  // Add all 4 statistics
];

// src/data/educational-content.ts
export const ratioEducation = {
  "pe-ratio": {
    summary: "P/E ratio compares a company's stock price to its earnings per share...",
    whatItMeans: "Think of it as 'how many years of current profits would it take...'",
    // Full education content
  },
  // All ratio education
};
```

---

## 🎨 PHASE 6: ANIMATION & INTERACTION PATTERNS

### 6.1 Page Transitions

```typescript
// src/components/shared/page-transition.tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] // ease-out-expo
    }
  },
  exit: { 
    opacity: 0, 
    y: -16,
    transition: { duration: 0.3 }
  }
};

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
```

### 6.2 Staggered Animations

```typescript
// src/components/shared/staggered-container.tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function StaggeredContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

export function StaggeredItem({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={itemVariants}>
      {children}
    </motion.div>
  );
}
```

### 6.3 Card Hover Effects

```typescript
// Card hover lift pattern
const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03)"
  },
  hover: {
    y: -2,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 12px 32px rgba(0, 0, 0, 0.05)",
    transition: {
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
```

---

## 🤖 PHASE 7: AI ASSISTANT INTEGRATION

### 7.1 AI Response Handler

```typescript
// src/lib/ai-assistant.ts
export interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface AIContext {
  companyTicker?: string;
  companyName?: string;
  currentPage: string;
  recentTopics: string[];
}

const TIP_KEYWORDS = [
  'should i buy', 'is this a good stock', 'will it go up',
  'price target', 'recommend', 'buy or sell'
];

export function detectTipRequest(message: string): boolean {
  const lower = message.toLowerCase();
  return TIP_KEYWORDS.some(keyword => lower.includes(keyword));
}

export function generateEducationalRedirect(companyName: string): string {
  return `I'm designed to help you understand companies, not to recommend buying or selling. Here's why: the 'right' investment depends on your personal goals, risk tolerance, and timeline—things I can't know about you.

What I can do is help you understand ${companyName}'s fundamentals so you can make your own informed decision. Would you like to explore any of these areas deeper?`;
}
```

### 7.2 Starter Prompts

```typescript
// src/data/ai-prompts.ts
export const starterPrompts = [
  "What do these ratios tell me?",
  "Is this company's debt concerning?",
  "How does revenue growth look?",
  "Explain like I'm a beginner"
];

export const contextualPrompts = {
  fundamentals: [
    "What does the profit margin tell me?",
    "Is the revenue growth sustainable?",
    "How does cash flow affect this company?"
  ],
  ratios: [
    "Why is the P/E ratio important?",
    "What does a high ROE mean?",
    "Is the debt level manageable?"
  ]
};
```

---

## ✅ PHASE 8: QUALITY ASSURANCE

### 8.1 Performance Targets

| Metric | Target |
|--------|--------|
| Page Load (LCP) | < 2 seconds |
| Time to Interactive | < 3 seconds |
| Search Response | < 500ms |
| Chart Render | < 1 second |
| AI Response | < 1 second (P95) |
| Lighthouse Score | 90+ all categories |

### 8.2 Accessibility Checklist

- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigation for all interactions
- [ ] Focus indicators visible (2px solid #2D6A6A)
- [ ] Screen reader announcements for dynamic content
- [ ] Color contrast ratios ≥ 4.5:1 for text
- [ ] Touch targets minimum 44x44px
- [ ] `prefers-reduced-motion` respected
- [ ] Alt text for all charts (+ data table alternatives)
- [ ] Logical heading hierarchy (H1 → H2 → H3)

### 8.3 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

---

## 🚀 EXECUTION COMMANDS

### Build Order:

```bash
# 1. Project Setup
/execute-plan setup-project

# 2. Design System
/execute-plan implement-design-tokens
/execute-plan configure-tailwind
/execute-plan setup-fonts

# 3. Base Components
/execute-plan create-ui-components
/execute-plan integrate-21st-dev-components
/execute-plan create-shared-components

# 4. Layout Structure  
/execute-plan create-layouts
/execute-plan create-navigation

# 5. Pages (in order)
/execute-plan build-landing-page
/execute-plan build-market-statistics
/execute-plan build-company-search
/execute-plan build-company-fundamentals
/execute-plan build-financial-ratios
/execute-plan build-ai-assistant

# 6. Data Layer
/execute-plan setup-types
/execute-plan create-mock-data
/execute-plan setup-api-routes

# 7. Testing & Polish
/execute-plan add-loading-states
/execute-plan add-error-boundaries
/execute-plan optimize-performance
/execute-plan accessibility-audit
```

---

## 📝 COMPONENT-SPECIFIC IMPLEMENTATION NOTES

### For 21st.dev Components:

1. **DisplayCards**: Use for hero section feature highlights - customize colors to match EquityEdge palette (amber-gold, muted-teal)

2. **ContainerScroll**: Use for landing page hero - replace default image with EquityEdge educational illustration

3. **BentoGrid**: Use for "How It Works" section - 3 cards showing learning journey

4. **ExpandableTabs**: Use for sector filtering in company search - customize icons to Lucide finance icons

5. **Gallery4**: Use for market statistics case studies carousel

6. **TextShimmer**: Use for loading states throughout app

7. **MorphingPopover**: Use for statistic card expanded views and ratio deep dives

8. **TextRotate**: Use for hero headline animation rotating through value propositions

9. **Sidebar**: Use for mobile navigation and learning hub sidebar

### Key Integration Points:

- All components must use EquityEdge color tokens
- Replace generic icons with Lucide React finance icons
- Ensure all animations respect `prefers-reduced-motion`
- Maintain consistent 8px spacing grid
- Use Plus Jakarta Sans font throughout
- Apply hover/focus states per style guide specs

---

## 🎯 SUCCESS CRITERIA

The completed build should:

1. ✅ Load landing page in < 2 seconds
2. ✅ Complete search autocomplete in < 500ms
3. ✅ Score 90+ on Lighthouse (all categories)
4. ✅ Pass WCAG 2.1 AA accessibility audit
5. ✅ Work offline with service worker (basic)
6. ✅ Support dark mode toggle
7. ✅ Be fully responsive (320px to 1440px+)
8. ✅ Have zero console errors
9. ✅ Handle all loading/error states gracefully
10. ✅ Match style guide specifications exactly

---

**END OF BUILD PROMPT**

*This prompt provides complete context for Claude Code IDE to build the EquityEdge platform using brainstorm, write-plan, and execute-plan skills. Execute phases sequentially for best results.*
