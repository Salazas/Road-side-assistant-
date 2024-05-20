import React from "react";
import { useForm } from "react-hook-form";

import GoBack from "../ui/GoBack";
import CreateVehicleForm from "../forms/CreateVehicleForm";
import useAddCar from "../features/vehicles/useAddCar";
import useRandomCar from "../hooks/useRandomCar";

const CreateCar = () => {
  const { isLoading, addVehicle } = useAddCar();
  const randomCar = useRandomCar();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    addVehicle(data);
  };

  return (
    <div className="relative flex h-fit flex-col gap-6 px-4 py-4 sm:h-full">
      <GoBack title="Add a Vehicle" />

      <CreateVehicleForm
        register={register}
        errors={errors}
        isLoading={isLoading}
        onSubmit={handleSubmit(onSubmit)}
        defaultValues={randomCar}
      />
    </div>
  );
};

export default CreateCar;
