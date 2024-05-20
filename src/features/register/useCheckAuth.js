import { useQuery } from "@tanstack/react-query";
import { apiCheckAuth } from "../../service/authAPI";

export function useCheckAuth() {
  const {
    data: user,
    status,
    error,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["user"],
    queryFn: apiCheckAuth,
  });

  const isLoading = status === "pending";
  const isLoggedIn = user?.aud === "authenticated";

  return { user, isLoading, error, isError, isSuccess, isLoggedIn };
}
