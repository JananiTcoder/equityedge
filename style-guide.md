# EquityEdge Design System
## Style Guide v1.0

---

## Design Philosophy

EquityEdge's visual language embodies **"Confident Clarity"**—a design approach that transforms complex financial concepts into digestible, approachable learning experiences. The aesthetic balances premium sophistication with educational warmth, avoiding both the intimidating density of professional trading terminals and the gamified chaos of tip-driven platforms.

The system draws inspiration from the warm, confident tones of modern fintech interfaces while maintaining the clean, focused hierarchy essential for educational content consumption.

---

## Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Deep Navy** | `#0D1B2A` | Primary brand color, headers, primary text on light backgrounds |
| **Slate Blue** | `#1B263B` | Secondary backgrounds, navigation, card headers |
| **Warm White** | `#FAFBFC` | Primary background, content areas |

### Secondary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Muted Teal** | `#2D6A6A` | Secondary buttons, links, interactive elements |
| **Soft Teal** | `#E8F4F4` | Highlighted sections, selected states, learning module backgrounds |
| **Cool Gray** | `#64748B` | Secondary text, descriptions, metadata |

### Accent Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Amber Gold** | `#D4A853` | Primary CTA buttons, achievement badges, important highlights |
| **Warm Amber** | `#F5C469` | Hover states, progress indicators, premium features |
| **Copper Glow** | `#C4956A` | Tertiary accents, decorative elements, gradients |

### Functional Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Success Green** | `#2E7D5A` | Correct answers, positive metrics, completion states |
| **Success Light** | `#E6F5EE` | Success backgrounds, positive callouts |
| **Warning Amber** | `#E5A428` | Caution states, important notes, learning tips |
| **Warning Light** | `#FFF8E6` | Warning backgrounds, tip callouts |
| **Error Vermilion** | `#C4432B` | Errors, incorrect answers, critical alerts |
| **Error Light** | `#FDEEEC` | Error backgrounds, validation states |
| **Info Blue** | `#3B7DBD` | Informational elements, help tooltips |
| **Info Light** | `#EBF5FF` | Info backgrounds, educational callouts |

### Background Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Canvas White** | `#FFFFFF` | Cards, modals, content containers |
| **Surface Light** | `#FAFBFC` | App background, page canvas |
| **Surface Subtle** | `#F1F5F9` | Nested containers, input backgrounds |
| **Surface Muted** | `#E2E8F0` | Dividers, borders, disabled backgrounds |

### Gradient Definitions

```css
/* Premium Header Gradient */
--gradient-premium: linear-gradient(135deg, #0D1B2A 0%, #1B263B 50%, #2D3A4F 100%);

/* Gold Accent Gradient */
--gradient-gold: linear-gradient(135deg, #D4A853 0%, #F5C469 50%, #C4956A 100%);

/* Learning Progress Gradient */
--gradient-progress: linear-gradient(90deg, #2D6A6A 0%, #3D8A8A 100%);

/* Subtle Card Gradient */
--gradient-card: linear-gradient(180deg, #FFFFFF 0%, #FAFBFC 100%);
```

---

## Typography

### Font Family

| Type | Font | Fallback Stack |
|------|------|----------------|
| **Primary** | Plus Jakarta Sans | 'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif |
| **Monospace** | JetBrains Mono | 'SF Mono', 'Consolas', monospace |

*Plus Jakarta Sans provides geometric clarity with humanist warmth—ideal for educational content that needs to feel both authoritative and approachable.*

### Font Weights

| Weight Name | Value | Usage |
|-------------|-------|-------|
| Regular | 400 | Body text, descriptions |
| Medium | 500 | Labels, captions, emphasis |
| Semibold | 600 | Subheadings, button text, important labels |
| Bold | 700 | Headlines, key metrics, primary headings |
| Extrabold | 800 | Display text, hero sections, impact numbers |

### Text Styles

#### Display & Headlines

| Style | Size/Line Height | Weight | Letter Spacing | Usage |
|-------|------------------|--------|----------------|-------|
| **Display Large** | 48px / 56px | Extrabold | -1.5px | Hero headlines, landing pages |
| **Display Small** | 36px / 44px | Bold | -1.0px | Section heroes, major announcements |
| **H1** | 32px / 40px | Bold | -0.5px | Page titles, module headers |
| **H2** | 24px / 32px | Bold | -0.3px | Section headers, card titles |
| **H3** | 20px / 28px | Semibold | -0.2px | Subsection headers, feature titles |
| **H4** | 18px / 26px | Semibold | -0.1px | Card subtitles, list headers |
| **H5** | 16px / 24px | Semibold | 0px | Small headers, label titles |

#### Body Text

| Style | Size/Line Height | Weight | Letter Spacing | Usage |
|-------|------------------|--------|----------------|-------|
| **Body Large** | 18px / 28px | Regular | 0px | Primary reading content, lessons |
| **Body Default** | 16px / 26px | Regular | 0px | Standard UI text, descriptions |
| **Body Small** | 14px / 22px | Regular | 0.1px | Secondary information, helpers |
| **Body Tiny** | 12px / 18px | Regular | 0.2px | Fine print, timestamps |

#### Special Text

| Style | Size/Line Height | Weight | Letter Spacing | Usage |
|-------|------------------|--------|----------------|-------|
| **Label Large** | 14px / 20px | Medium | 0.3px | Form labels, section tags |
| **Label Default** | 12px / 16px | Medium | 0.4px | Metadata, badges, chips |
| **Label Small** | 10px / 14px | Medium | 0.5px | Micro labels, status indicators |
| **Button Large** | 16px / 24px | Semibold | 0.2px | Primary buttons |
| **Button Default** | 14px / 20px | Semibold | 0.2px | Standard buttons |
| **Button Small** | 12px / 16px | Semibold | 0.3px | Compact buttons, tags |
| **Caption** | 12px / 16px | Medium | 0.3px | Image captions, tooltips |
| **Overline** | 11px / 16px | Semibold | 1.0px | Category labels, eyebrows (uppercase) |
| **Code** | 14px / 22px | Regular (Mono) | 0px | Financial formulas, code snippets |
| **Metric Large** | 40px / 48px | Bold (Mono) | -0.5px | Key financial figures, scores |
| **Metric Default** | 28px / 36px | Semibold (Mono) | -0.3px | Secondary metrics |

---

## Component Styling

### Buttons

#### Primary Button

```
Background: Amber Gold (#D4A853)
Background Hover: Warm Amber (#F5C469)
Background Active: #BF9747
Text: Deep Navy (#0D1B2A)
Height: 48px
Min Width: 120px
Corner Radius: 10px
Padding: 12px 24px
Font: Button Large (16px/Semibold)
Shadow: 0 2px 8px rgba(212, 168, 83, 0.25)
Shadow Hover: 0 4px 16px rgba(212, 168, 83, 0.35)
Transition: all 200ms ease-out
```

#### Secondary Button

```
Background: Transparent
Background Hover: Soft Teal (#E8F4F4)
Background Active: #D4EBEB
Border: 1.5px solid Muted Teal (#2D6A6A)
Text: Muted Teal (#2D6A6A)
Height: 48px
Corner Radius: 10px
Padding: 12px 24px
Font: Button Large (16px/Semibold)
Transition: all 200ms ease-out
```

#### Tertiary/Ghost Button

```
Background: Transparent
Background Hover: Surface Subtle (#F1F5F9)
Text: Muted Teal (#2D6A6A)
Text Hover: #1D4A4A
Height: 44px
Corner Radius: 8px
Padding: 10px 16px
Font: Button Default (14px/Semibold)
```

#### Destructive Button

```
Background: Error Vermilion (#C4432B)
Background Hover: #D4533B
Text: White (#FFFFFF)
Height: 48px
Corner Radius: 10px
Shadow: 0 2px 8px rgba(196, 67, 43, 0.25)
```

#### Button States

```
Disabled:
  - Opacity: 50%
  - Cursor: not-allowed
  - No shadow

Loading:
  - Show spinner (16px)
  - Text opacity: 0
  - Maintain button width
```

#### Button Sizes

| Size | Height | Padding | Font Size | Radius |
|------|--------|---------|-----------|--------|
| Small | 36px | 8px 16px | 12px | 8px |
| Default | 44px | 10px 20px | 14px | 10px |
| Large | 48px | 12px 24px | 16px | 10px |
| XLarge | 56px | 14px 32px | 18px | 12px |

---

### Cards

#### Standard Card

```
Background: Canvas White (#FFFFFF)
Border: 1px solid Surface Muted (#E2E8F0)
Corner Radius: 16px
Padding: 24px
Shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03)
Shadow Hover: 0 4px 12px rgba(0, 0, 0, 0.06), 0 12px 32px rgba(0, 0, 0, 0.05)
Transition: shadow 200ms ease-out, transform 200ms ease-out
Transform Hover: translateY(-2px)
```

#### Learning Module Card

```
Background: Gradient Card (white to off-white)
Border: 1px solid Surface Muted (#E2E8F0)
Corner Radius: 20px
Padding: 0 (uses internal sections)
Overflow: hidden

Header Section:
  - Background: Soft Teal (#E8F4F4)
  - Padding: 20px 24px
  - Border Bottom: 1px solid #D4EBEB

Content Section:
  - Padding: 24px
  - Background: White

Progress Bar:
  - Height: 4px
  - Background: Surface Muted (#E2E8F0)
  - Fill: Gradient Progress
  - Position: Bottom of header
```

#### Metric Card

```
Background: Deep Navy (#0D1B2A)
Corner Radius: 16px
Padding: 24px
Shadow: 0 4px 16px rgba(13, 27, 42, 0.15)

Text Color: Warm White (#FAFBFC)
Metric Color: Amber Gold (#D4A853)
Label Color: rgba(255, 255, 255, 0.7)
```

#### Interactive Card (Clickable)

```
Extends: Standard Card
Cursor: pointer
Border Hover: 1px solid Muted Teal (#2D6A6A)
Background Hover: #FEFEFE
```

---

### Input Fields

#### Text Input

```
Height: 52px
Background: Surface Subtle (#F1F5F9)
Background Focus: Canvas White (#FFFFFF)
Border: 1.5px solid transparent
Border Focus: 1.5px solid Muted Teal (#2D6A6A)
Border Error: 1.5px solid Error Vermilion (#C4432B)
Corner Radius: 10px
Padding: 14px 16px
Font: Body Default (16px)
Text Color: Deep Navy (#0D1B2A)
Placeholder Color: Cool Gray (#64748B)
Transition: all 150ms ease-out

Label:
  - Position: Above input
  - Margin Bottom: 8px
  - Font: Label Large (14px/Medium)
  - Color: Slate Blue (#1B263B)

Helper Text:
  - Position: Below input
  - Margin Top: 6px
  - Font: Body Small (14px)
  - Color: Cool Gray (#64748B)
  - Error Color: Error Vermilion (#C4432B)
```

#### Search Input

```
Height: 48px
Background: Canvas White (#FFFFFF)
Border: 1px solid Surface Muted (#E2E8F0)
Corner Radius: 12px
Padding Left: 48px (icon space)
Icon: Search, 20px, Cool Gray

Focus:
  - Border: 1.5px solid Muted Teal (#2D6A6A)
  - Shadow: 0 0 0 4px rgba(45, 106, 106, 0.1)
```

#### Select/Dropdown

```
Extends: Text Input
Padding Right: 48px (chevron space)
Chevron Icon: 20px, Cool Gray

Dropdown Menu:
  - Background: Canvas White (#FFFFFF)
  - Border: 1px solid Surface Muted (#E2E8F0)
  - Corner Radius: 12px
  - Shadow: 0 8px 32px rgba(0, 0, 0, 0.12)
  - Max Height: 320px
  - Margin Top: 4px

Option:
  - Padding: 12px 16px
  - Hover Background: Surface Subtle (#F1F5F9)
  - Selected Background: Soft Teal (#E8F4F4)
  - Selected Text: Muted Teal (#2D6A6A)
```

#### Checkbox

```
Size: 20px × 20px
Background: Canvas White (#FFFFFF)
Border: 2px solid Surface Muted (#E2E8F0)
Corner Radius: 6px

Checked:
  - Background: Muted Teal (#2D6A6A)
  - Border: none
  - Checkmark: White, 12px

Focus Ring: 0 0 0 3px rgba(45, 106, 106, 0.2)
```

#### Radio Button

```
Size: 20px × 20px
Background: Canvas White (#FFFFFF)
Border: 2px solid Surface Muted (#E2E8F0)
Corner Radius: 50%

Selected:
  - Border: 2px solid Muted Teal (#2D6A6A)
  - Inner Dot: 10px, Muted Teal (#2D6A6A)
```

#### Toggle Switch

```
Width: 48px
Height: 28px
Background Off: Surface Muted (#E2E8F0)
Background On: Muted Teal (#2D6A6A)
Corner Radius: 14px

Knob:
  - Size: 22px
  - Background: White
  - Shadow: 0 2px 4px rgba(0, 0, 0, 0.15)
  - Margin: 3px

Transition: all 200ms ease-out
```

---

### Navigation

#### Top Navigation Bar

```
Height: 64px
Background: Canvas White (#FFFFFF)
Border Bottom: 1px solid Surface Muted (#E2E8F0)
Padding: 0 24px
Shadow: 0 1px 4px rgba(0, 0, 0, 0.03)

Logo: 32px height
Nav Links: Body Default, Cool Gray (#64748B)
Nav Links Active: Semibold, Deep Navy (#0D1B2A)
Nav Links Hover: Deep Navy (#0D1B2A)
```

#### Side Navigation

```
Width: 260px
Background: Surface Light (#FAFBFC)
Border Right: 1px solid Surface Muted (#E2E8F0)
Padding: 24px 16px

Nav Item:
  - Height: 44px
  - Padding: 10px 16px
  - Corner Radius: 10px
  - Font: Body Default (16px/Medium)
  - Color: Cool Gray (#64748B)
  - Icon: 20px, margin-right 12px

Nav Item Hover:
  - Background: Surface Subtle (#F1F5F9)
  - Color: Slate Blue (#1B263B)

Nav Item Active:
  - Background: Soft Teal (#E8F4F4)
  - Color: Muted Teal (#2D6A6A)
  - Font Weight: 600
  - Left Border: 3px solid Muted Teal (#2D6A6A)
```

#### Tabs

```
Height: 44px
Border Bottom: 2px solid Surface Muted (#E2E8F0)

Tab Item:
  - Padding: 10px 20px
  - Font: Body Default (16px/Medium)
  - Color: Cool Gray (#64748B)
  - Border Bottom: 2px solid transparent
  - Margin Bottom: -2px

Tab Item Hover:
  - Color: Slate Blue (#1B263B)

Tab Item Active:
  - Color: Muted Teal (#2D6A6A)
  - Font Weight: 600
  - Border Bottom: 2px solid Muted Teal (#2D6A6A)
```

---

### Progress Indicators

#### Linear Progress Bar

```
Height: 8px
Background: Surface Muted (#E2E8F0)
Corner Radius: 4px

Fill:
  - Background: Gradient Progress
  - Transition: width 400ms ease-out
  - Corner Radius: 4px

Milestone Markers:
  - Size: 12px
  - Background: Surface Muted (incomplete)
  - Background: Muted Teal (complete)
  - Border: 2px solid Canvas White
```

#### Circular Progress

```
Size: 64px (default), 48px (small), 96px (large)
Track: Surface Muted (#E2E8F0), 6px stroke
Progress: Muted Teal (#2D6A6A), 6px stroke
Animation: stroke-dashoffset 600ms ease-out

Center Text: Metric Default or percentage
```

#### Step Indicator

```
Step Circle:
  - Size: 32px
  - Background Incomplete: Surface Subtle (#F1F5F9)
  - Background Current: Muted Teal (#2D6A6A)
  - Background Complete: Success Green (#2E7D5A)
  - Number Color: Cool Gray (incomplete), White (current/complete)
  - Font: Label Default (12px/Semibold)

Connector Line:
  - Height: 2px
  - Background Incomplete: Surface Muted (#E2E8F0)
  - Background Complete: Success Green (#2E7D5A)
  - Width: Fluid between steps
```

---

### Badges & Chips

#### Status Badge

```
Height: 24px
Padding: 4px 10px
Corner Radius: 6px
Font: Label Small (10px/Semibold), Uppercase

Variants:
  Success: Background #E6F5EE, Text #2E7D5A
  Warning: Background #FFF8E6, Text #B88B1D
  Error: Background #FDEEEC, Text #C4432B
  Info: Background #EBF5FF, Text #3B7DBD
  Neutral: Background #F1F5F9, Text #64748B
```

#### Achievement Badge

```
Size: 48px × 48px (icon container)
Background: Gradient Gold
Corner Radius: 12px
Shadow: 0 4px 12px rgba(212, 168, 83, 0.3)
Icon: 24px, Deep Navy (#0D1B2A)
```

#### Tag/Chip

```
Height: 28px
Padding: 6px 12px
Background: Surface Subtle (#F1F5F9)
Corner Radius: 6px
Font: Label Default (12px/Medium)
Color: Slate Blue (#1B263B)

With Remove:
  - Padding Right: 8px
  - Close Icon: 14px, margin-left 6px
```

---

### Tooltips & Popovers

#### Tooltip

```
Background: Deep Navy (#0D1B2A)
Text: Warm White (#FAFBFC)
Font: Body Small (14px)
Padding: 8px 12px
Corner Radius: 8px
Max Width: 280px
Shadow: 0 4px 16px rgba(0, 0, 0, 0.2)

Arrow: 6px, same background
Animation: fadeIn 150ms ease-out
Delay: 300ms (show), 0ms (hide)
```

#### Educational Tooltip (Extended)

```
Background: Canvas White (#FFFFFF)
Border: 1px solid Surface Muted (#E2E8F0)
Padding: 16px
Corner Radius: 12px
Max Width: 360px
Shadow: 0 8px 32px rgba(0, 0, 0, 0.12)

Header: H5, Slate Blue
Body: Body Small, Cool Gray
Link: Body Small, Muted Teal, underline
```

---

### Modals & Dialogs

#### Standard Modal

```
Background: Canvas White (#FFFFFF)
Corner Radius: 20px
Max Width: 520px
Padding: 0

Header:
  - Padding: 24px 24px 16px
  - Border Bottom: 1px solid Surface Muted (#E2E8F0)
  - Close Button: Top right, 24px, Cool Gray

Body:
  - Padding: 24px

Footer:
  - Padding: 16px 24px 24px
  - Border Top: 1px solid Surface Muted (#E2E8F0)
  - Button Alignment: Right

Overlay:
  - Background: rgba(13, 27, 42, 0.6)
  - Backdrop Filter: blur(4px)
```

#### Learning Modal (Full-width content)

```
Max Width: 720px
Corner Radius: 24px

Content Area:
  - Max Height: 70vh
  - Overflow: auto
  - Scroll Padding: 24px
```

---

## Icons

### Icon System

| Category | Size | Stroke Width | Usage |
|----------|------|--------------|-------|
| **Navigation** | 24px | 1.5px | Primary navigation, menu items |
| **UI Standard** | 20px | 1.5px | Buttons, inputs, inline elements |
| **Compact** | 16px | 1.5px | Dense UIs, table actions, tags |
| **Feature** | 32px | 1.5px | Feature highlights, empty states |
| **Illustration** | 48-64px | 2px | Onboarding, achievements, heroes |

### Icon Colors

| State | Color | Usage |
|-------|-------|-------|
| **Primary Interactive** | Muted Teal (#2D6A6A) | Clickable icons, active states |
| **Secondary** | Cool Gray (#64748B) | Decorative, inactive navigation |
| **Inverse** | Warm White (#FAFBFC) | On dark backgrounds |
| **Success** | Success Green (#2E7D5A) | Confirmation, checkmarks |
| **Warning** | Warning Amber (#E5A428) | Alerts, important info |
| **Error** | Error Vermilion (#C4432B) | Errors, destructive actions |
| **Accent** | Amber Gold (#D4A853) | Premium features, highlights |

### Icon Style Guidelines

- Use rounded line icons (Phosphor, Lucide, or custom)
- Consistent 1.5px stroke weight
- Rounded caps and joins
- Optical alignment within bounds
- No filled icons except for selected/active states

### Common Icon Set

```
Navigation: home, search, menu, close, chevron-left/right/up/down, arrow-left/right
Learning: book-open, graduation-cap, lightbulb, target, trophy, star
Finance: chart-line, trending-up/down, pie-chart, currency-rupee, briefcase, bank
Actions: plus, minus, edit, trash, share, download, upload, refresh
Status: check-circle, x-circle, alert-triangle, info, clock, calendar
User: user, users, settings, bell, help-circle, log-out
```

---

## Spacing System

### Base Unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| `space-0` | 0px | Reset |
| `space-1` | 4px | Micro spacing, icon-to-text |
| `space-2` | 8px | Compact element padding |
| `space-3` | 12px | Small gaps, input padding |
| `space-4` | 16px | Default element spacing |
| `space-5` | 20px | Medium gaps |
| `space-6` | 24px | Section padding, card padding |
| `space-8` | 32px | Component separation |
| `space-10` | 40px | Section gaps |
| `space-12` | 48px | Major section separation |
| `space-16` | 64px | Page section breaks |
| `space-20` | 80px | Hero sections, major breaks |
| `space-24` | 96px | Landing page sections |

### Layout Grid

#### Desktop (1440px reference)

```
Columns: 12
Gutter: 24px
Margin: 80px (side padding)
Max Content Width: 1280px
```

#### Tablet (768px - 1024px)

```
Columns: 8
Gutter: 20px
Margin: 40px
```

#### Mobile (320px - 767px)

```
Columns: 4
Gutter: 16px
Margin: 20px
```

### Component Spacing Patterns

```
Card Internal:
  - Header to content: 16px
  - Content paragraphs: 12px
  - Content to actions: 24px
  - Action button gaps: 12px

Form Fields:
  - Label to input: 8px
  - Input to helper: 6px
  - Field to field: 20px
  - Section to section: 32px

Navigation:
  - Nav item padding: 12px 16px
  - Nav item gap: 4px
  - Section separator: 24px
```

---

## Motion & Animation

### Timing Functions

| Name | Value | Usage |
|------|-------|-------|
| **Ease Out** | `cubic-bezier(0.16, 1, 0.3, 1)` | Default exits, fade outs |
| **Ease In Out** | `cubic-bezier(0.45, 0, 0.55, 1)` | State changes, toggles |
| **Ease In** | `cubic-bezier(0.55, 0, 1, 0.45)` | Entry animations |
| **Spring** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bouncy interactions, celebrations |
| **Sharp** | `cubic-bezier(0.4, 0, 0.2, 1)` | Quick snappy movements |

### Duration Scale

| Token | Duration | Usage |
|-------|----------|-------|
| `duration-instant` | 100ms | Micro feedback (hover colors) |
| `duration-fast` | 150ms | Button states, input focus |
| `duration-normal` | 200ms | Standard transitions |
| `duration-moderate` | 300ms | Panel slides, accordions |
| `duration-slow` | 400ms | Modal entries, page transitions |
| `duration-slower` | 600ms | Complex animations, progress |

### Animation Patterns

#### Micro-interactions

```css
/* Button hover */
transition: background-color 150ms ease-out, 
            transform 150ms ease-out,
            box-shadow 200ms ease-out;

/* Card hover lift */
transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 200ms ease-out;
transform: translateY(-2px);

/* Input focus */
transition: border-color 150ms ease-out,
            box-shadow 150ms ease-out;
```

#### Page Transitions

```css
/* Fade and slide up */
@keyframes pageEnter {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
animation: pageEnter 400ms cubic-bezier(0.16, 1, 0.3, 1);
```

#### Success Celebration

```css
/* Achievement unlock */
@keyframes celebrate {
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}
animation: celebrate 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
```

#### Loading States

```css
/* Skeleton shimmer */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
background: linear-gradient(
  90deg,
  #F1F5F9 25%,
  #E2E8F0 50%,
  #F1F5F9 75%
);
background-size: 200% 100%;
animation: shimmer 1.5s infinite;

/* Spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}
animation: spin 1s linear infinite;
```

#### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Dark Mode

### Color Mappings

| Light Mode | Dark Mode | Token Name |
|------------|-----------|------------|
| `#FFFFFF` | `#0D1117` | --background-primary |
| `#FAFBFC` | `#161B22` | --background-secondary |
| `#F1F5F9` | `#21262D` | --background-tertiary |
| `#E2E8F0` | `#30363D` | --border-default |
| `#0D1B2A` | `#F0F6FC` | --text-primary |
| `#1B263B` | `#E6EDF3` | --text-secondary |
| `#64748B` | `#8B949E` | --text-muted |
| `#2D6A6A` | `#4ECCA3` | --accent-primary |
| `#E8F4F4` | `#1A3D3D` | --accent-subtle |
| `#D4A853` | `#E8B94F` | --accent-gold |

### Dark Mode Specific Adjustments

```css
/* Elevated surfaces in dark mode use lighter shades */
--card-background: #161B22;
--card-elevated: #1C2128;
--card-border: #30363D;

/* Shadows become more subtle, use colored glows instead */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);

/* Accent glow for focus states */
--focus-ring: 0 0 0 3px rgba(78, 204, 163, 0.3);
```

### Component Dark Mode Variants

#### Cards (Dark)

```
Background: #161B22
Border: 1px solid #30363D
Shadow: 0 2px 8px rgba(0, 0, 0, 0.3)
```

#### Inputs (Dark)

```
Background: #21262D
Border: 1px solid #30363D
Focus Border: #4ECCA3
Text: #F0F6FC
Placeholder: #8B949E
```

#### Buttons (Dark)

```
Primary:
  - Background: #E8B94F
  - Text: #0D1117
  
Secondary:
  - Border: #4ECCA3
  - Text: #4ECCA3
  - Hover Background: rgba(78, 204, 163, 0.1)
```

---

## Accessibility Guidelines

### Color Contrast Requirements

| Element | Minimum Ratio | Target Ratio |
|---------|---------------|--------------|
| Body text on background | 4.5:1 | 7:1 |
| Large text (18px+) on background | 3:1 | 4.5:1 |
| UI components and graphics | 3:1 | 4.5:1 |
| Focus indicators | 3:1 | — |

### Focus States

All interactive elements must have visible focus indicators:

```css
/* Default focus ring */
:focus-visible {
  outline: 2px solid #2D6A6A;
  outline-offset: 2px;
}

/* High contrast focus for inputs */
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: none;
  border-color: #2D6A6A;
  box-shadow: 0 0 0 3px rgba(45, 106, 106, 0.2);
}
```

### Touch Targets

- Minimum touch target size: 44px × 44px
- Minimum spacing between targets: 8px
- Adequate padding for finger navigation

### Screen Reader Considerations

- Use semantic HTML elements
- Provide `aria-label` for icon-only buttons
- Include `aria-describedby` for form validation
- Use `aria-live` regions for dynamic content updates
- Ensure logical heading hierarchy (H1 → H2 → H3)

### Motion Sensitivity

- Respect `prefers-reduced-motion` media query
- Provide static alternatives for animated illustrations
- Avoid auto-playing videos without user control

---

## Responsive Breakpoints

| Name | Range | Columns | Margin |
|------|-------|---------|--------|
| **Mobile Small** | 320px - 374px | 4 | 16px |
| **Mobile** | 375px - 767px | 4 | 20px |
| **Tablet** | 768px - 1023px | 8 | 40px |
| **Desktop** | 1024px - 1439px | 12 | 64px |
| **Desktop Large** | 1440px+ | 12 | 80px |

### Breakpoint Variables

```css
--breakpoint-sm: 375px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1440px;
```

---

## File Naming Conventions

### Assets

```
icons/
  icon-{name}-{size}.svg
  icon-home-24.svg
  icon-chart-line-20.svg

images/
  img-{context}-{descriptor}.{ext}
  img-hero-learning.png
  img-empty-state-lessons.svg

illustrations/
  illus-{context}-{descriptor}.svg
  illus-onboarding-welcome.svg
  illus-achievement-complete.svg
```

### Components

```
components/
  Button/
    Button.tsx
    Button.styles.ts
    Button.test.tsx
    index.ts
  Card/
    Card.tsx
    CardLearning.tsx
    CardMetric.tsx
    Card.styles.ts
```

---

## CSS Custom Properties Reference

```css
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
  
  /* Typography */
  --font-primary: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
  
  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  
  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 10px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 20px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06), 0 12px 32px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12);
  
  /* Transitions */
  --transition-fast: 150ms ease-out;
  --transition-normal: 200ms ease-out;
  --transition-slow: 400ms ease-out;
  
  /* Timing Functions */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

*This style guide serves as the single source of truth for EquityEdge's visual design system. All components, screens, and marketing materials should adhere to these specifications to ensure a cohesive, accessible, and premium user experience.*

**Version:** 1.0  
**Last Updated:** January 2026  
**Maintained by:** EquityEdge Design Team
