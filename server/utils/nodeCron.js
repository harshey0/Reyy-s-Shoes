import Order from '../models/orderModel.js';
import User from "../models/userModel.js"
import mail from './nodemailer.js';
import cron from 'node-cron';

async function updateOrderStatusAndFindAffectedUsers() {

    try {

      const shippedOrders = await Order.find({ status: 'shipped' }).populate('user');
      await Order.updateMany({ status: 'shipped' }, { status: 'delivered' });

      const pendingOrders = await Order.find({ status: 'pending' }).populate('user');
      await Order.updateMany({ status: 'pending' }, { status: 'shipped' });
      
      
      console.log('Order statuses updated successfully.');
  
      pendingOrders.map(async (order) => {
        try {
            const user = await User.findOne({_id:order.user});

            const estimatedDeliveryDate = new Date();
            estimatedDeliveryDate.setDate(estimatedDeliveryDate.getDate() + 1);
            
            const subject = "Your Order is Shipped";
            const message = `Dear ${user.username},
Thank you for placing an order with Reyy's Shoes! Your order has been shipped and is on its way to you.
            
Order Details:
- Order ID: ${order._id.toString().slice(-19)}
- Estimated Delivery Date: ${estimatedDeliveryDate.toLocaleDateString('en-GB')}
            
We will notify you once your order has been delivered.
            
If you have any questions or need further assistance, feel free to contact us.
            
Best regards,
Reyy's Shoes Team`;

            mail(user.email,message,subject);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    });
    
       shippedOrders.map(async (order) => {
        try {
            const user = await User.findOne({_id:order.user});
            const subject = "Your Order is Delivered Early";
            const message = `Dear ${user.username},
Congratulations! Your order from Reyy's Shoes has been delivered sooner than expected.
            
Order Details:
- Order ID: ${order._id.toString().slice(-19)}
- Delivery Date: ${new Date().toLocaleDateString('en-GB')}

You can find the order invoice by clicking on the specific order under profile section in the app.

We hope you enjoy your purchase. If you have any questions or concerns, feel free to contact us.
            
Best regards,
Reyy's Shoes Team`;

            mail(user.email,message,subject);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    });
  
      return;
    } catch (error) {
      console.error('Error updating order statuses:', error);
      return;
    }
}
  const job = cron.schedule('11 21 * * *'  , async () => {
    try {
      await updateOrderStatusAndFindAffectedUsers();
    } catch (error) {
      console.error('Error occurred:', error);
    }
});

export default job;



