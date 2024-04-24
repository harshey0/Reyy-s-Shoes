import express from "express";
import users , {userdel , makeAdmin , userAdmin} from "../controllers/userController.js";
import loginUser , {logoutUser} from "../controllers/loginController.js";
import registerUser from "../controllers/registerController.js";
import {verifyToken} from "../utils/Token.js"
import {forget , reset} from "../controllers/passwordController.js"
import {callback} from "../utils/passport.js"
import profile , {update} from "../controllers/profileController.js";


const router = express.Router();
router.post("/users",users);
router.post("/userAdmin",userAdmin);
router.delete("/userdel/:id",userdel);
router.post("/makeAdmin/:id",makeAdmin);
router.post("/login",loginUser);
router.post("/register",registerUser);
router.post("/verify",verifyToken)
router.post("/logout",logoutUser);
router.post("/forget",forget)
router.post("/reset",reset)
router.get("/google/callback",callback);
router.post("/details",profile)
router.put("/update",update)



export default router; 