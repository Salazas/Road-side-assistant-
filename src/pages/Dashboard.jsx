import React from "react";
import useRecords from "../features/records/useRecords";
import { useUsers } from "../../features/admin/useUsers";
import { useVehicles } from "../../features/admin/useVehicles";

const Dashboard = () => {
  const { users, isLoading } = useUsers();
  const { records, isRecordsLoading } = useRecords();
  const { vehicles, isVehiclesLoading } = useVehicles();

  if (isLoading || isRecordsLoading || isVehiclesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-40 w-full flex-col gap-2 rounded-md border bg-gray-50 px-4 py-2 text-xl text-gray-800">
        <h2 className="text-xl font-normal">Users</h2>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-white text-3xl">
          {users?.length}
        </div>
      </div>
      <div className="flex h-40 w-full flex-col gap-2 rounded-md border bg-gray-50 px-4 py-2 text-xl text-gray-800">
        <h2 className="text-xl font-normal">Records</h2>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-white text-3xl">
          {records?.length}
        </div>
      </div>
      <div className="flex h-40 w-full flex-col gap-2 rounded-md border bg-gray-50 px-4 py-2 text-xl text-gray-800">
        <h2 className="text-xl font-normal">Vehicles</h2>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-white text-3xl">
          {vehicles?.length}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
