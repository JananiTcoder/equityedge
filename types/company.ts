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
