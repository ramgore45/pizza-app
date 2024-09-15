import React from 'react'
import { Btn } from '../Components/common/Btn'
import pizza from '../assets/images/pizza.png'
import { Pizzas } from '../Components/menu/Pizzas'
import { FaArrowRight } from 'react-icons/fa'

export const Home = ({pizzaData}) => {

  return (
    <div className='py-5 min-h-screen'>
      {/* Seciton 1 Banner */}
      <section className='flex justify-center content-center'>
        <div className='w-1/2 self-center '>
          <div className='font-medium text-xl text-orange-600'>You are feeling Hungry?</div>
          <div className='text-6xl my-3 font-bold'>Don't Wait !</div>
          <div className=' w-fit font-medium'>
            <Btn btnText={"Order Now"} btnIcon2={<FaArrowRight/>}
              bgColor={'bg-yellow-400'} hoverColor={'bg-yellow-600'}
            />
          </div>
        </div>
        <div className='w-1/2'>
          <img src={pizza} alt='Pizza Banner'/>
        </div>
      </section>

      {/* Section 2 List of Products */}
      <section className='w-full my-10'>
        <div className='text-3xl font-bold mb-5'>Pizza Menu</div>
        <Pizzas pizzaData={pizzaData}/>
      </section>
    </div>
  )
}
