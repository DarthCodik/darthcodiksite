# python3 app.py
from flask import Flask, render_template, url_for
from flask import request, flash
from flask_mail import Mail, Message
# import smtplib


app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':

        contact_type = request.form['contact']
        name = request.form['name']
        phone = request.form['tel']

        try:
            mail = Mail(app)
            email_msg = Message(subject, recipients=['darthcodik@mail.ru'])
            email_msg.html = '<h2>New message for test python app '+ name +'</h2>'
            mail.send(email_msg)

            # email_text = 'New message for test python app '+ name

            # mail_body = "\r\n".join((
            #     "From: %s" % sender,
            #     "To: %s" % reciver,
            #     "Subject: %s" % subject,
            #     "",
            #     email_text))
            #
            # server = smtplib.SMTP_SSL('smtp.mail.ru', 465)
            # server.ehlo()
            # server.login(mail_user, mail_psw)
            # server.sendmail(sender, reciver, mail_body)
            # server.close()

            print ('Email sent!')
            flash(f'{name}, ваша заявка успешно отправлена!', category='success')
        except Exception as e:
            print(e)
            print('Message not sent')
            flash('Заявка не отпавленна', category='error')

    return render_template('index.html')

@app.errorhandler(404)
def pageNotFound(error):
    return render_template('page404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)
