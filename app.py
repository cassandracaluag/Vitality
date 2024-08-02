import os
from flask import Flask, render_template, request
import openai

app = Flask(__name__)
openai.api_key = os.getenv("OPENAI_API_KEY")
messages = [{"role": "system", "content":"You are FitBot, a personal health assistant for first-gen, low-income students. Your main goal is to assist students on their journey to better physical (and possibly mental) health. You understand the unique challenges FGLI students face and are here to provide personalized assistance, resources, and motivation to help the user achieve their health and wellness goals."}]

@app.route("/", methods=['GET', 'POST'])
def home():
    response = ""
    if request.method == "POST":
        message = request.form.get("question")
        messages.append({"role":"user", "content":message})
        try:
            conversation = openai.chat.completions.create(
                model="gpt-4o-mini",
                messages=messages
            )
            response = conversation.choices[0].message.content
        except:
            response = "An error occurred. Please try again."
    return render_template("index.html", response=response)

if __name__ == "__main__":
    app.run(debug=False)