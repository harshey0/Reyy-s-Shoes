import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import bcryptjs from "bcryptjs";

export default async function loginUser(req,res)
{
      
        try
            {
                const {username,email,password}=req.body;
                
                const userExists = await User.findOne({username});


                if(userExists)
                res.send("This username is not available");
               else if(await User.findOne({email}))
                res.send("This email id is already registered");

                else{
                    
                const pass = bcryptjs.hashSync(password,10)
                
                const user = {username:username,email:email,password:pass};
                await User.insertMany(user);
                console.log("yes");
                
              
                generateToken(res,user._id);
                 res.json({_id : user._id , username : user.username, email:user.email , isAdmin:user.isAdmin});
            
        }
            }
            catch(error)
            {
                res.json("Can't create account ");
                console.log("Can't create account :", error);
            }
      
};