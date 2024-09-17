import React, { useEffect, useState } from 'react'
import { Myorders } from '../Components/ordersFolder/Myorders'
import { useSelector } from 'react-redux'
import { fetchMyOrdersHandler } from '../operations/orderFunctions'
import toast from 'react-hot-toast'
import { io } from 'socket.io-client'

const socket = io()

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
      
      socket.on('orderStatusUpdate', (data) => {
        setOrders(prevOrders => {
          return prevOrders.map(order => 
            order._id === data.id ? { ...order, status: data.status } : order
          );
        });
      });
  
      return () => {
        socket.off('orderStatusUpdate');
      };
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
