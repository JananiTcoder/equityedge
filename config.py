import os

BASE_DIR = r"C:\Users\Janani\OneDrive\Desktop\equityedge"

STOCKS = [
    "RELIANCE.NS",
    "TCS.NS",
    "INFY.NS"
]

START_DATE = "2018-01-01"
END_DATE = None  # today

RAW_DATA_PATH = os.path.join(BASE_DIR, "data", "raw")