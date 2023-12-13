import React from 'react';
import { juegos } from '../f'
import '../css/estilo.css'
export const Card = () => {
  return (
    <div  className='justify-betwee flex flex-wrap gap-8 content-around'>
    {juegos.map(juegos =>(
        <div className='flex flex-col  bg-[#071936]  mb-8 min-[650px]:w-[310px] w-[250px] max-[350px]:w-[200px] ' id='cards'>
           
           <img src={juegos.img} className='w-full min-[650px]:h-[400px] h-[300px] max-[350px]:h-[300px]' />
           <div className='px-5'>
           <h1 className='text-xl text-white  max-[450px]:text-lg '>{juegos.nombre}</h1>
           <br />
           </div>
           <div className='p-5 pt-0  bottom-0 items-end'>
               <h5  className='text-white text-2xl '>{juegos.precio} USD</h5>
               <button className='bg-yellow-500 text-black font-bold rounded-lg w-full p-4 hover-traslate-y-1 transition-all duration-200 hover:bg-yellow-300'>
                   Comprar
               </button>
           </div>
        </div> 
        ))} 
    </div>
  )
}

