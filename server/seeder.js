
import dotenv from "dotenv";
import users from "./db/users.js";
import data from "./db/data.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import connectDb ,{disconnectDb} from "./config/db.js"

dotenv.config();

async function initialImport()
{
    try{

await connectDb();
        await Product.deleteMany();
        await Product.insertMany(data);
        // await User.deleteMany();
        // await User.insertMany(users);
        console.log("data imported successfully");
    }
    catch(error)
    {
        console.error("import error : ", error);
    }
    finally{

await disconnectDb();
    }

};

await initialImport();
