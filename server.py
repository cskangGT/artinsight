from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
app = Flask(__name__)
CORS(app)
# Simple memory in server.

from dotenv import load_dotenv
load_dotenv()
openai.api_key = os.getenv("REACT_APP_OPENAI_KEY")
openai.organization = os.getenv("REACT_APP_ORGANIZATION")
app = Flask(__name__)

@app.route('/create-art', methods=['POST'])
def create_art():
    try:
        # 클라이언트로부터 단어 배열을 받습니다.
        words = request.json
        print(words)
        # 단어를 하나의 문자열로 합칩니다.
        sentence = ' '.join(words)
    
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                                {
                                    "role": 'system',
                                    "content":
                                        'You are going to take 5 words and by using it, make one sentence.',
                                },
                                {
                                    "role": 'user',
                                    'content': sentence,
                                },
                            ],
            temperature=1,
            max_tokens=256,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0
          )
        res = response["choices"][0]["message"]["content"]
        imageData = openai.Image.create(
            prompt=res,
            n=1,
            size="512x512"
          )
        generated_image_url = imageData["data"][0]['url'] # image url
        return jsonify(imageUrl=generated_image_url), 200
    
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return jsonify(error="An error occurred while creating art."), 500
    
if __name__ == "__main__":
    app.run('0.0.0.0',port=5001, debug=True)