import express from "express";
// import User from "../models/userModel.js"
import Feed from "../controllers/feedController.js"

const router = express.Router();
router.post("/products",Feed);


// router.get("/users",async(req,res)=> {try
// {
//     res.json(await User.find());
// }
// catch(error)
// {
//     res.json("error fetching products ");
//     console.error("error fetching products :", error);
// }});


export default router;