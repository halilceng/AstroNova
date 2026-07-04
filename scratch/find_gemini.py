import requests

GEMINI_API_KEY = "AIzaSyDmGDpZVU8TYDpdeq9IBO0aIrdQDBoS8cw" 
url = f"https://generativelanguage.googleapis.com/v1beta/models?key={GEMINI_API_KEY}"

try:
    response = requests.get(url)
    data = response.json()
    for model in data.get('models', []):
        if 'gemini' in model['name']:
            print(f"Name: {model['name']}, Methods: {model['supportedGenerationMethods']}")
except Exception as e:
    print(f"Error: {e}")
