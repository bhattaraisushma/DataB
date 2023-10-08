import React from 'react'
import Leftside from './components/Leftside'
import Rightside from './components/Rightside'

import Image from 'next/image'
import photo from '../public/nepal.jpg'
import Footer from './components/Footer'

const Home = () => {
  return (

  <div className='bg-[url("../public/background.jpg")]'>

    <div className='flex ' >
         <Leftside/><Rightside/>
         
            </div>

             
                <div className='flex pl-[22rem] pt-[8rem]  justify-items-center'>
                  <div className="join flex justify-center items-center bg-[#1d232a] bg-opacity-40 w-[50rem]  h-[10rem] space-x-3">
                    <button className="btn join-item my-2  bg-slate-400 hover:bg-white text-black">
                      Most Viewed Datasets
                      </button>
                    <button className="btn join-item my-2 bg-slate-400 hover:bg-white text-black">Recently Added 
                     Datasets</button>
                    <button className="btn join-item my-2 bg-slate-400 hover:bg-white text-black">Datasets by 
                     Organization</button>
                  </div>
          
        
      </div>
              
            <div className=" bg-[#061e41]   flex flex-row">
              
              <Image alt="nepal" className="h-[20rem] m-10 w-[20rem] rounded-[25%]  " src={photo}/>

        <div>

          <p className='text-[#ddd] text-[2rem] font-semibold mt-14'>
            
            About data.gov
          </p>
            
            <p className='text-[#aaa] text-lg w-[40rem]'>Lorem ipsum dolor sit amet consectetur dipisicing elit. Officiis ea provident beatae maiores neque cum adipisci a eaque. Fugit, accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt culpa odit debitis pariatur suscipit eligendi doloremque deleniti ducimus.</p>
            
            <button className="btn btn-info rounded-[12rem]  bg-lime-600 w-[8rem] text-white mt-[5rem]  ml-10 
     mb-[5rem]">Info</button>

  </div>
     </div>
     <Footer />
    </div>
  )
}

export default Home
