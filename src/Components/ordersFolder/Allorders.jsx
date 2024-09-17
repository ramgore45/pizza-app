import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { updateOrderStatusHandler } from '../../operations/orderFunctions';
import toast from 'react-hot-toast';
import moment from 'moment';
import { statusList } from '../../data/StatusData';
import { io } from 'socket.io-client';
import { MdOutlineCurrencyRupee } from 'react-icons/md';

export const Allorders = ({ orders }) => {
    const { token } = useSelector((state) => state.auth);
    const [socket, setSocket] = useState(null);

    // Initialize socket connection on component mount
    useEffect(() => {
        const newSocket = io(); // Assumes your Socket.IO server is on the same origin
        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, []);

    const handleUpdateStatus = (event, id) => {
        const status = event.target.value;
        if (status && id && token) {
            updateOrderStatusHandler(id, status, token, socket)
                .then(() => toast.success("Order status updated"))
                .catch((error) => toast.error("Failed to update order status"));
        } else {
            toast.error("Status or Id is missing");
        }
    };

    return (
        <div className='p-4'>
            <h1 className='text-3xl font-bold mb-6'>All Orders</h1>

            {orders.length === 0 ? (
                <div className='text-center py-10'>
                    <p className='text-lg text-gray-600'>No orders available.</p>
                    <p className='text-gray-500'>It looks like there are no orders currently. Please check back later.</p>
                </div>
            ) : (
                <table className='w-full mt-5 border-collapse border border-gray-200'>
                    <thead>
                        <tr className='text-xl border-b border-gray-200'>
                            <th className='px-4 py-2 border-r border-gray-300 text-center'>Order No</th>
                            <th className='px-4 py-2 border-r border-gray-300 text-center'>Name</th>
                            <th className='px-4 py-2 border-r border-gray-300 text-center'>Contact</th>
                            <th className='px-4 py-2 border-r border-gray-300 text-center'>Address</th>
                            <th className='px-4 py-2 border-r border-gray-300 text-center'>Status</th>
                            <th className='px-4 py-2 border-r border-gray-300 text-center'>Total Amount</th>
                            <th className='px-4 py-2 border-r border-gray-300 text-center'>Payment Type</th>
                            <th className='px-4 py-2 text-center'>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id} className='text-lg font-medium border-b border-gray-200'>
                                <td className='px-4 py-2 border-r border-gray-300 text-center'>
                                    <div className='text-red-500'>{order._id}</div>
                                    <div>
                                        {order.items.map((pizza, index) => (
                                            <div key={index} className='flex gap-x-1 text-sm'>
                                                {pizza.pizzaId?.name} - {pizza.pizzaId?.size} - <MdOutlineCurrencyRupee className='self-center'/>${pizza.pizzaId?.price} - {pizza.count}
                                            </div>
                                        ))}
                                    </div>
                                </td>
                                <td className='px-4 py-2 border-r border-gray-300 text-center'>{order.customerid?.name}</td>
                                <td className='px-4 py-2 border-r border-gray-300 text-center'>{order.contact}</td>
                                <td className='px-4 py-2 border-r border-gray-300 text-center'>{order.address}</td>
                                <td className='px-4 py-2 border-r border-gray-300 text-center'>
                                    <select
                                        className='rounded-md m-2 p-1 px-2 border cursor-pointer border-black'
                                        value={order.status}
                                        onChange={(event) => handleUpdateStatus(event, order._id)}
                                    >
                                        {statusList.map((item) => (
                                            <option key={item.value} value={item.value}>
                                                {item.status}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                                <td className='px-4 py-2 border-r border-gray-300 text-center'>
                                    <div className='flex gap-x-1'><MdOutlineCurrencyRupee className='self-center'/>{order.totalAmount.toFixed(2)}</div>
                                </td>
                                <td className='px-4 py-2 border-r border-gray-300 text-center'>{order.paymentType}</td>
                                <td className='px-4 py-2 text-center'>{moment(order.createdAt).format('MMMM Do YYYY, h:mm a')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
