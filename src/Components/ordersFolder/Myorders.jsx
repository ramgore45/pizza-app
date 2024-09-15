import React, { useEffect, useState } from 'react'
import { buyPizzaHandler, fetchMyOrdersHandler } from '../../operations/orderFunctions'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import moment from 'moment'
import { NavLink } from 'react-router-dom'

export const Myorders = ({orders}) => {

    console.log(orders)

  return (
    <div >
        <div className='text-3xl font-bold'>
            My Orders
        </div>

        <table className='w-full mt-5' border={2}>
            <tr className='text-xl'>
                <th>Order No</th>
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
                            <NavLink to={`/myorders/${order._id}`}>
                                <td className='text-center text-red-500 cursor-pointer underline underline-offset-1'>{order._id}</td>
                            </NavLink>
                            <td className='text-center'>{order.address}</td>
                            <td className='text-center'>{order.status}</td>
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
