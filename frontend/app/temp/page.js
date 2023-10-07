"use client";
import React, { useState } from "react";
import data1 from "./geojason/temp2000.geojson";
import data2 from "./geojason/temp2005.geojson";
import data3 from "./geojason/temp2010.geojson";
import data4 from "./geojason/temp2015.geojson";
import data5 from "./geojason/temp2020.geojson";
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
      <h1 className="text-gray-400 text-6xl mb-10 p-5">Temperature</h1>
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
      <div className="p-4">
        <h2 className="text-3xl font-semibold mb-2">Temperature Overview:</h2>
        <p className="mb-2 text-lg text-justify">
          The temperature legend provides a comprehensive overview of the
          climate in the represented region. It indicates that this area
          experiences a wide range of temperatures throughout the year. Winters
          can be quite cold, with temperatures occasionally dropping below
          freezing, while summers can be hot and potentially sweltering. Spring
          and fall offer milder and more pleasant weather conditions, making
          outdoor activities enjoyable. Overall, this temperature data suggests
          a continental climate with distinct seasonal variations, ranging from
          freezing cold winters to hot summers, providing a diverse climate
          experience for residents and visitors alike.
        </p>
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
