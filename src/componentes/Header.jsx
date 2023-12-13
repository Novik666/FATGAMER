import React, { useState } from 'react';
import { GrCart } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import '../css/estilo.css'
export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <div className='flex px-full bg-[#0b0418] z-40 items-center  px-[13%]' id='header'>
        
    
    <header className='text-gray-300 px-10 max-[650px]:px-0 py-4 flex items-center justify-between bg-[#0b0418] z-40 w-full'>
    {/*movil y  tabled*/}
        <button onClick={() => setShowMenu(!showMenu)} className='min-[650px]:hidden text-2xl'>
        <AiOutlineMenu />
        </button>
        
    <div className={`fixed left-0 bg-[#0b0418] w-[70%] h-[50%] z-50 transition-all ${
          showMenu ? "top-0" : "-top-full"
        }`}>
    
        <button  onClick={() => setShowMenu(!showMenu)} className='text=3xl p-4'> 
        <IoCloseSharp />
        </button>
    <ul className=' text-white items-center '>
        <li >
            <a href='#' className='hover:text-yellow-300 transition-colors'>Home</a>
        </li>
        <li>
            <a href='#' className='hover:text-yellow-300 transition-colors'>Streams</a>
        </li>
        <li>
            <a href='#' className='hover:text-yellow-300 transition-colors'>Catalogo</a>
        </li>
        <li>
            <a href='#' className='hover:text-yellow-300 transition-colors'>Nuevo</a>
        </li>
    </ul>
    </div>

    {/*PC*/}
    
    <ul className='flex items-center gap-6  max-[650px]:hidden'> 
        <li>
            <a href='#' className='hover:text-yellow-300 transition-colors'>Home</a>
        </li>
        <li>
            <a href='#' className='hover:text-yellow-300 transition-colors'>Streams</a>
        </li>
        <li>
            <a href='#' className='hover:text-yellow-300 transition-colors'>Catalogo</a>
        </li>
        <li>
            <a href='#' className='hover:text-yellow-300 transition-colors'>Nuevo</a>
        </li>
    </ul>
    
    
    <ul className=' flex items-center gap-6 text-xl ;'>
        <li >
            <button className='hover:text-yellow-300 transition-colors'><img src='https://img.freepik.com/foto-gratis/
            joven-casual-posando_144627-29197.jpg' className='w-8 h-8 object-cover rounded-full'/></button>
        </li>
        <li>
        <button className='hover:text-yellow-300 transition-colors'><GrCart/></button>
        </li>
    </ul>
    
    

    
    </header>
    

    
   
    
    </div>
    
    </>
  )
}

