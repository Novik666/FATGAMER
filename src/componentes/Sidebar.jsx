import React from 'react'
import { genero, plataforma } from '../f'

export const Sidebar = () => {
    return (
    <div className=' w-full top-0 left-0 lg:w-[300px]  h-[1000px]  text-black max-[650px]:hidden'>
        {/*chasificar tipoo*/}
        <div className='bg-[#3a314b] rounded-xl p-5 text-xl w-[300px]'>
            <h4 className='py-5' >Precio(BOB)</h4>
            <form className='flex items-center justify-between gap-2'>
                <div className='relative'>
                <input type="number" className='bg-white pr-4 py-2 pl-5 rounded-xl outline-none w-full'/>
                </div>
                <samp>-</samp>  
                <div>
                <input type="number" className='bg-white px-4 py-2 pl-5 rounded-xl outline-none w-full'/>
                </div>
                
            </form>
            <h4 className='py-4'>Categorias</h4>
            {genero.map(genero =>(
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-3'>
                    <input type="checkbox" id='Independiente' className='accent-yellow-400'/>
                    <label >{genero.genero}</label>
                </div>
            </div> 
            ))}  
            {/*chasificar plaaformar*/}
            <h4 className='py-4'>Plataforma</h4>
            {plataforma.map(plataforma =>(
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-3'>
                    <input type="checkbox" id='Independiente' className='accent-yellow-400'/>
                    <label >{plataforma.plataforma}</label>
                </div>
            </div> 
            ))}  
        </div>
        
    </div>
    )
}


