import express from "express";
import products ,{productByid} from "../controllers/productsController.js";
import comment , {commentdelete} from "../controllers/commentController.js";
import cart, {cartadd , cartdelete} from "../controllers/cartController.js";
import stripePayment from "../utils/stripe.js";

const router = express.Router();
router.post("/products",products);
router.post("/productbyid",productByid);
router.post("/comment",comment);
router.delete("/commentdelete/:id",commentdelete);
router.post("/cartadd",cartadd);
router.post("/cart",cart);
router.delete("/cartdelete/:id",cartdelete);
router.post("/stripe",stripePayment);



export default router;