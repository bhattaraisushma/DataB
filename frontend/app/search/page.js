"use client"
import React from 'react'
import Image from 'next/image'
import Data from '../components/Data'
import { useSelector } from 'react-redux'

const page = () => {

  
  const data = useSelector((state)=> state.main.current_display);
  console.log(data);

  return (
    <div>
      
      <div className=''>

       {data && data.map((d)=>{
        return(
            
          <div className='pt-5' key={d.id}> 

            <Data data={d}/>
          
          </div>

        ) 
       }
       )
      }

      
      </div>
    </div>
  )
}

export default page