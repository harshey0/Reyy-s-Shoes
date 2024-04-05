import express from "express";
import loginUser , {logoutUser} from "../controllers/loginController.js";
import registerUser from "../controllers/registerController.js";


const router = express.Router();
router.post("/login",loginUser);

router.post("/register",registerUser);
router.get("/logout",logoutUser);


export default router;