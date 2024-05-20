import React from "react";
import { useGeolocated } from "react-geolocated";
import { LiaMap, LiaMapMarkedAltSolid } from "react-icons/lia";

const Demo = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <LiaMap className="text-6xl text-red-100" />
  ) : coords ? (
    <LiaMapMarkedAltSolid className="text-6xl text-gray-700" />
  ) : (
    <span>...</span>
  );
};

export default Demo;
