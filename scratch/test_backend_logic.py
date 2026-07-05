import os
from dotenv import load_dotenv
import requests

load_dotenv()
key = os.environ.get("GEMINI_API_KEY")
print(f"Key loaded: {key is not None}")
if key:
    print(f"Key length: {len(key)}")
    print(f"Key prefix: {key[:5]}...")

prompt = "Sen mistik bir rüya tabircisisin. Rüya: 'Denizde mavi bir balina gördüm.'"
url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key={key}"
payload = {
    "contents": [{"parts": [{"text": prompt}]}]
}

try:
    response = requests.post(url, json=payload)
    print("Status:", response.status_code)
    print("Response:", response.json())
except Exception as e:
    print("Error:", e)
