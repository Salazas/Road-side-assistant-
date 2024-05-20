import {
  LiaHomeSolid,
  LiaBorderAllSolid,
  LiaTaxiSolid,
  LiaUser,
} from "react-icons/lia";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import useLogout from "../features/register/useLogout";

const links = [
  { name: "Dashboard", path: "/admin/dashboard", icon: <LiaHomeSolid /> },
  { name: "Users", path: "/dashboard/users", icon: <LiaUser /> },
  { name: "Vehicles", path: "/dashboard/vehicles", icon: <LiaTaxiSolid /> },
  { name: "Records", path: "/admin/records", icon: <LiaBorderAllSolid /> },
];

const AdminLayout = () => {
  const { logout } = useLogout();

  return (
    <div className="flex h-[100dvh] w-full flex-col gap-4 bg-white p-4">
      <div className="flex items-center justify-between rounded-md bg-blue-500 p-4 sm:hidden">
        <img
          src="/logo.svg"
          alt="FYX logo"
          className="h-12 w-fit invert filter"
        />

        <button
          className="rounded-md bg-blue-100 p-2 text-blue-500"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="flex items-center justify-between gap-4">
        {links.map((link) => (
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? "flex h-12 w-full items-center justify-center rounded-md bg-blue-100 text-2xl"
                : "flex h-12 w-full items-center justify-center rounded-md bg-blue-50 text-2xl";
            }}
            key={link.path}
            to={link.path}
          >
            {link.icon}
          </NavLink>
        ))}
      </div>

      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
