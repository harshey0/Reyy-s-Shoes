
import Product from "../models/productModel.js"


export default async function Feed(req,res){
    
    try
    {
        res.json(await Product.find());
    }
    catch(error)
    {
        res.json("error fetching products ");
        console.error("error fetching products :", error);
    }}