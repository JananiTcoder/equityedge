# (2) creating raw dataset for all the 3 companies- 
import yfinance as yf
import pandas as pd
import os
from config import STOCKS, START_DATE, END_DATE, RAW_DATA_PATH

def fetch_and_save(ticker):
    print(f"Fetching {ticker}")

    df = yf.download(
        ticker,
        start=START_DATE,
        end=END_DATE,
        auto_adjust=False,   # Do NOT change the original stock prices
        progress=False       # While downloading the data dont show the progress bar
    )

    if df.empty:
        raise ValueError(f"No data fetched for {ticker}")

    df.reset_index(inplace=True)    # converts date into a normal column
    df["Ticker"] = ticker

    filename = ticker.replace(".NS", "_NS") + ".csv"
    filepath = os.path.join(RAW_DATA_PATH, filename)

    df.to_csv(filepath, index=False)
    print(f"Saved → {filepath}")


def main():
    os.makedirs(RAW_DATA_PATH, exist_ok=True)

    for ticker in STOCKS:
        try:
            fetch_and_save(ticker)
        except Exception as e:
            print(f"FAILED for {ticker}: {e}")


if __name__ == "__main__":
    main()