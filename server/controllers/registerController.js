import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import mail from "../utils/nodemailer.js";
import checkDetails from "../utils/rules.js";

export default async function loginUser(req,res)
{ 


    const {username,email,password,cpassword}=req.body;
      
        try
            {
                const checkResult =await checkDetails(req,res,username,email,password,cpassword)
                if (Array.isArray(checkResult)) {
                    return res.send(checkResult[0]);
                }
                else
                {const pass = bcryptjs.hashSync(password,10)

                
                let user = {username,email:email.charAt(0).toLowerCase() + email.slice(1),password:pass};
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
                
          
            }}
            catch(error)
            {

                // console.log("Can't create account :", error);
                return res.send("Can't create account ",error);
            }
      
};