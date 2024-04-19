import express from "express";
// import User from "../models/userModel.js"
import products ,{productByid} from "../controllers/productsController.js"

const router = express.Router();
router.post("/products",products);
router.post("/productbyid",productByid);


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