import React from 'react'


function Data() {
    const data = {
        "id": "b908b06e-ec8e-4125-b762-c4ff80f13206",
                "title": "1987-2018 cyanobacteria and water quality data for 20 reservoirs",
                "url": "https://pasteur.epa.gov/uploads/10.23719/1503175/Surface_Temperatures_standardized_FINAL.xlsx",
                "short_description": "These data include cyanobacteria cell densities (including maximum cell densities observed for each year in each reservoir), annual summer (June-August) precipitation, nutrient concentrations, and May-October surface water temperatures, deep water temperatures, and deep water dissolved oxygen concentrations. \n\nThis dataset is associated with the following publication:\nSmucker, N., J. Beaulieu, C. Nietch, and J. Young. Increasingly severe cyanobacterial blooms and deep water hypoxia coincide with warming water temperatures in reservoirs.   GLOBAL CHANGE BIOLOGY. Blackwell Publishing, Malden, MA, USA, 27(11): 2507-2519, (2021).",
                "organization_name": "epa-gov",
                "photo": "https://edg.epa.gov/EPALogo.svg"
            }
  return (
    <>
    <div className='h-[20rem'>
     <div className='  pt-[1rem]  w-[50rem] ml-[24rem]  text-cyan-100 '>
       <span className='mt-[10rem] text-lg ]'>{data.title}</span>
       <div className='flex flex-row mt-[1rem] gap-[0.1rem] rounded-[12rem] text-left indent-5 align-middle'>
        <img className='bg-red-400 w-[4rem] h-[3rem]' src={data.photo}/>
       <span className='flex-column h-[3rem] w-[50rem] pt-[0.7rem]   bg-white text-black content-center indent-5 rounded-md   truncate ... overflow-hidden  mb-[2rem]'>{data.short_description}</span></div>
     </div>
     </div>
    </>
  )
}

export default Data
