require('dotenv').config()
const nodemailer = require("nodemailer");

exports.handler = function (event, context, callback) {
  const mailConfig = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GOOGLE_ACCOUNT,
      pass: process.env.GOOGLE_PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(mailConfig);

  const messageData = JSON.parse(event.body);

  const { name, email, subject, phone, message } = messageData;

  const buildMessage = `Name: ${name} \n\nEmail: ${email} \n\nPhone: ${phone} \n\nMessage: ${message}`;

  const mailOptions = {
    from: email,
    to: "ujahabraham47@gmail.com",
    subject: subject,
    text: buildMessage,
  };

  transporter.sendMail(mailOptions, (error, success) => {
    if (error) {
      callback(error);
    } else {
      callback(null, {
        statusCode: 200,
        body: "Ok",
      });
    }
  });
};
