import express from "express";
import products ,{productByid} from "../controllers/productsController.js";
import comment , {commentdelete} from "../controllers/commentController.js";
import {cartadd , cartdelete} from "../controllers/cartController.js";

const router = express.Router();
router.post("/products",products);
router.post("/productbyid",productByid);
router.post("/comment",comment);
router.delete("/commentdelete/:id",commentdelete);
router.post("/cartadd",cartadd);




export default router;