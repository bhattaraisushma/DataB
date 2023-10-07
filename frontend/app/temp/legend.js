import React from "react";

const Legend = () => {
  return (
    <div className="w-64 p-4 bg-[#eee] shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Legend(°C)</h2>
      <div className="flex items-center">
        <div className="w-6 h-6 mr-2 bg-[#bfe2ca] rounded-full"></div>
        -3.8 - 1.19
      </div>
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 mr-2 bg-[#95cf9c] rounded-full"></div>
        0.19-3.64
      </div>
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 mr-2 bg-[#4cb648] rounded-full"></div>
        3.6-7.2
      </div>
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 mr-2 bg-[#319800] rounded-full"></div>
        7.2-10.98
      </div>
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 mr-2 bg-[#0f5900] rounded-full"></div>
        10.98-14.8
      </div>
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 mr-2 bg-[#fff801] rounded-full"></div>
        14.8-18.3
      </div>
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 mr-2 bg-[#ff9a02] rounded-full"></div>
        18.3-21.5
      </div>
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 mr-2 bg-[#fe2200] rounded-full"></div>
        21.5-25.3
      </div>
    </div>
  );
};

export default Legend;
