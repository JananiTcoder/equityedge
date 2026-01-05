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
