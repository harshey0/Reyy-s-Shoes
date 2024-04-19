import User from "../models/userModel.js";
import generateToken from "../utils/Token.js";
import bcryptjs from "bcryptjs";
import mail from "../utils/nodemailer.js";

export default async function googleAuth(name,email)
{
    try
    {
        let user = await User.findOne({ email });
        if (user) {
            return generateToken(user.username,user.isAdmin,"10d");
        }
        else {
            const pass = bcryptjs.hashSync(process.env.JWT_SECRET,10)

             let uniquename = name; 
             let postfixCount = 1;
             let usernameExists = true;

            while (usernameExists) {
                const existingUser = await User.findOne({ username: uniquename });
    
                if (!existingUser) {
                    usernameExists = false;
                } else {
                    uniquename = `${uniquename}${postfixCount}`;
                    postfixCount++;
                }
            }
            let user = {username:uniquename,email:email,password:pass};
                await User.create(user);
                const subject = "Welcome to Reyy's Shoes!";
const message = `Dear ${uniquename},

Thank you for registering with Reyy's Shoes! We are thrilled to have you join our community.

If you have any questions or need assistance, feel free to reach out to us at any time.

Best regards,
Reyy's Shoes Team`;
                        mail(email,message,subject);
                return generateToken(uniquename,false,"10d");
        }
    }
    catch(error)
    {
        console.error("Error in googleAuth function:", error);
    }



}