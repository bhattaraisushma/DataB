"use client";

import React, { useEffect, useState, useRef } from "react";
import maplibreGl from "maplibre-gl";

const MapComponent = (props) => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const sourceId = "precipitation";
  const layerId = "precipitation-layer";
  useEffect(() => {
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
