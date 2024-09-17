import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { statusList } from '../../data/StatusData'
import toast from 'react-hot-toast'
import { fetchSingleOrderHandler } from '../../operations/orderFunctions'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { MdOutlineCurrencyRupee } from 'react-icons/md'
import { io } from 'socket.io-client'

export const SingleOrder = () => {

    const {orderId} = useParams()
    const {token} = useSelector(state=> state.auth)
    const [order,setOrder] = useState([])
    console.log(order)
    const [socket, setSocket] = useState(null);

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
    },[order._id, token])

    useEffect(() => {
        // Initialize socket connection
        const newSocket = io(); // Replace with your server URL
        setSocket(newSocket);

        return () => {
            // Clean up socket on component unmount
            newSocket.disconnect();
        };
    }, []);

    useEffect(() => {
        if (socket && order._id) {
            socket.emit('join', `order_${order._id}`);

            socket.on('orderStatusUpdate', (data) => {
                if (data.id === order._id) {
                    setOrder(prevData => ({ ...prevData, status: data.status }));
                }
            });

            return () => {
                socket.off('orderStatusUpdate');
            };
        }
    }, [socket, order._id]);

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
                                            {/* <div className='self-center mr-5'>
                                                {moment(order.updatedAt).format('hh:mm a')}
                                            </div> */}
                                        </div>
                                        {item.status!=="Order Completed" &&
                                            (<p className={`absolute left-[69px] top-10 h-16 w-[3px] bg-black ${lineColor}`}></p>)
                                        }
                                    </div>
                                )})
                            }
                        </div>
                        <div className='w-[45%]'>
                            <div className='text-2xl font-medium mb-5'>Order Details</div>
                            <table className='w-full border-collapse border border-gray-200'>
                                <tr className='bg-gray-100 border-b border-gray-300'>
                                    <th className='px-4 py-2 border-r border-gray-300 text-center'>Name</th>
                                    <th className='px-4 py-2 border-r border-gray-300 text-center'>Size</th>
                                    <th className='px-4 py-2 border-r border-gray-300 text-center'>Price</th>
                                    <th className='px-4 py-2 text-left'>Qty</th>
                                </tr>
                                {
                                    order.items.map((order)=>(
                                        <tr key={order.pizzaId._id} className='border-b border-gray-200'>
                                            <td className='px-4 py-2 border-r border-gray-300 text-left'>{order.pizzaId?.name}</td>
                                            <td className='px-4 py-2 border-r border-gray-300 text-center'>{order.pizzaId?.size}</td>
                                            <td className='px-4 py-2 border-r border-gray-300 text-center'>{order.pizzaId?.price}</td>
                                            <td className='px-4 py-2 text-center'>{order.count}</td>
                                        </tr>
                                    ))
                                }
                            </table>
                            <div className='flex flex-col gap-4 mt-5'>
                                <div>
                                    <span>Contact Details : </span><span className='self-center text-2xl font-medium'>{order.contact}</span>
                                </div>
                                <div>
                                    <span>Address Details : </span><span className='self-center text-2xl font-medium'>{order.address}</span>
                                </div>
                                <div className='flex gap-x-2'>
                                    <span className='self-center'>Total Amount : </span> <MdOutlineCurrencyRupee className='mt-1 self-center'/><span className='self-center text-2xl font-medium text-orange-600'>{order.totalAmount}</span>
                                </div>
                            </div>
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
