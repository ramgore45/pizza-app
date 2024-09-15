const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique: true,
    },
    password:{
        type:String,
        require:true,
    },
    confirmPassword:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true
    },
    contactNumber:{
        type:Number,
        require:true
    },
    accountType :{
        type:String,
        default:'Customer',
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    token:{
        type:String,
    },
    createdAt: { 
        type: Date, default: Date.now 
    }
})

module.exports = mongoose.model("User", userSchema);