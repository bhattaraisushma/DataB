import React from 'react'
import { useDispatch } from 'react-redux';
import { setFinalDate, setInitialDate } from './redux/features/mainSlice';
function Filter() {
  const dispatch = useDispatch();

  return (
    <div className='h-[45.5em] w-[18rem] top-[4rem] left-0 fixed bg-slate-400'>
      <div className='flex flex-col items-center justify-between ' >
        <p className='text-lg text-black'>Search Location</p>
      
        <input type="text" className=" text-[1rem] text-right  bg-white text  mt-2 h-[2rem] w-[14rem] rounded-[12rem]" />
       <div>
          
          
          </div> 

        <div className='flex flex-col justify-between items-center mt-9'> 


            <p className='text-white'>Initial Date</p>
            <input type="text" placeholder="2005-02-12" onChange={(e)=>dispatch(setInitialDate(e.target.value))} className="input mb-6 h-10 input-bordered w-52 max-w-xs" />
            <p className='text-white'>Final Date</p>
            <input type="text" placeholder="2022-02-12" onChange={(e)=>dispatch(setFinalDate(e.target.value))} className="input mb-6 h-10 input-bordered w-52 max-w-xs" />


        
      </div>
      </div>
    </div>
  )
}

export default Filter
