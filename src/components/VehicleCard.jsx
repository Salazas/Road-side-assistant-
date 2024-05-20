import { useDeleteCar } from "../features/vehicles/useDeleteCar";

const VehicleCard = ({ vehicle, isGarage }) => {
  const { deleteVehicle } = useDeleteCar();

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow-md">
      <div className="flex justify-between">
        <h2 className="text-md font-semibold">
          <span className="font-normal">{vehicle.brand}</span> {vehicle.model}
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
        {isGarage && (
          <div className="ml-auto flex gap-2">
            <button
              className="rounded-full bg-red-500 px-3 py-1 text-red-100"
              onClick={() => deleteVehicle(vehicle.id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleCard;
