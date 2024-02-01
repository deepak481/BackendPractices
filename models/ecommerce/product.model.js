import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
    },
    productImage: {
        type: String
    },
    // We should not save images as buffer in database as it makes it heavy
    // We can save images on server or s3 bucket or cloudinary 
    // and save their urls in database -- optimized approach!!
    category: {
        type: mongoose.Schema.Type.ObjectId,
        ref: "Category",
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    owner: {
        type: mongoose.Schema.Type.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema)

// If we provide model name as products then it is saved as 
// 'products' not 'productss', mongoose is smart