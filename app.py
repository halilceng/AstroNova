from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)


GEMINI_API_KEY = "AIzaSyDmGDpZVU8TYDpdeq9IBO0aIrdQDBoS8cw" 

@app.route('/api/ruya-yorumla', methods=['POST'])
def ruya_yorumla():
    data = request.json
    ruya = data.get('ruya', '')
    
    print(f"\n--- YENI RUYA GELDI: {ruya} ---") 

    if not ruya:
        return jsonify({'hata': 'Lütfen rüyanızdan bir detay yazın.'}), 400

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