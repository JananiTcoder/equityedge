# (3) data preprocessing (returns, trends, volatility, momentum)
import pandas as pd
import numpy as np
import os

RAW_PATH = r"C:\Users\Janani\OneDrive\Desktop\test\data\raw"
PROCESSED_PATH = r"C:\Users\Janani\OneDrive\Desktop\test\data\processed"

def load_data(file_path):
    df = pd.read_csv(file_path, parse_dates=["Date"])
    df.sort_values("Date", inplace=True)
    return df


# def add_returns(df): # today vs yesterday
#     df["Daily_Return"] = df["Close"].pct_change()
#     df["Log_Return"] = np.log(df["Close"] / df["Close"].shift(1))
#     return df


# def add_moving_averages(df):
#     df["SMA_20"] = df["Close"].rolling(window=20).mean() # 20-day average price
#     df["SMA_50"] = df["Close"].rolling(window=50).mean() # 50-day average price
#     df["Trend"] = df["SMA_20"] - df["SMA_50"]
#     return df


# def add_momentum(df):
#     df["Momentum_10"] = df["Close"] - df["Close"].shift(10) # today’s price-price 10 days ago
#     return df


# def add_volatility(df):
#     df["Volatility_20"] = df["Daily_Return"].rolling(window=20).std()
#     return df


# def add_volume_features(df): # Average trading volume over 20 days
#     df["Volume_MA_20"] = df["Volume"].rolling(window=20).mean()
#     df["Volume_Spike"] = df["Volume"] / df["Volume_MA_20"]
#     return df


def process_stock(file_path):
    df = pd.read_csv(file_path, parse_dates=["Date"])
    df.sort_values("Date", inplace=True)

    # ---- FORCE NUMERIC CLEANING (CRITICAL) ----
    numeric_cols = ["Open", "High", "Low", "Close", "Volume"]

    for col in numeric_cols:
        df[col] = (
            df[col]
            .astype(str)
            .str.replace(",", "", regex=False)
        )
        df[col] = pd.to_numeric(df[col], errors="coerce")

    # Drop rows where price data is invalid
    df.dropna(subset=["Close"], inplace=True)

    # ---- FEATURES ----
    df["Daily_Return"] = df["Close"].pct_change()
    df["Log_Return"] = np.log(df["Close"] / df["Close"].shift(1))

    df["SMA_20"] = df["Close"].rolling(20).mean()
    df["SMA_50"] = df["Close"].rolling(50).mean()
    df["Trend"] = df["SMA_20"] - df["SMA_50"]

    df["Momentum_10"] = df["Close"] - df["Close"].shift(10)
    df["Volatility_20"] = df["Daily_Return"].rolling(20).std()

    df["Volume_MA_20"] = df["Volume"].rolling(20).mean()
    df["Volume_Spike"] = df["Volume"] / df["Volume_MA_20"]

    df.dropna(inplace=True)
    return df


def main():
    os.makedirs(PROCESSED_PATH, exist_ok=True)

    for file in os.listdir(RAW_PATH):
        if file.endswith(".csv"):
            print(f"Processing {file}")
            full_path = os.path.join(RAW_PATH, file)
            df = process_stock(full_path)
            df.to_csv(os.path.join(PROCESSED_PATH, file), index=False)

if __name__ == "__main__":
    main()
