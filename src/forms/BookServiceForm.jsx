import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCars } from "../features/vehicles/useCars";

import Loader from "../ui/Loader";
import useCreateBooking from "../features/bookings/useBooking";
import MyLocation from "../pages/MyLocation";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import GeoLocation from "../components/GeoLocation";

const services = [
  {
    id: "1",
    name: "Towing Service",
    icon: "/services/service-1.png",
  },
  {
    id: "2",
    name: "Fuel Delivery",
    icon: "/services/service-2.png",
  },
  {
    id: "3",
    name: "Battery Jumpstart",
    icon: "/services/service-3.png",
  },
  {
    id: "4",
    name: "Diagnostic Services",
    icon: "/services/service-4.png",
  },
  {
    id: "5",
    name: "Battery Replacement",
    icon: "/services/service-5.png",
  },
  {
    id: "6",
    name: "Car Lockout",
    icon: "/services/service-6.png",
  },
];

const BookServiceForm = ({ serviceTitle }) => {
  const { createBooking } = useCreateBooking();

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      vehicle: "",
      details: "",
    },
  });
  const { errors } = formState;

  const { vehicles, isLoading } = useCars();

  const [coords, setCoords] = useState([41.311081, 69.240562]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isLocationPage, setIsLocationPage] = useState(false);

  if (isLoading) {
    return <Loader />;
  }

  const onSubmit = (data) => {
    const service = {
      vehicle: selectedVehicle,
      details: data.details,
      location: coords,
      title: serviceTitle,
      price: String(Math.floor(Math.random() * 1000)),
      isPaid: false,
      image: `/services/service-${services.find((service) => service.name === serviceTitle).id}.png`,
      paymentMethod: "humo",
    };

    createBooking(service);
    reset();
  };

  const renderVehicleLabels = () => {
    return vehicles.map((vehicle, index) => (
      <label
        key={index}
        className={`flex w-full flex-col items-center justify-between rounded-lg 
          ${selectedVehicle?.id === vehicle.id ? "border-green-800 bg-gray-200 shadow-lg" : "bg-white shadow-md"}`}
        onClick={() => setSelectedVehicle(vehicle)}
      >
        <input
          type="radio"
          name="vehicle"
          value={vehicle.id}
          {...register("vehicle", { required: "Vehicle is required" })}
          className="hidden"
        />
        <div className="flex w-[70dvw] max-w-[70dvw] flex-col gap-2 p-4 sm:w-fit sm:max-w-[30dvw]">
          <div className="flex justify-between">
            <h2 className="text-md font-semibold">
              <span className="font-normal">{vehicle.brand}</span>{" "}
              {vehicle.model}
            </h2>
            <img src={vehicle.image} alt="vehicle" className="h-28 w-fit" />
          </div>

          <div className="flex w-full items-center gap-2">
            <p className="rounded-full border bg-gray-100 px-3 py-1 text-sm">
              PN: {vehicle.license_plate}
            </p>
            <p className="rounded-full border bg-gray-100 px-3 py-1 text-sm">
              C: {vehicle.color}
            </p>
          </div>
        </div>
      </label>
    ));
  };

  const handleGeoLocation = (location) => {
    setCoords([location.latitude, location.longitude]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative pb-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="vehicle" className="font-semibold">
            Vehicle
          </label>
          <div className="flex w-full gap-4 overflow-scroll p-2">
            {renderVehicleLabels()}
          </div>
          {errors.vehicle && (
            <p className="text-sm text-red-500">{errors.vehicle.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="details" className="font-semibold">
            Extra Details
          </label>
          <textarea
            id="details"
            name="details"
            placeholder="Details"
            className="rounded-lg bg-gray-50 p-2"
            {...register("details", { required: "Details is required" })}
          />
          {errors.details && (
            <p className="text-sm text-red-500">{errors.details.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="location" className="font-semibold">
            Location
          </label>
          <div className="h-18 min-h-18 flex items-center justify-between gap-2 rounded-md bg-gray-50 p-2 text-gray-900">
            <SlLocationPin className="text-3xl" />
            <GeoLocation handleGeoLocation={handleGeoLocation} />
          </div>

          {coords ? (
            <div className="flex w-full items-center gap-2">
              <p className="rounded-full border bg-gray-100 px-3 py-1 text-sm">
                Latitude: {coords[0]}
              </p>
              <p className="rounded-full border bg-gray-100 px-3 py-1 text-sm">
                Longitude: {coords[1]}
              </p>
            </div>
          ) : (
            <p className="text-sm text-red-500">Location is required</p>
          )}
        </div>

        <div className="mt-auto flex w-full items-center justify-between">
          <button
            type="submit"
            className="w-full rounded-lg bg-gray-800 p-2 text-white"
          >
            Create Booking
          </button>
        </div>
      </div>

      {isLocationPage && (
        <div className="fixed left-1/2 top-1/2 z-0 h-[100dvh] w-full -translate-x-1/2 -translate-y-1/2 transform overflow-scroll rounded-lg bg-white p-4 shadow-lg">
          <div className="relative flex w-full items-center justify-between gap-4 rounded-full bg-gray-900 py-2 text-yellow-300">
            <LiaLongArrowAltLeftSolid
              onClick={() => setIsLocationPage(false)}
              className="absolute left-2 cursor-pointer text-4xl"
            />
            <h2 className="mx-auto text-lg font-normal">Confirm Location</h2>
          </div>
          <MyLocation />
        </div>
      )}
    </form>
  );
};

export default BookServiceForm;
