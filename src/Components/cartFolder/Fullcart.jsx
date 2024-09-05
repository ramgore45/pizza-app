import React, { useContext, useState } from 'react'
import { Btn } from '../common/Btn'
import { MdDeleteOutline, MdOutlineCurrencyRupee } from 'react-icons/md'
import { TiShoppingCart } from 'react-icons/ti'
import { CartItem } from './CartItem'
import { LuLogIn } from 'react-icons/lu'
import { FaArrowCircleRight } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart,emptyCart } from '../../reducer/slices/cartSlice'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../contextapi/ContextApi'

export const Fullcart = () => {

    const navigate = useNavigate()
    const {logIn} = useContext(AppContext)

    const {cart,totalAmount,totalCount} = useSelector(state=> state.cart)
    const dispatch = useDispatch()

  return (
    <div className='w-8/12 flex flex-col gap-4'>
        
        <div className='text-3xl font-bold flex gap-2'>
            <TiShoppingCart className='self-center' />Order Summary
        </div>
        
        <div>
            {
                cart.map((pizza)=>(
                    <CartItem key={pizza.id} pizza={pizza} 
                        removeFromCart={removeFromCart} dispatch={dispatch}
                    />
                ))
            }
        </div>

        <div className='flex justify-between'>
            <div className='font-medium '>
                 <Btn 
                    clickHandler={()=>dispatch(emptyCart())}
                    btnText={'Empty Cart'} btnIcon={<MdDeleteOutline />} 
                    bgColor={'bg-red-500'}/>
            </div>
            <div className='flex self-center'>
                <span className='self-center font-medium'>Total pieces : </span>
                <span className='text-xl font-medium text-orange-600 flex self-center ml-1'>
                     {totalCount}
                </span>
            </div>
            <div className='flex self-center'>
                <span className='self-center font-medium'>Total amount : </span>
                <span className='text-xl font-medium text-orange-600 flex justify-center self-center'>
                    <MdOutlineCurrencyRupee className='self-center'/> {totalAmount}
                </span>
            </div>
        </div>
        <div className='self-end w-[40%]'>
            <input className='w-full outline-none rounded-md border border-black p-2 placeholder:text-black placeholder:font-medium'
                type='text'
                placeholder='Pizza delivery address'
            />
        </div>
        <div className='text-white self-end font-medium'>
            <Btn 
                clickHandler={logIn ? ()=>console.log('btn') : ()=>navigate('/login') }
                btnIcon={logIn ? <FaArrowCircleRight/> : <LuLogIn/>}
                btnText={ logIn ?'Order Now':'Login To Continue'} 
                bgColor={'bg-red-500'} hoverColor={'bg-color-700'}
            />
        </div>
    </div>
  )
}
