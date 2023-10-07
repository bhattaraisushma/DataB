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

  const pathname = usePathname();

  const textKey = (e) => {

    if (e.keyCode == 13) {
      getData();
    }

  }

  async function getData() {
    console.log("getting data...");

    const params = {
      query: search,
      limit: 1
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
    console.log(response_data)
  }


  function handleSearchChange(e) {
    console.log(pathname)
    if (!pathname.includes("/search")) {

      //  console.log(search);
      dispatch(setSearch(e.target.value));
    }

    console.log(search);
  }

  return (
    <>
      <div className="navbar  bg-black sticky top-0">
        <div className="flex justify-between">
          <div>
            <a className="text-[#656667] btn btn-ghost  hover:bg-[#edf5fd] normal-case text- 
             xl">Home</a>
            <a className="text-[#656667] btn btn-ghost  hover:bg-[#edf5fd] normal-case text- 
             xl">About</a>
            <a className="text-[#656667] btn btn-ghost  hover:bg-[#edf5fd] normal-case text-  
             xl">Contact</a>
            <a className="text-[#656667] btn btn-ghost  hover:bg-[#edf5fd] normal-case text- 
             xl">Feedback</a>
          </div>
          <input type="text" className=" text-[1rem] text-right pr-[5rem] text ml-[13rem] h-[2rem] w-[50rem] rounded-[12rem]" onChange={(e) => handleSearchChange(e)} onKeyDown={(e) => textKey(e)} />
          <p className='text-[2rem] absolute ml-[81rem]'> <AiOutlineSearch /></p>



        </div>

      </div>

    </>
  );
};

export default Navbar;
