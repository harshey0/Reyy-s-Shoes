import express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb  from "./config/db.js";
import dataRoute from "./routes/dataRoute.js"
import userRoute from "./routes/userRoute.js"
import cookieParser from "cookie-parser"
// import pass
// import passport from "./utils/passport.js"
//harshit

dotenv.config();
connectDb();
const PORT =process.env.PORT;



app.use(cookieParser());
// passport(app);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: true,
    credentials: true
}));
app.listen(PORT,()=>{console.log(`running on port ${PORT}`)});

app.get("/",(req,res)=> res.send("api is running"));
app.use("/data", dataRoute);

app.use("/user",userRoute);