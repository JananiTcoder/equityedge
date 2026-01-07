import { ChatMessage, SuggestedQuestion } from "@/types/chat";

export const suggestedQuestions: SuggestedQuestion[] = [
  {
    id: "1",
    text: "What is P/E ratio and why does it matter?",
    category: "ratios",
  },
  {
    id: "2",
    text: "How do I read a company's balance sheet?",
    category: "basics",
  },
  {
    id: "3",
    text: "What makes a company fundamentally strong?",
    category: "investing",
  },
  {
    id: "4",
    text: "Explain Return on Equity (ROE) in simple terms",
    category: "ratios",
  },
  {
    id: "5",
    text: "What is the difference between revenue and profit?",
    category: "basics",
  },
  {
    id: "6",
    text: "How do debt levels affect a company?",
    category: "investing",
  },
];

// Mock AI responses based on keywords
export function getMockAIResponse(userMessage: string): {
  content: string;
  sources?: { title: string; type: "concept" | "company" | "ratio"; link?: string }[];
} {
  const message = userMessage.toLowerCase();

  // P/E Ratio
  if (message.includes("p/e") || message.includes("pe ratio") || message.includes("price to earnings")) {
    return {
      content: `**P/E Ratio (Price-to-Earnings Ratio)** is one of the most widely used metrics in stock analysis.

**What it tells you:** How much investors are willing to pay for ₹1 of a company's earnings.

**Formula:**
\`\`\`
P/E Ratio = Stock Price / Earnings Per Share (EPS)
\`\`\`

**Example:** If a stock trades at ₹500 and its EPS is ₹25, the P/E ratio is 20. This means investors pay ₹20 for every ₹1 of earnings.

**How to interpret:**
- **Low P/E (below 15):** May indicate undervaluation OR problems with the company
- **Moderate P/E (15-25):** Generally considered fair value for established companies
- **High P/E (above 25):** Investors expect high future growth OR stock may be overvalued

**Important caveats:**
1. Compare P/E within the same industry (IT companies often have higher P/E than banks)
2. Negative earnings = no meaningful P/E
3. One-time events can distort EPS

**Indian market context:** Nifty 50's historical average P/E is around 20-22.`,
      sources: [
        { title: "Understanding P/E Ratio", type: "concept" },
        { title: "Valuation Ratios Guide", type: "ratio", link: "/learn/ratios" },
      ],
    };
  }

  // ROE
  if (message.includes("roe") || message.includes("return on equity")) {
    return {
      content: `**Return on Equity (ROE)** measures how efficiently a company uses shareholder money to generate profits.

**What it tells you:** For every ₹100 of shareholder equity, how much profit does the company make?

**Formula:**
\`\`\`
ROE = (Net Profit / Shareholders' Equity) × 100
\`\`\`

**Example:** If a company has ₹50 crore net profit and ₹200 crore equity, ROE = 25%. This means the company generates ₹25 profit for every ₹100 of shareholders' investment.

**What's considered good:**
- **Above 15%:** Generally good
- **Above 20%:** Excellent (company is efficiently using capital)
- **Below 10%:** May indicate inefficiency

**Watch out for:**
1. **High debt can inflate ROE** - If equity is low due to heavy borrowing, ROE looks artificially high
2. **Compare within industry** - Capital-intensive industries naturally have lower ROE
3. **Consistency matters** - Look for stable ROE over 3-5 years

**Indian context:** Top performers like HDFC Bank, TCS consistently show ROE above 15%.`,
      sources: [
        { title: "Return on Equity Explained", type: "concept" },
        { title: "Profitability Ratios", type: "ratio" },
      ],
    };
  }

  // Balance Sheet
  if (message.includes("balance sheet")) {
    return {
      content: `**Understanding a Balance Sheet** - The financial snapshot of a company

A balance sheet shows what a company **owns** (assets), what it **owes** (liabilities), and what belongs to shareholders (equity) at a specific point in time.

**The fundamental equation:**
\`\`\`
Assets = Liabilities + Shareholders' Equity
\`\`\`

**Key sections:**

**1. Assets (What the company owns)**
- *Current Assets:* Cash, inventory, receivables (convertible to cash within 1 year)
- *Non-current Assets:* Property, equipment, long-term investments

**2. Liabilities (What the company owes)**
- *Current Liabilities:* Short-term debt, payables (due within 1 year)
- *Non-current Liabilities:* Long-term loans, bonds

**3. Shareholders' Equity**
- Share capital + Retained earnings (profits kept in the business)

**What to look for:**
- ✅ Current assets > Current liabilities (can pay short-term obligations)
- ✅ Reasonable debt levels (compare Debt-to-Equity ratio with industry)
- ✅ Growing retained earnings (company is profitable and reinvesting)

**Red flags:**
- ❌ Declining cash reserves over time
- ❌ Rapidly increasing debt
- ❌ Negative shareholders' equity`,
      sources: [
        { title: "Financial Statements 101", type: "concept" },
        { title: "Reading Annual Reports", type: "concept" },
      ],
    };
  }

  // Revenue vs Profit
  if (message.includes("revenue") && message.includes("profit")) {
    return {
      content: `**Revenue vs Profit** - Understanding the difference

**Revenue (Top Line)**
Total money earned from selling products/services *before* any expenses.
- Also called: Sales, Turnover, Top Line
- Example: A restaurant's revenue is total food sales

**Profit (Bottom Line)**
Money left *after* subtracting all expenses.

**Types of profit:**

**1. Gross Profit**
\`\`\`
Revenue - Cost of Goods Sold = Gross Profit
\`\`\`
(What's left after direct production costs)

**2. Operating Profit (EBIT)**
\`\`\`
Gross Profit - Operating Expenses = Operating Profit
\`\`\`
(After salaries, rent, marketing, etc.)

**3. Net Profit**
\`\`\`
Operating Profit - Interest - Taxes = Net Profit
\`\`\`
(The actual earnings for shareholders)

**Why both matter:**
- High revenue + low profit = Poor efficiency or high costs
- Growing revenue + stable profit margins = Healthy business
- Revenue can grow while profit shrinks (watch out!)

**Indian example:**
A company might report ₹1,000 crore revenue but only ₹50 crore net profit (5% margin). Another might have ₹500 crore revenue with ₹100 crore profit (20% margin). The second is more efficient.`,
      sources: [
        { title: "Income Statement Basics", type: "concept" },
        { title: "Profit Margins Explained", type: "ratio" },
      ],
    };
  }

  // Fundamentally strong
  if (message.includes("fundamentally strong") || message.includes("fundamental") && message.includes("strong")) {
    return {
      content: `**What Makes a Company Fundamentally Strong?**

A fundamentally strong company has solid financials that suggest long-term sustainability and growth potential.

**Key characteristics:**

**1. Consistent Profitability**
- ✅ Profit growth over 3-5 years
- ✅ Healthy profit margins (compare with industry)
- ✅ Positive operating cash flow

**2. Manageable Debt**
- ✅ Debt-to-Equity ratio below 1 (industry-dependent)
- ✅ Interest Coverage ratio above 3
- ✅ Ability to service debt from operations

**3. Efficient Capital Use**
- ✅ ROE above 15%
- ✅ ROCE above 12%
- ✅ Improving or stable return ratios

**4. Strong Cash Position**
- ✅ Positive free cash flow
- ✅ Cash flow > Net profit (quality of earnings)
- ✅ Adequate reserves for operations

**5. Competitive Advantage**
- ✅ Market leadership or strong niche
- ✅ Pricing power
- ✅ High barriers to entry

**Indian companies often cited as fundamentally strong:**
HDFC Bank, TCS, Asian Paints, Nestlé India, Pidilite Industries

**Remember:** "Strong fundamentals" doesn't mean the stock price will go up immediately. Valuation also matters - even great companies can be overpriced.`,
      sources: [
        { title: "Fundamental Analysis Guide", type: "concept" },
        { title: "Key Financial Ratios", type: "ratio" },
      ],
    };
  }

  // Debt
  if (message.includes("debt")) {
    return {
      content: `**How Debt Affects a Company**

Debt is borrowed money that must be repaid with interest. It's a double-edged sword.

**The Good (Why companies use debt):**
- 💰 Cheaper than equity (interest is tax-deductible)
- 📈 Can accelerate growth
- 🎯 Maintains ownership control

**The Bad (Risks of high debt):**
- 💸 Fixed interest payments regardless of profits
- ⚠️ Default risk in bad times
- 📉 Less flexibility for future investments

**Key ratios to assess debt:**

**1. Debt-to-Equity Ratio**
\`\`\`
Total Debt / Shareholders' Equity
\`\`\`
- Below 1: Conservative
- 1-2: Moderate
- Above 2: High leverage (risky)

**2. Interest Coverage Ratio**
\`\`\`
EBIT / Interest Expense
\`\`\`
- Above 3: Comfortable
- Below 1.5: Warning sign

**3. Debt-to-EBITDA**
\`\`\`
Total Debt / EBITDA
\`\`\`
- Below 3: Healthy
- Above 5: Concerning

**Industry matters:**
- Capital-intensive (infrastructure, power): Higher debt is normal
- IT/FMCG: Should have low debt
- Banks: Different metrics (Capital Adequacy Ratio)

**Indian context:** Post-IL&FS crisis, investors are more cautious about highly leveraged companies.`,
      sources: [
        { title: "Understanding Leverage", type: "concept" },
        { title: "Debt Ratios Explained", type: "ratio" },
      ],
    };
  }

  // Default response for other questions
  return {
    content: `That's a great question about investing and financial analysis!

While I'm designed to help you understand financial concepts, I'm currently set up with responses for common topics like:

- **Financial Ratios:** P/E ratio, ROE, debt ratios
- **Financial Statements:** Balance sheets, revenue vs profit
- **Investment Basics:** What makes a company fundamentally strong

**Try asking about:**
- "What is P/E ratio and why does it matter?"
- "Explain Return on Equity (ROE) in simple terms"
- "How do I read a company's balance sheet?"
- "What is the difference between revenue and profit?"
- "What makes a company fundamentally strong?"
- "How do debt levels affect a company?"

I'm here to help you learn! Pick any topic above or explore the suggested questions.

**Remember:** This is for educational purposes. Always do thorough research and consider consulting a financial advisor for investment decisions.`,
    sources: [
      { title: "Getting Started Guide", type: "concept" },
    ],
  };
}
