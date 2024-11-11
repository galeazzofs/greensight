import { useState } from 'react'
import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>GREEN SIGHT</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Sobre</li>
            <li className='p-4'>Serviços</li>
            <li className='p-4'>Contato</li>
            <li className='p-4 border-2 border-[#00df9a] rounded-lg cursor-pointer bg-[#00df9a] text-white font-medium'>
            <Link to="/login">Login</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
            
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>GREEN SIGHT</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Sobre</li>
                <li className='p-4 border-b border-gray-600'>Serviços</li>
                <li className='p-4 border-b border-gray-600'>Contato</li>
                <li className='p-4'>Login</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar