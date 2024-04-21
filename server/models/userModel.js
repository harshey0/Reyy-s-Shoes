import mongoose from "mongoose";


const userSchema= new mongoose.Schema(
    {
        username : {
            type:String,
            required:true,
            unique:true
        },
        email : {
            type:String,
            required:true,
            unique:true
        },
        password : {
            type:String,
            required:true
        },
        
        isAdmin : {
            type:Boolean,
            required:true,
            default:false
        }, 
        cart :{type:[{product : {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"},quantity :{type:Number,default:1}}],
          required:false
    ,}
        
        },
     { timestamps:true} 
);

const User = new mongoose.model("User",userSchema);

export default User;