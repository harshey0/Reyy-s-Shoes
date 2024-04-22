import dotenv from "dotenv";
dotenv.config();
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECTRET);

export default async function stripePayment(req,res)
{
        const items = req.body;
        console.log(items);
        const lineItems = items.map((item)=>({
            price_data:{currency:"usd",
                        product_data:{
                            name:item.product.title,
                            images: [item.product.img],
                            description: item.product.description,

                        },
                        unit_amount:item.product.newPrice * 100,
                    },
                    quantity:item.quantity,
                    
        }));
    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"], 
            mode:"payment",
            line_items:lineItems, 
            success_url:process.env.URLC,
            cancel_url:process.env.URLC,
            
        })
        console.log(session.id)
        res.send({sessionid:session.id})
    }
        catch(error){
            console.log(error);
        }
}