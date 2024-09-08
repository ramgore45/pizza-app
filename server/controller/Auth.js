
require("dotenv").config()
const bcrypt = require("bcrypt")
const JWT = require('jsonwebtoken')
const User = require('../model/user')

exports.signUp = async (req , res) => {
    try{
        console.log("Sign up start")
        const {name, email, password, confirmPassword} = req.body

        if(!name || !email || !password || !confirmPassword){
            return res.status(403).json({
                suuccess:false,
                message:"Please fill the all details."
            })
        }

        if(password!==confirmPassword){
            return res.status(403).json({
                success:false,
                message:"Password and Confirm Password should match"
            })
        }

        const isUserPresent = await User.findOne({email})

        if(isUserPresent){
            return res.status(403).json({
                success:false,
                message:'User already exists. Please try with another email.'
            })
        }

        const hashPasword = await bcrypt.hash(password,10)

        const user = await User.create({
            name, email, confirmPassword, 
            password:hashPasword, 
            image:`https://api.dicebar.com/5.x/initials/svg?seed=${name}`,
            contactNumber:null,
            address:null
        })

        return res.status(200).json({
            success:true,
            user:user,
            message:"Signing up of new user successfully done."
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            success : false,
            message : "Error while signing up, failed"
        })
    }
}

exports.logIn = async(req,res)=>{
    try{
        const {email, password} = req.body

        if(!email || !password){
            return res.status(403).json({
                success:false,
                message:"PLease fill all the details."
            })
        }

        const user = await User.findOne({email})

        if(!user){
            return res.status(403).json({
                success:false,
                message:'User not exists with this email. Please Sign up.'
            })
        }

        const hashPassword = await bcrypt.compare(password, user.password)

        if(!hashPassword){
            return res.status(403).json({
                success:false,
                message:"Password is not matched"
            })
        }

        const token = await JWT.sign(
            {email:user.email, id:user._id},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        )

        user.token = token
        user.password = undefined

        const options = {
            expires: new Date(Date.now() + 1000*60*60*24),
            httpOnly:true,
        }

        res.cookie('token', token, options).status(200).json({
            success:true,
            user,
            token,
            message:"User is log in succefully."
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Error in user login, failed."
        })
    }
}