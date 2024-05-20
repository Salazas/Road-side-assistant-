import React, { useEffect, useState } from "react";
import {
  LiaHomeSolid,
  LiaTaxiSolid,
  LiaBorderAllSolid,
  LiaUser,
} from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { GoHistory } from "react-icons/go";
import { CiLogout } from "react-icons/ci";
import useLogout from "../features/register/useLogout";

const routes = [
  {
    type: "admin",
    routes: [
      {
        name: "Users",
        path: "/dashboard/users",
        icon: <LiaUser className="text-3xl" />,
      },
      {
        name: "Vehicles",
        path: "/dashboard/vehicles",
        icon: <LiaTaxiSolid className="text-3xl" />,
      },
      {
        name: "Bookings",
        path: "/dashboard/bookings",
        icon: <LiaBorderAllSolid className="text-3xl" />,
      },
    ],
  },
  {
    type: "user",
    routes: [
      {
        name: "Home",
        path: "/",
        icon: <LiaHomeSolid className="text-3xl" />,
      },
      {
        name: "Cars",
        path: "/garage",
        icon: <LiaTaxiSolid className="text-3xl" />,
      },
      {
        name: "Bookings",
        path: "/bookings",
        icon: <GoHistory className="text-3xl" />,
      },
    ],
  },
];

const Navbar = () => {
  const { isLoading, logout } = useLogout();

  const user = JSON.parse(localStorage.getItem("user"));

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    console.log(user?.email);
    if (
      user?.email === "admin@gmail.com" ||
      user?.email === "administrator@gmail.com"
    ) {
      setIsAdmin(true);
    }
  }, [user]);

  return (
    <>
      <nav className="mt-auto flex h-16 w-full items-center justify-between bg-gray-900 px-4 py-2 text-gray-50 shadow-3xl sm:hidden">
        {routes
          .find((route) => route.type === (isAdmin ? "admin" : "user"))
          .routes.map((route, index) => (
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "flex h-fit flex-col items-center rounded-lg px-3 py-2 text-yellow-300"
                  : "flex h-fit flex-col items-center px-3 py-2";
              }}
              key={index}
              to={route.path}
            >
              <span className="text-2xl font-normal">{route.icon}</span>

              <span className="text-sm font-normal">{route.name}</span>
            </NavLink>
          ))}

        <button
          onClick={logout}
          className="flex h-fit flex-col items-center px-3 py-2"
        >
          <span className="text-2xl font-normal">
            <CiLogout />
          </span>

          <span className="text-sm font-normal">Logout</span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
