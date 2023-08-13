from flask import Flask, render_template
from flask_socketio import SocketIO, send

app = Flask(__name__, static_folder='templates/static')
socketio = SocketIO(app, cors_allowed_origins='*')

@socketio.on("message")
def gerenciar_mensagem(mensagem):
    send(mensagem, broadcast=True)

@app.route('/')
def homepage():
    return render_template('homepage.html')

socketio.run(app, host="localhost")