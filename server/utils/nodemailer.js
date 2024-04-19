
import nodemailer from "nodemailer";

export default function mail(email,message,subject)
{var transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
      user: "singlaarnav66@gmail.com",
      pass: process.env.EMAIL_PASS
    },
    secure:false
  });
  
  var mailOptions = {
    from:"Reyy's Shoes <singlaarnav66@gmail.com>",
    to: email,
    subject: subject,
    text: message
    
  };
  
    transporter.sendMail(mailOptions,(error, info)=>{
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });}