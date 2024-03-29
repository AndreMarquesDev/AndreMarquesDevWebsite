const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
    const data = JSON.parse(event.body);

    const smtpTransport = nodemailer.createTransport({
        host: 'smtp.zoho.eu',
        port: 465,
        secure: true,
        auth: {
            user: process.env.NODEMAILER_SEND_EMAIL_FROM,
            pass: process.env.NODEMAILER_SEND_EMAIL_FROM_PASS,
        },
    });

    const mailOptions = {
        from: process.env.NODEMAILER_SEND_EMAIL_FROM,
        to: process.env.NODEMAILER_SEND_EMAIL_TO,
        subject: `AndreMarquesDev.com - Contacto de ${data.name}${data.company && ' da empresa ' + data.company}`,
        html: `<p>Email: ${data.email}</p><br/><p>${data.message}</p>`,
    };

    return await new Promise((resolve, reject) => {
        smtpTransport.sendMail(mailOptions, error => {
            smtpTransport.close();

            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    }).then(() => {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Success" }),
        }
    }).catch((error) => {
        return {
            statusCode: 400,
            body: error,
        };
    });
};