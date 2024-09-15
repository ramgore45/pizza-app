const express = require("express")
const router = express.Router()


const { getAllOrders, buyPizza, getUserOrders, updateOrderStatus, getSingleOrder } = require("../controller/Order")
const { auth, isAdmin, isCustomer } = require("../middleware/auth")

router.get('/getallorders' , auth, isAdmin, getAllOrders)
router.post('/updateorderstatus' , auth, isAdmin, updateOrderStatus)


router.post('/buypizza' , auth, isCustomer, buyPizza)
router.get('/getmyorders' , auth, isCustomer, getUserOrders)
router.post('/getsingleorder' , auth, isCustomer, getSingleOrder)


module.exports = router