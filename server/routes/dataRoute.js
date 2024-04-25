import express from "express";
import products ,{addproduct , editproduct, productByid , productdel} from "../controllers/productsController.js";
import comment , {commentdelete} from "../controllers/commentController.js";
import cart, {cartadd , cartdelete} from "../controllers/cartController.js";
import stripePayment from "../utils/stripe.js";
import userOrder,{addOrder ,status, orderDetails , order} from "../controllers/orderController.js"

const router = express.Router();
router.post("/products",products);
router.post("/addproduct",addproduct);
router.post("/editproduct/:id",editproduct);
router.delete("/productdel/:id",productdel);
router.post("/productbyid",productByid);
router.post("/comment",comment);
router.post("/status",status);
router.delete("/commentdelete/:id",commentdelete);
router.post("/cartadd",cartadd);
router.post("/cart",cart);
router.delete("/cartdelete/:id",cartdelete);
router.post("/stripe",stripePayment);
router.post("/addorder",addOrder);
router.post("/order",order);
router.post("/userorder",userOrder);
router.post("/order/:id",orderDetails);



export default router;