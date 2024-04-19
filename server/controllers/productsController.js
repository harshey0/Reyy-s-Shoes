
import Product from "../models/productModel.js"


export default async function products(req,res){
    
    try
    {
        res.json(await Product.find());
    }
    catch(error)
    {
        res.json("error fetching products ");
        console.error("error fetching products :", error);
    }}

    export async function productByid(req,res){

        const _id=req.body;
    
        try
        {
            res.json(await Product.findOne({_id}));
        }
        catch(error)
        {
            res.json("error fetching products ");
            console.error("error fetching products :", error);
        }}

