import React from 'react'
import { navLinks } from '../constants' 

const SideBar = ({isSideBarOpen, setIsSideBarOpen}) => {
    const handleBarClick = () => {
        setIsSideBarOpen(!isSideBarOpen)
    }
  return (
    // Will add transition to sidebar
    <div className={`bg-slate-600 fixed right-0 top-0 py-16 p-4 w-[200px] h-svh z-20 max-lg:block hidden`}>
        <p onClick={handleBarClick} className='text-white absolute top-3 right-5 font-bold text-xl cursor-pointer'>X</p>
        <ul className='flex flex-col gap-20'>
        {navLinks.map(item => (
            <li key={item.label}>
            <a className='font-montserrat leading-normal text-lg text-white border-b-2 border-gray-300 pb-1 hover:border-b-2 hover:border-coral-red transition-all duration-300 ease-in-out' href={item.href}>{item.label}</a>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default SideBar
