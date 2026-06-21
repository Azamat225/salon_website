from flask import Flask, render_template

app = Flask(__name__)

# Главная
@app.route('/')
def index():
    return render_template('index.html')

# Услуги и цены (главная страница услуг с 6 блоками)
@app.route('/services')
def services():
    return render_template('services.html')

# Детальные страницы услуг
@app.route('/services/women')
def service_women():
    return render_template('service/service_women.html')

@app.route('/services/nails')
def service_nails():
    return render_template('service/service_nails.html')

@app.route('/services/cosmetology')
def service_cosmetology():
    return render_template('service/service_cosmetology.html')

@app.route('/services/men')
def service_men():
    return render_template('service/service_men.html')

@app.route('/services/diagnostic')
def service_diagnostic():
    return render_template('service/service_diagnostic.html')

@app.route('/services/solarium')
def service_solarium():
    return render_template('service/service_solarium.html')

# Остальные страницы
@app.route('/masters')
def masters():
    return render_template('masters.html')

# Галерея (одна страница, без подблоков)
@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/contacts')
def contacts():
    return render_template('contacts.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5051)