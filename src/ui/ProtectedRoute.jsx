import Loader from "./Loader";
import { useCheckAuth } from "../features/register/useCheckAuth";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoading, isLoggedIn, user } = useCheckAuth();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoggedIn) {
    navigate("/login");
  }

  localStorage.setItem("user", JSON.stringify(user));

  return children;
};

export default ProtectedRoute;
