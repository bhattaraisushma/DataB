import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFinalDate, setInitialDate, setSkip } from './redux/features/mainSlice';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

function Filter() {
  const dispatch = useDispatch();
  const skip = useSelector((state)=>state.main.skip);

  return (
    <div className='h-[45.5em] w-[18rem] top-[4rem] left-0 fixed bg-slate-700'>
      <div className='flex flex-col mt-10 items-center justify-between ' >
        <p className='text-lg text-gray-400'>Search Location</p>
      
        <input type="text" className=" text-[1rem] text-right  bg-[#1d232a]  mt-2 h-10 rounded-md" />
       <div>
          
          
          </div> 

        <div className='flex flex-col justify-between items-center mt-9'> 


            <p className='text-gray-400'>Initial Date</p>
            <input type="text" placeholder="2005-02-12" onChange={(e)=>dispatch(setInitialDate(e.target.value))} className="input mb-6 h-10 input-bordered w-52 max-w-xs" />
            <p className='text-gray-400'>Final Date</p>
            <input type="text" placeholder="2022-02-12" onChange={(e)=>dispatch(setFinalDate(e.target.value))} className="input mb-6 h-10 input-bordered w-52 max-w-xs" />


        
      </div>
      </div>

      <div className='flex flex-col items-center mt-5'>
    <div className='text-gray-400 font-bold'>
      PAGE
    </div>
        
        <div className='text-gray-400'>
            {skip/10}
        </div>

      <div className='flex space-x-5  mt-5'>
        
{

    skip <= 10 ?

        <div className='bg-blue-200  text-gray-400 text-[1.2rem] p-2 rounded-xl'>
            <AiOutlineArrowLeft />
          </div>
          :
          <div className='bg-slate-500 hover:bg-slate-800 hover:scale-[1.3] pointer-cursor transition ease-in-out duration-300 text-gray-400 text-[1.2rem] p-2 rounded-xl' onClick={()=>dispatch(setSkip(skip-10))}>
            <AiOutlineArrowLeft />
          </div>
}

{

skip >= 10000 ?

    <div className='bg-blue-200  text-gray-400 text-[1.2rem] p-2 rounded-xl'>
        <AiOutlineArrowRight />
      </div>
      :
      <div className='bg-slate-500 hover:bg-slate-800 hover:scale-[1.3] pointer-cursor transition ease-in-out duration-300 text-gray-400 text-[1.2rem] p-2 rounded-xl'  onClick={()=>dispatch(setSkip(skip+10))}>
        <AiOutlineArrowRight />
      </div>
}

      </div>

      </div>
    </div>
  )
}

export default Filter;
