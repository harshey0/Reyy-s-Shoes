import Product from "./productModel.js";
import User from "./userModel.js";
import connectDb ,{disconnectDb} from "../config/db.js"

import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

async function updateSchema()
{
    try{

        await connectDb();
        const data = await Product.find();
        const users = await User.find();
        
    

        await Product.deleteMany();
        await User.deleteMany();
        await Product.insertMany(data);
        await User.insertMany(users);
        console.log("schema updated successfully");
    }
    catch(error)
    {
        console.error("update error : ", error);
    }
    finally{

await disconnectDb();
    }

};
updateSchema();
