import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export default async function loginUser(req,res)
{
      
        try
            {
                const {username,password}=req.body;
                
                const user = await User.findOne({username});


                if(!user)
                res.send("This username is not registered");
                else{
                    
                
                
                const passwordMatch = await bcrypt.compare(password, user.password);
                
                if(passwordMatch)
               {
                generateToken(res,user._id);
                 res.json({_id : user._id , username : user.username, email:user.email , isAdmin:user.isAdmin});
            }
                else 
                res.send("password is incorrect");}
            }
            catch(error)
            {
                res.json("unable to login ");
                console.log("unable to login  :", error);
            }
      
};