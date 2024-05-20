import React from "react";
import { NavLink } from "react-router-dom";

const ServiceItem = ({ service }) => {
  return (
    <NavLink
      to={`/booking/${service.id}/new`}
      className="flex h-40 flex-col items-center justify-between rounded-lg bg-gray-100 p-4 shadow-lg"
    >
      <img src={service.icon} className="h-20" alt={service.name} />
      <h3 className="text-center text-sm font-semibold">{service.name}</h3>
    </NavLink>
  );
};

export default ServiceItem;
