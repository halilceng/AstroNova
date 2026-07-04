import requests

GEMINI_API_KEY = "AIzaSyDmGDpZVU8TYDpdeq9IBO0aIrdQDBoS8cw" 
prompt = "Test rüya yorumu"
url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key={GEMINI_API_KEY}"
payload = {
    "contents": [{"parts": [{"text": prompt}]}]
}

try:
    response = requests.post(url, json=payload)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"Error: {e}")
