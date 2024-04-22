import User from "../models/userModel.js";
import generateToken from "../utils/Token.js";
import bcryptjs from "bcryptjs";
import checkDetails from "../utils/rules.js";
import mail from "../utils/nodemailer.js";


export default async function profile(req,res){
    

        const {name } = req.body;
           
    try
    {
        const user = await User.findOne({username:name});
        res.send(user);
    }
    catch(error)
    {
        res.send("error getting user ");
        console.error("error getting user :", error);
    }}

    export async function update(req,res){

        let {name , value } = req.body;
        let {username ,email, password, confirmPassword } = value;
        try
        {
            const user = await User.findOne({username:name});
            if(username===user.username)
            username="";
            if(email===user.email)
            email="";

       const checkResult= await checkDetails(req,res,username ,email, password, confirmPassword );
       if (Array.isArray(checkResult)) {
        return res.send({update:false,message:checkResult[0]});
    }else
       {

        const pass = bcryptjs.hashSync(password,10)
        user.email=email||user.email;
        user.username=username||user.username;
        if(password)
        user.password=pass;
        await user.save();
        const token = generateToken(user.username,user.isAdmin,user.email,"10d");
        const subject = "Profile Update Successful";
const message = `Dear ${user.username},

We are writing to inform you that your profile has been successfully updated at Reyy's Shoes.

If you have any questions or concerns regarding your profile or any other matter, please feel free to contact us. We are here to assist you.

Thank you for choosing Reyy's Shoes.

Best regards,
Reyy's Shoes Team`;

            mail(user.email,message,subject);
        return res.send({update:true,message:"Profile updated successfully",user:user,token:token})
        
        }}
        catch(error)
        {
            res.json("error changing details ");
            console.error("error changing details :", error);
        }}

