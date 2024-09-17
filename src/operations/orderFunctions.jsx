import toast from "react-hot-toast";
import { emptyCart } from "../reducer/slices/cartSlice";
import { ordersEndPoints } from "./api";
import { apiConnector } from "./apiconnector";

const {GET_ALL_ORDERS_URL, GET_MY_ORDERS_URL, GET_SINGLE_ORDERDETAILES_URL, BUY_PIZZA_URL, UPDATE_ORDER_STATUS_URL} = ordersEndPoints

export const buyPizzaHandler = async(pizzas, totalAmount, address, contact, token, navigate, dispatch)=>{
    try{
        const orderResponse = await apiConnector("POST",BUY_PIZZA_URL,{
                                                    pizzas, totalAmount, address, contact
                                                },
                                                {
                                                    Authorization:`Bearer ${token}`,
                                                }
                                            )
        
        console.log(orderResponse)

        if(!orderResponse.data.success){
            throw new Error(orderResponse.data.message)
        }
        dispatch(emptyCart())
        navigate('/myorders')
        toast.success("Order placed done successfully")

    }catch(error){
        console.log(error)
        toast.error("Order placed failed")
    }
}

export const fetchMyOrdersHandler = async(token)=>{
    try{
        return await apiConnector("GET", GET_MY_ORDERS_URL,
                                {token},
                                {
                                    Authorization:`Bearer ${token}`,
                                }
                            )
    }catch(error){
        console.log(error)
        toast.error("Unable to fetch my orders")
    }
}

export const fetchSingleOrderHandler = async(orderId,token)=>{
    try{
        console.log("fetching singOrder Handler",orderId)
        return await apiConnector("POST", GET_SINGLE_ORDERDETAILES_URL,
                                    {orderId, token},
                                    {
                                        Authorization:`Bearer ${token}`,
                                    }
                                )
    }catch(error){
        console.log(error)
        toast.error("Fetching order details failed")
    }
}

export const fetchAllOrdersHandler = async(token)=>{
    try{
        return await apiConnector("GET", GET_ALL_ORDERS_URL,
                                {token},
                                {
                                    Authorization:`Bearer ${token}`,
                                }
                            )
    }catch(error){
        console.log(error)
        toast.error("Unable to fetch my orders")
    }
}

export const updateOrderStatusHandler = async(orderId, status, token, socket)=>{
    try{
        const response = await apiConnector("POST", UPDATE_ORDER_STATUS_URL,
                                            {orderId, status, token},
                                            {
                                                Authorization:`Bearer ${token}`,
                                            }        
                                        )

        console.log(response)
        if (response.data.success) {
            toast.success("Order status updated successfully");

            // Notify other clients
            if (socket) {
                socket.emit('updateOrderStatus', { _id: orderId, status:status });
            }
        }
        toast.success("Order status update successfully.")
        return
    }catch(error){
        console.log(error)
        toast.error("Updating order status Failed")
    }
}