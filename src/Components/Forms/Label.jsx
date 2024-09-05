import React from 'react'

export const Label = ({id, label}) => {
  return (
    <label for={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label} <sup className='text-red-500'>*</sup> 
    </label>
  )
}
