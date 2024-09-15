import toast from "react-hot-toast"
import { pizzaEndpoints } from "./api"
import { apiConnector } from "./apiconnector"

const {GET_PIZZA_URL} = pizzaEndpoints

export const fetchAllPizzaDetails =async()=>{
    try{
        const response = await apiConnector("GET", GET_PIZZA_URL)
        console.log(response)
        const pizzas = response.data
        console.log(pizzas)
        toast.success("Successfully fetch all details")
    }catch(error){
        console.log(error)
        throw Error(error)
    }
}