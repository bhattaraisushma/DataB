import React from 'react'
import Image from 'next/image'
import photo from '../../public/Geoimg-removebg-preview.png'

function Rightside() {
  return (
    <div >
      <div className='pl-[40rem]'>
      <Image className=" mt-7 w-[60rem] pr-[7rem]"src={photo}/>
      </div>
      
    </div>
  )
}

export default Rightside