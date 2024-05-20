import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function YandexMap({ center, zoom }) {
  const defaultState = {
    center: center,
    zoom: zoom,
  };

  return (
    <YMaps className="h-full w-full">
      <Map defaultState={defaultState} className="h-full w-full">
        <Placemark geometry={center} />
      </Map>
    </YMaps>
  );
}
