import React, { useState } from 'react'
import Data from "../Api.jsx/Data"

export default function Section3() {
    const[head]=useState(Data.sec3)

  return (
    <div>
        {head.map((ele,i) => {
            return(
                <>
                
                <div id="Blog" className='text-center bg-gray-200 text-3xl my-5 font-bold' key={i}>
                    {ele.heading}
                </div>
                <div className='lg:grid-cols-2 grid-cols-1 grid'>
                    <div><img src={ele.src} alt="" /></div>
                    <div className='mt-36'>
                        <div className='text-3xl font-bold ml-5'>

                    {ele.heading}
                        </div>

                        <p className='ml-5 my-5'>

                    {ele.para}
                        </p>
                    <button className=' bg-red-600 w-32 h-10 my-5 ml-5 hover:bg-blue-500 text-white'>Submint</button>

                    </div>


                </div>
                </>
            )

        }
        
        
        )}
    </div>
  )
}
