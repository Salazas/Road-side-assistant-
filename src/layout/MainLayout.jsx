import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";
import { useCheckAuth } from "../features/register/useCheckAuth";

import Loader from "../ui/Loader";

const MainLayout = () => {
  const { isLoading, user } = useCheckAuth();

  const isAdmin = user?.email === "admin1122@gmail.com" ? true : false;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid h-[100dvh] w-[100dvw] sm:grid-cols-[auto,1fr,auto]">
      <Sidebar isAdmin={isAdmin} />

      <main className="h-full w-full overflow-scroll">
        <Outlet />
      </main>

      <Navbar isAdmin={isAdmin} />

      {!isAdmin && (
        <>
          <div className="hidden h-full w-80 p-4 sm:flex">
            <img
              src="https://img.freepik.com/premium-photo/auto-repair-repair-equipment-cars-urgent-departure-master-eliminate-breakage-plumbing-work-construction-repair-service-car-with-adjustable-universal-key-yellow-background_292419-927.jpg"
              alt="FYX logo"
              className="h-full w-full rounded-xl object-cover object-left shadow-md brightness-75"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MainLayout;
