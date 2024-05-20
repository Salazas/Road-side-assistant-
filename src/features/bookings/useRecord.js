import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRecord } from "../../service/recordsAPI";

export function useRecord() {
  const { id } = useParams();

  const {
    data: record,
    isLoading,
    error,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["record", id],
    queryFn: () => getRecord(id),
  });

  return { record, isLoading, error, isError, isSuccess };
}
