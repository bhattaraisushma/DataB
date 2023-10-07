"use client";

import React, { useEffect } from "react";
import maplibreGl from "maplibre-gl";
import data from "../geojason/temp2000.geojson";

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
            ["get", "gridcode"],
            1,
            "rgb(191, 226, 202)",
            2,
            "rgb(149, 207, 156)",
            3,
            "rgb(76, 182, 72)",
            4,
            "rgb(49, 152, 0)",
            5,
            "rgb(15, 89, 0)",
            6,
            "rgb(255, 248, 1)",
            7,
            "rgb(255, 154, 2)",
            8,
            "rgb(254, 34, 0)",
            "rgb(250, 250, 250)",
          ],
        },
      });
    });
  }, [map]);

  return null;
}

export default GeoJsonLoader;
