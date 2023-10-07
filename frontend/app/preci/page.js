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
import About from "./about";

const Visual = () => {
  const myMap = new Map();
  const selectedYear = useSelector((state) => state.year.selectedYear);
  const dispatch = useDispatch();

  const handleYearChange = (event) => {
    const newYear = parseInt(event.target.value);
    dispatch(changeYear(newYear));
  };

  return (
    <div className="text-[#ddd]">
      <About />
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
      <div className="w-3/4 mx-auto py-4 mb-11 text-lg">
        <h2 className="text-xl font-semibold mb-2">About Data:</h2>
        <div className="mb-4">
          <p className="mb-2">
            <span className="font-semibold">1.</span>
          </p>
          <p className="mb-1">
            <span className="font-semibold">0.044 - 0.496 mm/day:</span>
          </p>
          <p className="ml-2">
            This range represents very light precipitation. It means that on
            average, between 0.044 millimeters and 0.496 millimeters of
            precipitation falls per day. This could be considered a minimal
            amount of rain or other forms of precipitation.
          </p>
        </div>
        <div className="mb-4">
          <p className="mb-2">
            <span className="font-semibold">2.</span>
          </p>
          <p className="mb-1">
            <span className="font-semibold">0.496 - 0.875 mm/day:</span>
          </p>
          <p className="ml-2">
            This range represents light precipitation. It means that on average,
            between 0.496 millimeters and 0.875 millimeters of precipitation
            falls per day. This is still a relatively small amount of rainfall.
          </p>
        </div>
        <div className="mb-4">
          <p className="mb-2">
            <span className="font-semibold">3.</span>
          </p>
          <p className="mb-1">
            <span className="font-semibold">0.875 - 1.23 mm/day:</span>
          </p>
          <p className="ml-2">
            This range represents slightly heavier precipitation. It means that
            on average, between 0.875 millimeters and 1.23 millimeters of
            precipitation falls per day.
          </p>
        </div>
        <div className="mb-4">
          <p className="mb-2">
            <span className="font-semibold">4.</span>
          </p>
          <p className="mb-1">
            <span className="font-semibold">1.23 - 1.547 mm/day:</span>
          </p>
          <p className="ml-2">
            This range represents moderate precipitation. It means that on
            average, between 1.23 millimeters and 1.547 millimeters of
            precipitation falls per day. This indicates a more significant
            amount of rainfall.
          </p>
        </div>
        <div className="mb-4">
          <p className="mb-2">
            <span className="font-semibold">5.</span>
          </p>
          <p className="mb-1">
            <span className="font-semibold">1.547 - 1.803 mm/day:</span>
          </p>
          <p className="ml-2">
            This range also represents moderate precipitation but at a slightly
            higher intensity.
          </p>
        </div>
        <div className="mb-4">
          <p className="mb-2">
            <span className="font-semibold">6.</span>
          </p>
          <p className="mb-1">
            <span className="font-semibold">1.803 - 2.023 mm/day:</span>
          </p>
          <p className="ml-2">
            This range represents moderately heavy precipitation. It means that
            on average, between 1.803 millimeters and 2.023 millimeters of
            precipitation falls per day.
          </p>
        </div>
        <div className="mb-4">
          <p className="mb-2">
            <span className="font-semibold">7.</span>
          </p>
          <p className="mb-1">
            <span className="font-semibold">2.023 - 2.341 mm/day:</span>
          </p>
          <p className="ml-2">
            This range represents heavy precipitation. It means that on average,
            between 2.023 millimeters and 2.341 millimeters of precipitation
            falls per day. This indicates a substantial amount of rainfall.
          </p>
        </div>
        <div>
          <p className="mb-2">
            <span className="font-semibold">8.</span>
          </p>
          <p className="mb-1">
            <span className="font-semibold">2.341 - 3.149 mm/day:</span>
          </p>
          <p className="ml-2">
            This range represents very heavy precipitation. It means that on
            average, between 2.341 millimeters and 3.149 millimeters of
            precipitation falls per day. This is considered a significant amount
            of rainfall and may be associated with heavy rain or storms.
          </p>
        </div>
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
