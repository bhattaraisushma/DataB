"use client";
import React, { useState } from "react";
import MapComponent from "./Map";

const Visual = () => {
  const myMap = new Map();

  return (
    <div>
      <main>
        <MapComponent />
      </main>
    </div>
  );
};

export default Visual;
