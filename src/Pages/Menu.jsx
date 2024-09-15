import React from 'react'
import { Pizzas } from '../Components/menu/Pizzas'

export const Menu = ({pizzaData}) => {
  return (
    <div className='flex'>
      <section className='w-full my-10'>
        <div className='text-3xl font-bold mb-5'>Pizza Menu</div>
        <Pizzas pizzaData={pizzaData}/>
      </section>
    </div>
  )
}
