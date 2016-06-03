from flask import Flask, render_template, jsonify
import os, random
import logic

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/transcribe')
def test():
    return jsonify({'result': [[1, 2, 3, 4], [4, 3, 2, 1], [5, 6, 7, 8]]})

@app.route('/transcribe/<text>')
def transcribe(text):
    return jsonify({'result': logic.phonemesToRules(logic.transcribeText(text))})

app.run(host='0.0.0.0', port=8080, debug=True)