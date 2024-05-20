import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createEditRecord } from "../../service/recordsAPI";

const useEditRecord = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: createEditRecord,
    onSuccess: () => {
      queryClient.invalidateQueries("records");

      navigate("/bookings");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { editRecord: mutate, isLoading };
};

export default useEditRecord;
