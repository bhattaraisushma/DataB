"use client";

import React, { useEffect, useState, useRef } from "react";
import maplibreGl from "maplibre-gl";

const MapComponent = (props) => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const sourceId = "temperature";
  const layerId = "temperature-layer";
  useEffect(() => {
    console.log(props.data);
    const map = new maplibreGl.Map({
      container: mapContainer.current,
      center: [84.124008, 28.394858],
      zoom: 6,
      pitch: 0,
      hash: true,
      dragPan: false,
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

    map.on("load", () => {
      if (map.getSource(sourceId)) {
        console.log(`Removing source: ${sourceId}`);
        map.removeLayer(layerId);
        map.removeSource(sourceId);
      }

      map.addSource(sourceId, {
        type: "geojson",
        data: props.data,
      });

      map.addLayer({
        id: layerId,
        source: sourceId,
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

    return () => {
      map.remove();
    };
  }, [props.data]);

  return (
    <div
      className="max-w-[75vw]"
      ref={mapContainer}
      style={{ width: "70vw", height: "60vh" }}
    ></div>
  );
};

export default MapComponent;
