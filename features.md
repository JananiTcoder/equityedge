# EquityEdge Feature Specification

> **Version:** 1.0  
> **Last Updated:** January 5, 2026  
> **Status:** Draft

---

## Table of Contents

1. [Landing & Onboarding](#1-landing--onboarding)
2. [Market Statistics Dashboard](#2-market-statistics-dashboard)
3. [Company Search](#3-company-search)
4. [Company Fundamentals Overview](#4-company-fundamentals-overview)
5. [Financial Ratios with Education](#5-financial-ratios-with-education)
6. [AI-Powered Educational Assistant](#6-ai-powered-educational-assistant)
7. [Learning Progress & Return Engagement](#7-learning-progress--return-engagement)
8. [Critical Questions & Clarifications](#critical-questions--clarifications)

---

## 1. Landing & Onboarding

### 1.1 Value Proposition Hero

#### User Stories

**The Cautious Learner (Primary Persona)**

- As a cautious learner who has lost money following tips, I want to immediately understand this platform won't give me recommendations, so that I know I'm in the right place to learn proper analysis.
- As a cautious learner arriving from a Google search, I want to see credibility signals within 3 seconds, so that I trust this isn't another "get rich quick" scheme.
- As a cautious learner with limited time, I want to understand the platform's value in one scroll, so that I can decide quickly whether to invest my time here.

**The Complete Beginner**

- As a complete beginner who has never invested, I want to feel welcomed rather than intimidated, so that I don't bounce back to YouTube tutorials.
- As a complete beginner, I want to see a clear starting point for someone like me, so that I don't feel lost among advanced features.

**The Recovering Tip-Follower**

- As someone who actively followed tips and lost money, I want validation that my frustration is common, so that I feel understood and motivated to learn properly.
- As a recovering tip-follower, I want to see the "why" behind learning fundamentals, so that I'm convinced this approach is worth my effort.

#### UX/UI Considerations

##### Core Experience

**Initial Load State (0-2 seconds)**

- [ ] Skeleton hero area with muted placeholder shapes loads instantly
- [ ] Background gradient (soft blue-to-white) renders first, establishing calm tone
- [ ] Content fades in sequentially: headline (0ms) → subheadline (100ms) → CTAs (200ms) → supporting visual (300ms)
- [ ] No layout shift—all elements have reserved space

**Default State (Above the Fold)**

- [ ] **Headline** (H1, 48px desktop / 32px mobile): "Learn to Read Companies, Not Tips"
  - [ ] Typography: Bold weight, high contrast against background
  - [ ] Positioned left-aligned on desktop, centered on mobile
- [ ] **Subheadline** (20px, medium weight): "EquityEdge teaches you fundamental analysis—so you can make confident decisions without depending on anyone's recommendations."
  - [ ] Max-width 600px to maintain readable line length
  - [ ] Color: Muted gray (#6B7280) for visual hierarchy
- [ ] **Primary CTA Button**: "Explore Market Statistics"
  - [ ] Solid fill, rounded corners (8px), brand blue (#2563EB)
  - [ ] Hover: Slight lift (translateY -2px) + shadow increase
  - [ ] Active: Press down effect (translateY 1px)
- [ ] **Secondary CTA Button**: "Search a Company"
  - [ ] Outline style, same dimensions as primary
  - [ ] Hover: Background fills with 10% opacity blue
- [ ] **Tertiary Link**: "New to investing? Start with the basics →"
  - [ ] Styled as text link below CTAs
  - [ ] Underline on hover, no underline by default
- [ ] **Hero Visual**: Abstract illustration showing learning journey (books → lightbulb → confident person)
  - [ ] NOT a stock chart, candlestick, or "money going up" imagery
  - [ ] SVG format for crisp rendering at all sizes
  - [ ] Positioned right on desktop, below content on mobile

**Scroll State (Below the Fold)**

- [ ] **"How It Works" Section** (3 steps max)
  - [ ] Step 1: "See the Problem" → Icon of chart with question mark
  - [ ] Step 2: "Understand Fundamentals" → Icon of magnifying glass on document
  - [ ] Step 3: "Build Confidence" → Icon of person with checkmark
  - [ ] Horizontal layout on desktop, vertical stack on mobile
  - [ ] Subtle fade-in animation triggered when section enters viewport
- [ ] **Social Proof/Stats** (optional for MVP)
  - [ ] "Join 500+ learners building financial literacy"
  - [ ] Display only if meaningful numbers achieved

**Educational Disclaimer State**

- [ ] Fixed position at bottom of viewport OR in footer
- [ ] Text: "EquityEdge is for education only. We don't provide investment advice or recommendations."
- [ ] Styling: Small text (14px), muted color, non-intrusive but always visible
- [ ] Icon: Small "ℹ️" preceding text
- [ ] Not dismissible—always present

**Mobile-Specific States**

- [ ] Single primary CTA visible above fold
- [ ] Secondary CTA appears immediately below
- [ ] Hero visual scales down or repositions below CTAs
- [ ] Hamburger menu contains: "Start with Basics" link
- [ ] Touch targets minimum 44x44px

**Animation & Motion**

- [ ] Page load: Staggered fade-in (opacity 0→1, translateY 20px→0)
- [ ] Duration: 400ms with ease-out timing
- [ ] No autoplay videos or aggressive animations
- [ ] Reduced motion: Respects `prefers-reduced-motion` media query

##### Advanced Users & Edge Cases

**Returning Visitor State**

- [ ] If local storage contains recently viewed companies:
  - [ ] Hero area shows subtle "Welcome back" variation
  - [ ] CTA changes to "Continue where you left off →" linking to last company
  - [ ] Fallback to default if storage is cleared

**Slow Connection State**

- [ ] Hero visual loads last (not blocking)
- [ ] Text content prioritized via critical CSS
- [ ] Placeholder gradient where image would be

**JavaScript Disabled State**

- [ ] All core content visible via server-rendered HTML
- [ ] CTAs link directly to pages (no JS-dependent routing required)
- [ ] Animations simply don't occur (graceful degradation)

**Error State**

- [ ] If API for dynamic content fails:
  - [ ] Static fallback content displays
  - [ ] No broken UI elements visible to user

---

### 1.2 Entry Point Selection

#### User Stories

**The Cautious Learner**

- As a cautious learner, I want to choose between exploring data or analyzing a specific company, so that I can start with what's most relevant to my current question.
- As a cautious learner with a company already in mind, I want to jump directly to analysis, so that I don't waste time on content I don't need right now.

**The Complete Beginner**

- As a complete beginner, I want a guided "start here" option, so that I don't feel overwhelmed by choices.
- As a complete beginner, I want to understand what each path offers before clicking, so that I make the right choice for my learning stage.

**The Recovering Tip-Follower**

- As a recovering tip-follower, I want to see evidence of the problem first, so that I'm emotionally convinced before diving into solutions.

#### UX/UI Considerations

##### Core Experience

**CTA Card Design (Alternative Layout Option)**

- [ ] If using card-based CTAs instead of buttons:
  - [ ] Three cards in a row (desktop) or stacked (mobile)
  - [ ] Each card: Icon + Title + 1-line description
  - [ ] Card 1: 📊 "Market Statistics" — "See why 90% of retail investors lose money"
  - [ ] Card 2: 🔍 "Company Analysis" — "Understand any company's fundamentals"
  - [ ] Card 3: 📚 "Fundamentals 101" — "New? Start with the basics"
- [ ] Hover state: Border color change + subtle shadow
- [ ] Selected state (if multi-step): Check mark appears, background tints

**Decision Support**

- [ ] Tooltip on hover: "Recommended if you're new" on Fundamentals 101
- [ ] No forced path—all options equally accessible
- [ ] Visual weight slightly higher on primary path (Market Statistics)

##### Advanced Users & Edge Cases

**User Can't Decide**

- [ ] Below CTAs: "Not sure where to start? Most people begin with Market Statistics."
- [ ] Subtle directional guidance without being pushy

**Deep Link Entry**

- [ ] If user arrives via direct link to company page:
  - [ ] Skip landing page entirely
  - [ ] Show contextual "← Back to Home" navigation

---

## 2. Market Statistics Dashboard

### 2.1 Retail Investor Statistics Display

#### User Stories

**The Cautious Learner**

- As a cautious learner, I want to see hard data on retail investor losses, so that I understand this is a systemic problem, not just my personal failure.
- As a cautious learner, I want to see credible sources for each statistic, so that I trust the information isn't made up.
- As a cautious learner, I want to understand *why* these losses happen, so that I can avoid the same mistakes.

**The Complete Beginner**

- As a complete beginner, I want statistics explained in plain language, so that I understand what they mean for me.
- As a complete beginner, I want to feel motivated rather than scared by the data, so that I'm encouraged to learn rather than give up.

**The Recovering Tip-Follower**

- As a recovering tip-follower, I want to see data specifically about tip-following behavior, so that I see my past behavior reflected and understand why it failed.
- As a recovering tip-follower, I want to see what successful investors do differently, so that I have a clear alternative to follow.

#### UX/UI Considerations

##### Core Experience

**Loading State**

- [ ] Skeleton cards matching final layout (3-4 cards)
- [ ] Pulsing animation on skeleton (subtle, 1.5s cycle)
- [ ] No text placeholders—just shapes
- [ ] Duration: Maximum 2 seconds before content appears

**Default State (Statistics Cards)**

- [ ] **Card Layout**: Grid of 3-4 cards, 2 columns desktop, 1 column mobile
- [ ] **Card Anatomy**:
  - [ ] Large number/percentage (48px, bold, brand color)
  - [ ] Short descriptor (16px): "of retail investors lose money"
  - [ ] Source citation (12px, muted): "Source: SEBI Study, 2023"
  - [ ] "Learn why →" link (14px, underlined)

**Statistic Cards Content**

| Card | Statistic | Source |
|------|-----------|--------|
| 1 | "89% of retail traders lose money in F&O" | SEBI data |
| 2 | "Average holding period: 15 days vs. recommended 3+ years" | Industry research |
| 3 | "₹1.8 lakh crore lost by retail traders (2023)" | SEBI report |
| 4 | "70% of trades happen within 24 hours of receiving a tip" | Behavioral study |

**Hover State**

- [ ] Card elevates (box-shadow increases, translateY -4px)
- [ ] "Learn why →" link color intensifies
- [ ] Transition: 150ms ease-out

**Expanded State (Modal/Drawer)**

- [ ] Triggered by: Click on card or "Learn why →" link
- [ ] **Modal Content**:
  - [ ] Statistic repeated at top for context
  - [ ] 2-3 paragraph explanation in plain language
  - [ ] Subheading: "Why does this happen?"
  - [ ] Behavioral finance insight (e.g., "This is called 'herd behavior'...")
  - [ ] Subheading: "What can you do instead?"
  - [ ] Bridge to fundamentals: "Instead of following tips, learn to evaluate companies yourself. Start with understanding revenue trends →"
  - [ ] CTA button: "Learn About Fundamentals"
- [ ] **Modal Animation**: Fade in (200ms) + scale from 95% to 100%
- [ ] **Backdrop**: Dark overlay (50% opacity), click to close
- [ ] **Close**: X button top-right + Escape key

**Data Provenance Display**

- [ ] Footer of dashboard section: "All statistics from publicly available sources. Data last updated: [Date]"
- [ ] Each card: Individual source citation
- [ ] Link to methodology/sources page (optional for v1)

##### Advanced Users & Edge Cases

**Data Update State**

- [ ] When new data available: Subtle badge "Updated" on relevant cards
- [ ] No forced refresh—user can see update on next visit

**Stale Data Handling**

- [ ] If data older than 6 months: Show "as of" date prominently
- [ ] Consider: Strikethrough old data with note "Updated data coming soon"

**Accessibility**

- [ ] Cards are focusable via Tab key
- [ ] Enter/Space opens expanded modal
- [ ] Modal traps focus until closed
- [ ] Screen reader: "89 percent of retail traders lose money in F and O. Source: SEBI Study 2023. Press Enter to learn more."

---

### 2.2 Behavioral Pattern Visualizations

#### User Stories

**The Cautious Learner**

- As a cautious learner, I want to see visual patterns of retail vs. institutional behavior, so that I understand how my behavior differs from professionals.
- As a cautious learner, I want charts that are explained, not just shown, so that I learn from them rather than feel intimidated.

**The Recovering Tip-Follower**

- As a recovering tip-follower, I want to see correlation between tip-driven trading spikes and subsequent losses, so that I viscerally understand why tips fail.

#### UX/UI Considerations

##### Core Experience

**Chart Area Layout**

- [ ] Below statistics cards
- [ ] Section heading: "What the Data Shows" (24px)
- [ ] 1-2 charts maximum to prevent overwhelm

**Chart 1: Retail vs. Institutional Behavior**

- [ ] Type: Dual line chart or area chart
- [ ] X-axis: Time (market events marked)
- [ ] Y-axis: Trading volume or net position
- [ ] Two lines: Retail (one color) vs. Institutional (another)
- [ ] Annotation callouts: "Market crash: Retail panic sold, Institutions bought"

**Chart 2: Tip-Driven Trading Spikes**

- [ ] Type: Bar chart with overlaid performance line
- [ ] Shows: Volume spikes on "tip days" vs. subsequent stock performance
- [ ] Annotation: "High tip activity rarely correlates with positive returns"

**Chart Interactivity**

- [ ] Hover: Tooltip shows exact values at that point
- [ ] Tooltip design: Minimal, shows date + values + any annotation
- [ ] Click on annotation: Expands explanation in side panel

**Plain-Language Annotations**

- [ ] Every chart has 2-3 embedded annotations
- [ ] Font: 14px, slightly different color to stand out
- [ ] Connected to relevant data points with subtle lines/arrows

**Loading State**

- [ ] Chart area shows skeleton of axes and placeholder area
- [ ] "Loading visualization..." text (optional)

##### Advanced Users & Edge Cases

**Mobile Considerations**

- [ ] Charts simplified for small screens
- [ ] Annotations shown below chart rather than overlaid
- [ ] Swipe/scroll to see full chart if needed
- [ ] Touch: Tap-hold for tooltip (not hover)

**Accessibility**

- [ ] Alt text: Full description of chart's key insight
- [ ] Data table alternative: Link "View as table" shows underlying data
- [ ] Color-blind safe palette (not red/green dependent)

**Performance**

- [ ] Charts lazy-loaded (only render when scrolled into view)
- [ ] Use Canvas or SVG based on data complexity
- [ ] Target: Chart renders in < 1 second

---

## 3. Company Search

### 3.1 Search Input & Autocomplete

#### User Stories

**The Cautious Learner**

- As a cautious learner with a specific company in mind, I want to find it instantly by typing its name or ticker, so that I can start analyzing immediately.
- As a cautious learner who isn't sure of exact spelling, I want the search to handle typos, so that I'm not frustrated by failed searches.
- As a cautious learner, I want to see my recent searches, so that I can quickly revisit companies I'm tracking.

**The Complete Beginner**

- As a complete beginner who doesn't know any company names, I want to see popular suggestions, so that I have somewhere to start.
- As a complete beginner, I want to browse by sector if I can't think of a name, so that I can explore the platform without a specific company.

**The Curious Browser**

- As a curious browser, I want to see what companies others are analyzing, so that I can discover interesting learning opportunities.

#### UX/UI Considerations

##### Core Experience

**Search Bar Design**

- [ ] Position: Prominent, either in hero section or as dedicated search page
- [ ] Width: 100% of container, max-width 600px
- [ ] Height: 48px (comfortable tap target)
- [ ] Border: 1px solid #E5E7EB, rounded corners (8px)
- [ ] Focus state: Border color changes to brand blue, subtle shadow
- [ ] Icon: Magnifying glass (left side), muted gray
- [ ] Placeholder text: "Search by company name or ticker (e.g., Reliance, TCS)"

**Empty State (Before Typing)**

- [ ] Below search bar:
  - [ ] **Section: "Recent Searches"** (if any exist in local storage)
    - [ ] 3-5 recent items as clickable chips
    - [ ] "Clear all" link (small, right-aligned)
  - [ ] **Section: "Popular Companies"**
    - [ ] 6-8 popular/educational examples as chips
    - [ ] Examples: Reliance, TCS, HDFC Bank, Infosys, Asian Paints
    - [ ] Each chip: Company name + ticker symbol
  - [ ] **Section: "Or Browse by Sector"**
    - [ ] Clickable sector tags: Technology, Banking, Pharma, FMCG, Auto
    - [ ] Clicking sector → filtered list or search results

**Typing State (Autocomplete)**

- [ ] Trigger: After 2 characters typed
- [ ] Dropdown appears below search bar
- [ ] Animation: Slide down (150ms) + fade in
- [ ] Dropdown shadow: Medium elevation
- [ ] **Result Item Anatomy**:
  - [ ] Company name (bold)
  - [ ] Ticker symbol (muted, smaller)
  - [ ] Sector tag (pill/chip style, right-aligned)
  - [ ] Example: "**Reliance Industries** RELIANCE.NS `Oil & Gas`"
- [ ] Maximum 8 results shown (prevent overwhelming)
- [ ] Keyboard navigation: Arrow keys to navigate, Enter to select
- [ ] Highlighted result: Background color change (#F3F4F6)

**Fuzzy Matching Examples**

| User Types | System Returns |
|------------|----------------|
| "relianse" | Reliance Industries |
| "TCS" or "tata consultancy" | Tata Consultancy Services |
| "hdfc" | Shows both HDFC Bank and HDFC Life (disambiguation) |

**Loading State (While Fetching)**

- [ ] Subtle spinner inside search bar (right side)
- [ ] Or: Skeleton results in dropdown
- [ ] Duration: Target < 500ms response time

**Search Submission**

- [ ] Click on result → Navigate to company page
- [ ] Press Enter with result highlighted → Navigate
- [ ] Press Enter with no result highlighted → Search for typed text, show results page

##### Advanced Users & Edge Cases

**No Results State**

- [ ] Dropdown message: "No companies found for '[query]'"
- [ ] Suggestions:
  - [ ] "Did you mean: [similar company]?" (if close match exists)
  - [ ] "Try browsing by sector instead"
  - [ ] "Check the spelling or try the ticker symbol"
- [ ] Tone: Helpful, not dead-end

**Disambiguation State**

- [ ] When multiple companies match (e.g., "HDFC"):
  - [ ] Show all matches with clear differentiation
  - [ ] Each result shows enough context to distinguish

**Keyboard Accessibility**

- [ ] Tab focuses search bar
- [ ] Typing opens dropdown
- [ ] Arrow Down moves to first result
- [ ] Arrow Up/Down navigates results
- [ ] Enter selects highlighted result
- [ ] Escape closes dropdown
- [ ] Screen reader: Announces "X results found" when dropdown opens

**Mobile Considerations**

- [ ] Full-width search bar
- [ ] Dropdown becomes full-screen overlay on small screens
- [ ] Large touch targets for each result (minimum 48px height)
- [ ] Keyboard auto-opens when search focused

**Local Storage for Recent Searches**

```json
{
  "recentSearches": [
    { "name": "Reliance Industries", "ticker": "RELIANCE.NS", "timestamp": "2025-01-03T10:30:00Z" },
    { "name": "TCS", "ticker": "TCS.NS", "timestamp": "2025-01-02T14:15:00Z" }
  ]
}
```

- [ ] Store last 10 searches
- [ ] Clear individual items (swipe-to-delete on mobile, X on desktop)
- [ ] "Clear all recent searches" link
- [ ] No server-side storage (privacy-first)

---

## 4. Company Fundamentals Overview

### 4.1 Financial Health Summary

#### User Stories

**The Cautious Learner**

- As a cautious learner analyzing a company, I want to see its financial health at a glance, so that I can quickly assess whether it's worth deeper investigation.
- As a cautious learner, I want revenue and profit trends visualized, so that I can understand the trajectory without reading tables of numbers.
- As a cautious learner, I want to know if the company makes money and has manageable debt, so that I can identify red flags early.

**The Complete Beginner**

- As a complete beginner, I want every metric explained when I hover/tap, so that I learn what each number means.
- As a complete beginner, I want to see "good" vs. "bad" indicators, so that I can interpret data without financial expertise.

**The Recovering Tip-Follower**

- As a recovering tip-follower, I want to see fundamentals I would have missed when following tips, so that I understand what I should have checked before buying.

#### UX/UI Considerations

##### Core Experience

**Page Layout**

- [ ] **Header Area**:
  - [ ] Company name (H1, 32px)
  - [ ] Ticker symbol + Exchange (muted, 16px): "RELIANCE.NS · NSE"
  - [ ] Sector tag: "Oil & Gas"
  - [ ] Current stock price (optional for v1, or note: "Price data not included—focus on fundamentals")
- [ ] **Tab Navigation** (if multiple sections):
  - [ ] "Overview" (default) | "Ratios" | "AI Assistant"
  - [ ] Sticky on scroll

**Loading State**

- [ ] Full skeleton matching final layout
- [ ] Prevents layout shift when data loads
- [ ] Company name loads first (from URL/search), data second

**Metrics Cards Layout**

- [ ] Grid: 2x2 on desktop, 1 column on mobile
- [ ] Each card: Metric name, current value, trend indicator, mini chart

**Card Specifications**

| Card | Metric | Value Example | Trend | Tooltip |
|------|--------|---------------|-------|---------|
| 1 | Revenue | ₹8.5L Cr | ↑ 12% YoY (green) | "Revenue is the total money a company earns from selling its products or services." |
| 2 | Net Profit | ₹67,000 Cr | ↑ 8% YoY | "Net profit is what remains after all expenses. A company that consistently makes profit is generally healthier." |
| 3 | Profit Margin | 7.8% | Industry avg: 6.2% | "Profit margin shows how much profit a company makes for every ₹100 of revenue." |
| 4 | Debt-to-Equity | 0.4 | "Low debt" (green) | "Debt-to-equity shows how much the company relies on borrowed money. Lower is generally safer." |

**Tooltip Design**

- [ ] Trigger: Hover (desktop) or tap (mobile)
- [ ] Position: Above or below the element, never covering it
- [ ] **Anatomy**:
  - [ ] Plain-language explanation (2-3 sentences)
  - [ ] "What's good/bad": Brief guidance
  - [ ] "Learn more →" link to deep-dive modal
- [ ] Dismiss: Mouse leave / tap outside / 5 second timeout
- [ ] Animation: Fade in (150ms)

**Detailed Charts Section (Below Cards)**

- [ ] **Revenue & Profit Chart**
  - [ ] Type: Combined bar (revenue) + line (profit) chart
  - [ ] X-axis: Years (5-year view)
  - [ ] Y-axis: Value in ₹ Cr
  - [ ] Hover: Shows exact values for each year
  - [ ] Annotation: Call out significant events (e.g., "COVID impact")

- [ ] **Cash Flow Chart**
  - [ ] Operating Cash Flow trend
  - [ ] Annotation: "Positive cash flow means the business generates real cash"
  - [ ] Warning indicator if cash flow negative multiple years

**Data Source Display**

- [ ] Footer: "Data sourced from BSE/NSE filings. Last updated: Q3 2024"
- [ ] Link: "View original filing →" (where available)

##### Advanced Users & Edge Cases

**Missing Data Handling**

- [ ] If data unavailable for a metric:
  - [ ] Show card with "Data not available" state
  - [ ] Muted styling, no chart
  - [ ] Note: "This data may not be reported for this company type"

**Negative Numbers**

- [ ] Net loss: Show in red with clear "Loss" label
- [ ] Negative cash flow: Warning icon + explanation

**Newly Listed Companies**

- [ ] If < 3 years of data:
  - [ ] Charts show available years only
  - [ ] Note: "Limited historical data—company listed in [year]"

**Comparison State (Future Enhancement)**

- [ ] "Compare with another company" button
- [ ] Opens side-by-side view

---

## 5. Financial Ratios with Education

### 5.1 Key Ratios Display

#### User Stories

**The Cautious Learner**

- As a cautious learner, I want to see key financial ratios with industry context, so that I can evaluate whether numbers are good or bad relative to peers.
- As a cautious learner, I want to understand what each ratio actually tells me, so that I'm not just memorizing numbers but building intuition.

**The Complete Beginner**

- As a complete beginner, I want ratios explained like I'm 12 years old, so that I'm not intimidated by financial jargon.
- As a complete beginner, I want to see examples of what "good" and "bad" look like, so that I can interpret any company's ratios.

**The Recovering Tip-Follower**

- As a recovering tip-follower, I want to see which ratios signal danger, so that I can spot red flags I previously missed.

#### UX/UI Considerations

##### Core Experience

**Ratios Section Layout**

- [ ] Section heading: "Key Ratios" with subheading: "What the numbers reveal about [Company]"
- [ ] List layout: Each ratio as a row or card

**Ratio Row Anatomy**

- [ ] **Ratio Name**: "P/E Ratio (Price-to-Earnings)"
- [ ] **Current Value**: "22.5"
- [ ] **Industry Context**: "Industry avg: 18.2" + visual indicator (bar or position marker)
- [ ] **Interpretation Badge**:
  - [ ] "Slightly expensive" (yellow) / "Reasonable" (green) / "Red flag" (red)
  - [ ] Badge is clickable for explanation
- [ ] **Expand Arrow**: "↓" to reveal more detail

**Key Ratios to Display (MVP)**

| Ratio | Full Name | Purpose |
|-------|-----------|---------|
| P/E | Price-to-Earnings | Valuation relative to profits |
| ROE | Return on Equity | Profitability efficiency |
| Current Ratio | Liquidity Ratio | Short-term financial health |
| D/E | Debt-to-Equity | Financial leverage |
| P/B | Price-to-Book | Valuation relative to assets |

**Progressive Disclosure (3 Levels)**

**Level 1: Inline Summary (Always Visible)**

- [ ] Ratio name + value + badge
- [ ] Single row, scannable

**Level 2: Expanded Section (Click to Reveal)**

- [ ] Triggered by: Click on ratio row
- [ ] Content:
  - [ ] "What this ratio means" (2-3 sentences, plain language)
  - [ ] "For [Company]": Specific interpretation
  - [ ] Historical trend: Mini sparkline of this ratio over 5 years
  - [ ] Industry comparison: Bar showing this company vs. peers
- [ ] Animation: Smooth expand (300ms ease-out)

**Level 3: Deep Dive Modal (Click "Learn More")**

- [ ] Full educational content:
  - [ ] What the ratio measures
  - [ ] How it's calculated (with simple formula)
  - [ ] What affects it
  - [ ] Examples of good vs. bad (with real companies)
  - [ ] Edge cases and limitations
  - [ ] "Test your understanding" micro-quiz (optional)
- [ ] Modal width: 600px max
- [ ] Close: X button, Escape key, backdrop click

**Visual Indicators**

- [ ] **Position Marker**: Shows where this company sits on a spectrum
  - [ ] Horizontal bar: Low → High
  - [ ] Company marker: Dot or line on the bar
  - [ ] Industry average: Vertical line marker
- [ ] **Red Flag System**:
  - [ ] If ratio exceeds danger threshold: Red outline, warning icon
  - [ ] Tooltip: Explains what makes this concerning
- [ ] **Positive Indicator**:
  - [ ] If ratio is healthy: Green checkmark
  - [ ] Tooltip: Explains what's good about this

##### Advanced Users & Edge Cases

**Ratio Not Applicable**

- [ ] If ratio doesn't apply (e.g., P/E for loss-making company):
  - [ ] Show: "N/A - Company is currently not profitable"
  - [ ] Explain: "P/E ratio requires positive earnings to calculate"

**Extreme Values**

- [ ] If ratio is extremely high/low:
  - [ ] Special callout: "This ratio is unusually [high/low]. Here's why that might happen..."
  - [ ] Common explanations: One-time event, industry norm, data error

**Historical Anomalies**

- [ ] Sparkline shows unusual spike/dip:
  - [ ] Annotation on chart: "COVID impact" or similar

**Accessibility**

- [ ] Expandable sections: Use `<details>/<summary>` or ARIA attributes
- [ ] Screen reader: "P/E Ratio: 22.5. Industry average: 18.2. Interpretation: Slightly expensive. Press Enter to learn more."
- [ ] Visual indicators have text alternatives

---

## 6. AI-Powered Educational Assistant

### 6.1 Contextual Question Answering

#### User Stories

**The Cautious Learner**

- As a cautious learner viewing a company's page, I want to ask questions about the data I'm seeing, so that I can clarify my understanding in real-time.
- As a cautious learner, I want the AI to know which company I'm analyzing, so that I don't have to repeat context in every question.

**The Complete Beginner**

- As a complete beginner, I want to ask "dumb questions" without judgment, so that I can learn at my own pace without embarrassment.
- As a complete beginner, I want explanations adapted to my level, so that I'm not overwhelmed with jargon.

**The Recovering Tip-Follower**

- As a recovering tip-follower who instinctively asks "should I buy this?", I want a gentle redirect to fundamentals, so that I'm educated rather than lectured.

#### UX/UI Considerations

##### Core Experience

**Chat Interface Position**

- [ ] **Option A**: Floating button (bottom-right) → Opens chat panel
- [ ] **Option B**: Dedicated tab on company page ("AI Assistant")
- [ ] **Recommendation for MVP**: Floating button (less intrusive, clear discoverability)

**Chat Button (Collapsed State)**

- [ ] Icon: Chat bubble or "?" help icon
- [ ] Label: "Ask a question"
- [ ] Position: Fixed, bottom-right, 24px from edges
- [ ] Size: 56px diameter
- [ ] Shadow: Medium elevation
- [ ] Animation: Subtle pulse on first visit (draws attention)

**Chat Panel (Expanded State)**

- [ ] Opens: Slide in from right (or bottom on mobile)
- [ ] Size: 400px width (desktop), full width (mobile)
- [ ] Height: 60vh (desktop), 80vh (mobile)
- [ ] **Header**:
  - [ ] "Ask about [Company Name]"
  - [ ] Close button (X)
- [ ] **Context Badge**: "I'm viewing this company's fundamentals" (auto-set)
- [ ] **Conversation Area**:
  - [ ] Messages from user (right-aligned, blue bubble)
  - [ ] Messages from AI (left-aligned, gray bubble)
  - [ ] Typing indicator: Three dots animation when AI is responding
- [ ] **Input Area**:
  - [ ] Text input (full width)
  - [ ] Placeholder: "Ask me about this company's fundamentals..."
  - [ ] Send button or Enter to submit
  - [ ] Character limit indicator (if applicable)

**AI Response Format**

- [ ] Structure: Concept → Context → Practical Meaning
- [ ] Length: 2-4 short paragraphs typical
- [ ] Formatting: Use bold for key terms, but not excessive
- [ ] Links: "Learn more about [topic]" where relevant

**Example Interactions**

*User asks factual question:*

> **User**: "What does the P/E ratio mean?"
>
> **AI**: "P/E ratio compares a company's stock price to its earnings per share. Think of it as 'how many years of current profits would it take to equal the current price.'
>
> For [Company], the P/E is 22.5, meaning investors are paying ₹22.50 for every ₹1 of annual profit. This is slightly higher than the industry average of 18.2, suggesting investors expect higher future growth—or the stock might be expensive.
>
> **Key point**: A high P/E isn't automatically bad or good. It depends on growth expectations. Would you like me to explain what affects P/E ratios?"

*User asks for recommendation:*

> **User**: "Should I buy this stock?"
>
> **AI**: "I'm designed to help you understand companies, not to recommend buying or selling. Here's why: the 'right' investment depends on your personal goals, risk tolerance, and timeline—things I can't know about you.
>
> What I can do is help you understand [Company]'s fundamentals so you can make your own informed decision. For example:
> - Its revenue has grown 12% annually for 5 years
> - Debt levels are manageable (D/E of 0.4)
> - P/E is slightly above industry average
>
> Would you like to explore any of these areas deeper?"

**Tip-Request Handling**

- [ ] Keywords to detect: "should I buy", "is this a good stock", "will it go up", "price target", "recommend"
- [ ] Response tone: Polite, supportive, never judgmental
- [ ] Always offer an educational alternative
- [ ] Never apologize excessively or feel preachy

**Starter Prompts (Empty State)**

- [ ] Before user types, show clickable suggestions:
  - [ ] "What do these ratios tell me?"
  - [ ] "Is this company's debt concerning?"
  - [ ] "How does revenue growth look?"
  - [ ] "Explain like I'm a beginner"
- [ ] Clicking a prompt sends it as a message

##### Advanced Users & Edge Cases

**AI Unavailable State**

- [ ] If API fails:
  - [ ] Show: "I'm having trouble connecting right now. Here are some common questions answered:"
  - [ ] List pre-written FAQs relevant to the page
  - [ ] "Try again" button
- [ ] No broken UI—graceful degradation

**Long Conversations**

- [ ] Context window: Maintain last 5-10 exchanges for coherent conversation
- [ ] "Start new conversation" link to reset context
- [ ] Conversation not persisted server-side (privacy)

**Rate Limiting (if needed)**

- [ ] Friendly message: "You're asking great questions! Take a moment to review what we've covered. Ready for more in [X seconds]."

**Mobile UX**

- [ ] Chat panel: Full-screen overlay
- [ ] Keyboard pushes input up (no overlap)
- [ ] Close via back button or X
- [ ] Input auto-focuses when panel opens

**Accessibility**

- [ ] Chat panel: Proper focus management
- [ ] Messages: Live region for screen readers
- [ ] Send button: Labeled for screen readers
- [ ] Escape closes panel

---

## 7. Learning Progress & Return Engagement

### 7.1 Recently Viewed Companies

#### User Stories

**The Cautious Learner**

- As a returning user, I want to quickly access companies I've previously analyzed, so that I can continue my research without searching again.
- As a returning user, I want to see my learning activity reflected somehow, so that I feel a sense of progress.

**The Curious Browser**

- As a curious browser who visits occasionally, I want to see what I looked at last time, so that I can pick up where I left off.

#### UX/UI Considerations

##### Core Experience

**Homepage "Continue Learning" Section**

- [ ] Position: Below hero, above Market Statistics link
- [ ] Heading: "Continue Learning" or "Your Recent Companies"
- [ ] Visibility: Only shows if local storage has recent companies
- [ ] Design: Horizontal scrollable row of company cards

**Company Card (Recent)**

- [ ] Company name
- [ ] Ticker symbol
- [ ] Sector tag
- [ ] "Last viewed: 2 days ago"
- [ ] Click → Navigate to company page

**Empty State (No Recent Activity)**

- [ ] Section doesn't appear at all (not confusing empty UI)
- [ ] Or: "Start analyzing a company to see your history here"

**Local Storage Structure**

```json
{
  "recentCompanies": [
    {
      "name": "Reliance Industries",
      "ticker": "RELIANCE.NS",
      "sector": "Oil & Gas",
      "lastViewed": "2025-01-03T10:30:00Z"
    },
    {
      "name": "TCS",
      "ticker": "TCS.NS",
      "sector": "Technology",
      "lastViewed": "2025-01-02T14:15:00Z"
    }
  ]
}
```

**Clear History**

- [ ] "Clear history" link (small, below section)
- [ ] Confirmation prompt: "Are you sure? This can't be undone."

##### Advanced Users & Edge Cases

**Privacy Controls**

- [ ] Note: "Your history is stored only on this device and never sent to our servers."
- [ ] Browser private mode: History not persisted (expected behavior)

**First-Time Visitor**

- [ ] Section simply doesn't appear
- [ ] No "you have no history" message (annoying)

---

### 7.2 Learning Journey Gamification (v1.5 Feature)

#### User Stories

**The Cautious Learner**

- As a regular user, I want to see my progress in understanding fundamentals, so that I feel motivated to continue learning.
- As a regular user, I want achievement milestones, so that I have goals to work toward.

#### UX/UI Considerations (Future Feature)

**Concepts Explored Checklist**

- [ ] Track: Has user viewed explanation for P/E, ROE, etc.
- [ ] Display: "5/10 key concepts explored"
- [ ] Visual: Progress bar or checklist

**Companies Analyzed Counter**

- [ ] "You've analyzed 8 companies"
- [ ] Milestone badges: 5, 10, 25, 50 companies

**"Fundamentals Literacy Score" (Highly Optional)**

- [ ] Calculated from: Concepts viewed, time spent, quizzes completed (if added)
- [ ] Displayed as: Score out of 100 or level (Beginner → Intermediate → Advanced)
- [ ] Caution: Can feel gimmicky—test with users first

---

## Non-Functional Requirements

### Performance

| Metric | Target | Notes |
|--------|--------|-------|
| Page load time | < 2 seconds (P95) | First contentful paint |
| Time to interactive | < 3 seconds | All features usable |
| Company search response | < 500ms | Autocomplete results |
| Chart rendering | < 1 second | After data loads |
| AI response latency | < 1 second (P95) | User-perceived wait |
| Smooth interactions | 60fps minimum | No jank on scroll/animations |
| Lighthouse score | 90+ | All categories |

### Scalability

- [ ] Support 1,000 concurrent users (MVP target)
- [ ] Caching strategy for frequently accessed companies
- [ ] CDN for static assets
- [ ] Database read replicas if needed (v2)

### Security

- [ ] HTTPS everywhere
- [ ] No PII collection (v1)
- [ ] API rate limiting
- [ ] Input sanitization on all user inputs
- [ ] Content Security Policy headers

### Accessibility

- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigation for all features
- [ ] Screen reader compatible
- [ ] Color contrast ratios meet standards
- [ ] Focus indicators visible
- [ ] Alt text for all charts (or data tables alternative)

### Reliability

- [ ] 99.5% uptime target
- [ ] Graceful degradation if AI service fails
- [ ] Clear error messages with actionable next steps
- [ ] Health check endpoints for monitoring

---

## Visual Design Principles

### Color Palette

- [ ] Primary: Calm, trustworthy blues (#2563EB, #3B82F6)
- [ ] Secondary: Soft greens for positive indicators (#10B981)
- [ ] Accent: Warm yellows for warnings (#F59E0B)
- [ ] Danger: Muted reds, not aggressive (#EF4444)
- [ ] Neutrals: Gray scale for text and backgrounds
- [ ] Avoid: Aggressive red/green for stocks (too "trading app")

### Typography

- [ ] Font family: Inter, system fonts fallback
- [ ] High readability: 16px base, 1.5 line height
- [ ] Clear hierarchy: H1 (32px), H2 (24px), H3 (20px), Body (16px), Small (14px)
- [ ] Generous letter-spacing for headings

### White Space

- [ ] Generous padding: 24px minimum between sections
- [ ] Card internal padding: 16-24px
- [ ] Prevent cognitive overload through breathing room

### Iconography

- [ ] Style: Outlined, consistent stroke width
- [ ] Feel: Educational, friendly (not finance/trading clichés)
- [ ] Source: Lucide, Heroicons, or similar open-source set

### Charts

- [ ] Style: Clean, minimal, annotated
- [ ] Colors: Limited palette (2-3 colors max per chart)
- [ ] Annotations: Plain-language callouts
- [ ] Not decorative—every chart serves a learning purpose

---

## Monetization Strategy

### MVP (v1): Free

- No monetization
- Focus on validating product-market fit
- Gather engagement data

### Future Options to Validate (v2+)

| Model | Description | Considerations |
|-------|-------------|----------------|
| Freemium | Basic fundamentals free, advanced ratios/comparison paid | Most aligned with education mission |
| Subscription | ₹99-299/month for full access | Simple, predictable revenue |
| Sponsorship | Financial education partners | Requires ethical alignment |
| Affiliate | Broker referrals | Tension with education-first positioning |

### Recommendation

Launch free, gather data on which features drive most engagement, then test willingness-to-pay in v2 with freemium model.

---

## Critical Questions & Clarifications

### 1. AI Assistant Priority

Is the AI assistant:

- **Core to MVP** (must have, significant development effort)?
- **Nice-to-have** (can launch without, add in v1.1)?
- **Uncertain** (need to validate if users actually want it)?

*This significantly affects timeline and budget.*

### 2. Depth vs. Breadth Trade-off

Given the features above, which would you prioritize if we need to cut scope?

- **Option A**: Fewer features, but each one polished (e.g., skip AI, but make ratios education excellent)
- **Option B**: More features, but simpler implementations (e.g., basic AI, basic ratios)

### 3. Mobile Priority Clarification

The UX considerations above assume mobile-responsive. Should we:

- Design mobile-first, then enhance for desktop?
- Design desktop-first, then adapt for mobile?
- Equal priority (more design effort)?

### 4. Chart Interactivity Level

For the charts (revenue trends, behavioral patterns):

- **Static images** (fastest to build)
- **Basic interactive** (hover for values)
- **Full interactive** (zoom, pan, annotations)

*Recommendation: Basic interactive for MVP*

### 5. Data Sourcing

Which specific APIs or data providers will be used?

- Paid API (e.g., Financial Modeling Prep, Alpha Vantage)?
- Scrape publicly available data?
- Budget constraints for data APIs?

### 6. Company Coverage

- All NSE/BSE listed companies (~5,000+)?
- Or start with Nifty 500 / top companies only?
- Mutual funds included, or equity only?

---

## Appendix

### A. Personas Reference

| Persona | Age | Experience | Key Frustration | Goal |
|---------|-----|------------|-----------------|------|
| Cautious Learner | 25-45 | Has demat account, made some trades | "I know I shouldn't follow tips, but I don't know how else to evaluate stocks" | Make confident, independent decisions |
| Complete Beginner | 22-35 | Never invested | "Everything feels too complicated" | Start investing without making mistakes |
| Recovering Tip-Follower | 30-50 | Lost money on tips | "Tips don't work but I don't know what does" | Learn the right way to evaluate stocks |
| Curious Browser | Any | Varies | "I want to learn but don't have a specific goal" | General financial literacy |

### B. Success Metrics (KPIs)

| Goal | Metric | Target |
|------|--------|--------|
| Learning Engagement | % of users exploring fundamentals | 60%+ |
| Learning Completion | Learning flow completion rate | 40%+ |
| Meaningful Engagement | Average session duration | 5+ minutes |
| User Satisfaction | Qualitative feedback score | 4/5+ |
| Return Intent | Repeat visit rate (7 days) | 30%+ |

### C. Glossary

| Term | Definition |
|------|------------|
| P/E Ratio | Price-to-Earnings ratio |
| ROE | Return on Equity |
| D/E | Debt-to-Equity ratio |
| P/B | Price-to-Book ratio |
| Fundamentals | Core financial metrics of a company |
| Retail Investor | Individual (non-institutional) investor |

---

*Document prepared for EquityEdge MVP development. Please provide feedback on Critical Questions before finalizing.*
