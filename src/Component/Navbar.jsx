import React, { useState } from 'react'
import Data from "../Api.jsx/Data"
import { Link } from 'react-scroll'

export default function Navbar() {
  const [head]=useState(Data.Nav)
//   console.log(Data);


  return (
    <div className=''>
{head.map((e,i)=>{
    console.log(e)
    return(
        <div className=' text-2xl fixed bg-blue-200 w-full'  key={i} >
           <div className='flex justify-between my-5'>
           <h1 className='font-bold ml-10 text-3xl'>{e.heading}</h1>

        <ul className='flex justify-between font-bold mr-10 text-2xl w-[500px]'>
        {e.ulies.map((ele,i)=>{
        return(
            <li key={i}  className='hover:cursor-pointer'>
                    <Link to={ele} offset={-100} duration={500} smooth={true}>
                    {ele}
            </Link>
                </li>
        )
    })}
</ul>   
            </div>     
            {/* <div className=' h-[100px]'> <img src={e.src}/></div> */}
        </div>  
    )
})}
    </div>

    
  )
}
