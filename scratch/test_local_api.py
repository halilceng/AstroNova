import requests
import json

url = "http://localhost:5000/api/ruya-yorumla"
payload = {"ruya": "Denizde mavi bir balina gördüm."}
headers = {
    "Content-Type": "application/json",
    "X-App-Source": "AstroNova"
}

try:
    response = requests.post(url, json=payload, headers=headers)
    print(f"Status Code: {response.status_code}")
    print(f"Response Body: {response.json()}")
except Exception as e:
    print(f"Error: {e}")
