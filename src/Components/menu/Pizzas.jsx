import React from 'react'
import { pizzaItems } from '../../data/PizzaData'
import { PizzaCard } from './PizzaCard'

export const Pizzas = () => {
  return (
    <div className='flex flex-wrap w-full gap-4'>
        {
            pizzaItems.map((pizza)=>(
                <PizzaCard pizza={pizza}/>
            ))
        }
    </div>
  )
}
