import User from "../models/userModel.js";
import Product from "../models/productModel.js"


export default async function comment(req,res)
{
    const { username, star, comment ,productid } = req.body;

    let Star =5;
    if(star)
    Star = star;

    try {
        const product = await Product.findOne({ _id:productid});

        const user = await User.findOne({username:username});

        
        const newComment = {
            name:username,
            star:Star,
            comment,
            user: user._id 
        };

        product.comments.push(newComment);

        await product.save();

        res.send({ message: 'Review added successfully' });
    } catch (error) {
        console.error('Error adding review:', error);
        res.send({ message: 'Failed to add review' });
    }
}


export async function commentdelete(req,res)
{
    const {id} = req.params;

    try {
        const product = await Product.findOne({ "comments._id":id});

        const updatedComments = product.comments.filter(comment => comment._id.toString() !== id);
        // console.log(updatedComments);

        product.comments = updatedComments;
        await product.save();


        res.send({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error('Error deleting review:', error);
        res.send({ message: 'Failed to delete review' });
    }
}