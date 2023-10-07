"use client"
import React from 'react'
import Image from 'next/image'
import Data from '../components/Data'
import { useSelector } from 'react-redux'
import Filter from '../components/Filter'
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
      <Data/>
      <Filter/>
      </div>
    </div>
  )
}

export default page