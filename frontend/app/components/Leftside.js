import React from 'react'
import Image from 'next/image'
import photo from '../../public/nepal-removebg-preview.png'
function Leftside() {
  return (
    <>
     <div className='  w-[50%]   text-white' >
<div className='pl-[4rem] pt-[10rem]'>
        <p className='font-semibold '>EXPLORE THE</p> 
        <p className='font-extrabold text-2xl'>  DATA WORLD </p>
        <p className='font-extrabold  '>WITH US</p>
        <p className='pt-[2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, similique.</p>
        </div>
        <div>
      
        <div className=" bg-white w-screen    mt-[22rem]  pl-[10rem] rounded-2xl flex flex-row">
        <Image  className="h-[20rem]  w-[20rem] " src={photo}/>
   <div><p className='text-red-600  text-[2rem] font-semibold mt-14'>About data.gov</p>
    <p className='text-black text-lg w-[40rem]'>Lorem ipsum dolor sit amet consectetur dipisicing elit. Officiis ea provident beatae maiores neque cum adipisci a eaque. Fugit, accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt culpa odit debitis pariatur suscipit eligendi doloremque deleniti ducimus.</p>
    <button className="btn btn-info rounded-[12rem]  bg-green-400 w-[8rem] text-white mt-[5rem]  ml-10">Info</button>
  </div>
     </div></div></div>
    </>
  )
}

export default Leftside
