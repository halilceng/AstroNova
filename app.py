import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from dotenv import load_dotenv
import requests

# Load environment variables
load_dotenv()

app = Flask(__name__)

# CORS settings - restrict origins to secure the API
# Allowed origins for development and local testing
ALLOWED_ORIGINS = [
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "http://localhost:5501",
    "http://127.0.0.1:5501",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:5000",
    "http://127.0.0.1:5000",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "null"  # index.html dosyasına doğrudan çift tıklayıp açanlar (file:// protokolü) için
]
# If you deploy to production, add your domain to the environment variables
PRODUCTION_ORIGIN = os.environ.get("PRODUCTION_ORIGIN")
if PRODUCTION_ORIGIN:
    ALLOWED_ORIGINS.append(PRODUCTION_ORIGIN)

# Configure CORS
CORS(app, origins=ALLOWED_ORIGINS)

# Setup Rate Limiter to prevent abuse (e.g. 5 requests per minute per IP for rüya-yorumla)
limiter = Limiter(
    key_func=get_remote_address,
    app=app,
    default_limits=["100 per hour"],
    storage_uri="memory://"
)

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

@app.route('/api/ruya-yorumla', methods=['POST'])
@limiter.limit("5 per minute")
def ruya_yorumla():
    # Verify origin custom header
    app_source = request.headers.get('X-App-Source')
    if app_source != 'AstroNova':
        return jsonify({'hata': 'Yetkisiz erişim kaynağı.'}), 403

    data = request.json
    if not data:
        return jsonify({'hata': 'Geçersiz istek gövdesi.'}), 400

    ruya = data.get('ruya', '')
    
    print(f"\n--- YENI RUYA GELDI: {ruya} ---") 

    if not ruya:
        return jsonify({'hata': 'Lütfen rüyanızdan bir detay yazın.'}), 400

    if not GEMINI_API_KEY:
        print("!!! GEMINI_API_KEY bulunamadı! Lütfen .env dosyasını kontrol edin.")
        return jsonify({'hata': 'API anahtarı yapılandırılmamış.'}), 500

    prompt = f"Sen mistik, bilge ve spiritüel bir rüya tabircisisin. Kullanıcının sana anlattığı şu rüyayı astrolojik ve gizemli bir dille, maksimum 2-3 cümleyle yorumla. Rüya: '{ruya}'"

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key={GEMINI_API_KEY}"
    payload = {
        "contents": [{"parts": [{"text": prompt}]}]
    }

    try:
        response = requests.post(url, json=payload)
        result = response.json()

        if "error" in result:
            hata_mesaji = result['error']['message']
            print(f"!!! API HATASI: {hata_mesaji}")
            return jsonify({'hata': hata_mesaji}), 500

        yorum = result['candidates'][0]['content']['parts'][0]['text']
        print("YORUM BASARIYLA URETILDI!") 
        return jsonify({'yorum': yorum})

    except Exception as e:
        print(f"!!! SISTEM HATASI: {str(e)}") 
        return jsonify({'hata': "Mistik frekans koptu."}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)