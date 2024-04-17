import User from "../models/userModel.js"


export async function forget(req,res)
{

    const {email} = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
    return res.send({message:"Please enter a valid email address"});
    const user = await User.findOne({email});
    if(!user)
    return res.send({message:"This email is not registered"});
    else
    return
              
}

export async function reset(req,res)
{

    const {password} = req.body;
    const user = await User.findOne({email});
    if(!user)
    return res.send({message:"This username is not registered"});
    else
    return
              
}

