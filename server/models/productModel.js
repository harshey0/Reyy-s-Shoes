import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, star : {
        type:Number,
        default:1
    },user : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    comment: {
        type: String,
        required: true
    }
},{ timestamps:true});

const productSchema= new mongoose.Schema(
    {
        img : {
            type:String,
            required:true
        },
        // user : {
        //     type:mongoose.Schema.Types.ObjectId,
        //     ref:"User"
        // },
        title : {
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
        inStock : {
            type:Number,
            required:true
        },
        description : {
            type:String,
            required:true
        },
        category : {
            type:String,
            required:true
        },
        comments : {
            type:[commentSchema],
            required:false
        },
        seller : {
            type:String,
            required:true,
            default:"ReyyOriginals"
        },
    } ,{ timestamps:true}
);

const Product = new mongoose.model("Product",productSchema);

export default Product;