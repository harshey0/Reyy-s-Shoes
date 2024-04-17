import express from "express";
import loginUser , {logoutUser} from "../controllers/loginController.js";
import registerUser from "../controllers/registerController.js";
import {verifyToken} from "../utils/Token.js"
import {forget} from "../controllers/passwordController.js"
// import { authgooglelogin} from "../utils/passport.js"


const router = express.Router();
router.post("/login",loginUser);

router.post("/register",registerUser);
router.post("/verify",verifyToken)
router.post("/logout",logoutUser);
router.post("/forget",forget)

// router.get("/google/login",authgooglelogin);


export default router;