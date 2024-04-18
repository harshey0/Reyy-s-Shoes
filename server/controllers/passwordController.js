import User from "../models/userModel.js";
import generateToken from "../utils/Token.js";
import bcryptjs from "bcryptjs";
import bcrypt from "bcryptjs";
import mailer from "../utils/nodemailer.js";

export async function forget(req,res)
{

    const {email} = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    try{
    if (!emailRegex.test(email))
    return res.send({message:"Please enter a valid email address"});
    const user = await User.findOne({email});
    if(!user)
    return res.send({message:"This email is not registered"});
    else{
        const token = generateToken(user.username,user.isAdmin,"5m");
    const link = `${process.env.URLC}/reset/${user._id}/${token}`;
    mailer(email,link);
    console.log(link);
    return res.send({message:"Reset link is sent to this email"});
    }}
    catch(error)
    {
    return res.send({message:"There is an error forgetting password"});
    }       
}

export async function reset(req,res)
{
    try
    {
        const {id,password,cpassword}=req.body;
        const userExists = await User.findOne({_id:id});

        const passwordMatch = await bcrypt.compare(password, userExists.password);
                
        if(passwordMatch)
        return res.send("New password can not be the same");

        if(password!==cpassword)
        return res.send("Passwords do not match");

        else if(password.length<6)
        return res.send("Password should be atleast 6 characters long");

        else{
            
            const pass = bcryptjs.hashSync(password,10)
            userExists.password = pass;
            await userExists.save();

        console.log("password changed");
        return res.send("Password changed Successfully");
        
    
}
    }
    catch(error)
    {

        console.log("Password can't be changed :", error);
        return res.send("Try later ",error);
    }

    }


