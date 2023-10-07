"use client"
import React from 'react'
import Data from '../components/Data'
import { useSelector } from 'react-redux'
import Filter from '../components/Filter'
const page = () => {

  
  const data = useSelector((state)=> state.main.current_display);
  const search = useSelector((state)=> state.main.search);
  
  // console.log("data");
  // console.log(data);

  return (
    <div className='flex'>
      <div className='h-full' >

        
      <Filter />

      </div>
      
      <div className='flex w-screen pl-24 flex-col justify-between items-center'>

       {data.length === 0 ? 
       <div className='h-[24.5rem] text-red-600 mt-20'>

          no results found

       </div>  
       
       : 
       <div>
        <p className='p-6'>
              Search Results for {search}
            </p>
        
        {
       data.map((d)=>{
        return(
          
          <div className='pb-5' key={d.id}> 

            <Data data={d}/>
          
          </div>

        ) 
       }
       
       )
      }
       </div>
        
      }

      
      </div>
    </div>
  )
}

export default page