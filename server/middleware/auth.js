const User = require('../model/user')
const JWT = require("jsonwebtoken")

exports.auth = async(req,res,next)=>{
    try{
        const token = req.header("Authorization").replace("Bearer ", "") || req.cookies.token || req.body.token
        if(!token){
            return res.status(400).json({
                success:false,
                message:"Token is missing."
            })
        }

        try{
            const decode = await JWT.verify(token, process.env.JWT_SECRET)
            req.user = decode
        }catch(error){
            console.log(error)
            return res.status(400).json({
                success:false,
                message:"Token is invalid"
            })
        }

        next()

    }catch(error){
        console.log(error)
        return res.status(400).json({
            success:false,
            message:"Authorization is Failed"
        })
    }
}

exports.isCustomer = async(req, res, next)=>{
    try{
        const user = await User.findOne({email:req.user.email})
        if(user.accountType !=="Customer"){
            return res.status(404).json({
                success:false,
                message:"This route is protected for customer."
            })
        }
        next()
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"User is not Valid"
        })
    }
}

exports.isAdmin = async(req, res, next)=>{
    try{
        const user = await User.findOne({email:req.user.email})
        if(user.accountType !=="Admin"){
            return res.status(404).json({
                success:false,
                message:"This route is protected for admin."
            })
        }
        next()
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"User is not Valid"
        })
    }
}