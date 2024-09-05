import React, { useState } from 'react'
import { Emptycart } from '../Components/cartFolder/Emptycart'
import { Fullcart } from '../Components/cartFolder/Fullcart'
import { useSelector } from 'react-redux'

export const Cart = () => {

  const {cart} = useSelector(state=>state.cart)
  console.log(cart)

  return (
    <div className='w-full flex justify-center pt-8'>
      {
        cart.length === 0 ? 
        (
          <Emptycart/>
        ):(
          <Fullcart/>
        )

      }
    </div>
  )
}
