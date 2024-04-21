import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, quantity : {
        type:Number,
        required:true
    },user : {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    comment: {
        type: String,
        required: true
    }
},{ timestamps:true});

const orderSchema= new mongoose.Schema(
    {
        user : {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"
        },
        item : {
            type:[itemSchema],
            required:true
        },
        email : {
            type:String,
            required:true
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
        
        },
     { timestamps:true}
);

const Order = new mongoose.model("Order",orderSchema);

export default Order;