import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";

const AppLayout = () => {
  return (
    <div className="grid h-[100dvh] w-[100dvw] sm:grid-cols-[auto,1fr,auto]">
      <Sidebar />

      <main className="h-full w-full overflow-scroll">
        <Outlet />
      </main>

      <Navbar />
      <div className="hidden h-full w-80 shadow-md sm:flex"></div>
    </div>
  );
};

export default AppLayout;
