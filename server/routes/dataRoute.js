import express from "express";
import Product from "../models/productModel.js"
import User from "../models/userModel.js"

const router = express.Router();
router.get("/products",async(req,res)=> {try
{
    res.json(await Product.find());
}
catch(error)
{
    res.json("error fetching products ");
    console.error("error fetching products :", error);
}});
router.get("/users",async(req,res)=> {try
{
    res.json(await User.find());
}
catch(error)
{
    res.json("error fetching products ");
    console.error("error fetching products :", error);
}});
router.post("/users",async(req,res)=> {try
{
    res.json(await User.find());
}
catch(error)
{
    res.json("error fetching products ");
    console.error("error fetching products :", error);
}});

export default router;