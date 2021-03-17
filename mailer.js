// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'keseranalytics@gmail.com',
//     pass: 'kimrtshljcwtvrqz'
//   }
// });

// var mailOptions = {
//   from: 'keseranalytics@gmail.com',
//   to: 'kooyman.d@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// const mailing = transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });


exports.mailer = mailing;