import React from 'react'
import Leftside from './components/Leftside'
import Rightside from './components/Rightside'

import Image from 'next/image'
import photo from '../public/nepal-removebg-preview.png'
const Home = () => {
  return (
    <div>

    <div className='flex' >
         <Leftside/><Rightside/>
         
            </div>

             
                <div className='flex pl-[22rem] pt-[8rem]  justify-items-center'>
                  <div className="join flex items-center space-x-3">
                    <button className="btn join-item my-2 bg-slate-400 hover:bg-white text-black">Most Viewed Datasets</button>
                    <button className="btn join-item my-2 bg-slate-400 hover:bg-white text-black">Recently Added Datasets</button>
                    <button className="btn join-item my-2 bg-slate-400 hover:bg-white text-black">Datasets by Organization</button>
                  </div>
          
        
      </div>
              
            <div className=" bg-white    mt-[22rem]  pl-[10rem] rounded-2xl flex flex-row">
        <Image  className="h-[20rem]  w-[20rem] " src={photo}/>
   <div><p className='text-red-600  text-[2rem] font-semibold mt-14'>About data.gov</p>
    <p className='text-black text-lg w-[40rem]'>Lorem ipsum dolor sit amet consectetur dipisicing elit. Officiis ea provident beatae maiores neque cum adipisci a eaque. Fugit, accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt culpa odit debitis pariatur suscipit eligendi doloremque deleniti ducimus.</p>
    <button className="btn btn-info rounded-[12rem]  bg-green-400 w-[8rem] text-white mt-[5rem]  ml-10">Info</button>
  </div>
     </div>
    </div>
  )
}

export default Home
