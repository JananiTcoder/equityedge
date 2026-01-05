import pandas as pd
import os

PROCESSED_PATH = r"C:\Users\Janani\OneDrive\Desktop\test\data\processed"
FUNDAMENTALS_FILE = os.path.join(PROCESSED_PATH, "fundamentals.csv")


def merge_fundamentals():
    if not os.path.exists(FUNDAMENTALS_FILE):
        raise FileNotFoundError("fundamentals.csv not found in data/processed")

    fundamentals = pd.read_csv(FUNDAMENTALS_FILE)

    for file in os.listdir(PROCESSED_PATH):
        if file.endswith(".csv") and file != "fundamentals.csv":
            stock_path = os.path.join(PROCESSED_PATH, file)
            df = pd.read_csv(stock_path)

            # Safety check
            if "Ticker" not in df.columns:
                print(f"Skipping {file} (Ticker column missing)")
                continue

            merged = df.merge(
                fundamentals,
                on="Ticker",
                how="left"
            )
