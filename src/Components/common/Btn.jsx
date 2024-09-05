import React from 'react'

export const Btn = ({btnText, btnIcon, btnIcon2, bgColor, hoverColor, clickHandler, iconHandler1, iconHandler2}) => {
  return (
    <div className={`cursor-pointer w-full p-2 px-4 flex justify-center gap-x-2 rounded-full border transition duration-300 ease-in-out 
             ${bgColor} ${hoverColor ? `hover:${hoverColor}` : ''}
    `}
     onClick={clickHandler}
    >
        {
          btnIcon &&
          (
            <div className='self-center' onClick={iconHandler1}>
              {btnIcon}
            </div>
          )
        }
        {
          btnText &&
          (
            <div className='self-center'>
              {btnText}
            </div>
          )
        }
        {
          btnIcon2 &&
          (
            <div className='self-center' onClick={iconHandler2}>
              {btnIcon2}
            </div>
          )
        }
    </div>
  )
}
