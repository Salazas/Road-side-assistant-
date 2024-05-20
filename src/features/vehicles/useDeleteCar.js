import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteVehicle as deleteVehicleApi } from "../../service/vehiclesAPI";

export const useDeleteCar = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteVehicle, isDeleting } = useMutation({
    mutationFn: (id) => deleteVehicleApi(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries("vehicles");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { deleteVehicle, isDeleting };
};
