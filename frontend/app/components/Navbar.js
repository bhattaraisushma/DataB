"use client"
import {React} from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplay, setSearch } from './redux/features/mainSlice';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {

  
  const search = useSelector((state)=> state.main.search);
  
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const textKey = (e)=>{

    if (e.keyCode ==13){
      getData();
    }
    
  }

  async function getData(){
    console.log("getting data...");
    const response = await fetch('http://127.0.0.1:8000/search?query=global+warming&limit=10',{
      
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
      
    },
  }
  );

  const response_json = await response.json();
  const data = response_json['data'];
  console.log(data);

    // dispatch(setDisplay(data));

  }
  

  function handleSearchChange(e) 
  {
      console.log(pathname)
     if (!pathname.includes("/search")) {

       router.push('/search');
      // console.log('router');   
     }
    
    //  console.log(search);
     dispatch(setSearch((e.target.value)))


  };

  

  console.log(search);

  return (
    <>
      <div className="navbar  bg-[#1d232a]">
  <div className="flex justify-between">
    <div>
    <a className="text-[#a6adba] btn btn-ghost bg-[#1d232a] hover:bg-[#383f47] normal-case text-xl">Home</a>
    <a className="text-[#a6adba] btn btn-ghost bg-[#1d232a] hover:bg-[#383f47] normal-case text-xl">Earth</a>
    <a className="text-[#a6adba] btn btn-ghost bg-[#1d232a] hover:bg-[#383f47] normal-case text-xl">Sun</a>
    <a className="text-[#a6adba] btn btn-ghost bg-[#1d232a] hover:bg-[#383f47] normal-case text-xl">Moon</a>
    </div>
    <input type ="text" className=" text-[1rem] text-right pr-[5rem] text ml-[13rem] h-[2rem] w-[50rem] rounded-[12rem]" onChange={(e)=>handleSearchChange(e)} onKeyDown={(e)=>textKey(e)}/>
    <p className='text-[2rem] absolute ml-[81rem]'> <AiOutlineSearch/></p>



  </div>

</div>

    </>
  )
}

export default Navbar
