"use client";
import { React, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setDisplay, setLoading, setSearch } from "./redux/features/mainSlice";
import { usePathname, useRouter } from "next/navigation";
import api from "./axios";



const Navbar = () => {
  const search = useSelector((state) => state.main.search);

  const data = useSelector((state)=>state.main.current_display)

  const dispatch = useDispatch();

  const loading = useSelector((state)=> state.main.loading);
  const skipy = useSelector((state)=> state.main.skip);

  const router = useRouter();

  const pathname = usePathname();

  const initial_date = useSelector((state) => state.main.initial_date);
  const final_date = useSelector((state) => state.main.final_date);

  const params = {
    query: search,
    limit: 10,
    skip : skipy-10,
    initial_date: initial_date,
    final_date: final_date,
  };


  // console.log(JSON.stringify(gotdata));


  const textKey = (e) => {
    if (e.keyCode == 13) {
      getData();
      reset_key();

    }
  };

  const reset_key = () =>{
    dispatch(setSearch(""));
    document.getElementById('inp').value = "";
  }

  useEffect(()=>{

    dispatch(setLoading(false));
    console.log(loading)

  },[data])

  const handleRoute = (route) =>  {

    console.log(pathname)
    if (route == '/search' && pathname == '/search') {
      
    }
    else{
      router.push(route);
      reset_key();
    }

  }

  async function getData() {
    console.log("getting data...");


    dispatch(setLoading(true))


    const params = {
      query: search,
      limit: 10,
      skip : skipy-10,
      initial_date: initial_date,
      final_date: final_date,
    };



    console.log();
    let data = []
    try {
      const response = await api.get("/search", {
        params: params,
      });
      const response_data = response.data;
      // console.log(response_data)
      dispatch(setDisplay(response_data));
    } catch (error) {
      
      dispatch(setDisplay());
      
    }

  }

  function handleSearchChange(e) {
    // console.log(pathname)
    if (!pathname.includes("/search")) {
      router.push("/search");
    }

    dispatch(setSearch(e.target.value));
    // console.log(search);
  }

  return (
    <>
      <div className="navbar  bg-black sticky top-0">
        <div className="flex justify-between">
          <div>
            <div
              className="text-[#656667] btn btn-ghost  hover:bg-[#edf5fd] normal-case text- 
             xl"
              onClick={() => handleRoute("/")}
            >
              Home
            </div>
            <div
              className="text-[#656667] btn btn-ghost  hover:bg-[#edf5fd] normal-case text- 
             xl"
              onClick={() => handleRoute("/temp")}
            >
              Temperature
            </div>
            <div
              className="text-[#656667] btn btn-ghost  hover:bg-[#edf5fd] normal-case text-  
             xl"
              onClick={() => handleRoute("/preci")}
            >
              Precipitation
            </div>
            <div
              className="text-[#656667] btn btn-ghost  hover:bg-[#edf5fd] normal-case text- 
             xl"
              onClick={() => handleRoute("/search")}
            >
              Search
            </div>
          </div>

          <input
            type="text"
            id="inp"
            placeholder="Search Data"
            className=" text-[1rem] text-right pr-[5rem] text ml-[13rem] h-[2rem] w-[45rem] rounded-[12rem]"
            onChange={(e) => handleSearchChange(e)}
            onKeyDown={(e) => textKey(e)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
