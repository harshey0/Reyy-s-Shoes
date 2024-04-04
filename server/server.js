import express  from "express";
import dotenv from "dotenv";
import Product from "./models/productModel.js"
import cors from "cors";
import connectDb  from "./config/db.js";

dotenv.config();
connectDb();
const PORT =process.env.PORT;


const app = express ();
app.use(cors());
app.listen(PORT,()=>{console.log(`running on port ${PORT}`)});

app.get("/",(req,res)=> res.send("api is running"));
app.get("/api/data",async(req,res)=> {
    try
    {
        res.json(await Product.find());
    }
    catch(error)
    {
        res.json("error fetching products ");
        console.error("error fetching products :", error);
    }
});