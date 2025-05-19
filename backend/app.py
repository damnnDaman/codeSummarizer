# api.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from google import genai
import os

# 1. Load your API key from an environment variable (safer than hard-coding)
API_KEY = os.getenv("GENAI_API_KEY")
client  = genai.Client(api_key='AIzaSyAjyc6b2tyjcHPwtD-XVEY40XEEhdd27Y0')

app = Flask(__name__)
CORS(app)   # allow React (and any other origin) to call your endpoints

@app.route("/api/explain", methods=["POST"])
def explain():
    payload   = request.get_json() or {}
    code      = payload.get("code", "")
    language  = payload.get("language", "")
    
    # 2. Build a prompt around the incoming code
    prompt = (
    f"Here is some {language} code:\n"
    f"```{language}\n{code.strip()}\n```\n"
    "Please do the following:\n"
    "1. Summarize what this code does in clear, concise English.\n"
   
   
)
    
    # 3. Call Gemini via genai
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=prompt
    )
    
    # 4. Send back the text as JSON
    return jsonify({ "explanation": response.text })

if __name__ == "__main__":
    # 5. Start Flask on port 5000
    app.run(host="0.0.0.0", port=5000, debug=True)
