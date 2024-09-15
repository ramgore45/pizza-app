import React from 'react'
import { pizzaItems } from '../../data/PizzaData'
import { PizzaCard } from './PizzaCard'

export const Pizzas = ({pizzaData}) => {

  console.log(pizzaData)

  return (
    <div className='flex flex-wrap w-full gap-4'>
        {
            pizzaData.map((pizza)=>(
                <PizzaCard pizza={pizza}/>
            ))
        }
    </div>
  )
}
