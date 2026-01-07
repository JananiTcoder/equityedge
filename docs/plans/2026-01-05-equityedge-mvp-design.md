# EquityEdge MVP Implementation Design

**Date:** January 5, 2026
**Status:** Approved
**Tech Stack:** Next.js 16, React 19, Tailwind v4, Framer Motion, Recharts

---

## Design Decisions

| Decision | Choice |
|----------|--------|
| Directory structure | Keep `app/` at root, adapt to Tailwind v4 CSS-first config |
| AI Assistant | UI-complete with mock responses |
| Company data | Comprehensive mock for 15-20 Indian companies |
| Dark mode | Full support with toggle |
| Charts | Recharts with full interactivity (tooltips, annotations) |

---

## 1. Project Architecture

```
equityedge/
├── app/
│   ├── (marketing)/          # Landing page route group
│   │   ├── page.tsx          # Hero, How It Works, CTA
│   │   └── layout.tsx        # Marketing-specific layout
│   ├── (app)/                # Main app route group
│   │   ├── market-statistics/
│   │   ├── company/
│   │   │   ├── search/
│   │   │   └── [ticker]/     # Dynamic company pages
│   │   ├── learn/
│   │   └── layout.tsx        # App shell with nav
│   ├── api/                  # API routes (mock data)
│   ├── globals.css           # Tailwind v4 + design tokens
│   └── layout.tsx            # Root layout, theme provider
├── components/
│   ├── ui/                   # Base components (shadcn-style)
│   ├── landing/              # Landing page sections
│   ├── market-stats/         # Statistics dashboard
│   ├── company/              # Company-related components
│   ├── ratios/               # Financial ratio components
│   ├── ai-assistant/         # Chat panel components
│   └── layout/               # Nav, footer, containers
├── lib/                      # Utilities, API client
├── hooks/                    # Custom React hooks
├── types/                    # TypeScript definitions
└── data/                     # Mock data files
```

---

## 2. Design System (Tailwind v4)

### Color Tokens

```css
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
  --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Shadows */
  --shadow-card: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);
  --shadow-card-hover: 0 4px 12px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.05);
  --shadow-gold: 0 2px 8px rgba(212,168,83,0.25);
}
```

### Dark Mode Colors

```css
.dark {
  --color-deep-navy: #F0F6FC;
  --color-slate-blue: #E6EDF3;
  --color-muted-teal: #4ECCA3;
  --color-soft-teal: #1A3D3D;
  --color-amber-gold: #E8B94F;
  --color-canvas: #0D1117;
  --color-surface: #161B22;
  --color-surface-subtle: #21262D;
  --color-surface-muted: #30363D;
}
```

---

## 3. Core UI Components

| Component | Variants |
|-----------|----------|
| `button.tsx` | Primary (amber-gold), Secondary (muted-teal outline), Ghost, Destructive |
| `card.tsx` | Standard, Metric (dark bg), Learning Module (with progress) |
| `input.tsx` | Default, Search (with icon) |
| `tooltip.tsx` | Dark tooltip, Educational tooltip (white, expanded) |
| `badge.tsx` | Success, Warning, Error, Info, Neutral, Sector tags |
| `modal.tsx` | Standard (520px), Learning (720px) |
| `skeleton.tsx` | Shimmer loading animation |
| `tabs.tsx` | Underline style for navigation |
| `progress.tsx` | Linear bar, Circular |

### Button Specifications

```
Primary Button:
  - Background: amber-gold (#D4A853)
  - Background Hover: warm-amber (#F5C469)
  - Text: deep-navy (#0D1B2A)
  - Height: 48px
  - Border Radius: 10px
  - Shadow: shadow-gold

Secondary Button:
  - Background: transparent
  - Border: 1.5px solid muted-teal
  - Text: muted-teal (#2D6A6A)
  - Hover Background: soft-teal (#E8F4F4)
```

---

## 4. Page Implementations

### Landing Page (`app/(marketing)/page.tsx`)

- Hero section with headline: "Learn to Read Companies, Not Tips"
- Animated text rotation for value propositions
- Primary CTA: "Explore Market Statistics"
- Secondary CTA: "Search a Company"
- Tertiary link: "New to investing? Start with the basics"
- "How It Works" 3-step section
- Educational disclaimer (fixed, always visible)
- Staggered fade-in animations

### Market Statistics (`app/(app)/market-statistics/page.tsx`)

Statistics cards (2x2 grid):
1. "89% of retail traders lose money in F&O" (SEBI)
2. "Average holding period: 15 days vs. recommended 3+ years"
3. "₹1.8 lakh crore lost by retail traders (2023)"
4. "70% of trades happen within 24 hours of receiving a tip"

Features:
- Click opens modal with detailed explanation
- Behavioral pattern charts (Recharts)
- Annotations on charts

### Company Search (`app/(app)/company/search/page.tsx`)

- Search bar (max-width 600px, 48px height)
- Autocomplete after 2 characters (debounced 300ms)
- Fuzzy matching support
- Recent searches (localStorage, max 10)
- Popular companies chips
- Sector filter tags

### Company Detail (`app/(app)/company/[ticker]/page.tsx`)

Header:
- Company name (H1)
- Ticker + Exchange
- Sector badge

Tab navigation: Overview | Ratios | AI Assistant

Overview tab:
- Metric cards grid (2x2): Revenue, Net Profit, Profit Margin, Debt-to-Equity
- Revenue & Profit chart (5-year, combined bar + line)
- Cash flow chart

Ratios tab:
- Progressive disclosure (3 levels)
- Key ratios: P/E, ROE, Current Ratio, D/E, P/B
- Industry comparison visualizations
- Sparkline trends

---

## 5. Data Layer

### Type Definitions

```typescript
interface Company {
  id: string;
  name: string;
  ticker: string;
  exchange: "NSE" | "BSE";
  sector: string;
  industry: string;
}

interface CompanyFundamentals extends Company {
  revenue: MetricData;
  netProfit: MetricData;
  profitMargin: MetricData;
  debtToEquity: MetricData;
  operatingCashFlow: MetricData;
  ratios: FinancialRatio[];
  lastUpdated: string;
}

interface MetricData {
  value: number;
  formatted: string;
  trend: "up" | "down" | "stable";
  changePercent: number;
  history: { year: number; value: number }[];
  industryAvg?: number;
}

interface FinancialRatio {
  id: string;
  name: string;
  fullName: string;
  value: number;
  formatted: string;
  industryAvg: number;
  interpretation: "excellent" | "good" | "neutral" | "concerning" | "red-flag";
  interpretationLabel: string;
  history: { year: number; value: number }[];
  education: RatioEducation;
}
```

### Mock Companies (15-20)

| Sector | Companies |
|--------|-----------|
| Oil & Gas | Reliance Industries, ONGC |
| Technology | TCS, Infosys, Wipro, HCL Tech |
| Banking | HDFC Bank, ICICI Bank, SBI, Kotak Mahindra |
| FMCG | Hindustan Unilever, ITC, Nestle India, Asian Paints |
| Pharma | Sun Pharma, Dr Reddy's, Cipla |
| Auto | Maruti Suzuki, Tata Motors, M&M |

Each includes:
- 5-year financial history
- All 5 key ratios with varied health states
- Realistic Indian financial data

---

## 6. AI Assistant (Mock)

### Components

| Component | Purpose |
|-----------|---------|
| `chat-button.tsx` | Floating button (bottom-right, 56px) |
| `chat-panel.tsx` | Slide-in panel (400px desktop, full mobile) |
| `message-bubble.tsx` | User and AI message styles |
| `starter-prompts.tsx` | Clickable suggestion chips |
| `typing-indicator.tsx` | Three-dot animation |

### Mock Response Logic

Tip detection keywords:
- "should i buy", "will it go up", "price target", "recommend", "buy or sell"

Response categories:
1. Tip requests → Polite redirect with fundamentals summary
2. Ratio questions → Educational explanation + company context
3. General questions → Appropriate educational response
4. Unknown → Graceful fallback with suggestions

Simulated typing delay: 500-1500ms

---

## 7. Hooks & Utilities

### Custom Hooks

| Hook | Purpose |
|------|---------|
| `use-local-storage.ts` | Persist state with SSR safety |
| `use-recent-searches.ts` | Search history management |
| `use-recent-companies.ts` | Company view history |
| `use-theme.ts` | Dark/light mode + system preference |
| `use-debounce.ts` | Debounced values (300ms default) |
| `use-click-outside.ts` | Close dropdowns/modals |
| `use-media-query.ts` | Responsive breakpoints |

### Utilities

```typescript
// cn.ts - className merging
export const cn = (...inputs) => twMerge(clsx(inputs));

// format.ts - Indian number formatting
export function formatINR(value: number): string;  // ₹1.5L Cr
export function formatPercent(value: number): string;
export function formatCompact(value: number): string;

// api-client.ts
export async function searchCompanies(query: string): Promise<Company[]>;
export async function getCompanyFundamentals(ticker: string): Promise<CompanyFundamentals>;
```

### API Routes

- `app/api/companies/search/route.ts` — Fuzzy search with sector filter
- `app/api/companies/[ticker]/route.ts` — Full fundamentals data
- `app/api/market-stats/route.ts` — Statistics and behavioral data

---

## 8. Dependencies

```bash
# UI & Animation
npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge

# Charts
npm install recharts

# Forms & Validation
npm install react-hook-form zod @hookform/resolvers

# Utilities
npm install usehooks-ts
```

---

## 9. Build Order

| Phase | Tasks |
|-------|-------|
| **1. Foundation** | Design tokens in globals.css, theme provider, fonts |
| **2. UI Components** | Button, Card, Input, Tooltip, Badge, Modal, Skeleton |
| **3. Layout** | Navbar, Footer, Page containers, Theme toggle |
| **4. Data Layer** | Types, mock data files, API routes |
| **5. Landing Page** | Hero, How It Works, CTAs, disclaimer |
| **6. Market Stats** | Stat cards, modals, behavioral charts |
| **7. Company Search** | Search bar, autocomplete, recent/popular |
| **8. Company Detail** | Fundamentals overview, metric cards, charts |
| **9. Financial Ratios** | Ratio rows, progressive disclosure, sparklines |
| **10. AI Assistant** | Chat panel, mock responses, floating button |
| **11. Polish** | Animations, loading states, error boundaries |

---

## 10. Success Criteria

- [ ] Page load < 2 seconds
- [ ] Search autocomplete < 500ms
- [ ] Lighthouse score 90+ (all categories)
- [ ] WCAG 2.1 AA compliance
- [ ] Full dark mode support
- [ ] Responsive 320px to 1440px+
- [ ] Zero console errors
- [ ] All loading/error states handled

---

*Design approved and ready for implementation.*
