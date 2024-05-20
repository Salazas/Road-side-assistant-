import React from "react";
import { NavLink } from "react-router-dom";
import useRegister from "../features/register/useRegister";

const Register = () => {
  const { register, isLoading } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const password = e.target[3].value;

    register({ username, email, phone, password });
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
          <h2 className="text-3xl font-bold">Register</h2>

          <div className="flex w-full flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="somebody"
              name="username"
              className="rounded border border-gray-400 p-2"
            />
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="somebody@email.com"
              name="email"
              className="rounded border border-gray-400 p-2"
            />
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              placeholder="08012345678"
              name="phone"
              className="rounded border border-gray-400 p-2"
            />
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="********"
              name="password"
              className="rounded border border-gray-400 p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-gray-800 p-2 text-white"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>

          <NavLink to="/login" className="hover:text-blue-500">
            Already have an account? Login
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Register;
