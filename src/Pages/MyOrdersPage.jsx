import React, { useEffect, useState } from 'react'
import { Myorders } from '../Components/ordersFolder/Myorders'
import { useSelector } from 'react-redux'
import { buyPizzaHandler, fetchMyOrdersHandler } from '../operations/orderFunctions'
import toast from 'react-hot-toast'

export const MyOrdersPage = () => {

  const [orders, setOrders] = useState([])
  const {token} = useSelector(state=> state.auth)

  useEffect(()=>{
      const fetchMyOrders = async()=>{
          try{
              const response = await fetchMyOrdersHandler(token)
              if(!response.data.success){
                  return toast.error(response.data.message)
              }
              setOrders(response.data.data)
          }catch(error){
              console.log(error)
              throw Error(error)
          }
      }
      fetchMyOrders()
      console.log(orders)
  },[])

  return (
    <div>
        {
          orders.length===0 ? (
            <div>
              No orders yet,
              Order Now
            </div>
          ):(
            <Myorders orders={orders}/>
          )
        }
    </div>
  )
}
