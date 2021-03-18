require('dotenv').config()
const puppetLauncher = require('./puppetLauncher');
var nodemailer = require('nodemailer');
const userr = process.env.USER
const passs = process.env.APPKEY

tellMeBoutit()
async function tellMeBoutit() {
  let x = await puppetLauncher.puppetLauncher()
  let vacs = x[0]
  let kands = x[1]

  if (Number(vacs) < 20) {
    sendMail(x)
  } else if (Number(kands) < 20) {
    sendMail(x)
  }
  console.log("Events transpire every day.....");
}


function sendMail(x) {
  var mailOptions = {
    from: process.env.USER,
    to: 'willem@keser.nl,d.kooyman@keser.nl',
    subject: 'De vacatures en/of kandidaten zijn onder het gewenste aantal',
    text: 'De tellingen zijn binnen en er staan nu ' + x[0] + " vacactures en " + x[1] + " kandidaten live op keser.nl."
  };

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: userr,
      pass: passs
    }
  });

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}