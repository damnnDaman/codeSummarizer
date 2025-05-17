# requirements:
#   pip install transformers torch sentencepiece

from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch
import textwrap

# 1. Choose the fine-tuned code-summarization model
CHECKPOINT = "Salesforce/codet5-base-multi-sum"
# 2. Set device (CPU or GPU if available)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# 3. Load tokenizer & model
tokenizer = AutoTokenizer.from_pretrained(CHECKPOINT)
model     = AutoModelForSeq2SeqLM.from_pretrained(CHECKPOINT).to(device)
model.eval()

def explain_code(code: str, language: str = "c") -> str:
    """
    Given a code snippet, returns a well explained step-by-step English summary.
    - code:       the source code (function or snippet) to explain
    - language:   the programming language (for informational purposes)
    """
    # 4. Prepare input: just the raw code snippet
    prompt = code.strip()
    
    # 5. Tokenize & move to device
    inputs = tokenizer(prompt, return_tensors="pt", truncation=True, max_length=512).to(device)
    
    # 6. Generate summary (docstring-style)
    outputs = model.generate(
        **inputs,
        max_new_tokens=64,     # enough for a short sentence
        num_beams=4,           # beam search for better quality
        early_stopping=True
    )
    
    # 7. Decode and return
    summary = tokenizer.decode(outputs[0], skip_special_tokens=True).strip()
    return summary

if __name__ == "__main__":
    # Example usage
    sample_code = textwrap.dedent("""
        int fun() {
            int i = 0;
            for (i = 0; i < 10; i++) {
                printf("%d", i);
            }
            return 0;
        }
        
    """)

    print("=== Code ===")
    print(sample_code)
    print("\n=== Explanation ===")
    print(explain_code(sample_code))
