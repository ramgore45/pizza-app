import React, { useEffect, useState } from 'react'
import { Allorders } from '../Components/ordersFolder/Allorders'
import { useSelector } from 'react-redux'
import { fetchAllOrdersHandler } from '../operations/orderFunctions'
import toast from 'react-hot-toast'
import { io } from 'socket.io-client'

const socket = io()

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
      
      socket.on('orderStatusUpdate', (data) => {
        setOrders((prevOrders) => {
          prevOrders.map(order => 
            order._id === data.id ? { ...order, status: data.status } : order
          );
        });
      });
  
      return () => {
        socket.off('orderStatusUpdate');
      };
  },[token])

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
