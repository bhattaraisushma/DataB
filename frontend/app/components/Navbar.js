import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
  <div className="flex justify-between">
    <div>
    <a className="btn btn-ghost normal-case text-xl">Home</a>
    <a className="btn btn-ghost normal-case text-xl">Earth</a>
    <a className="btn btn-ghost normal-case text-xl">Sun</a>
    <a className="btn btn-ghost normal-case text-xl">Moon</a>
    </div>
    <input type ="text" className=" text-[1rem] text-right pr-[5rem] text ml-[13rem] h-[2rem]  w-[50rem] rounded-[12rem]"/>
    <p className='text-[2rem] absolute ml-[81rem]'> <AiOutlineSearch/></p>
  
  </div>
</div>

    </>
  )
}

export default Navbar
