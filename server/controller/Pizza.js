const Pizza = require("../model/pizza")

exports.getAllPizza=async(req,res)=>{
    try{
        const getPizzaData = await Pizza.find(
            {},
            {
                _id:true,
                id:true,
                name:true,
                img:true,
                size:true,
                price:true
            }
        );

        return res.status(200).json({
            success:true,
            data:getPizzaData,
            message:"Successfully fetch all pizzas data."
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Can't fetch pizzas data"
        })
    }
}