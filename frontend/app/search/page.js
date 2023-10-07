"use client"
import React from 'react'
import { useSelector } from 'react-redux';

const page = () => {

  
  const data = useSelector((state)=> state.main.current_display);
  console.log(data);

  return (
    <div>
      
      <div>
              {data &&
  data.map((e)=>{
    return (
      <div key={e.id}>

      <h1 className="text-center text-3xl font-bold"> {e.id}</h1>
      <h2 className="text-center text-xl font-bold"> {e.title}</h2>
      <h3 className="text-center text-lg font-bold"> {e.url}</h3>
        
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