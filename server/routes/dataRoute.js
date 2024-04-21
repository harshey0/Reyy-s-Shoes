import express from "express";
import products ,{productByid} from "../controllers/productsController.js";
import comment , {commentdelete} from "../controllers/commentController.js";

const router = express.Router();
router.post("/products",products);
router.post("/productbyid",productByid);
router.post("/comment",comment);
router.delete("/commentdelete/:id",commentdelete);




export default router;