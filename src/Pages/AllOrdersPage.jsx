import React, { useEffect, useState } from 'react'
import { Allorders } from '../Components/ordersFolder/Allorders'
import { useSelector } from 'react-redux'
import { fetchAllOrdersHandler } from '../operations/orderFunctions'
import toast from 'react-hot-toast'

export const AllOrdersPage = () => {

  const [orders, setOrders] = useState([])
  console.log("all orders",orders)
  const {token} = useSelector(state=> state.auth)

  useEffect(()=>{
      const fetchAllOrders = async()=>{
          try{
              const response = await fetchAllOrdersHandler(token)
              if(!response.data.success){
                  return toast.error(response.data.message)
              }
              setOrders(response.data.data)
          }catch(error){
              console.log(error)
              throw Error(error)
          }
      }
      fetchAllOrders()
      console.log(orders)
  },[])

  return (
    <div>
        {
          orders.lenght===0 ? (
            <div>
              No orders yet,
              Order Now
            </div>
          ):(
            <Allorders orders={orders}/>
          )
        }
    </div>
  )
}
