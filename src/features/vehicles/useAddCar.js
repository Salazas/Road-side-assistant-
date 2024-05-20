import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { addVehicleApi } from "../../service/vehiclesAPI";

const useAddCar = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate: addVehicle, isLoading } = useMutation({
    mutationFn: addVehicleApi,
    onSuccess: () => {
      queryClient.invalidateQueries("vehicles");

      navigate("/garage");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { isLoading, addVehicle };
};

export default useAddCar;
