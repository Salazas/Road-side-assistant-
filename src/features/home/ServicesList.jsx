import { NavLink } from "react-router-dom";
import ServiceItem from "./ServiceItem";

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

const ServicesList = () => {
  return (
    <div className="flex h-fit flex-col gap-2 pb-6 text-gray-800">
      <h2 className="text-md font-semibold">Our services</h2>

      <div className="grid h-full grid-cols-2 gap-4">
        {services.map((service, i) => (
          <ServiceItem key={i} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
