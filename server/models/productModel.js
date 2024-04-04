import mongoose from "mongoose";

const productSchema= new mongoose.Schema(
    {
        img : {
            type:String,
            required:true
        },
        title : {
            type:String,
            required:true
        },
        star : {
            type:Number,
            required:true
        },
        reviews : {
            type:String,
            required:true
        },
        prevPrice : {
            type:String,
            required:true
        },
        newPrice : {
            type:Number,
            required:true
        },
        company : {
            type:String,
            required:true
        },
        color : {
            type:String,
            required:true
        },
        category : {
            type:String,
            required:true
        },
    } ,{ timestamps:true}
);

const Product = new mongoose.Model("Product",productSchema);

export default {Product};