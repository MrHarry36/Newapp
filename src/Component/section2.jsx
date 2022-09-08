import React, { useState } from 'react'
import Data from "../Api.jsx/Data"
import Cardchild from "./cardchild"

export default function Section2() {
    const[head]=useState(Data.sec2)
    return(
    <div>
         {head.map((ele,i)=>{
            return(
                <div id="About" className='my-10' key={i}>
                    {ele.heading}
                    

<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 container_fluid">
    <div className='sm:mx-20 md:mx-0'>
<Cardchild />

    </div>
    <div className='sm:mx-20 md:mx-0'>
<Cardchild />

    </div>
    <div className='sm:mx-20 md:mx-0'>
<Cardchild />

    </div>
</div>
                </div>
            )
         }
         )}
    </div>
    )
}
