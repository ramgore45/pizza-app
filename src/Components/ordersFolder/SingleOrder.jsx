import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { statusList } from '../../data/StatusData'
import toast from 'react-hot-toast'
import { fetchSingleOrderHandler } from '../../operations/orderFunctions'
import { useSelector } from 'react-redux'
import moment from 'moment'

export const SingleOrder = () => {

    const {orderId} = useParams()
    const {token} = useSelector(state=> state.auth)
    const [order,setOrder] = useState([])
    console.log(order)

    const currentStatusIndex = statusList.findIndex(item => item.value === order.status);

    useEffect(()=>{
        ;(async()=>{
                try{
                    const response = await fetchSingleOrderHandler(orderId, token)
                    if(!response.data.success){
                        return toast.error(response.data.message)
                    }
                    setOrder(response.data.order)
                    toast.success("Fetch order details succefully")
                }catch(error){
                    console.log(error)
                    toast.error("Fetch order detailes failed")
                }
            }
        )()
    },[])

  return (
    <div>
        { 
            order.length !== 0 ? (
                <div className='w-2/3 h-fit m-auto mt-6'>
                    <div className='flex justify-between mb-6'>
                        <h1 className='text-3xl font-bold '>Track Order</h1>
                        <div className='p-2 px-6 text-green-500 rounded-full bg-white'>{order._id}</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-1/2 flex flex-col gap-12'>
                            {
                                statusList.map((item, index)=>{

                                    const isCurrentStatus = index === currentStatusIndex;
                                    const isPreviousStatus = index < currentStatusIndex;
                                    const isNextStatus = index === currentStatusIndex + 1;

                                    const textColor = isCurrentStatus || isPreviousStatus ? 'text-gray-500' : isNextStatus ? 'text-orange-500' : 'text-black';
                                    const lineColor = isCurrentStatus || isPreviousStatus ? 'bg-gray-500' : 'bg-black';
                                    const dotColor = isCurrentStatus || isPreviousStatus ? 'bg-gray-500' : isNextStatus ? 'bg-orange-500' : 'bg-black';
                                    
                                    return(
                                    <div className={`relative ${textColor}`}>
                                        <div className='flex justify-between'>
                                            <div className='flex gap-x-4 text-xl'>
                                                {item.icon}
                                                <span className={`w-3 h-3 rounded-full self-center ${dotColor}`}></span>
                                                <span className='self-center'>{item.status}</span>
                                            </div>
                                            <div className='self-center mr-5'>
                                                {moment(order.updatedAt).format('hh:mm a')}
                                            </div>
                                        </div>
                                        {item.status!=="Order Completed" &&
                                            (<p className={`absolute left-[69px] top-10 h-16 w-[3px] bg-black ${lineColor}`}></p>)
                                        }
                                    </div>
                                )})
                            }
                        </div>
                        <div className='w-1/3 '>
                            <div className='text-2xl font-medium mb-5'>Order Details</div>
                            <table className='w-full '>
                                <tr>
                                    <th>Name</th>
                                    <th>Size</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                </tr>
                                {
                                    order.items.map((order)=>(
                                        <tr >
                                            <td className='text-center'>{order.pizzaId?.name}</td>
                                            <td className='text-center'>{order.pizzaId?.size}</td>
                                            <td className='text-center'>{order.pizzaId?.price}</td>
                                            <td className='text-center'>{order.count}</td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                    </div>
                </div>
            ): (
                <div>
                    Order Details is fetching
                </div>
            )

        }
    </div>
  ) 
}
