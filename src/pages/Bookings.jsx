import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useRecords from "../features/bookings/useRecords";

import Loader from "../ui/Loader";
import Header from "../features/home/Header";
import Search from "../features/home/Search";

const Bookings = () => {
  const { records, isLoading, isError } = useRecords();
  const [search, setSearch] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  const filteredRecords = records?.filter((record) =>
    record.title.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredCompletedRecords = filteredRecords?.filter(
    (record) => record.isPaid === isCompleted,
  );

  return (
    <div className="flex flex-col gap-6 px-4 py-4">
      <Header />
      <Search
        search={search}
        setSearch={setSearch}
        placeholderText="Search bookings"
      />

      <div className="flex items-center justify-between gap-2">
        <h2 className="text-md font-semibold">Bookings</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setIsCompleted(false)}
            className={`${
              !isCompleted
                ? "bg-gray-800 text-gray-50"
                : "bg-gray-200 text-gray-800"
            } rounded-md px-4 py-2`}
          >
            Pending
          </button>
          <button
            onClick={() => setIsCompleted(true)}
            className={`${
              isCompleted
                ? "bg-gray-800 text-gray-50"
                : "bg-gray-200 text-gray-800"
            } rounded-md px-4 py-2`}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {filteredCompletedRecords?.map((service, i) => (
          <BookingItem key={i} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Bookings;

const BookingItem = ({ service }) => {
  return (
    <NavLink
      to={`/bookings/${service.id}`}
      className="h-30 relative flex gap-4 rounded-lg p-2 shadow-md"
    >
      <img
        src={service.image}
        className="h-20 rounded-md border sm:h-32"
        alt={service.name}
      />
      <div className="flex flex-col justify-between">
        <h3 className="font-semibold sm:text-lg">{service.title}</h3>
        <div className="flex w-full gap-1 rounded-lg p-2 py-0 shadow-sm">
          <div className="flex gap-2 pb-1 sm:items-center">
            <img
              src={service.vehicle.image}
              alt="vehicle"
              className="h-12 w-auto object-contain sm:h-20"
            />
            <div>
              <p className="">PN: {service.vehicle.license_plate}</p>
              <p className="">C: {service.vehicle.color}</p>
              <p className="hidden sm:block">Y: {service.vehicle.year}</p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
