import express  from "express";
import dotenv from "dotenv";
import data from "./db/data.js";
import cors from "cors";
import connectDb  from "./config/db.js";

dotenv.config();
connectDb();
const PORT =process.env.PORT;


const app = express ();
app.use(cors());
app.listen(PORT,()=>{console.log(`running on port ${PORT}`)});

app.get("/",(req,res)=> res.send("api is running"));
app.get("/api/data",(req,res)=> res.json(data));