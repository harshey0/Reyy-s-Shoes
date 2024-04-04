import express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb  from "./config/db.js";
import dataRoute from "./routes/dataRoute.js"
import userRoute from "./routes/userRoute.js"

dotenv.config();
connectDb();
const PORT =process.env.PORT;


const app = express ();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.listen(PORT,()=>{console.log(`running on port ${PORT}`)});

app.get("/",(req,res)=> res.send("api is running"));
app.use("/api", dataRoute);

app.use("/api",userRoute);