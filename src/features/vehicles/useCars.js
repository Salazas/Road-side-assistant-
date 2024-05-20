import { useQuery } from "@tanstack/react-query";
import { getVehicles } from "../../service/vehiclesAPI";

export function useCars() {
  const {
    data: vehicles,
    isLoading,
    error,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["vehicles"],
    queryFn: getVehicles,
  });

  return { vehicles, isLoading, error, isError, isSuccess };
}
