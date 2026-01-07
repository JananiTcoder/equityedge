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
