import React from 'react'
import Image from 'next/image'
import photo from '../../public/Geoimg-removebg-preview.png'

function Rightside() {
  return (
    <div >
      <div className='pl-[40rem]'>
      <Image className=" mt-7 w-[40rem] "src={photo}/>
      </div>
      <div>
        <section>
          <div className="join join-vertical">
            <button className="btn join-item my-2 ">Most Viewed Datasets</button>
            <button className="btn join-item my-2">Recently Added Datasets</button>
            <button className="btn join-item my-2">Datasets by Organization</button>
          </div>
      
        </section>
      </div>
    </div>
  )
}

export default Rightside