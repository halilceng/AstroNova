import requests

GEMINI_API_KEY = "AIzaSyDmGDpZVU8TYDpdeq9IBO0aIrdQDBoS8cw" 
url = f"https://generativelanguage.googleapis.com/v1beta/models?key={GEMINI_API_KEY}"

try:
    response = requests.get(url)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"Error: {e}")
