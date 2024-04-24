
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

        const {id}=req.body;
    
        try
        {
            res.json(await Product.findOne({_id:id}));
        }
        catch(error)
        {
            res.json("error fetching products ");
            console.error("error fetching products :", error);
        }}

    export async function productdel(req,res){

        const {id}=req.params;
    
        try
        {
            await Product.findOneAndDelete({ _id: id });
            res.send("Product deleted successfully");


        }
        catch(error)
        {
            console.log("error deleting product :", error);
        }}

