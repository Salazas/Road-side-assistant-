import React, { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import { getAddress } from "../service/geoloadingAPI";

const GeoLocation = ({ handleGeoLocation }) => {
  const [address, setAddress] = useState("");
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    if (coords) {
      getAddress(coords).then((data) => {
        setAddress({
          city: data.city,
          country: data.countryName,
          locality: data.locality,
        });
      });
    }
  }, [coords]);

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <div className="flex w-full justify-between rounded-md p-1 pr-2 font-bold">
      <div className="flex flex-col">
        <span className="text-sm font-semibold">{address.country}</span>
        <span className="text-sm font-normal">
          {address.city}, {address.locality}
        </span>
      </div>

      {handleGeoLocation && (
        <button
          type="button"
          onClick={() => handleGeoLocation(coords)}
          className="text-sm text-yellow-400"
        >
          Confirm
        </button>
      )}
    </div>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

export default GeoLocation;
