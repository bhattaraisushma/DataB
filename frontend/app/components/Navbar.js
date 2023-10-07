"use client"
import React from 'react'
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
const Navbar = () => {

  const [search,change_seach] = useState();

  return (
    <>
      <div className="navbar bg-base-100">
  <div className="flex justify-between">
    <div>
    <a className="btn hover:bg-white normal-case text-white  hover:text-black  text-xl">Home</a>
    <a className="btn  hover:bg-white  text-white  hover:text-black normal-case text-xl">Earth</a>
    <a className="btn  hover:bg-white   text-white  hover:text-black ynormal-case text-xl">Sun</a>
    <a className="btn  hover:bg-white   text-white  hover:text-black normal-case text-xl">Moon</a>
    </div>
    <input type ="text" className=" text-[1rem] text-right pr-[5rem] text ml-[13rem] h-[2rem] w-[50rem] rounded-[12rem]" onChange={(e)=> change_seach(e.target.value)}/>
    <p className='text-[2rem] absolute ml-[81rem]'> <AiOutlineSearch/></p>
        {search}

  </div>
</div>

    </>
  )
}

export default Navbar
