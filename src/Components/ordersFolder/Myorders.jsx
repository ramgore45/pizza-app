import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { FaShoppingCart } from 'react-icons/fa'; // Add an icon
import { Btn } from '../common/Btn';
import { MdOutlineCurrencyRupee } from 'react-icons/md';

export const Myorders = ({ orders }) => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>My Orders</h1>

      {orders.length === 0 ? (
        <div className='text-center py-10'>
          <FaShoppingCart className='text-gray-400 text-6xl mb-4 mx-auto' /> {/* Icon */}
          <p className='text-lg text-gray-600 mb-4'>You have no orders yet.</p>
          <p className='text-gray-500 mb-6'>It looks like you haven't placed any orders yet. Start exploring our menu and make your first order today!</p>
          <NavLink to={'/menu'}>
            <Btn btnText={'Go To Menu'} bgColor={'bg-orange-400'} hoverColor={'bg-orange-600'}/>
          </NavLink>
        </div>
      ) : (
        <table className='w-full mt-5 border-collapse border border-gray-200'>
          <thead>
            <tr className='text-xl bg-gray-100 border-b border-gray-300'>
              <th className='px-4 py-2 border-r border-gray-300 text-center'>Order No</th>
              <th className='px-4 py-2 border-r border-gray-300 text-center'>Contact / Address</th>
              <th className='px-4 py-2 border-r border-gray-300 text-center'>Status</th>
              <th className='px-4 py-2 border-r border-gray-300 text-center'>Total Amount</th>
              <th className='px-4 py-2 border-r border-gray-300 text-center'>Payment Type</th>
              <th className='px-4 py-2 text-center'>Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className='text-lg font-medium border-b border-gray-200'>
                <td className='text-center text-red-500 cursor-pointer underline underline-offset-2 px-4 py-2 border-r border-gray-300'>
                  <NavLink to={`/myorders/${order._id}`}>{order._id}</NavLink>
                </td>
                <td className='px-4 py-2 border-r border-gray-300 text-center'>
                    <p>{order.contact},</p>
                    <p>{order.address}</p>
                </td>
                <td className='px-4 py-2 border-r border-gray-300 text-center'>{order.status}</td>
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
