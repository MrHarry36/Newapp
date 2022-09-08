import React, { useState } from 'react'
import Data from "../Api.jsx/Data"

export default function Section1() {
    const [heady]=useState(Data.sec1)
  return (
    <div>
        {heady.map((ele,i)=>{
            return(
                <div id="Home" className=' h-screen p-36' style={
                    {backgroundImage:`url(${ele.src})`,backgroundSize:"100% 100%"}
                }>
                    <div className='text-6xl font-bold w-96 mt-20'>
                    {ele.heading}

                    </div>
                    <div className='text-white w-[550px] my-4'>
                    {ele.para}
                    <button className=' bg-red-600 w-32 h-10 my-5 hover:bg-transparent'>Submint</button>

                    </div>
                    
                </div>
            )


        }
        )
    }
    
    
    </div>
  )
}
