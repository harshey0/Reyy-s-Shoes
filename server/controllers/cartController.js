import User from "../models/userModel.js";


export async function cartadd(req,res)
{
    const {id , quantity , username} = req.body;

    try {

            

        const user = await User.findOne({username});
        const existingProduct = user.cart.find(item => item.product.toString() === id);
        if(existingProduct)
        {
            existingProduct.quantity += quantity;
        }

        else
        user.cart.push({
            product:id,quantity
        });

        await user.save();

        res.send({ message: 'Item added to Cart' });
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.send({ message: 'Failed to add to cart' });
    }
}


export async function cartdelete(req,res)
{
    const {id} = req.params;

    try {
        const product = await Product.findOne({ "comments._id":id});

        if (!product) {
            return res.send({ message: 'Product not found' });
        }
        const updatedComments = product.comments.filter(comment => comment._id.toString() !== id);
        console.log(updatedComments);

        product.comments = updatedComments;
        await product.save();


        res.send({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error('Error deleting review:', error);
        res.send({ message: 'Failed to delete review' });
    }
}