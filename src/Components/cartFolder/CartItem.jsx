import React from 'react'
import { AiFillMinusCircle } from 'react-icons/ai'
import { IoIosAddCircle } from 'react-icons/io'
import { MdOutlineCurrencyRupee } from 'react-icons/md'
import { TiDelete } from 'react-icons/ti'
import { minusItem, plusItem } from '../../reducer/slices/cartSlice'

export const CartItem = ({pizza, removeFromCart, dispatch}) => {

    function deleteHandler(item){
        console.log("delete handler")
        dispatch(removeFromCart(item))
    }

    function incrementCountHandler(item){
        console.log("Increment Count")
        dispatch(plusItem(item))
    }

    function decrementCountHandler(item){
        console.log("Decrement Count")
        if(pizza.count>1){
            dispatch(minusItem(item))
        }else{
            dispatch(removeFromCart(item))
        }
    }

  return (
    <div className='py-6 flex justify-between border-b-2'>
        <div className='flex gap-2 self-center'>
            <div className='w-28' >
                <img className='w-full'
                    src={require(`../../${pizza.img}`)} alt='pizza-template'
                />
            </div>
            <div className='self-center'>
                <div className='text-xl font-medium mb-1'>{pizza.name}</div>
                <div className='text-lg text-gray-500 capitalize'>{pizza.size}</div>
            </div>
        </div>
        <div className='flex justify-between w-1/2'>
            <div className='flex gap-x-2 self-center'>
                <AiFillMinusCircle className='self-center cursor-pointer' onClick={()=>decrementCountHandler(pizza)}/>
                {pizza.count} Pcs
                <IoIosAddCircle className='self-center cursor-pointer' onClick={()=>incrementCountHandler(pizza)}/>
            </div>
            <div className='text-xl flex self-center'>
                <MdOutlineCurrencyRupee className='self-center text-lg'/> {pizza.price}
            </div>
            <div className='self-center text-xl text-red-500 flex cursor-pointer'
                onClick={()=>deleteHandler(pizza)}
            >
                <TiDelete className='self-center'/>
            </div>
        </div>
    </div>
  )
}
