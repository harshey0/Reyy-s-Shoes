import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./db/users.js";
import data from "./db/data.js";
import productModel from "./models/productModel";
import userModel from "./models/userModel";
import connectDb , {disconnectDb} from "./config/db.js"

dotenv.config();
connectDb();