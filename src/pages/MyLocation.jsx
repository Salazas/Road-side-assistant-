import React, { useState } from "react";
import { useGeolocated } from "react-geolocated";
import YandexMap from "../components/YandexMap";

const MyLocation = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  if (!isGeolocationAvailable || !isGeolocationEnabled) {
    return (
      <div className="flex h-screen w-full items-center justify-center text-xl text-gray-900">
        Geolocation is not enabled
      </div>
    );
  }

  if (!coords) {
    return (
      <div className="flex h-screen w-full items-center justify-center text-xl text-gray-900">
        Getting your location...
      </div>
    );
  }

  return (
    <div className="relative h-[100dvh] w-full">
      {coords && (
        <YandexMap center={[coords.latitude, coords.longitude]} zoom={20} />
      )}
    </div>
  );
};

export default MyLocation;
