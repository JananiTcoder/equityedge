import pandas as pd
import os

PROCESSED_PATH = r"C:\Users\Janani\OneDrive\Desktop\test\data\processed"
FUNDAMENTALS_FILE = os.path.join(PROCESSED_PATH, "fundamentals.csv")


def merge_fundamentals():
    if not os.path.exists(FUNDAMENTALS_FILE):
        raise FileNotFoundError("fundamentals.csv not found in data/processed")

    fundamentals = pd.read_csv(FUNDAMENTALS_FILE)
