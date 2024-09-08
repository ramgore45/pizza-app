import React from 'react'
import pizzalogo from '../../assets/logos/pizzalogo.png'
import { navItems } from '../../data/NavData'
import { Btn } from './Btn'
import { LuLogIn } from 'react-icons/lu'
import { MdAddShoppingCart } from 'react-icons/md'
import { matchPath, NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaBars } from 'react-icons/fa'

export const Navbar = ({totalCount}) => {

    const location = useLocation()
    const {token} = useSelector(state=> state.auth)

    const matchroute=(route)=>{
        return matchPath({path:route}, location.pathname)
    }
    
  return (
    <div className='flex bg-white content-center justify-between px-20 py-2 border-b shadow-md shadow-gray-200'>
        {/* Logo */}
        <div className='self-center'>
            <img className='h-14 cursor-pointer '
                src={pizzalogo} alt='Pizza Website'
            />
        </div>

        {/* Navitems */}
        <div className='flex gap-x-8 self-center justify-center content-center'>
            {/* nav */}
            <nav className='flex gap-x-6 self-center justify-center content-center text-lg font-semibold'>
                {
                    navItems.map((item)=>(
                        <div className='flex'>
                            <NavLink to={item.path}>
                                <div className={`cursor-pointer py-1 border-b-4 
                                    hover:border-orange-500 hover:scale-105 transition duration-300 ease-in-out
                                    ${matchroute(item.path) ? "border-orange-500" : "border-transparent"}
                                    `}>
                                    {item.page}
                                </div>
                            </NavLink>
                        </div>
                    ))
                }
            </nav>

            {/* Buttons */}
            <div className='flex gap-x-4 self-center justify-center content-center font-medium'>
                {token===null &&
                    (
                        <NavLink to={'/login'}>
                            <Btn btnIcon={<LuLogIn/>} btnText={'Login'} bgColor={'bg-orange-400'} hoverColor={'bg-orange-500'}/>
                        </NavLink>
                    )
                }
                {token===null &&
                    (
                        <NavLink to={'/signup'}>
                            <Btn btnIcon={<LuLogIn/>} btnText={'Signup'} bgColor={'bg-orange-400'} hoverColor={'bg-orange-500'}/>
                        </NavLink>
                    )     
                }
                <NavLink to={'/cart'}>
                    <div className='relative w-fit'>
                        {
                            totalCount>0 && (
                                <div className='absolute animate-bounce right-0 -top-1 bg-yellow-400 rounded-full w-5 h-5 text-center text-sm'>
                                    {totalCount}
                                </div>
                            )
                        }
                        <Btn btnIcon={<MdAddShoppingCart/>} btnText={'Cart'} bgColor={'bg-orange-400'} hoverColor={'bg-orange-500'}/>                   
                    </div>
                </NavLink>
                {token !== null &&
                    (
                        <div className='ml-2 flex self-center'>
                            <FaBars className="text-xl " />
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}
