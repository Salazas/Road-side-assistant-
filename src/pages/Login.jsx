import { NavLink } from "react-router-dom";
import useLogin from "../features/register/useLogin";

const Login = () => {
  const { login, isLoading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    login({ email, password });
  };

  return (
    <div>
      <div className="flex h-screen flex-col items-center justify-center p-4 text-gray-800">
        <div className="mr-auto flex items-center gap-2">
          <img src="/rsa.png" alt="FYX logo" className="h-16 w-fit" />
          <h1 className="text-xl font-normal">Road Side Assistance</h1>
        </div>

        <form
          className="flex h-full w-full flex-col items-center justify-center space-y-4 sm:w-1/4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold">Login</h2>

          <div className="flex w-full flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="somebody@email.com"
              className="rounded border border-gray-400 p-2"
            />
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="********"
              className="rounded border border-gray-400 p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-gray-800 p-2 text-white"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

          <NavLink to="/register" className="hover:text-blue-500">
            Do not have an account? Register
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
