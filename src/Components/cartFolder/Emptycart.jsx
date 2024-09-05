import React from 'react'
import emptyCart from '../../assets/images/emptyCart.webp'
import { Btn } from '../common/Btn'
import { NavLink } from 'react-router-dom'

export const Emptycart = () => {
  return (
    <div className='w-full flex flex-col justify-center gap-2 self-center'>
        <div className='text-4xl font-bold self-center'>Cart Empty</div>
        <div className='text-gray-500 font-medium self-center'>
          You probably haven't added a pizza in your cart to order.
        </div>
        <div className='font-medium self-center'>
          <NavLink to={'/'}>
            <Btn btnText={'Go To Menu'} bgColor={'bg-orange-400'} hoverColor={'bg-orange-600'}/>
          </NavLink>
        </div>

        <div className='w-6/12 self-center'>
          <img  className='w-full' 
            src={emptyCart} alt='Empty Cart'/>
        </div>
    </div>
  )
}
