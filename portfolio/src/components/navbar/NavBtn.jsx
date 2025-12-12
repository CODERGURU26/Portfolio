import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";
const NavBtn = () => {
  return (
    <button className='px-4 py-2 rounded-full text-xl font-bold text-white 
    border border-cyan-500 flex items-center gap-1 
    bg-gradient-to-r from-cyan-500 to-orange-400 
    hover:scale-110 transition-all duration-500 
    shadow-lg'>
        Hire Me
        <LuArrowDownRight />
    </button>
  )
}

export default NavBtn
