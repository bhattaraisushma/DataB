import React from 'react'
import { useRouter } from 'next/navigation'


function Data({data}) {
  
        const router = useRouter();
  return (
    <>
    <div className='hover:scale-110 h-[9.9em] w-[50rem] duration-300 ease-in-out cursor-pointer'>
     <div className=' rounded-md bg-[#3b3b3b] h-full text-cyan-100 '>
        <div className='flex items-center space-x-6'>

        <img className=' text-white w-[4rem] h-[3rem]' src={data.photo}/>
        <span className='text-lg'>{data.title}</span>
        
        </div>

      <div className='ml-10 mt-2 rounded-[12rem]'>
      <p className="line-clamp-4  text-white">
  {data.short_description}
</p>
</div>
     </div>
     </div>
    </>
  )
}

export default Data
