import User from "../models/userModel.js";

export  default  async function cart(req,res)
{
    const {username} = req.body;

    try {
        const user = await User.findOne({username});
        const cartItems=user.cart;
        const Items = await User.populate(cartItems, { path: 'product' });
    
          res.send({ Items }); 

    } catch (error) {
        console.error('Error fetching cart:', error);
        res.send({ message: 'Failed to fetch cart' });
    }
}

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
    const {username} = req.body;

    try {
        const user = await User.findOne({ username});

        const updatedCart = user.cart.filter(cart => cart.product.toString() !== id);
        user.cart = updatedCart;
        await user.save();
        res.send({ message: 'Item removed from cart' });
        
    } catch (error) {
        console.error('Error deleting review:', error);
        res.send({ message: 'Failed to remove item' });
    }
}