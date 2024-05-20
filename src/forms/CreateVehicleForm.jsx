import React from "react";

const CreateVehicleForm = ({
  register,
  errors,
  isLoading,
  onSubmit,
  defaultValues,
}) => {
  const { brand, model, color, image, license_plate } = defaultValues();

  return (
    <form
      method="POST"
      className="my-auto flex flex-col gap-4 text-gray-800"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="brand" className="font-semibold">
          Brand
        </label>
        <input
          type="text"
          id="brand"
          name="brand"
          placeholder="Brand"
          defaultValue={brand}
          className="rounded-lg bg-gray-50 p-2"
          {...register("brand", { required: "Brand is required" })}
        />

        {errors.brand && (
          <span className="text-sm text-red-500">{errors.brand.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="model" className="font-semibold">
          Model
        </label>
        <input
          type="text"
          id="model"
          name="model"
          placeholder="Model"
          defaultValue={model}
          className="rounded-lg bg-gray-50 p-2"
          {...register("model", { required: "Model is required" })}
        />

        {errors.model && (
          <span className="text-sm text-red-500">{errors.model.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="color" className="font-semibold">
          Color
        </label>
        <input
          type="text"
          id="color"
          name="color"
          placeholder="Color"
          defaultValue={color}
          className="rounded-lg bg-gray-50 p-2"
          {...register("color", { required: "Color is required" })}
        />

        {errors.color && (
          <span className="text-sm text-red-500">{errors.color.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="year" className="font-semibold">
          Year
        </label>
        <input
          type="date"
          defaultValue="2022-01-01"
          id="year"
          name="year"
          placeholder="Year"
          className="rounded-lg bg-gray-50 p-2"
          {...register("year", { required: "Year is required" })}
        />

        {errors.year && (
          <span className="text-sm text-red-500">{errors.year.message}</span>
        )}
      </div>

      {/* img text */}
      <div className="flex flex-col gap-2">
        <label htmlFor="image" className="font-semibold">
          Image
        </label>
        <input
          type="text"
          id="image"
          name="image"
          placeholder="Image"
          defaultValue={image}
          className="rounded-lg bg-gray-50 p-2"
          {...register("image", {
            required: "Image is required",
          })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="license_plate" className="font-semibold">
          License Plate
        </label>
        <input
          type="text"
          id="license_plate"
          name="license_plate"
          placeholder="License Plate"
          defaultValue={license_plate}
          className="rounded-lg bg-gray-50 p-2"
          {...register("license_plate", {
            required: "License Plate is required",
          })}
        />

        {errors.license_plate && (
          <span className="text-sm text-red-500">
            {errors.license_plate.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="ml-auto w-full rounded-lg bg-gray-900 px-4 py-2 text-gray-100"
      >
        {isLoading ? "Adding..." : "Add Vehicle"}
      </button>
    </form>
  );
};

export default CreateVehicleForm;
