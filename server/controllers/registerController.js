import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";

export default async function loginUser(req,res)
{
      
        try
            {
                const {username,email,password,cpassword}=req.body;
                
                const userExists = await User.findOne({username});

                if(password!==cpassword)
                return res.send("Passwords do not match");

                if(userExists)
                return res.send("This username is not available");
               else if(await User.findOne({email}))
                return res.send("This email id is already registered");

                else{
                    
                const pass = bcryptjs.hashSync(password,10)
                
                let user = {username:username,email:email,password:pass};
                await User.create(user);
                user= await User.findOne({username});

                console.log("new user added");
                return res.send("Registration Successful");
                
            
        }
            }
            catch(error)
            {

                console.log("Can't create account :", error);
                return res.json("Can't create account ");
            }
      
};