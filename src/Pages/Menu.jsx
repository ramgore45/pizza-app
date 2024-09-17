import React from 'react';
import { Pizzas } from '../Components/menu/Pizzas'; // Ensure the path to Pizzas component is correct

export const Menu = ({ pizzaData }) => {
  return (
    <div className='bg-gray-100 min-h-screen py-10'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl text-orange-500 font-bold text-center mb-8'>Pizza Menu</h1>
        <section className='flex flex-col items-center'>
          {/* Additional Filters or Sorting Options */}
          <div className='w-full flex justify-end max-w-2xl mb-6'>
            {/* Example filter */}
            <select className=' p-2 border border-gray-300 rounded-lg'>
              <option value="">Sort by: Popularity</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>

          <div className='w-full max-w-4xl'>
            {/* Render the list of pizzas */}
            <Pizzas pizzaData={pizzaData} />
          </div>
        </section>
      </div>
    </div>
  );
};

