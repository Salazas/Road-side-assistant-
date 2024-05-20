import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LiaBorderAllSolid,
  LiaHomeSolid,
  LiaTaxiSolid,
  LiaUser,
} from "react-icons/lia";
import { GoHistory } from "react-icons/go";
import useLogout from "../features/register/useLogout";
import { CiLogout } from "react-icons/ci";

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

const Sidebar = () => {
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
    <div className="hidden flex-col gap-4 bg-gray-800 p-2 text-gray-50 shadow-lg sm:flex">
      <div className="flex items-center justify-between rounded-md border p-2 px-4">
        <img src="/rsa.png" alt="FYX logo" className="h-12 w-fit" />
        <h1 className="text-lg font-bold">Road Side Assistance</h1>
      </div>

      <div className="flex w-80 flex-col gap-4">
        {routes
          .find((route) => route.type === (isAdmin ? "admin" : "user"))
          .routes.map((route, index) => (
            <SidebarItem key={index} {...route} />
          ))}
      </div>

      <button
        onClick={logout}
        className="flex h-12 items-center gap-2 rounded-md px-4 text-gray-50 hover:bg-red-400 hover:text-gray-900"
      >
        <CiLogout className="text-3xl" /> Logout
      </button>
    </div>
  );
};

export default Sidebar;

const SidebarItem = ({ icon, name, path }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "flex h-12 items-center gap-2 rounded-md bg-yellow-400 px-4 text-gray-900"
          : "flex h-12 items-center gap-2 px-4 text-gray-50 hover:text-gray-100"
      }
      to={path}
    >
      {icon} {name}
    </NavLink>
  );
};
