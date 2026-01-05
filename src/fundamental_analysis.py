# (4)
import yfinance as yf
import pandas as pd
import os
import time
from config import STOCKS

PROCESSED_DIR = r"C:\Users\Janani\OneDrive\Desktop\test\data\processed"
OUTPUT_FILE = os.path.join(PROCESSED_DIR, "fundamentals.csv")


def fetch_score_and_save_fundamentals():
    os.makedirs(PROCESSED_DIR, exist_ok=True)
    records = []

    for ticker in STOCKS:
        print(f"Fetching fundamentals for {ticker}")
        stock = yf.Ticker(ticker)

        # -------- FETCH (with retries) --------
        for attempt in range(3):
            try:
                info = stock.get_info()
                record = {
                    "Ticker": ticker,
                    "PE_Ratio": info.get("trailingPE"),
                    "PB_Ratio": info.get("priceToBook"),
                    "ROE": info.get("returnOnEquity"),
                    "Profit_Margin": info.get("profitMargins"),
                    "Debt_to_Equity": info.get("debtToEquity"),
                    "Revenue_Growth": info.get("revenueGrowth"),
                }
                break
            except Exception:
                print(f"[WARN] {ticker} fetch failed (attempt {attempt+1})")
                time.sleep(2)
        else:
            print(f"[FAIL] Using NaNs for {ticker}")
            record = {
                "Ticker": ticker,
                "PE_Ratio": None,
                "PB_Ratio": None,
                "ROE": None,
                "Profit_Margin": None,
                "Debt_to_Equity": None,
                "Revenue_Growth": None,
            }

        records.append(record)

    # -------- DATAFRAME --------
    df = pd.DataFrame(records)

    # -------- NORMALIZATION --------
    def normalize(series, higher_better=True):
        series = pd.to_numeric(series, errors="coerce")
        if series.isna().all() or series.max() == series.min():
            return pd.Series([0.5] * len(series))
        if higher_better:
            return (series - series.min()) / (series.max() - series.min())
        else:
            return (series.max() - series) / (series.max() - series.min())

    # -------- SCORING --------
    df["ROE_S"] = normalize(df["ROE"], True)
    df["Profit_Margin_S"] = normalize(df["Profit_Margin"], True)
    df["Revenue_Growth_S"] = normalize(df["Revenue_Growth"], True)

    df["PE_S"] = normalize(df["PE_Ratio"], False)
    df["PB_S"] = normalize(df["PB_Ratio"], False)
    df["Debt_S"] = normalize(df["Debt_to_Equity"], False)

    df["Fundamental_Score"] = df[
        ["ROE_S", "Profit_Margin_S", "Revenue_Growth_S",
         "PE_S", "PB_S", "Debt_S"]
    ].mean(axis=1)

    # -------- SAVE --------
    df.to_csv(OUTPUT_FILE, index=False)
    print(f"Saved fundamentals → {OUTPUT_FILE}")


if __name__ == "__main__":
    fetch_score_and_save_fundamentals()
