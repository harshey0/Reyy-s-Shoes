import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export default async function loginUser(req,res)
{
      
        try
            {
                const {email,password}=req.body;
                
                const user = await User.findOne({email});
                if(!user)
                res.send("email id is not registered");
                else{
                const passwordMatch = await bcrypt.compare(password, user.password);
                if(user && passwordMatch)
                res.json({_id : user._id , username : user.username, email:user.email , isAdmin:user.isAdmin});
                
                else 
                res.send("password is incorrect");}
            }
            catch(error)
            {
                res.json("error fetching users ");
                console.log("error fetching users :", error);
            }
      
};