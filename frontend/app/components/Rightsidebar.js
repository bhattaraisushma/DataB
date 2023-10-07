import React from 'react'
import Image from 'next/image'
import photo from '../../public/Geoimg.jpeg'

function Leftsidebar() {
  return (
    <div >
      <div>
      <Image className="flex mt-4 ml-10 float-right w-60 rounded-auto mr-4 "src={photo}/>
      </div>
      <div>
        <section>
          <div className="join join-vertical">
            <button className="btn join-item mt-2">Most Viewed Datasets</button>
            <button className="btn join-item mt-2">Recently Added Datasets</button>
            <button className="btn join-item mt-2">Datasets by Organization</button>
          </div>
      
        </section>
      </div>
    </div>
  )
}

export default Leftsidebar