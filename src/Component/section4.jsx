import React, { useState } from 'react'
import Data from "../Api.jsx/Data"

export default function Section4() {
    const[head]=useState(Data.sec4)
  return (
    <div>
        {head.map((ele,i)=>{
          return(
        <>
            <div id="Contact" className='my-10' key={i}>
                <h1 className='text-center font-bold text-3xl'>
                {ele.heading}
                </h1>
                <p className='text-center mt-3 '>
                    {ele.para}
                </p>
            </div>
            <div className='grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10 mx-10'>

                {ele.images.map((e,i)=>{
                    return(

                        <img key={i} className='w-full h-[40vh]' src={e} alt="" />
                    )
                })}

            </div>
            <div className='flex items-center justify-center '>

            <button className='border bg-red-500 text-white text-center my-10 px-8 py-3 rounded hover:bg-blue-500'>Show More</button>
            </div>
        </>
          )
        })}
        
    </div>
  )
}
