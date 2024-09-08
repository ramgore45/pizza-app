const mongoose = require("mongoose")

const pizzaSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    img:{
        type:URL,
        require:true,
    },
    size:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    }
})

module.exports = mongoose.model("Pizza",pizzaSchema);