import User from "../models/userModel.js";

export default async function loginUser(req,res)
{
      
        try
            {
                const {email,password}=req.body;
                const user = await User.findOne({email});
                if(user)
                res.json({_id : user._id , username : user.username, email:user.email , isAdmin:user.isAdmin});
                else
                res.status(401);
            }
            catch(error)
            {
                res.json("error fetching users ");
                console.error("error fetching users :", error);
            }
};