import React from "react";

const Legend = () => {
  return (
    <div className="w-64 p-4 bg-[#eee] text-[#333] shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Legend(mm/day)</h2>
      <div className="flex items-center">
        <div className="w-6 h-6 mr-2 bg-[#efe834] rounded-full"></div>
        0.044 - 0.496
      </div>
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 mr-2 bg-[#c1bd2a] rounded-full"></div>
        0.496-0.875
      </div>
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 mr-2 bg-[#81b822] rounded-full"></div>
        0.875-1.23
      </div>
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 mr-2 bg-[#38ed42] rounded-full"></div>
        1.23-1.547
      </div>
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 mr-2 bg-[#379a3a] rounded-full"></div>
        1.547-1.803
      </div>
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 mr-2 bg-[#0f7b5a] rounded-full"></div>
        1.803-2.023
      </div>
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 mr-2 bg-[#0b6a40] rounded-full"></div>
        2.023-2.341
      </div>
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 mr-2 bg-[#074831] rounded-full"></div>
        2.341-3.149
      </div>
    </div>
  );
};

export default Legend;
