import moment from 'moment'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { updateOrderStatusHandler } from '../../operations/orderFunctions'
import toast from 'react-hot-toast'
import { statusList } from '../../data/StatusData'



export const Allorders = ({orders}) => {

    const {token} = useSelector(state=> state.auth)
    const [selectedStatus, setSelectedStatus] = useState()

    const handleUpdateStatus=(event ,id)=>{
        const status = event.target.value
        setSelectedStatus(status)
        console.log("handleUpdateStatus",id, status, token)
        if(status && id && token){
            return updateOrderStatusHandler(id,status,token)
        }else{
            toast.error("Status or Id is missing")
        }

    }

  return (
    <div>
        <div className='text-3xl font-bold'>
            All Orders
        </div>

        <table className='w-full'>
            <tr className='text-xl'>
                <th>Order No</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Status</th>
                <th>Total Amount</th>
                <th>Payment Type</th>
                <th>Time</th>
            </tr>
            {orders.length>0 &&
                orders.map((order)=>{
                    return (
                        <tr className="text-lg font-medium">
                            <td className='text-center'>
                                <div className=' text-red-500'>{order._id}</div>
                                <div >
                                    {
                                        order.items.map((pizza)=>(
                                            <div className='text-sm'>
                                                {pizza.pizzaId?.name} - {pizza.pizzaId?.size} - {pizza.pizzaId?.price} - {pizza.count}
                                            </div>
                                        ))
                                    }
                                </div>
                            </td>
                            <td className='text-center'>{order.customerid.name}</td>
                            <td className='text-center'>{order.contact}</td>
                            <td className='text-center'>{order.address}</td>
                            <td className='text-center'>
                                <select className='rounded-md m-2 p-1 px-2 border cursor-pointer border-black' 
                                    value={selectedStatus===order.status? selectedStatus : order.status}
                                    onChange={(event)=>handleUpdateStatus(event,order._id)}
                                >
                                    {
                                        statusList.map((item)=>(
                                            <option value={item.value}>
                                                {item.status}
                                            </option>
                                        ))
                                    }
                                </select>
                            </td>
                            <td className='text-center'>{order.totalAmount}</td>
                            <td className='text-center'>{order.paymentType}</td>
                            <td className='text-center'>{moment(order.createdAt).format('MMMM Do YYYY, h:mm a')}</td>
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}
