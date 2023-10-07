"use client";

import React, { useEffect } from "react";
import maplibreGl from "maplibre-gl";
import data from "../geojason/prep2000.geojson";

function GeoJsonLoader({ map }) {
  useEffect(() => {
    if (!map) return;

    map.on("load", () => {
      map.addSource("precipitation", {
        type: "geojson",
        data: data,
      });

      map.addLayer({
        id: "precipitation",
        source: "precipitation",
        type: "fill",
        paint: {
          "fill-color": [
            "match",
            ["get", "gridcode"], // Replace with your property name
            1,
            "rgb(239, 232, 52)",
            2,
            "rgb(193, 189, 42)",
            3,
            "rgb(129, 184, 34)",
            4,
            "rgb(142, 212, 40)",
            5,
            "rgb(56, 157, 59)",
            6,
            "rgb(15, 123, 90)",
            7,
            "rgb(11, 106, 64)",
            8,
            "rgb(7, 72, 49)",
            // Add other color matches for different values of 'gridcode'
            // Add a default color at the end
            "rgb(250, 250, 250)",
          ],
        },
      });
    });
  }, [map]);

  return null; // This component doesn't render anything in the DOM
}

export default GeoJsonLoader;
