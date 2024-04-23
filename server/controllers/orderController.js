import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";
import mail from "../utils/nodemailer.js";


export default async function userOrder(req,res)
{
    const {name}=req.body;
        try{
            const user = await User.findOne({ username: name });
            const orders = await Order.find({ user: user._id });
            if (orders.length === 0) 
                return res.send([]);
                else
                return res.send(orders);
            
        }
        catch(error)
        {

            console.log(error);
        }
}
export async function orderDetails(req,res)
{
    const {id}=req.params;
        try{
            const order = await Order.findOne({ _id: id });
            const orderProducts = [];
            for (const orderItem of order.products) {
                const product = await Product.findOne({_id:orderItem.product});
    
                    orderProducts.push({
                        productId: orderItem.product,
                        title: product.title,
                        description:product.description,
                        quantity: orderItem.quantity,
                        price: orderItem.price,
                        img: product.img
                    });
                
            }
    
            // console.log({ orderProducts ,status  });
            res.send({ orderProducts});
                
            
        }
        catch(error)
        {

            console.log(error);
        }
}


export async function addOrder(req,res)
{
    const {name} = req.body;

    try {
        const user = await User.findOne({username:name});
        const cartItems = user.cart;
        const orderItems = [];
        let totalAmount = 0;
        for (const cartItem of cartItems) {
            const product = await Product.findOne({_id:cartItem.product});
            const price = product.newPrice;
            const quantity = cartItem.quantity;
            const itemTotal = price * quantity;
            orderItems.push({
                product: cartItem.product,
                quantity: cartItem.quantity,
                price: product.newPrice,
            });
            totalAmount += itemTotal;
        }

            const order = new Order({
                user: user._id,
                products: orderItems,
            });
            await order.save();
            user.cart=[];
            await user.save();
            const subject = "Order Confirmation: Your Order is Pending";
const message = `Dear ${user.username},

Thank you for placing an order with Reyy's Shoes! Your order is currently being processed and has pending status.

Order Details:
- Order ID: ${order._id.toString().slice(-19)}
- Total Amount: $${totalAmount}

We will notify you once your order has been shipped.

If you have any questions or need further assistance, feel free to contact us.

Best regards,
Reyy's Shoes Team`
            mail(user.email,message,subject);

        res.send({ message: 'Order Placed Successfully' });

    } catch (error) {
        console.error('Error in order placing', error);
        res.send({ message: 'Failed to place the order' });
    }
}
