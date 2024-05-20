import { NavLink } from "react-router-dom";
import { useCars } from "../features/vehicles/useCars";
import Loader from "../ui/Loader";
import Header from "../features/home/Header";
import Search from "../components/Search";
import { useState } from "react";
import VehicleCard from "../components/VehicleCard";

const Garage = () => {
  const { vehicles, isLoading } = useCars();
  const [search, setSearch] = useState("");

  if (isLoading) {
    return <Loader />;
  }

  const filteredVehicles = vehicles.filter((vehicle) =>
    vehicle.model.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="relative flex h-full flex-col gap-2 px-4 py-4">
      <Header />
      <Search
        placeholderText="Search vehicles"
        value={search}
        onChange={setSearch}
      />

      <div className="mt-4 flex h-fit flex-col gap-2 pb-6 text-gray-800">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-md font-semibold">Your Cars</h2>

          <NavLink
            to="/add-vehicle"
            className="rounded-full bg-gray-500 px-3 py-1 text-gray-100 hover:bg-gray-600"
          >
            Add Vehicle
          </NavLink>
        </div>

        <div className="flex flex-col gap-4">
          {filteredVehicles.map((vehicle, i) => (
            <VehicleCard key={i} vehicle={vehicle} isGarage={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Garage;
