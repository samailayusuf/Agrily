var nodemailer = require('nodemailer');
require('dotenv/config')



function sendMail(email, verificationString){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.User,
          pass: process.env.Password
        }
      });
      
      var mailOptions = {
        from: 'ysdhilside@gmail.com',
        to: email,
        subject: 'Please verify your email',
        text: `
            Thank you for signing up on Agrily!
            Click on the link below to verify your email.
            https://localhost:3000/verify/${verificationString}
        `
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
        return info
      });
}

module.exports = sendMail