const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    totalAmount:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    customerid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    items:[
        {
            pizzaId:{
                type:mongoose.Schema.Types.ObjectId,
                require:true,
                ref:"Pizza"
            },
            count: { type: Number, default: 1 }
        }
    ],
    paymentType:{
        type:String,
        default:"COD"
    },
    status:{
        type:String,
        default:"order_placed"
    },
    createdAt: { 
        type: Date, default: Date.now 
    },
    updatedAt: { 
        type: Date, default: Date.now 
    }
})

module.exports = mongoose.model("Order", orderSchema);