import React, { useEffect, useState } from 'react'
import { Btn } from '../common/Btn'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { MdOutlineCurrencyRupee } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, minusItem, plusItem, removeFromCart } from '../../reducer/slices/cartSlice'
import { FiMinusCircle } from 'react-icons/fi'

import pizzaImg from '../../assets/images/pizza.png'

export const PizzaCard = ({pizza}) => {

    const [item,setItem] = useState()
    const [count, setCount]  =useState('')
    const {cart} = useSelector(state=> state.cart)
    const isInCart =()=>{
        setItem(cart.find((item)=> item.id===pizza.id))
    }

    // console.log(item)

    const dispatch = useDispatch()

    function addToCartHandler(item){
        console.log("addoCart")
        dispatch(addToCart(item))
    }

    function incrementCountHandler(item){
        console.log("Increment Count")
        dispatch(plusItem(item))
    }

    function decrementCountHandler(item){
        console.log("Decrement Count")
        if(count>1){
            dispatch(minusItem(item))
        }else{
            dispatch(removeFromCart(item))
        }
    }

    useEffect(()=>{
        isInCart()
        if(item){
            console.log(item)
            setCount(item.count)
        }
    },[addToCartHandler, incrementCountHandler, decrementCountHandler])


  return (
    <div className='flex flex-col gap-2 bg-white p-4 border rounded-md shadow-md shadow-gray-300 text-sm w-[23.5%] 
        hover:scale-105 transition duration-300 ease-in-out 
    '>
        <div className='flex'>
            <img className='w-full ' src={pizza.img} alt={pizza.name}/>
        </div>
        <div className='flex justify-between font-semibold mx-2'>
            <div className='text-xl'>{pizza.name}</div>
            <div className='text-base text-gray-600'>{pizza.size}</div>
        </div>
        <div className='flex justify-between font-semibold mx-1'>
            <div className='text-lg text-gray-600 flex self-center'>
                <MdOutlineCurrencyRupee className='self-center'/> {pizza.price}
            </div>
            <div className=''>
                {
                    item ? 
                    (
                        <Btn 
                            btnText={count} 
                            btnIcon2={<IoIosAddCircleOutline />}
                            iconHandler2={()=>incrementCountHandler( pizza)} 
                            btnIcon={<FiMinusCircle/>} 
                            iconHandler1={()=>decrementCountHandler(pizza)}
                            bgColor={'bg-gray-300'} hoverColor={'bg-gray-500'} 
                        />
                    ):(
                        <Btn 
                            btnText={"Add"} 
                            btnIcon={<IoIosAddCircleOutline/>} 
                            bgColor={'bg-red-400'} hoverColor={'bg-red-600'} 
                            clickHandler={()=>addToCartHandler(pizza)}
                        />
                    )
                }
            </div>
            {/* <Btn btnText={"Remove"} clickHandler={()=>dispatch(removeFromCart(pizza))}/> */}
        </div>
    </div>
  )
}
