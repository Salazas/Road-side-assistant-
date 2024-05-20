import React from "react";
import VehiclesTable from "../tables/VehiclesTable";

const Vehicles = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-xl font-normal">Users</h2>

      <div className="flex flex-col gap-4">
        <div className="flex h-fit flex-col gap-4 rounded-md bg-gray-50 p-2">
          <VehiclesTable />
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
