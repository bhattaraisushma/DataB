"use client";

import React, { useEffect, useState, useRef } from "react";
import maplibreGl from "maplibre-gl";

const MapComponent = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  useEffect(() => {
    console.log(mapContainer.current);
    const map = new maplibreGl.Map({
      container: mapContainer.current,
      center: [28.394858, 84.124008],
      zoom: 10,
      pitch: 0,
      hash: true,
      scrollZoom: false,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: [
              "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            ],
            tileSize: 256,
            attribution: "&copy; OpenStreetMap Contributors",
            maxzoom: 10,
          },
          terrainSource: {
            type: "raster-dem",
            tiles: [
              "https://vtc-cdn.maptoolkit.net/terrainrgb/{z}/{x}/{y}.webp",
            ],
            encoding: "mapbox",
            maxzoom: 14,
            minzoom: 4,
          },
        },
        layers: [
          {
            id: "osm",
            type: "raster",
            source: "osm",
          },
        ],
        terrain: {
          source: "terrainSource",
          exaggeration: 1,
        },
      },
    });

    setMap(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      className="max-w-[75vw]"
      ref={mapContainer}
      style={{ width: "75vw", height: "65vh" }}
    ></div>
  );
};

export default MapComponent;
