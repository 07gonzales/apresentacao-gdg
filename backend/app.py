from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)
CORS(app)

@app.route("/enviar", methods=["POST"])
def enviar_email():
    dados = request.get_json()
    nome = dados.get("nome")
    email = dados.get("email")
    telefone = dados.get("telefone")

    assunto = "Confirmação de Inscrição"
    corpo = f"""
    Olá {nome}!

    Sua inscrição para participar do Meetup do GDG - Londrina na Unicesumar foi realizada com sucesso. Em breve entraremos em contato com mais informações.

    Obrigado por participar!

    Atenciosamente,
    Equipe de Eventos - Gabriel e Rennan
    """

    remetente = "gdglondrinaunicesumar@gmail.com"
    senha = "rxlf wfbb odbx gcmo"
    destinatario = email

    msg = MIMEText(corpo)
    msg["Subject"] = assunto
    msg["From"] = remetente
    msg["To"] = destinatario

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as servidor:
            servidor.login(remetente, senha)
            servidor.sendmail(remetente, destinatario, msg.as_string())
        return jsonify({"status": "ok", "message": "Email enviado com sucesso, verifique a caixa de entrada e a caixa de SPAM."})
    except Exception as e:
        return jsonify({"status": "erro", "message": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
