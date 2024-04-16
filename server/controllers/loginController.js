import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken , {destroyToken} from "../utils/Token.js";

export default async function loginUser(req,res)
{
      
        try
            {
                const {username,password}=req.body;
                
                const user = await User.findOne({username});


                if(!user)
                return res.send("This username is not registered");
                else{
                    
                
                
                const passwordMatch = await bcrypt.compare(password, user.password);
                
                if(passwordMatch)
               {
                res.setHeader('Access-Control-Allow-Origin', 'https://reyy-s-shoes.vercel.app');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
                generateToken(res,user.username,user.isAdmin);

                return res.send("Login Successful");
            }
                else 
                return res.send("password is incorrect");}
            }
            catch(error)
            {

                console.log("unable to login  :", error);
                return res.json("unable to login ");
            }
      
};

export function logoutUser(req,res)
{
    res.setHeader('Access-Control-Allow-Origin', 'https://reyy-s-shoes.vercel.app');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
    destroyToken(res);
    return res.send("done");
}