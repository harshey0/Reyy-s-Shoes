import mongoose from "mongoose";


export default async function connectDb()
{
    const uri = process.env.URI;

    try{
         await mongoose.connect(uri);
         console.log("Connected to mongoose successfully");
    }
    catch(error){
        console.error("connection error to you:", error);
    }
}

export async function disconnectDb() 
{
    await mongoose.connection.close();
    console.log("connection closed successfully");
}