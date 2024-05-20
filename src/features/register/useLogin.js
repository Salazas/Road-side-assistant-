import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "../../service/authAPI";
import toast from "react-hot-toast";

const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: login,
    status,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["user"]);

      toast.success("Logged in successfully");

      const isAdmin =
        data.user.email === "admin@gmail.com" ||
        data.user.email === "administrator@gmail.com";

      if (isAdmin) {
        navigate("/dashboard/users");
        return;
      }

      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const isLoading = status === "pending";

  return { login, isLoading, error };
};

export default useLogin;
