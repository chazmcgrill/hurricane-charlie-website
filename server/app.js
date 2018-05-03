const express = require('express');
const path = require('path');
const app = express();
const nodemailer = require('nodemailer');

require('dotenv').config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('contact');
});

app.post('/mail', (req, res) => {

  const output = 'Name: ' + req.body.name + '\n Email: ' + req.body.email + '\n Message: ' + req.body.message;

  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_SERVER,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PASSWORD
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Node mailer test" ' + process.env.MAIL_ADDRESS, // sender address
    to: process.env.MAIL_ADDRESS, // list of receivers
    subject: 'New Contact From HC Website', // Subject line
    text: output, // plain text body
    // html: '<b>Hello world?</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });

  res.redirect('/')
});

const port = process.env.PORT || 5002;

app.listen(port, () => console.log(`Server running on port ${port}`));