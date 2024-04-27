import express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb  from "./config/db.js";
import dataRoute from "./routes/dataRoute.js"
import userRoute from "./routes/userRoute.js"
import passport from "./utils/passport.js";
import  job  from './utils/nodeCron.js';
import path from 'path';
import { fileURLToPath } from 'url'; 
// import downloadProductImages from "./utils/multerRemotesync.js"




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDirectory = path.join(__dirname, 'uploads');


dotenv.config();
await connectDb();
const PORT =process.env.PORT;


const app = express ();

app.use('/uploads', express.static(uploadsDirectory, {
    maxAge: '10y'}));
app.use(passport.initialize());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({extended:true, limit: '10mb' }));
app.use(cors({
    origin: true,
    credentials: true
}));

app.get("/",(req,res)=> res.send("Reyy's Shoes is running smoothly"));
app.use("/data", dataRoute);
app.use("/user",userRoute);
job.start();
// downloadProductImages();


app.listen(PORT,()=>{console.log(`running on port ${PORT}`)});







