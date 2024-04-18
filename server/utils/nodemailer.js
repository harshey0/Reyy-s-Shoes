
import nodemailer from "nodemailer";

export default function mailer(email,link)
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
    from:"Harshit Sethi <singlaarnav66@gmail.com>",
    to: email,
    subject: 'Password reset link',
    text: `Dear User,\n\nYou have requested to reset your password. Please click on the following link to reset your password. This link will expire in 5 minutes:\n\n${link}\n\nIf you did not request this change, you can ignore this email.\n\nBest regards,\nThe Reyy's Shoes Team`
    
  };
  
    transporter.sendMail(mailOptions,(error, info)=>{
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });}