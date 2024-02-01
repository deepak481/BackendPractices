import mongoose from "mongoose"

const orderItemSchema = new  mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new  mongoose.Schema({
    orderPrice: {
        type: Number,
        default: 0,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderItemSchema]
        //we can also do like type: [{productId: '...', quantity: '...'}] 
        // but this is not a professional approach.
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"], 
        //enum ==> enumerations to limit user to choose from 
        // these options only, and if a single spelling mistake 
        // happen it will use default
        default: "PENDING"
    }
}, {timestamps: true})

export const Order = mongoose.model("Order", orderSchema)