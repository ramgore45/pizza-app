const mongoose = require("mongoose")

const pizzaSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        require:true,
    },
    img:{
        type:String,
        require:true,
    },
    size:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    createdAt: { 
        type: Date, default: Date.now 
    }
})

module.exports = mongoose.model("Pizza",pizzaSchema);