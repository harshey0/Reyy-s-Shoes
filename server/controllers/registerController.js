import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import mail from "../utils/nodemailer.js";

export default async function loginUser(req,res)
{ 
      
        try
            {
                const {username,email,password,cpassword}=req.body;
                const userExists = await User.findOne({username});
                const usernameRegex = /^[a-zA-Z0-9]+$/;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                let firstCharacter = username.charAt(0);

                if (!(firstCharacter >= 'a' && firstCharacter <= 'z') && !(firstCharacter >= 'A' && firstCharacter <= 'Z'))
                return res.send("First character of the username must be a letter");

                else if(username.length<4)
                return res.send("Username too short");

                if(username.length>12)
                return res.send("Username too long");

                else if (!usernameRegex.test(username))
                return res.send("Username should only contain letters and numbers");

                else if (!emailRegex.test(email))
                return res.send("Please enter a valid email address");

                else if(password!==cpassword)
                return res.send("Passwords do not match");

                else if(password.length<6)
                return res.send("Password should be atleast 6 characters long");

                else if(await User.findOne({email}))
                return res.send("This email id is already registered");

                else if(userExists)
                return res.send("This username is not available");

                else{
                    
                const pass = bcryptjs.hashSync(password,10)

                
                let user = {username:username,email:email,password:pass};
                await User.create(user);
                const subject = "Welcome to Reyy's Shoes!";
const message = `Dear ${username},

Thank you for registering with Reyy's Shoes! We are thrilled to have you join our community.

If you have any questions or need assistance, feel free to reach out to us at any time.

Best regards,
Reyy's Shoes Team`;
                        mail(email,message,subject);

                console.log("new user added");
                return res.send("Registration Successful");
                
            
        }
            }
            catch(error)
            {

                console.log("Can't create account :", error);
                return res.send("Can't create account ",error);
            }
      
};