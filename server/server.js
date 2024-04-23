import express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb  from "./config/db.js";
import dataRoute from "./routes/dataRoute.js"
import userRoute from "./routes/userRoute.js"
import passport from "./utils/passport.js";
import cron from 'node-cron';
import  updateOrderStatusAndFindAffectedUsers  from './utils/nodeCron.js';


dotenv.config();
await connectDb();
const PORT =process.env.PORT;


const app = express ();
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: true,
    credentials: true
}));

app.get("/",(req,res)=> res.send("Reyy's Shoes is running smoothly"));
app.use("/data", dataRoute);
app.use("/user",userRoute);


// cron.schedule('0 */8 * * *', async () => {
//     try {
//       await updateOrderStatusAndFindAffectedUsers();
//     } catch (error) {
//       console.error('Error occurred:', error);
//     }
//   });
  


app.listen(PORT,()=>{console.log(`running on port ${PORT}`)});







