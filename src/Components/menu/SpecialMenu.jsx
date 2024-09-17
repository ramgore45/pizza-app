import React from 'react';
import { Link } from 'react-router-dom';
import pizza from '../../assets/images/pizza.png'
import { useSelector } from 'react-redux';

const specialItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh mozzarella, tomatoes, and basil.',
    imageUrl: pizza, // Replace with your actual image URL
    link: '/order/margherita'
  },
  {
    id: 2,
    name: 'Pepperoni Pizza',
    description: 'Loaded with spicy pepperoni slices and gooey cheese.',
    imageUrl: pizza, // Replace with your actual image URL
    link: '/order/pepperoni'
  },
  {
    id: 3,
    name: 'Veggie Supreme',
    description: 'Packed with a variety of fresh vegetables and feta cheese.',
    imageUrl: pizza, // Replace with your actual image URL
    link: '/order/veggie-supreme'
  },
  // Add more special items as needed
];

export const SpecialMenu = () => {

    const {user} = useSelector(state=> state.auth)

  return (
    <div className="w-11/12 max-w-maxContent mx-auto my-12">
      <h2 className="text-3xl text-orange-500 font-bold text-center mb-8">Our Special Menu</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {specialItems.map(item => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs">
            <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              {(user===null || user.accountType === "Customer") &&
                (
                    <Link to={'/menu'}>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                            Order Now
                        </button>
                    </Link>
                )
              }
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
