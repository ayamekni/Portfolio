from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/download-cv')
def download_cv():
    return send_from_directory('uploads', 'CV__Aya__Mekni.pdf', as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
