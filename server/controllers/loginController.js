import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken , {destroyToken} from "../utils/Token.js";

export default async function loginUser(req,res)
{
      
        try
            {
                const {email,password}=req.body;
                const Email = email.charAt(0).toLowerCase() + email.slice(1)
                
                const user = await User.findOne({email:Email});


                if(!user)
                return res.send({message:"This username is not registered"});
                else{
                    
                
                
                const passwordMatch = await bcrypt.compare(password, user.password);
                
                if(passwordMatch)
               {
                const token = generateToken(user.username,user.isAdmin,user.email,"10d");

                return res.send({message:"Login Successful",token:token});
            }
                else 
                return res.send({message:"password is incorrect"});}
            }
            catch(error)
            {

                console.log("unable to login  :", error);
                return res.send({message:"unable to login "});
            }
      
};

export function logoutUser(req,res)
{
   const token = destroyToken();
    return res.send({message:"Logout Successful",token:token});
}