# requirements:
#  pip install transformers torch sentencepiece flask flask-cors

from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch
import textwrap
from flask import Flask, request, jsonify
from flask_cors import CORS
import threading

# 1. Choose the fine-tuned code-summarization model
CHECKPOINT = "Salesforce/codet5-base-multi-sum"

# 2. Set device (CPU or GPU if available)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# 3. Load tokenizer & model
tokenizer = AutoTokenizer.from_pretrained(CHECKPOINT)
model = AutoModelForSeq2SeqLM.from_pretrained(CHECKPOINT).to(device)
model.eval()

def explain_code(code: str, language: str = "cpp") -> str:
    # 1. Build a descriptive prompt
    prompt = (
        f"explain the following {language} code in a single sentence:\n"
        f"{code}\n"
        # + code.strip()
    )
    # 2. Tokenize & move to device
    inputs = tokenizer(prompt, return_tensors="pt", truncation=True, max_length=512).to(device)

    # 3. Generate summary (docstring-style)
    outputs = model.generate(
        **inputs,
        max_new_tokens=120,     # enough for a short sentence
             # minimum length for a good explanation
        num_beams=4,            # beam search for better quality
        # length_penalty=1.2,
        # no_repeat_ngram_size=3,
        # early_stopping=True
    )
    # 4. Decode and return
    summary = tokenizer.decode(outputs[0]).strip()
    return summary

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route("/api/explain", methods=["POST"])
def explain():
    data = request.get_json()
    code = data.get("code", "")
    language = data.get("language", "c")
    explanation = explain_code(code, language)
    return jsonify({"explanation": explanation[0]})

def run_flask():
    app.run(host="0.0.0.0", port=5000)

if __name__ == "__main__":
    # Example usage (optional)
    sample_code = textwrap.dedent("""
    def hello():
        print("Hello, world!")
    """)
    print("=== Code ===")
    print(sample_code)
    print("\n=== Explanation ===")
    print(explain_code(sample_code))

    # Start Flask in a separate thread so your script can still run other code if needed
    threading.Thread(target=run_flask).start()