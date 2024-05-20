import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createRecord } from "../../service/recordsAPI";

const useCreateBooking = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: createRecord,
    onSuccess: () => {
      queryClient.invalidateQueries("records");

      navigate("/bookings");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { createBooking: mutate, isLoading };
};

export default useCreateBooking;
