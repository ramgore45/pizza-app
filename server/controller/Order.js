const Order = require('../model/order')

exports.buyPizza = async(req, res)=>{
    try{
        const {pizzas, totalAmount, address, contact} = req.body
        // console.log("buy pizza",pizzas)
        const userId = req.user.id
        // console.log(userId)

        if(pizzas.length===0 || !userId || !totalAmount || !address || !contact){
            return res.status(400).json({
                        success:false,
                        message:"please provide valid order datails. userId, pizzaId, address, totalmount, contact missing"
             })
        }

        const order = await Order.create({
            address:address,
            contact:contact,
            totalAmount:totalAmount,
            customerid:userId,
        })

        // console.log("order created",order)

        for(const pizza of pizzas){

            try{

                const { _id, count } = pizza;

                const item = await Order.findByIdAndUpdate(
                    {_id:order._id},
                    {$push:{
                        items:{pizzaId:_id, count:count}
                    }},
                    {new:true}
                )

                console.log("for each added item", item)

            }catch(error){

                console.log(error)
                return res.status(404).json({
                    success:false,
                    message:"Item push failed"
                })
                
            }

        }

        console.log("After pizza id successfully addded", order)

        return res.status(200).json({
            success:true,
            data:order,
            message:"Order placed successfully"
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"order placed failed, some internal error occured"
        })
    }
}

exports.getUserOrders = async(req, res) => {
    try{
        const userId = req.user.id

        if(!userId){
            return res.status(404).json({
                success:false,
                message:"UserId is invalid not present."
            })
        }

        const orders = await Order.find(
                            {customerid:userId},
                            {
                                address:true,
                                contact:true,
                                totalAmount:true,
                                customerid:true,
                                items:true,
                                paymentType:true,
                                status:true,
                                createdAt: true,
                            }
                        ).populate({
                            path: "items",
                            populate:{
                                path:"pizzaId"
                            }
                        })
                        .sort({ createdAt: -1 })
                        .exec()

        console.log(orders)

        return res.status(200).json({
            success:true,
            data:orders,
            message:"Users All orders are fetched successfully"
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Internal server issues while fetch order dtails"
        })
    }
}

exports.getAllOrders = async(req,res)=>{
    try{

        const userId = req.user.id
        // console.log("getAllOrders is USer is", userId)
        const orders = await Order.find(
                            {},
                            {
                                address:true,
                                contact:true,
                                totalAmount:true,
                                customerid:true,
                                items:true,
                                paymentType:true,
                                status:true,
                                createdAt: true,
                            }
                        )
                        .populate("customerid")
                        .populate({
                            path: 'items',
                            populate:{
                                path:"pizzaId"
                            }
                        })
                        .sort({ createdAt: -1 })
                        .exec()

        console.log(orders)

        return res.status(200).json({
            success:true,
            data:orders,
            message:"All orders are fetch succefully"
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Internal server errors, failed get all orders"
        })
    }
}

exports.getSingleOrder = async(req,res)=>{
    try{
        const { orderId } = req.body
        const userId = req.user.id

        if(!orderId || !userId){
            return res.status(404).json({
                success:false,
                message:"Missing crediationals userId and orderId"
            })
        }

        const order = await Order.findById(
                            {_id:orderId},
                            {
                                address:true,
                                contact:true,
                                totalAmount:true,
                                customerid:true,
                                items:true,
                                paymentType:true,
                                status:true,
                                createdAt: true,
                            }
                            ).populate({
                                path: "items",
                                populate:{
                                    path:"pizzaId"
                                }
                            })
                            .sort({ createdAt: -1 })
                            .exec()
    
    console.log("order details fetch succefully",order)

    return res.status(200).json({
        success:true,
        order,
        message:"Order details fetch Successfully."
    })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'Unable to fetch single order'
        })
    }
}

exports.updateOrderStatus = async(req,res)=>{
    try{
        const {orderId, status} = req.body
        console.log("updateOrderStatus", req.body)

        if(!orderId || !status){
            return res.status(400).json({
                success:false,
                message:"Miising orderId and status of order"
            })
        }

        const order = await Order.findByIdAndUpdate(
                                    {_id:orderId},
                                    {
                                        status:status,
                                        updatedAt:Date.now()
                                    }
                                )
        
        console.log(order)

        return res.status(200).json({
            success:true,
            order,
            message:"Order Status update succefully"
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Some internal error occur during updating order status"
        })
    }
}