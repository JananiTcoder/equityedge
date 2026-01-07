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
