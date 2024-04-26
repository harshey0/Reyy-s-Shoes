import dotenv from "dotenv";
import Stripe from 'stripe';
import generateToken from "./Token.js";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECTRET);

export default async function stripePayment(req,res)
{
    const email = req.body.email;
        const items = req.body.cartItems;
        // console.log(items);
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
        const tokens = generateToken("reyy","true","success","1.5m")
        const tokenf = generateToken("reyy","true","fail","5m")
        // console.log(`${process.env.URLC}/success/${tokens}`);
        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"], 
            mode:"payment",
            line_items:lineItems, 
            success_url:`${process.env.URLC}/success/${tokens}`,
            cancel_url:`${process.env.URLC}/fail/${tokenf}`,
            customer_email:email,
            shipping_address_collection: {
                allowed_countries: ['US'],
            }, 
            payment_method_data: {
                card: {
                    number: "4242424242424242",
                    exp_month: 12,
                    exp_year: 2023,
                    cvc: "123"
                }
            }
        })
        // console.log(session.id)
        res.send({sessionid:session.id})
    }
        catch(error){
            console.log(error);
        }
}