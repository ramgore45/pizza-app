import React from 'react'

export const Inputfield = ({id, name, type, placeholder, autocomplete}) => {
  return (
    
        <div className="mt-1">
            <input required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm 
              ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                id={id} 
                placeholder={placeholder}
                name={name}
                type={type} 
                autocomplete={autocomplete} 
            />
        </div>
  )
}
