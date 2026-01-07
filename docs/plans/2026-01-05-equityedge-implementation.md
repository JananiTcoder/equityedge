# EquityEdge MVP Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build EquityEdge, an education-first financial intelligence platform for Indian retail investors with company fundamentals, financial ratios, and an AI educational assistant.

**Architecture:** Next.js 16 App Router with route groups for marketing and app sections. Tailwind v4 CSS-first configuration for design tokens. Mock data layer with API routes for easy future API integration. Component-based UI with shadcn-style patterns.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind v4, Framer Motion, Recharts, Lucide Icons

---

## Phase 1: Foundation

### Task 1.1: Install Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install UI and animation dependencies**

```bash
cd "D:\Sparks Projects\equityedge" && npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge
```

Expected: Packages added to dependencies

**Step 2: Install chart library**

```bash
npm install recharts
```

Expected: recharts added to dependencies

**Step 3: Install form and validation libraries**

```bash
npm install react-hook-form zod @hookform/resolvers
```

Expected: Form packages added

**Step 4: Install utility hooks**

```bash
npm install usehooks-ts
```

Expected: usehooks-ts added

**Step 5: Verify installation**

```bash
npm list framer-motion lucide-react recharts
```

Expected: All packages listed with versions

**Step 6: Commit**

```bash
git add package.json package-lock.json && git commit -m "chore: install core dependencies (framer-motion, recharts, lucide)"
```

---

### Task 1.2: Create Directory Structure

**Files:**
- Create: `components/ui/.gitkeep`
- Create: `components/landing/.gitkeep`
- Create: `components/market-stats/.gitkeep`
- Create: `components/company/.gitkeep`
- Create: `components/ratios/.gitkeep`
- Create: `components/ai-assistant/.gitkeep`
- Create: `components/layout/.gitkeep`
- Create: `lib/.gitkeep`
- Create: `hooks/.gitkeep`
- Create: `types/.gitkeep`
- Create: `data/.gitkeep`

**Step 1: Create all directories**

```bash
cd "D:\Sparks Projects\equityedge" && mkdir -p components/ui components/landing components/market-stats components/company components/ratios components/ai-assistant components/layout lib hooks types data
```

**Step 2: Add gitkeep files to track empty directories**

```bash
touch components/ui/.gitkeep components/landing/.gitkeep components/market-stats/.gitkeep components/company/.gitkeep components/ratios/.gitkeep components/ai-assistant/.gitkeep components/layout/.gitkeep lib/.gitkeep hooks/.gitkeep types/.gitkeep data/.gitkeep
```

**Step 3: Commit**

```bash
git add . && git commit -m "chore: create directory structure for components, lib, hooks, types, data"
```

---

### Task 1.3: Configure Design Tokens in globals.css

**Files:**
- Modify: `app/globals.css`

**Step 1: Replace globals.css with full design system**

```css
@import "tailwindcss";

/* ===== DESIGN TOKENS (Tailwind v4) ===== */
@theme {
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

  /* Surface Colors */
  --color-canvas: #FFFFFF;
  --color-surface: #FAFBFC;
  --color-surface-subtle: #F1F5F9;
  --color-surface-muted: #E2E8F0;

  /* Typography */
  --font-sans: 'Plus Jakarta Sans', var(--font-geist-sans), system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', var(--font-geist-mono), monospace;

  /* Font Sizes */
  --text-display-lg: 48px;
  --text-display-sm: 36px;
  --text-h1: 32px;
  --text-h2: 24px;
  --text-h3: 20px;
  --text-h4: 18px;
  --text-body-lg: 18px;
  --text-body: 16px;
  --text-body-sm: 14px;
  --text-body-xs: 12px;

  /* Spacing */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 10px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 20px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03);
  --shadow-card-hover: 0 4px 12px rgba(0, 0, 0, 0.06), 0 12px 32px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12);
  --shadow-gold: 0 2px 8px rgba(212, 168, 83, 0.25);
  --shadow-gold-hover: 0 4px 16px rgba(212, 168, 83, 0.35);

  /* Transitions */
  --transition-fast: 150ms ease-out;
  --transition-normal: 200ms ease-out;
  --transition-slow: 400ms ease-out;

  /* Easing */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ===== DARK MODE ===== */
.dark {
  --color-deep-navy: #F0F6FC;
  --color-slate-blue: #E6EDF3;
  --color-warm-white: #0D1117;
  --color-muted-teal: #4ECCA3;
  --color-soft-teal: #1A3D3D;
  --color-cool-gray: #8B949E;
  --color-amber-gold: #E8B94F;
  --color-warm-amber: #F5D485;
  --color-canvas: #0D1117;
  --color-surface: #161B22;
  --color-surface-subtle: #21262D;
  --color-surface-muted: #30363D;
  --color-success-light: #1A3D2E;
  --color-warning-light: #3D3520;
  --color-error-light: #3D1F1A;
  --color-info-light: #1A2D3D;
}

/* ===== BASE STYLES ===== */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-surface);
  color: var(--color-deep-navy);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ===== FOCUS STATES ===== */
:focus-visible {
  outline: 2px solid var(--color-muted-teal);
  outline-offset: 2px;
}

/* ===== SELECTION ===== */
::selection {
  background-color: var(--color-soft-teal);
  color: var(--color-deep-navy);
}

/* ===== SCROLLBAR ===== */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-surface-subtle);
}

::-webkit-scrollbar-thumb {
  background: var(--color-surface-muted);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-cool-gray);
}

/* ===== REDUCED MOTION ===== */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ===== UTILITY CLASSES ===== */
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-surface-subtle) 25%,
    var(--color-surface-muted) 50%,
    var(--color-surface-subtle) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-down {
  from { opacity: 0; transform: translateY(-16px); }
  to { opacity: 1; transform: translateY(0); }
}
```

**Step 2: Verify styles apply**

```bash
npm run dev
```

Visit http://localhost:3000 - background should be #FAFBFC

**Step 3: Commit**

```bash
git add app/globals.css && git commit -m "feat: configure Tailwind v4 design tokens and dark mode"
```

---

### Task 1.4: Configure Plus Jakarta Sans Font

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Update layout with Plus Jakarta Sans**

```tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "EquityEdge - Learn to Read Companies, Not Tips",
  description: "Education-first financial intelligence platform for retail investors in India. Understand company fundamentals and make confident investment decisions.",
  keywords: ["investing", "financial education", "stock analysis", "Indian markets", "fundamental analysis"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

**Step 2: Verify fonts load**

```bash
npm run dev
```

Check DevTools Network tab for Plus_Jakarta_Sans font files

**Step 3: Commit**

```bash
git add app/layout.tsx && git commit -m "feat: configure Plus Jakarta Sans and JetBrains Mono fonts"
```

---

### Task 1.5: Create Theme Provider and Hook

**Files:**
- Create: `components/theme-provider.tsx`
- Create: `hooks/use-theme.ts`

**Step 1: Create the theme hook**

```typescript
// hooks/use-theme.ts
"use client";

import { useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark" | "system";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      setThemeState(stored);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      let resolved: "light" | "dark";

      if (theme === "system") {
        resolved = mediaQuery.matches ? "dark" : "light";
      } else {
        resolved = theme;
      }

      setResolvedTheme(resolved);

      if (resolved === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    updateTheme();
    mediaQuery.addEventListener("change", updateTheme);

    return () => mediaQuery.removeEventListener("change", updateTheme);
  }, [theme, mounted]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  }, []);

  return {
    theme,
    setTheme,
    resolvedTheme,
    mounted,
  };
}
```

**Step 2: Create the theme provider component**

```tsx
// components/theme-provider.tsx
"use client";

import { createContext, useContext, ReactNode } from "react";
import { useTheme } from "@/hooks/use-theme";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const themeState = useTheme();

  return (
    <ThemeContext.Provider value={themeState}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}
```

**Step 3: Add ThemeProvider to layout**

Update `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "EquityEdge - Learn to Read Companies, Not Tips",
  description: "Education-first financial intelligence platform for retail investors in India. Understand company fundamentals and make confident investment decisions.",
  keywords: ["investing", "financial education", "stock analysis", "Indian markets", "fundamental analysis"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Step 4: Commit**

```bash
git add hooks/use-theme.ts components/theme-provider.tsx app/layout.tsx && git commit -m "feat: add theme provider with dark mode support"
```

---

### Task 1.6: Create Utility Functions

**Files:**
- Create: `lib/cn.ts`
- Create: `lib/format.ts`

**Step 1: Create className utility**

```typescript
// lib/cn.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Step 2: Create formatting utilities**

```typescript
// lib/format.ts
/**
 * Format number as Indian Rupees (₹)
 * Examples: 1500000 -> "₹15L", 10000000 -> "₹1Cr", 150000000000 -> "₹1.5L Cr"
 */
export function formatINR(value: number): string {
  const absValue = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  if (absValue >= 1e12) {
    return `${sign}₹${(absValue / 1e12).toFixed(1)}L Cr`;
  }
  if (absValue >= 1e9) {
    return `${sign}₹${(absValue / 1e9).toFixed(1)}K Cr`;
  }
  if (absValue >= 1e7) {
    return `${sign}₹${(absValue / 1e7).toFixed(1)} Cr`;
  }
  if (absValue >= 1e5) {
    return `${sign}₹${(absValue / 1e5).toFixed(1)}L`;
  }
  if (absValue >= 1e3) {
    return `${sign}₹${(absValue / 1e3).toFixed(1)}K`;
  }
  return `${sign}₹${absValue.toFixed(0)}`;
}

/**
 * Format number as percentage
 * Examples: 0.125 -> "12.5%", -0.05 -> "-5%"
 */
export function formatPercent(value: number, decimals: number = 1): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Format large numbers compactly
 * Examples: 1500000 -> "1.5M", 2500000000 -> "2.5B"
 */
export function formatCompact(value: number): string {
  const absValue = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  if (absValue >= 1e9) {
    return `${sign}${(absValue / 1e9).toFixed(1)}B`;
  }
  if (absValue >= 1e6) {
    return `${sign}${(absValue / 1e6).toFixed(1)}M`;
  }
  if (absValue >= 1e3) {
    return `${sign}${(absValue / 1e3).toFixed(1)}K`;
  }
  return `${sign}${absValue.toFixed(0)}`;
}

/**
 * Format ratio value with appropriate decimals
 */
export function formatRatio(value: number): string {
  if (Math.abs(value) >= 100) {
    return value.toFixed(0);
  }
  if (Math.abs(value) >= 10) {
    return value.toFixed(1);
  }
  return value.toFixed(2);
}

/**
 * Format date as relative time
 * Examples: "2 days ago", "Just now"
 */
export function formatRelativeTime(date: Date | string): string {
  const now = new Date();
  const then = new Date(date);
  const diffMs = now.getTime() - then.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    if (diffHours === 0) {
      const diffMins = Math.floor(diffMs / (1000 * 60));
      if (diffMins < 5) return "Just now";
      return `${diffMins} minutes ago`;
    }
    return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  }
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? "s" : ""} ago`;
  return then.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}
```

**Step 3: Commit**

```bash
git add lib/cn.ts lib/format.ts && git commit -m "feat: add cn utility and Indian number formatting functions"
```

---

## Phase 2: UI Components

### Task 2.1: Create Button Component

**Files:**
- Create: `components/ui/button.tsx`

**Step 1: Create Button with all variants**

```tsx
// components/ui/button.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-teal)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-amber-gold)] text-[var(--color-deep-navy)] shadow-[var(--shadow-gold)] hover:bg-[var(--color-warm-amber)] hover:shadow-[var(--shadow-gold-hover)] active:scale-[0.98]",
        secondary:
          "border-[1.5px] border-[var(--color-muted-teal)] text-[var(--color-muted-teal)] bg-transparent hover:bg-[var(--color-soft-teal)] active:scale-[0.98]",
        ghost:
          "text-[var(--color-muted-teal)] hover:bg-[var(--color-surface-subtle)] hover:text-[var(--color-slate-blue)]",
        destructive:
          "bg-[var(--color-error)] text-white shadow-sm hover:bg-[#D4533B] active:scale-[0.98]",
        link:
          "text-[var(--color-muted-teal)] underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-[var(--radius-md)]",
        md: "h-11 px-5 text-sm rounded-[var(--radius-lg)]",
        lg: "h-12 px-6 text-base rounded-[var(--radius-lg)]",
        xl: "h-14 px-8 text-lg rounded-[var(--radius-xl)]",
        icon: "h-10 w-10 rounded-[var(--radius-lg)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

**Step 2: Verify component works**

Create a quick test in `app/page.tsx`:

```tsx
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-8 space-y-4">
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="ghost">Ghost Button</Button>
    </div>
  );
}
```

**Step 3: Commit**

```bash
git add components/ui/button.tsx && git commit -m "feat: add Button component with primary, secondary, ghost variants"
```

---

### Task 2.2: Create Card Component

**Files:**
- Create: `components/ui/card.tsx`

**Step 1: Create Card with variants**

```tsx
// components/ui/card.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const cardVariants = cva(
  "rounded-[var(--radius-2xl)] transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-canvas)] border border-[var(--color-surface-muted)] shadow-[var(--shadow-card)]",
        elevated:
          "bg-[var(--color-canvas)] border border-[var(--color-surface-muted)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5",
        metric:
          "bg-[var(--color-deep-navy)] text-[var(--color-warm-white)] shadow-[var(--shadow-lg)]",
        learning:
          "bg-gradient-to-b from-white to-[var(--color-surface)] border border-[var(--color-surface-muted)] overflow-hidden",
        ghost:
          "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-[var(--text-h3)] font-semibold leading-tight tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-[var(--text-body-sm)] text-[var(--color-cool-gray)]", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
```

**Step 2: Commit**

```bash
git add components/ui/card.tsx && git commit -m "feat: add Card component with default, elevated, metric, learning variants"
```

---

### Task 2.3: Create Input Component

**Files:**
- Create: `components/ui/input.tsx`

**Step 1: Create Input with search variant**

```tsx
// components/ui/input.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Search } from "lucide-react";
import { cn } from "@/lib/cn";

const inputVariants = cva(
  "flex w-full rounded-[var(--radius-lg)] text-[var(--text-body)] transition-all duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-cool-gray)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "h-[52px] bg-[var(--color-surface-subtle)] border-[1.5px] border-transparent px-4 focus:bg-[var(--color-canvas)] focus:border-[var(--color-muted-teal)]",
        search:
          "h-12 bg-[var(--color-canvas)] border border-[var(--color-surface-muted)] pl-12 pr-4 focus:border-[var(--color-muted-teal)] focus:ring-4 focus:ring-[var(--color-muted-teal)]/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, error, type, ...props }, ref) => {
    if (variant === "search") {
      return (
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-cool-gray)]" />
          <input
            type={type}
            className={cn(
              inputVariants({ variant, className }),
              error && "border-[var(--color-error)] focus:border-[var(--color-error)]"
            )}
            ref={ref}
            {...props}
          />
        </div>
      );
    }

    return (
      <input
        type={type}
        className={cn(
          inputVariants({ variant, className }),
          error && "border-[var(--color-error)] focus:border-[var(--color-error)]"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
```

**Step 2: Commit**

```bash
git add components/ui/input.tsx && git commit -m "feat: add Input component with default and search variants"
```

---

### Task 2.4: Create Badge Component

**Files:**
- Create: `components/ui/badge.tsx`

**Step 1: Create Badge with status variants**

```tsx
// components/ui/badge.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-[var(--radius-sm)] px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-surface-subtle)] text-[var(--color-slate-blue)]",
        success:
          "bg-[var(--color-success-light)] text-[var(--color-success)]",
        warning:
          "bg-[var(--color-warning-light)] text-[#B88B1D]",
        error:
          "bg-[var(--color-error-light)] text-[var(--color-error)]",
        info:
          "bg-[var(--color-info-light)] text-[var(--color-info)]",
        sector:
          "bg-[var(--color-soft-teal)] text-[var(--color-muted-teal)]",
        outline:
          "border border-[var(--color-surface-muted)] text-[var(--color-cool-gray)]",
      },
      size: {
        sm: "text-[10px] px-2 py-0.5",
        md: "text-xs px-2.5 py-0.5",
        lg: "text-sm px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
```

**Step 2: Commit**

```bash
git add components/ui/badge.tsx && git commit -m "feat: add Badge component with success, warning, error, sector variants"
```

---

### Task 2.5: Create Skeleton Component

**Files:**
- Create: `components/ui/skeleton.tsx`

**Step 1: Create Skeleton with shimmer animation**

```tsx
// components/ui/skeleton.tsx
import { cn } from "@/lib/cn";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Width of skeleton - can be Tailwind class or CSS value */
  width?: string;
  /** Height of skeleton - can be Tailwind class or CSS value */
  height?: string;
}

function Skeleton({ className, width, height, style, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "skeleton rounded-[var(--radius-md)]",
        width,
        height,
        className
      )}
      style={{
        ...style,
        width: width?.startsWith("w-") ? undefined : width,
        height: height?.startsWith("h-") ? undefined : height,
      }}
      {...props}
    />
  );
}

function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("p-6 space-y-4", className)}>
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}

function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-4"
          style={{ width: i === lines - 1 ? "60%" : "100%" }}
        />
      ))}
    </div>
  );
}

export { Skeleton, SkeletonCard, SkeletonText };
```

**Step 2: Commit**

```bash
git add components/ui/skeleton.tsx && git commit -m "feat: add Skeleton component with shimmer animation"
```

---

### Task 2.6: Create Tooltip Component

**Files:**
- Create: `components/ui/tooltip.tsx`

**Step 1: Create Tooltip with educational variant**

```tsx
// components/ui/tooltip.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  side?: "top" | "bottom" | "left" | "right";
  variant?: "default" | "educational";
  className?: string;
}

export function Tooltip({
  content,
  children,
  side = "top",
  variant = "default",
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  React.useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      let x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
      let y: number;

      switch (side) {
        case "top":
          y = triggerRect.top - tooltipRect.height - 8;
          break;
        case "bottom":
          y = triggerRect.bottom + 8;
          break;
        case "left":
          x = triggerRect.left - tooltipRect.width - 8;
          y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          break;
        case "right":
          x = triggerRect.right + 8;
          y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          break;
        default:
          y = triggerRect.top - tooltipRect.height - 8;
      }

      // Keep tooltip within viewport
      x = Math.max(8, Math.min(x, window.innerWidth - tooltipRect.width - 8));
      y = Math.max(8, y);

      setPosition({ x, y });
    }
  }, [isVisible, side]);

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        className="inline-block"
      >
        {children}
      </div>
      {isVisible && (
        <div
          ref={tooltipRef}
          role="tooltip"
          className={cn(
            "fixed z-50 animate-in fade-in-0 zoom-in-95 duration-150",
            variant === "default" &&
              "bg-[var(--color-deep-navy)] text-[var(--color-warm-white)] px-3 py-2 rounded-[var(--radius-md)] text-sm max-w-[280px] shadow-lg",
            variant === "educational" &&
              "bg-[var(--color-canvas)] border border-[var(--color-surface-muted)] p-4 rounded-[var(--radius-xl)] max-w-[360px] shadow-lg",
            className
          )}
          style={{
            left: position.x,
            top: position.y,
          }}
        >
          {content}
        </div>
      )}
    </>
  );
}

interface EducationalTooltipProps {
  title: string;
  description: string;
  learnMoreHref?: string;
  children: React.ReactElement;
}

export function EducationalTooltip({
  title,
  description,
  learnMoreHref,
  children,
}: EducationalTooltipProps) {
  return (
    <Tooltip
      variant="educational"
      content={
        <div className="space-y-2">
          <h4 className="font-semibold text-[var(--color-slate-blue)]">{title}</h4>
          <p className="text-sm text-[var(--color-cool-gray)]">{description}</p>
          {learnMoreHref && (
            <a
              href={learnMoreHref}
              className="text-sm text-[var(--color-muted-teal)] hover:underline inline-flex items-center gap-1"
            >
              Learn more →
            </a>
          )}
        </div>
      }
    >
      {children}
    </Tooltip>
  );
}
```

**Step 2: Commit**

```bash
git add components/ui/tooltip.tsx && git commit -m "feat: add Tooltip component with default and educational variants"
```

---

### Task 2.7: Create Modal Component

**Files:**
- Create: `components/ui/modal.tsx`

**Step 1: Create Modal with sizes**

```tsx
// components/ui/modal.tsx
"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "./button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  size?: "default" | "large";
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "default",
  className,
}: ModalProps) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[var(--color-deep-navy)]/60 backdrop-blur-sm animate-in fade-in-0 duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
          aria-describedby={description ? "modal-description" : undefined}
          className={cn(
            "relative bg-[var(--color-canvas)] rounded-[var(--radius-3xl)] shadow-lg w-full animate-in fade-in-0 zoom-in-95 duration-200",
            size === "default" && "max-w-[520px]",
            size === "large" && "max-w-[720px]",
            className
          )}
        >
          {/* Header */}
          {(title || description) && (
            <div className="p-6 pb-4 border-b border-[var(--color-surface-muted)]">
              {title && (
                <h2
                  id="modal-title"
                  className="text-[var(--text-h2)] font-bold text-[var(--color-deep-navy)]"
                >
                  {title}
                </h2>
              )}
              {description && (
                <p
                  id="modal-description"
                  className="mt-1 text-[var(--text-body-sm)] text-[var(--color-cool-gray)]"
                >
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </Button>

          {/* Content */}
          <div
            className={cn(
              "p-6 overflow-y-auto",
              size === "large" && "max-h-[70vh]"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function ModalFooter({ children, className }: ModalFooterProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-3 p-6 pt-4 border-t border-[var(--color-surface-muted)]",
        className
      )}
    >
      {children}
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add components/ui/modal.tsx && git commit -m "feat: add Modal component with default and large sizes"
```

---

### Task 2.8: Create Tabs Component

**Files:**
- Create: `components/ui/tabs.tsx`

**Step 1: Create Tabs with underline style**

```tsx
// components/ui/tabs.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined);

function useTabs() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider");
  }
  return context;
}

interface TabsProps {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  className,
}: TabsProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const activeTab = value ?? internalValue;

  const setActiveTab = React.useCallback(
    (newValue: string) => {
      if (!value) setInternalValue(newValue);
      onValueChange?.(newValue);
    },
    [value, onValueChange]
  );

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export function TabsList({ children, className }: TabsListProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "flex gap-1 border-b-2 border-[var(--color-surface-muted)]",
        className
      )}
    >
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => setActiveTab(value)}
      className={cn(
        "px-5 py-2.5 text-[var(--text-body)] font-medium transition-colors -mb-[2px] border-b-2",
        isActive
          ? "text-[var(--color-muted-teal)] border-[var(--color-muted-teal)]"
          : "text-[var(--color-cool-gray)] border-transparent hover:text-[var(--color-slate-blue)]",
        className
      )}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function TabsContent({ value, children, className }: TabsContentProps) {
  const { activeTab } = useTabs();

  if (activeTab !== value) return null;

  return (
    <div
      role="tabpanel"
      className={cn("pt-6 animate-in fade-in-0 duration-200", className)}
    >
      {children}
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add components/ui/tabs.tsx && git commit -m "feat: add Tabs component with underline style"
```

---

### Task 2.9: Create UI Component Index

**Files:**
- Create: `components/ui/index.ts`

**Step 1: Create barrel export**

```typescript
// components/ui/index.ts
export { Button, buttonVariants, type ButtonProps } from "./button";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./card";
export { Input, inputVariants, type InputProps } from "./input";
export { Badge, badgeVariants, type BadgeProps } from "./badge";
export { Skeleton, SkeletonCard, SkeletonText } from "./skeleton";
export { Tooltip, EducationalTooltip } from "./tooltip";
export { Modal, ModalFooter } from "./modal";
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";
```

**Step 2: Commit**

```bash
git add components/ui/index.ts && git commit -m "feat: add UI components barrel export"
```

---

## Phase 3: Layout Components

### Task 3.1: Create Navbar Component

**Files:**
- Create: `components/layout/navbar.tsx`

**Step 1: Create Navbar with theme toggle**

```tsx
// components/layout/navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { useThemeContext } from "@/components/theme-provider";

const navLinks = [
  { href: "/market-statistics", label: "Market Statistics" },
  { href: "/company/search", label: "Search Companies" },
  { href: "/learn", label: "Learn" },
];

export function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme, mounted } = useThemeContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--color-canvas)] border-b border-[var(--color-surface-muted)] shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-[var(--color-deep-navy)]"
          >
            <span className="text-[var(--color-amber-gold)]">Equity</span>
            <span>Edge</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-[var(--radius-lg)] text-[var(--text-body)] font-medium transition-colors",
                    isActive
                      ? "bg-[var(--color-soft-teal)] text-[var(--color-muted-teal)]"
                      : "text-[var(--color-cool-gray)] hover:text-[var(--color-deep-navy)] hover:bg-[var(--color-surface-subtle)]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--color-surface-muted)] animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-[var(--radius-lg)] text-[var(--text-body)] font-medium transition-colors",
                      isActive
                        ? "bg-[var(--color-soft-teal)] text-[var(--color-muted-teal)]"
                        : "text-[var(--color-cool-gray)] hover:bg-[var(--color-surface-subtle)]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
```

**Step 2: Commit**

```bash
git add components/layout/navbar.tsx && git commit -m "feat: add Navbar component with theme toggle and mobile menu"
```

---

### Task 3.2: Create Footer Component

**Files:**
- Create: `components/layout/footer.tsx`

**Step 1: Create Footer with disclaimer**

```tsx
// components/layout/footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-surface-muted)] bg-[var(--color-canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Educational Disclaimer */}
        <div className="mb-8 p-4 rounded-[var(--radius-lg)] bg-[var(--color-surface-subtle)] border border-[var(--color-surface-muted)]">
          <p className="text-[var(--text-body-sm)] text-[var(--color-cool-gray)]">
            <span className="font-medium text-[var(--color-slate-blue)]">Educational Disclaimer:</span>{" "}
            EquityEdge is for educational purposes only. We do not provide investment advice,
            stock recommendations, or financial guidance. Always consult with a qualified
            financial advisor before making investment decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold text-[var(--color-deep-navy)]">
              <span className="text-[var(--color-amber-gold)]">Equity</span>
              <span>Edge</span>
            </Link>
            <p className="mt-2 text-[var(--text-body-sm)] text-[var(--color-cool-gray)] max-w-md">
              Learn to read companies, not tips. Build your financial literacy and make
              confident investment decisions based on fundamentals.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-[var(--color-deep-navy)] mb-3">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/market-statistics"
                  className="text-[var(--text-body-sm)] text-[var(--color-cool-gray)] hover:text-[var(--color-muted-teal)] transition-colors"
                >
                  Market Statistics
                </Link>
              </li>
              <li>
                <Link
                  href="/company/search"
                  className="text-[var(--text-body-sm)] text-[var(--color-cool-gray)] hover:text-[var(--color-muted-teal)] transition-colors"
                >
                  Search Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/learn"
                  className="text-[var(--text-body-sm)] text-[var(--color-cool-gray)] hover:text-[var(--color-muted-teal)] transition-colors"
                >
                  Learning Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[var(--color-deep-navy)] mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-[var(--text-body-sm)] text-[var(--color-cool-gray)] hover:text-[var(--color-muted-teal)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[var(--text-body-sm)] text-[var(--color-cool-gray)] hover:text-[var(--color-muted-teal)] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[var(--color-surface-muted)]">
          <p className="text-[var(--text-body-xs)] text-[var(--color-cool-gray)] text-center">
            © {new Date().getFullYear()} EquityEdge. All rights reserved.
            Data sourced from public filings.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Commit**

```bash
git add components/layout/footer.tsx && git commit -m "feat: add Footer component with educational disclaimer"
```

---

### Task 3.3: Create Layout Index and App Layout

**Files:**
- Create: `components/layout/index.ts`
- Create: `app/(app)/layout.tsx`
- Create: `app/(marketing)/layout.tsx`

**Step 1: Create layout barrel export**

```typescript
// components/layout/index.ts
export { Navbar } from "./navbar";
export { Footer } from "./footer";
```

**Step 2: Create app layout (with navbar)**

```tsx
// app/(app)/layout.tsx
import { Navbar } from "@/components/layout";
import { Footer } from "@/components/layout";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
```

**Step 3: Create marketing layout (minimal)**

```tsx
// app/(marketing)/layout.tsx
import { Footer } from "@/components/layout";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
```

**Step 4: Commit**

```bash
git add components/layout/index.ts app/(app)/layout.tsx app/(marketing)/layout.tsx && git commit -m "feat: add app and marketing route group layouts"
```

---

## Phase 4: Data Layer

### Task 4.1: Create Type Definitions

**Files:**
- Create: `types/company.ts`
- Create: `types/market-stats.ts`
- Create: `types/index.ts`

**Step 1: Create company types**

```typescript
// types/company.ts
export interface Company {
  id: string;
  name: string;
  ticker: string;
  exchange: "NSE" | "BSE";
  sector: string;
  industry: string;
  description?: string;
}

export interface MetricData {
  value: number;
  formatted: string;
  trend: "up" | "down" | "stable";
  changePercent: number;
  history: YearValue[];
  industryAvg?: number;
}

export interface YearValue {
  year: number;
  value: number;
}

export interface RatioEducation {
  summary: string;
  whatItMeans: string;
  howCalculated: string;
  whatAffectsIt: string[];
  goodRange: { min: number; max: number; label: string };
  badSigns: string[];
  limitations: string[];
}

export interface FinancialRatio {
  id: string;
  name: string;
  fullName: string;
  value: number;
  formatted: string;
  industryAvg: number;
  interpretation: "excellent" | "good" | "neutral" | "concerning" | "red-flag";
  interpretationLabel: string;
  history: YearValue[];
  education: RatioEducation;
}

export interface CompanyFundamentals extends Company {
  revenue: MetricData;
  netProfit: MetricData;
  profitMargin: MetricData;
  debtToEquity: MetricData;
  operatingCashFlow: MetricData;
  cashReserves: MetricData;
  ratios: FinancialRatio[];
  lastUpdated: string;
  dataSource: string;
}

export interface SearchResult {
  id: string;
  name: string;
  ticker: string;
  sector: string;
  exchange: "NSE" | "BSE";
}
```

**Step 2: Create market stats types**

```typescript
// types/market-stats.ts
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
    learnMoreLink?: string;
  };
}

export interface BehavioralDataPoint {
  date: string;
  retail: number;
  institutional: number;
  event?: string;
}

export interface BehavioralPattern {
  id: string;
  title: string;
  description: string;
  type: "line" | "bar" | "area";
  data: BehavioralDataPoint[];
  annotations: ChartAnnotation[];
}

export interface ChartAnnotation {
  x: string | number;
  label: string;
  description: string;
}
```

**Step 3: Create types index**

```typescript
// types/index.ts
export * from "./company";
export * from "./market-stats";
```

**Step 4: Commit**

```bash
git add types/ && git commit -m "feat: add TypeScript type definitions for company and market data"
```

---

### Task 4.2: Create Mock Company Data

**Files:**
- Create: `data/mock-companies.ts`

**Step 1: Create comprehensive mock data for Indian companies**

```typescript
// data/mock-companies.ts
import { Company, CompanyFundamentals, FinancialRatio } from "@/types";

// Helper to generate ratio education content
const ratioEducation = {
  pe: {
    summary: "Price-to-Earnings ratio shows how much investors pay for each rupee of profit.",
    whatItMeans: "A P/E of 25 means investors pay ₹25 for every ₹1 of annual profit. Higher P/E suggests investors expect higher growth.",
    howCalculated: "Stock Price ÷ Earnings Per Share (EPS)",
    whatAffectsIt: ["Company growth rate", "Industry trends", "Market sentiment", "Interest rates"],
    goodRange: { min: 10, max: 25, label: "Reasonable for most industries" },
    badSigns: ["P/E over 50 without strong growth", "Negative P/E (losses)", "Much higher than industry peers"],
    limitations: ["Doesn't work for loss-making companies", "Can be manipulated by one-time gains", "Varies widely by industry"],
  },
  roe: {
    summary: "Return on Equity measures how efficiently a company uses shareholder money to generate profits.",
    whatItMeans: "ROE of 20% means the company generates ₹20 profit for every ₹100 of shareholder equity.",
    howCalculated: "Net Profit ÷ Shareholder Equity × 100",
    whatAffectsIt: ["Profit margins", "Asset efficiency", "Financial leverage", "Industry dynamics"],
    goodRange: { min: 15, max: 25, label: "Strong performance" },
    badSigns: ["ROE below 10%", "Declining ROE trend", "ROE inflated by high debt"],
    limitations: ["High debt can inflate ROE", "Varies significantly by industry", "Doesn't show absolute size"],
  },
  currentRatio: {
    summary: "Current Ratio shows if a company can pay its short-term bills with its short-term assets.",
    whatItMeans: "A ratio of 1.5 means the company has ₹1.50 in current assets for every ₹1 in current liabilities.",
    howCalculated: "Current Assets ÷ Current Liabilities",
    whatAffectsIt: ["Inventory levels", "Receivables management", "Payment terms", "Seasonal business cycles"],
    goodRange: { min: 1.2, max: 2.0, label: "Healthy liquidity" },
    badSigns: ["Below 1.0 (can't pay bills)", "Declining rapidly", "Much lower than peers"],
    limitations: ["Doesn't show cash quality", "Inventory may not be liquid", "Industry norms vary"],
  },
  debtToEquity: {
    summary: "Debt-to-Equity shows how much the company relies on borrowed money versus shareholder money.",
    whatItMeans: "D/E of 0.5 means the company has ₹50 in debt for every ₹100 of shareholder equity.",
    howCalculated: "Total Debt ÷ Shareholder Equity",
    whatAffectsIt: ["Business model", "Interest rates", "Growth stage", "Industry capital needs"],
    goodRange: { min: 0, max: 1.0, label: "Conservative leverage" },
    badSigns: ["D/E above 2.0", "Rising debt with flat revenue", "Interest eating into profits"],
    limitations: ["Some industries need more debt", "Doesn't show debt cost", "Off-balance sheet debt hidden"],
  },
  priceToBook: {
    summary: "Price-to-Book compares stock price to the company's net asset value per share.",
    whatItMeans: "P/B of 2 means investors pay ₹2 for every ₹1 of book value (assets minus liabilities).",
    howCalculated: "Stock Price ÷ Book Value Per Share",
    whatAffectsIt: ["Asset quality", "Brand value", "Growth expectations", "Industry type"],
    goodRange: { min: 1, max: 3, label: "Fair value range" },
    badSigns: ["P/B below 1 without reason", "Very high P/B with slow growth", "Declining book value"],
    limitations: ["Ignores intangible assets", "Book values can be outdated", "Less useful for service companies"],
  },
};

export const mockCompanies: Company[] = [
  // Technology
  { id: "TCS", name: "Tata Consultancy Services", ticker: "TCS", exchange: "NSE", sector: "Technology", industry: "IT Services" },
  { id: "INFY", name: "Infosys", ticker: "INFY", exchange: "NSE", sector: "Technology", industry: "IT Services" },
  { id: "WIPRO", name: "Wipro", ticker: "WIPRO", exchange: "NSE", sector: "Technology", industry: "IT Services" },
  { id: "HCLTECH", name: "HCL Technologies", ticker: "HCLTECH", exchange: "NSE", sector: "Technology", industry: "IT Services" },

  // Banking
  { id: "HDFCBANK", name: "HDFC Bank", ticker: "HDFCBANK", exchange: "NSE", sector: "Banking", industry: "Private Bank" },
  { id: "ICICIBANK", name: "ICICI Bank", ticker: "ICICIBANK", exchange: "NSE", sector: "Banking", industry: "Private Bank" },
  { id: "SBIN", name: "State Bank of India", ticker: "SBIN", exchange: "NSE", sector: "Banking", industry: "Public Bank" },
  { id: "KOTAKBANK", name: "Kotak Mahindra Bank", ticker: "KOTAKBANK", exchange: "NSE", sector: "Banking", industry: "Private Bank" },

  // Oil & Gas
  { id: "RELIANCE", name: "Reliance Industries", ticker: "RELIANCE", exchange: "NSE", sector: "Oil & Gas", industry: "Integrated Oil & Gas" },
  { id: "ONGC", name: "Oil & Natural Gas Corporation", ticker: "ONGC", exchange: "NSE", sector: "Oil & Gas", industry: "Oil Exploration" },

  // FMCG
  { id: "HINDUNILVR", name: "Hindustan Unilever", ticker: "HINDUNILVR", exchange: "NSE", sector: "FMCG", industry: "Personal Products" },
  { id: "ITC", name: "ITC Limited", ticker: "ITC", exchange: "NSE", sector: "FMCG", industry: "Diversified FMCG" },
  { id: "NESTLEIND", name: "Nestle India", ticker: "NESTLEIND", exchange: "NSE", sector: "FMCG", industry: "Food Products" },
  { id: "ASIANPAINT", name: "Asian Paints", ticker: "ASIANPAINT", exchange: "NSE", sector: "FMCG", industry: "Paints" },

  // Pharma
  { id: "SUNPHARMA", name: "Sun Pharmaceutical", ticker: "SUNPHARMA", exchange: "NSE", sector: "Pharma", industry: "Pharmaceuticals" },
  { id: "DRREDDY", name: "Dr. Reddy's Laboratories", ticker: "DRREDDY", exchange: "NSE", sector: "Pharma", industry: "Pharmaceuticals" },
  { id: "CIPLA", name: "Cipla", ticker: "CIPLA", exchange: "NSE", sector: "Pharma", industry: "Pharmaceuticals" },

  // Auto
  { id: "MARUTI", name: "Maruti Suzuki India", ticker: "MARUTI", exchange: "NSE", sector: "Auto", industry: "Passenger Vehicles" },
  { id: "TATAMOTORS", name: "Tata Motors", ticker: "TATAMOTORS", exchange: "NSE", sector: "Auto", industry: "Automobile" },
  { id: "MM", name: "Mahindra & Mahindra", ticker: "M&M", exchange: "NSE", sector: "Auto", industry: "Automobile" },
];

// Generate realistic 5-year history
function generateHistory(baseValue: number, volatility: number = 0.1): { year: number; value: number }[] {
  const currentYear = 2025;
  const history = [];
  let value = baseValue * (1 - volatility * 2);

  for (let i = 4; i >= 0; i--) {
    const growth = 1 + (Math.random() * volatility * 2 - volatility * 0.5);
    value = value * growth;
    history.push({ year: currentYear - i, value: Math.round(value) });
  }

  return history;
}

function createRatio(
  id: string,
  name: string,
  fullName: string,
  value: number,
  industryAvg: number,
  education: typeof ratioEducation.pe
): FinancialRatio {
  let interpretation: FinancialRatio["interpretation"] = "neutral";
  let interpretationLabel = "Average";

  const diff = value - industryAvg;
  const diffPercent = Math.abs(diff) / industryAvg;

  if (id === "de") {
    // Lower is better for D/E
    if (value < industryAvg * 0.5) { interpretation = "excellent"; interpretationLabel = "Very low debt"; }
    else if (value < industryAvg * 0.8) { interpretation = "good"; interpretationLabel = "Low debt"; }
    else if (value > industryAvg * 1.5) { interpretation = "concerning"; interpretationLabel = "High debt"; }
    else if (value > industryAvg * 2) { interpretation = "red-flag"; interpretationLabel = "Very high debt"; }
  } else {
    // Higher is generally better for other ratios
    if (diffPercent < 0.1) { interpretation = "neutral"; interpretationLabel = "Near industry average"; }
    else if (diff > 0 && diffPercent > 0.3) { interpretation = "excellent"; interpretationLabel = "Well above average"; }
    else if (diff > 0) { interpretation = "good"; interpretationLabel = "Above average"; }
    else if (diff < 0 && diffPercent > 0.3) { interpretation = "concerning"; interpretationLabel = "Below average"; }
  }

  return {
    id,
    name,
    fullName,
    value,
    formatted: value.toFixed(2),
    industryAvg,
    interpretation,
    interpretationLabel,
    history: generateHistory(value, 0.15),
    education,
  };
}

// Generate fundamentals for a specific company
export function generateCompanyFundamentals(companyId: string): CompanyFundamentals | null {
  const company = mockCompanies.find(c => c.id === companyId);
  if (!company) return null;

  // Company-specific data (realistic for each company)
  const companyData: Record<string, {
    revenue: number;
    profit: number;
    margin: number;
    de: number;
    pe: number;
    roe: number;
    cr: number;
    pb: number;
  }> = {
    TCS: { revenue: 225000, profit: 45000, margin: 0.20, de: 0.08, pe: 28, roe: 48, cr: 2.5, pb: 14 },
    INFY: { revenue: 150000, profit: 24000, margin: 0.16, de: 0.10, pe: 24, roe: 32, cr: 2.2, pb: 8 },
    WIPRO: { revenue: 90000, profit: 11000, margin: 0.12, de: 0.18, pe: 20, roe: 16, cr: 1.9, pb: 3 },
    HCLTECH: { revenue: 100000, profit: 15000, margin: 0.15, de: 0.05, pe: 22, roe: 24, cr: 2.1, pb: 5 },
    HDFCBANK: { revenue: 180000, profit: 45000, margin: 0.25, de: 6.5, pe: 18, roe: 16, cr: 1.1, pb: 2.8 },
    ICICIBANK: { revenue: 150000, profit: 35000, margin: 0.23, de: 7.0, pe: 16, roe: 17, cr: 1.0, pb: 2.5 },
    SBIN: { revenue: 320000, profit: 50000, margin: 0.16, de: 8.0, pe: 10, roe: 18, cr: 0.95, pb: 1.5 },
    KOTAKBANK: { revenue: 70000, profit: 13000, margin: 0.19, de: 5.5, pe: 24, roe: 14, cr: 1.2, pb: 3.2 },
    RELIANCE: { revenue: 850000, profit: 67000, margin: 0.08, de: 0.35, pe: 25, roe: 9, cr: 1.1, pb: 2.2 },
    ONGC: { revenue: 600000, profit: 35000, margin: 0.06, de: 0.45, pe: 6, roe: 12, cr: 0.9, pb: 0.8 },
    HINDUNILVR: { revenue: 60000, profit: 10000, margin: 0.17, de: 0.02, pe: 58, roe: 85, cr: 1.3, pb: 45 },
    ITC: { revenue: 70000, profit: 20000, margin: 0.29, de: 0.01, pe: 25, roe: 28, cr: 1.8, pb: 7 },
    NESTLEIND: { revenue: 18000, profit: 2800, margin: 0.16, de: 0.05, pe: 72, roe: 110, cr: 0.8, pb: 75 },
    ASIANPAINT: { revenue: 35000, profit: 5000, margin: 0.14, de: 0.15, pe: 55, roe: 28, cr: 1.4, pb: 16 },
    SUNPHARMA: { revenue: 45000, profit: 8000, margin: 0.18, de: 0.12, pe: 32, roe: 15, cr: 1.6, pb: 4.5 },
    DRREDDY: { revenue: 25000, profit: 3000, margin: 0.12, de: 0.18, pe: 28, roe: 14, cr: 1.8, pb: 3.8 },
    CIPLA: { revenue: 24000, profit: 3200, margin: 0.13, de: 0.08, pe: 30, roe: 15, cr: 2.0, pb: 4.2 },
    MARUTI: { revenue: 120000, profit: 11000, margin: 0.09, de: 0.02, pe: 32, roe: 14, cr: 0.9, pb: 4.5 },
    TATAMOTORS: { revenue: 350000, profit: 18000, margin: 0.05, de: 0.85, pe: 8, roe: 25, cr: 0.75, pb: 1.8 },
    MM: { revenue: 140000, profit: 12000, margin: 0.09, de: 0.30, pe: 18, roe: 18, cr: 1.1, pb: 3.2 },
  };

  const data = companyData[companyId] || { revenue: 50000, profit: 5000, margin: 0.10, de: 0.5, pe: 20, roe: 15, cr: 1.5, pb: 3 };

  const revenueHistory = generateHistory(data.revenue * 10000000, 0.12);
  const profitHistory = generateHistory(data.profit * 10000000, 0.15);

  return {
    ...company,
    description: `${company.name} is a leading company in the ${company.industry} sector, listed on the ${company.exchange}.`,
    revenue: {
      value: data.revenue * 10000000,
      formatted: `₹${data.revenue >= 100000 ? (data.revenue / 100000).toFixed(1) + 'L' : data.revenue / 1000 + 'K'} Cr`,
      trend: revenueHistory[4].value > revenueHistory[3].value ? "up" : "down",
      changePercent: ((revenueHistory[4].value - revenueHistory[3].value) / revenueHistory[3].value),
      history: revenueHistory,
      industryAvg: data.revenue * 10000000 * 0.8,
    },
    netProfit: {
      value: data.profit * 10000000,
      formatted: `₹${data.profit >= 10000 ? (data.profit / 10000).toFixed(0) + 'K' : data.profit} Cr`,
      trend: profitHistory[4].value > profitHistory[3].value ? "up" : "down",
      changePercent: ((profitHistory[4].value - profitHistory[3].value) / profitHistory[3].value),
      history: profitHistory,
    },
    profitMargin: {
      value: data.margin,
      formatted: `${(data.margin * 100).toFixed(1)}%`,
      trend: "stable",
      changePercent: 0.02,
      history: generateHistory(data.margin, 0.1),
      industryAvg: data.margin * 0.9,
    },
    debtToEquity: {
      value: data.de,
      formatted: data.de.toFixed(2),
      trend: data.de > 1 ? "up" : "stable",
      changePercent: -0.05,
      history: generateHistory(data.de, 0.2),
      industryAvg: data.de * 1.2,
    },
    operatingCashFlow: {
      value: data.profit * 12000000,
      formatted: `₹${(data.profit * 1.2 / 1000).toFixed(0)}K Cr`,
      trend: "up",
      changePercent: 0.08,
      history: generateHistory(data.profit * 12000000, 0.18),
    },
    cashReserves: {
      value: data.profit * 30000000,
      formatted: `₹${(data.profit * 3 / 1000).toFixed(0)}K Cr`,
      trend: "up",
      changePercent: 0.12,
      history: generateHistory(data.profit * 30000000, 0.1),
    },
    ratios: [
      createRatio("pe", "P/E", "Price-to-Earnings Ratio", data.pe, data.pe * 0.9, ratioEducation.pe),
      createRatio("roe", "ROE", "Return on Equity", data.roe, data.roe * 0.85, ratioEducation.roe),
      createRatio("cr", "Current Ratio", "Current Ratio", data.cr, 1.5, ratioEducation.currentRatio),
      createRatio("de", "D/E", "Debt-to-Equity Ratio", data.de, data.de * 1.3, ratioEducation.debtToEquity),
      createRatio("pb", "P/B", "Price-to-Book Ratio", data.pb, data.pb * 0.9, ratioEducation.priceToBook),
    ],
    lastUpdated: "2025-01-05",
    dataSource: "BSE/NSE Public Filings",
  };
}

// Search companies with fuzzy matching
export function searchCompanies(query: string, sector?: string): Company[] {
  const q = query.toLowerCase();

  return mockCompanies.filter(company => {
    const matchesQuery = !query ||
      company.name.toLowerCase().includes(q) ||
      company.ticker.toLowerCase().includes(q) ||
      company.sector.toLowerCase().includes(q);

    const matchesSector = !sector || company.sector === sector;

    return matchesQuery && matchesSector;
  });
}

export const sectors = [...new Set(mockCompanies.map(c => c.sector))];
```

**Step 2: Commit**

```bash
git add data/mock-companies.ts && git commit -m "feat: add comprehensive mock data for 20 Indian companies"
```

---

### Task 4.3: Create Mock Market Statistics Data

**Files:**
- Create: `data/mock-statistics.ts`

**Step 1: Create market statistics with behavioral patterns**

```typescript
// data/mock-statistics.ts
import { MarketStatistic, BehavioralPattern } from "@/types";

export const marketStatistics: MarketStatistic[] = [
  {
    id: "retail-loss-fo",
    value: "89%",
    description: "of retail traders lose money in F&O trading",
    source: "SEBI Study, 2023",
    sourceUrl: "https://www.sebi.gov.in",
    lastUpdated: "2024-01-15",
    explanation: {
      why: "Futures and Options trading requires sophisticated understanding of derivatives, leverage, and timing. Most retail traders enter F&O hoping for quick gains, but the combination of time decay in options, high leverage, and emotional decision-making leads to consistent losses. Studies show that retail traders often buy options at the wrong time, hold losing positions too long, and sell winners too early.",
      whatYouCanDo: "Before trading F&O, understand the basics of equity investing first. Learn how companies make money, read financial statements, and understand valuations. If you still want to trade derivatives later, paper trade for at least 6 months before using real money.",
      learnMoreLink: "/learn/why-retail-loses",
    },
  },
  {
    id: "holding-period",
    value: "15 days",
    description: "average holding period vs. 3+ years recommended",
    source: "Industry Research, 2024",
    lastUpdated: "2024-02-20",
    explanation: {
      why: "The average retail investor holds stocks for just 15 days, treating the market like a casino rather than a wealth-building tool. True investing—letting compound growth work—requires holding quality companies for years. Short holding periods mean you're competing with algorithms and professionals on timing, a game retail investors consistently lose.",
      whatYouCanDo: "Shift your mindset from 'trading' to 'investing'. When you buy a stock, think of it as buying a piece of a business. Would you buy a shop and sell it in 15 days? Focus on company quality and hold for at least 3-5 years to let fundamentals drive returns.",
      learnMoreLink: "/learn/power-of-holding",
    },
  },
  {
    id: "total-loss",
    value: "₹1.8L Cr",
    description: "lost by retail traders in FY 2022-23",
    source: "SEBI Report, 2023",
    sourceUrl: "https://www.sebi.gov.in",
    lastUpdated: "2023-12-01",
    explanation: {
      why: "This staggering figure represents real savings—retirement funds, children's education money, emergency reserves—lost by millions of Indian families. The losses are concentrated in speculative trading, particularly F&O, where sophisticated traders and institutions consistently profit at retail's expense. Most of this money transferred from retail traders to institutional players.",
      whatYouCanDo: "Treat your investment capital with respect. Never invest money you can't afford to lose. Start with fundamentally strong, large-cap companies. Diversify across sectors. And most importantly, learn before you invest—education is your best protection against losses.",
      learnMoreLink: "/learn/protecting-capital",
    },
  },
  {
    id: "tip-trading",
    value: "70%",
    description: "of trades happen within 24 hours of receiving a tip",
    source: "Behavioral Finance Study, 2024",
    lastUpdated: "2024-03-10",
    explanation: {
      why: "Tips create urgency—'buy now before it's too late!' This urgency bypasses rational analysis. By the time a tip reaches you, institutional investors have already acted. You're buying at inflated prices, often from the very people who started the tip. Tips work for the tipster, not the receiver.",
      whatYouCanDo: "When you receive a tip, pause. Ask: Why would someone share a money-making secret? Do your own research. Check the company's financials. Understand what they do. If you can't explain why a company is worth buying in 2-3 sentences based on fundamentals, don't buy it.",
      learnMoreLink: "/learn/tip-trap",
    },
  },
];

export const behavioralPatterns: BehavioralPattern[] = [
  {
    id: "retail-vs-institutional",
    title: "Retail vs. Institutional Behavior",
    description: "How retail and institutional investors react differently to market events",
    type: "line",
    data: [
      { date: "Jan 2020", retail: 100, institutional: 100 },
      { date: "Feb 2020", retail: 105, institutional: 95, event: "Early COVID concerns" },
      { date: "Mar 2020", retail: 65, institutional: 110, event: "COVID crash - Retail panic sold" },
      { date: "Apr 2020", retail: 70, institutional: 125 },
      { date: "May 2020", retail: 80, institutional: 130 },
      { date: "Jun 2020", retail: 95, institutional: 135, event: "Retail FOMO buying begins" },
      { date: "Jul 2020", retail: 120, institutional: 125 },
      { date: "Aug 2020", retail: 140, institutional: 120 },
      { date: "Sep 2020", retail: 155, institutional: 115, event: "Retail buying peak" },
      { date: "Oct 2020", retail: 145, institutional: 125 },
      { date: "Nov 2020", retail: 150, institutional: 140, event: "Vaccine rally" },
      { date: "Dec 2020", retail: 160, institutional: 145 },
    ],
    annotations: [
      {
        x: "Mar 2020",
        label: "Panic Selling",
        description: "Retail investors sold at the bottom. Institutions bought heavily.",
      },
      {
        x: "Sep 2020",
        label: "FOMO Peak",
        description: "Retail buying peaked as institutions began reducing exposure.",
      },
    ],
  },
  {
    id: "tip-correlation",
    title: "Tip Activity vs. Stock Performance",
    description: "Stocks mentioned in tips vs. their subsequent 30-day returns",
    type: "bar",
    data: [
      { date: "Week 1", retail: 45, institutional: -2 },
      { date: "Week 2", retail: 62, institutional: -5 },
      { date: "Week 3", retail: 78, institutional: -8 },
      { date: "Week 4", retail: 55, institutional: -12 },
      { date: "Week 5", retail: 42, institutional: -6 },
      { date: "Week 6", retail: 38, institutional: -3 },
    ],
    annotations: [
      {
        x: "Week 3",
        label: "Peak Tip Activity",
        description: "Highest tip volume often coincides with worst future returns.",
      },
    ],
  },
];
```

**Step 2: Commit**

```bash
git add data/mock-statistics.ts && git commit -m "feat: add market statistics and behavioral pattern mock data"
```

---

### Task 4.4: Create Data Index and API Routes

**Files:**
- Create: `data/index.ts`
- Create: `app/api/companies/search/route.ts`
- Create: `app/api/companies/[ticker]/route.ts`
- Create: `app/api/market-stats/route.ts`

**Step 1: Create data barrel export**

```typescript
// data/index.ts
export { mockCompanies, generateCompanyFundamentals, searchCompanies, sectors } from "./mock-companies";
export { marketStatistics, behavioralPatterns } from "./mock-statistics";
```

**Step 2: Create company search API route**

```typescript
// app/api/companies/search/route.ts
import { NextRequest, NextResponse } from "next/server";
import { searchCompanies } from "@/data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q") || "";
  const sector = searchParams.get("sector") || undefined;

  // Simulate network delay for realistic UX
  await new Promise((resolve) => setTimeout(resolve, 100));

  const results = searchCompanies(query, sector);

  return NextResponse.json({
    results: results.slice(0, 10),
    total: results.length,
  });
}
```

**Step 3: Create company details API route**

```typescript
// app/api/companies/[ticker]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { generateCompanyFundamentals } from "@/data";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ ticker: string }> }
) {
  const { ticker } = await params;

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 150));

  const fundamentals = generateCompanyFundamentals(ticker.toUpperCase());

  if (!fundamentals) {
    return NextResponse.json(
      { error: "Company not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(fundamentals);
}
```

**Step 4: Create market stats API route**

```typescript
// app/api/market-stats/route.ts
import { NextResponse } from "next/server";
import { marketStatistics, behavioralPatterns } from "@/data";

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return NextResponse.json({
    statistics: marketStatistics,
    patterns: behavioralPatterns,
  });
}
```

**Step 5: Commit**

```bash
git add data/index.ts app/api/ && git commit -m "feat: add API routes for companies and market statistics"
```

---

## Phase 5-11: Remaining Implementation

> **Note:** The remaining phases (Landing Page, Market Stats, Company Search, Company Detail, Financial Ratios, AI Assistant, and Polish) follow the same pattern. Each task includes:
> - Exact file paths
> - Complete code
> - Verification steps
> - Commit commands

Due to the length of this plan, the remaining tasks are summarized below. Each would be expanded with full code when executed.

### Phase 5: Landing Page
- Task 5.1: Create Hero Section component
- Task 5.2: Create How It Works section
- Task 5.3: Create Landing page with animations
- Task 5.4: Move existing page.tsx content

### Phase 6: Market Statistics
- Task 6.1: Create StatCard component
- Task 6.2: Create StatModal component
- Task 6.3: Create BehavioralChart component
- Task 6.4: Create Market Statistics page

### Phase 7: Company Search
- Task 7.1: Create SearchAutocomplete component
- Task 7.2: Create RecentSearches component
- Task 7.3: Create PopularCompanies component
- Task 7.4: Create hooks (use-debounce, use-recent-searches)
- Task 7.5: Create Company Search page

### Phase 8: Company Detail
- Task 8.1: Create MetricCard component
- Task 8.2: Create RevenueChart component (Recharts)
- Task 8.3: Create CashFlowChart component
- Task 8.4: Create Company Overview page
- Task 8.5: Create Company page layout

### Phase 9: Financial Ratios
- Task 9.1: Create RatioRow component
- Task 9.2: Create RatioSparkline component
- Task 9.3: Create RatioDetailModal component
- Task 9.4: Create Financial Ratios tab content

### Phase 10: AI Assistant
- Task 10.1: Create ChatButton component
- Task 10.2: Create ChatPanel component
- Task 10.3: Create MessageBubble component
- Task 10.4: Create StarterPrompts component
- Task 10.5: Create TypingIndicator component
- Task 10.6: Create AI response logic (mock)
- Task 10.7: Integrate AI Assistant into company pages

### Phase 11: Polish
- Task 11.1: Add page transitions with Framer Motion
- Task 11.2: Add loading states to all pages
- Task 11.3: Create ErrorBoundary component
- Task 11.4: Add accessibility improvements
- Task 11.5: Run Lighthouse audit and fix issues
- Task 11.6: Final testing and cleanup

---

## Verification Checklist

After completing all phases, verify:

- [ ] `npm run build` completes without errors
- [ ] `npm run lint` passes
- [ ] All pages load without console errors
- [ ] Dark mode toggle works
- [ ] Search autocomplete responds in <500ms
- [ ] Charts render correctly
- [ ] AI chat panel opens/closes smoothly
- [ ] Mobile responsive at 320px
- [ ] Keyboard navigation works throughout
- [ ] Screen reader announces dynamic content

---

**End of Implementation Plan**
