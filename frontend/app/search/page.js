"use client"
import React, { useEffect } from 'react'
import Data from '../components/Data'
import { useDispatch, useSelector } from 'react-redux'
import Filter from '../components/Filter'
import Image from 'next/image'
import imamge from '../../public/default.png'
import { useState } from 'react'
import { setDisplay, setFinalDate,setInitialDate, setSearch } from '../components/redux/features/mainSlice'

const Page = () => {

  
  const data = useSelector((state)=> state.main.current_display);
  const search = useSelector((state)=> state.main.search);

  const dispatch = useDispatch();

  const [selected,setSelected] = useState({});
  
  // console.log("data");
  // console.log(data);

  useEffect(() =>{

    // dispatch(setInitialDate("2005-02-12"));
    // dispatch(setFinalDate("2020-02-12"));
    // dispatch(setSearch(""));
    // dispatch(setDisplay([]));

  },[])


  function handleSelected(s) {

    document.getElementById('my_modal_2').showModal();
    setSelected(s);

  }

  return (
    <div className='flex'>
      <div className='h-full' >

        
      <Filter />

      </div>
      
      <div className='flex w-screen pl-24 flex-col justify-between items-center'>

       {data.length === 0 ? 
       <div className='h-[24.5rem] text-red-600 mt-20'>

          no results found

       </div>  
       
       : 
       <div>
        <p className='p-6'>
              Search Results for {search}
            </p>

          
        
        {
       data.map((d)=>{
        return(
          
          <div className='pb-5' onClick={()=>handleSelected(d)} key={d.id}> 

            <Data data={d}/>
          
          </div>

        ) 
       }
       
       )
      }
       </div>
        
      }
      <div>
        
    <dialog id="my_modal_2" className="modal ">
      <div className="flex flex-col m-5 items-center max-w-6xl modal-box">
      
      {
        !selected.photo ?
         <Image className=" " src={imamge} width={70} height={70} alt={"ERROR"} />
        :
        <img className=" " src={selected.photo} alt={selected.title} />

}      
        <h3 className="font-bold text-lg">{selected.title}</h3>
        <p className="py-4">{selected.short_description}</p>

        <a href={selected.url} className='border border-r-amber-800 p-3 rounded-md'>LINK</a>

      </div>
      
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog></div>

      
      </div>
    </div>
  )
}

export default Page