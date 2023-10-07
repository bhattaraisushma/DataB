import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
function Filter() {
  return (
    <div>
      <div className='h-full w-[18rem] absolute top-[0rem] bg-slate-400 z-1 ' >
        <p className=' flex-col items-center ml-2 mt-4 text-lg text-black'> Search Location</p>
      
       <div><input type="text" className=" text-[1rem] text-right  bg-white pr-[5rem] text  mt-2 h-[2rem] w-[14rem] rounded-[12rem]" />
          <p className='text-[2rem] absolute top-[3.3rem] ml-[10rem]'> <AiOutlineSearch /></p></div> 

        <div className='flex justify-between items-center mt-9'> 
        
        
        <div className="dropdown">
            <label tabIndex={0} className="btn m-1">Click</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>2005</a></li>
                <li><a>2010</a></li>
                <li><a>2015</a></li>
                <li><a>2020</a></li>
        
                  </ul>
            </div>
        
            <div className="dropdown dropdown-end">


                <label tabIndex={0} className="btn">To </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>2005</a></li>
                <li><a>2010</a></li>
                <li><a>2015</a></li>
                <li><a>2020</a></li>
                </ul>

        </div>
        
      </div>
      </div>
    </div>
  )
}

export default Filter
