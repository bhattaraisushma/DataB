"use client";
import React, { useState } from "react";
import data1 from "./geojason/prep2000.geojson";
import data2 from "./geojason/prep2005.geojson";
import data3 from "./geojason/prep2010.geojson";
import data4 from "./geojason/prep2015.geojson";
import data5 from "./geojason/prep2020.geojson";
import { changeYear } from "@/app/components/redux/features/yearSlice";
import MapComponent from "./Map";
import { useSelector, useDispatch } from "react-redux";
import Legend from "./legend";

const Visual = () => {
  const myMap = new Map();
  const selectedYear = useSelector((state) => state.year.selectedYear);
  const dispatch = useDispatch();

  const handleYearChange = (event) => {
    const newYear = parseInt(event.target.value);
    dispatch(changeYear(newYear));
  };

  return (
    <div>
      <div className="flex gap-10">
        <main>
          <MapComponent data={filterDataByYear(selectedYear)} />
        </main>
        <div className="flex items-center justify-center ml-[9%]">
          <Legend />
        </div>
      </div>
      <div>
        <input
          type="range"
          min="2000"
          max="2020"
          value={selectedYear}
          className="range"
          step="5"
          onChange={handleYearChange}
        />
        <div className="w-full flex justify-between text-xs px-2">
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>

        <p>Selected Year: {selectedYear}</p>
      </div>
    </div>
  );
};

function filterDataByYear(year) {
  if (year === 2000) return data1;
  if (year === 2005) return data2;
  if (year === 2010) return data3;
  if (year === 2015) return data4;
  if (year === 2020) return data5;
}

export default Visual;
