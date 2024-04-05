import express from "express";
import loginUser from "../controllers/loginController.js";
import registerUser from "../controllers/registerController.js";


const router = express.Router();
router.post("/login",loginUser);

router.post("/register",registerUser);


export default router;