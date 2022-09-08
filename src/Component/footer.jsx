import React, { useState } from 'react'
import Data from "../Api.jsx/Data"

export default function Footer() {
    const [head]=useState(Data.ftr)
  
  
    return (
      <div className='bg-black mt-10'>
 
          <div className=''  >
             <div className='flex justify-between py-5 text-white bg-black'>
             <h1 className='text-center   w-full'>{head.heading}</h1>  
              </div>     
              {/* <div className=' h-[100px]'> <img src={e.src}/></div> */}
          </div>  
      
      </div>
  
      
    )
  }
  