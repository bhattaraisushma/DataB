"use client"
import React from 'react'
import Image from 'next/image'
import Data from '../components/Data'
const page = () => {

  
  const data = useSelector((state)=> state.main.current_display);
  console.log(data);

  return (
    <div>
      
      <div>
      <Data/>
      <Data/>
      <Data/>
      <Data/>
      </div>
    </div>
  )
}

export default page