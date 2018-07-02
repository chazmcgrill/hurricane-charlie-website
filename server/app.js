const nodemailer = require('nodemailer');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('contact');
});

// transport object for emails
let transport = nodemailer.createTransport({
  host: process.env.MAIL_SERVER,
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASSWORD
  }
});

// Contact Form Route
app.post('/contact', (req, res) => {
  const output = 'Name: ' + req.body.name + '\n Email: ' + req.body.email + '\n Message: ' + req.body.message;

  // setup email data
  let mailOptions = {
    from: '"HC Website" ' + process.env.MAIL_ADDRESS,
    to: process.env.MAIL_ADDRESS,
    subject: 'New Contact Request',
    text: output
  };

  // send mail with defined transport object
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });

  res.redirect('/');
});

// Mailing List Request Route
app.post('/mailer', (req, res) => {
  console.log(req.body);
  const output = 'Request to join mailing list \n Email: ' + req.body.email;

  // setup email data
  let mailOptions = {
    from: '"HC Website" ' + process.env.MAIL_ADDRESS,
    to: process.env.MAIL_ADDRESS,
    subject: 'Mailing List Signup',
    text: output
  };

  // send mail with defined transport object
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });

  // res.redirect('/');
  res.status(200).json("Message Sent")
});

const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`Server running on port ${port}`));