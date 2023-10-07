"use client"
import { React } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplay, setSearch } from './redux/features/mainSlice';
import { usePathname, useRouter } from 'next/navigation';
import api from './axios';

const Navbar = () => {


  const search = useSelector((state) => state.main.search);

  const dispatch = useDispatch();

  const router = useRouter();

  const pathname = usePathname();

  const initial_date = useSelector((state)=> state.main.initial_date);
  const final_date = useSelector((state)=> state.main.final_date);

  
  const textKey = (e) => {

    if (e.keyCode == 13) {
      getData();
    }

  }

  async function getData() {
    console.log("getting data...");

    const params = {
      query: search,
      limit: 10,
      initial_date: initial_date,
      final_date:final_date,

    }

    let response = null;

    try {
      response = await api.get('/search', {
        params: params
      })
    } catch (error)
    {
      // handle error
    }

    const response_data = response.data;
    // console.log(response_data)
    dispatch(setDisplay(response_data))
  }


  function handleSearchChange(e) {
    console.log(pathname)
    if (!pathname.includes("/search")) {

        router.push('/search')
      
    }
    
    dispatch(setSearch(e.target.value));
    // console.log(search);
  }

  return (
    <>
      <div className="navbar  bg-black sticky top-0">
        <div className="flex justify-between">
          <div>
            <div className="text-[#656667] btn btn-ghost  hover:bg-[#edf5fd] normal-case text- 
             xl" onClick={()=>router.push('/')}>Home</div>
            <div className="text-[#656667] btn btn-ghost  hover:bg-[#edf5fd] normal-case text- 
             xl" onClick={()=>router.push('/temp')}>Temperature</div>
            <div className="text-[#656667] btn btn-ghost  hover:bg-[#edf5fd] normal-case text-  
             xl" onClick={()=>router.push('/preci')}>Prepetation</div>
            <div className="text-[#656667] btn btn-ghost  hover:bg-[#edf5fd] normal-case text- 
             xl" onClick={()=>router.push('/search')}>Search</div>
          </div>
          <input type="text" className=" text-[1rem] text-right pr-[5rem] text ml-[13rem] h-[2rem] w-[50rem] rounded-[12rem]" onChange={(e) => handleSearchChange(e)} onKeyDown={(e) => textKey(e)} />
          <p className='text-[2rem] absolute ml-[81rem]'> <AiOutlineSearch /></p>



        </div>

      </div>

    </>
  );
};

export default Navbar;
