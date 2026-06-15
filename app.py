from flask import Flask, render_template

app = Flask(__name__)

# Маршруты для всех страниц
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/masters')
def masters():
    return render_template('masters.html')

@app.route('/gallery/before-after')
def gallery_before():
    return render_template('gallery_before.html')

@app.route('/gallery/styles')
def gallery_styles():
    return render_template('gallery_styles.html')

@app.route('/contacts')
def contacts():
    return render_template('contacts.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5051)