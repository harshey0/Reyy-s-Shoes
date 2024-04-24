import User from "../models/userModel.js";
import Order from "../models/orderModel.js"
import mail from "../utils/nodemailer.js";

export default async function users(req,res)
{
        try{
            const users = await User.find();
                return res.send(users);
            
        }
        catch(error)
        {

            console.log(error);
        }
}

export async function userdel(req,res){

    const {id}=req.params;

    try
    {
        const user = await User.findOne({ _id: id })
        await User.findOneAndDelete({ _id: id });
        const subject = "Your Account has been Banned";
        const message = `Dear ${user.username},

We regret to inform you that your account has been banned due to violations of our community guidelines. As a result, your access to our platform has been permanently revoked.

If you believe this decision has been made in error or wish to appeal the ban, please us immediately.

Thank you for your understanding.

Best regards,
Reyy's Shoes Team`;

        

mail(user.email,message,subject);
        res.send("User deleted successfully");

    }
    catch(error)
    {
        console.log("error deleting user :", error);
    }}


export async function makeAdmin(req,res){

    const {id}=req.params;

    try
    {
        const user = await User.findOne({ _id: id })
        user.isAdmin = true;
        const subject = "Your Account has been Upgraded to Admin";

        const message = `Dear ${user.username},

We are delighted to inform you that your account has been upgraded to an admin role at Reyy's Shoes. As an admin, you now have access to advanced features and privileges to enhance your experience on our platform.

With your new role, you'll play a crucial role in shaping the direction of our platform and ensuring its continued success. Your insights and contributions will be invaluable in driving growth and fostering a vibrant community.

If you have any questions or need assistance with your new role, please feel free to contact us. We're here to support you every step of the way.

Thank you for accepting this important responsibility, and we look forward to working together to achieve our goals.

Best regards,
Reyy's Shoes Team`;

        
        
        

        mail(user.email,message,subject);
        await user.save()
        res.send("Admin made successfully");

    }
    catch(error)
    {
        console.log("error deleting user :", error);
    }}

    export async function userAdmin(req,res)
{
    const {id}=req.body;
        try{
            const order = await Order.find().populate('user');
            const orders = order.filter(order => order.user._id.toString() === id);
            const user=await User.findOne({_id:id});
                return res.send({orders , user});
            
        }
        catch(error)
        {

            console.log(error);
        }
}