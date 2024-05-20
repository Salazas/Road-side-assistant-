import React from "react";
import Header from "../features/home/Header";
import useLogout from "../features/register/useLogout";
import { useCheckAuth } from "../features/register/useCheckAuth";

const Profile = () => {
  const { isLoading, logout } = useLogout();
  const { user, isLoading: loading, error, isError } = useCheckAuth();

  if (isLoading || loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-full min-h-[90dvh] flex-col gap-4 bg-white px-4 py-4">
      <Header />

      <div className="flex h-full flex-col gap-4">
        <div className="flex h-20 w-full items-center border p-4">
          <h1 className="text-2xl font-bold">{user.user_metadata.username}</h1>
        </div>
        <div className="flex h-20 w-full items-center border p-4">
          <h1 className="text-2xl font-bold">{user.user_metadata.phone}</h1>
        </div>
        <div className="flex h-20 w-full items-center border p-4">
          <h1 className="text-2xl font-bold">{user.user_metadata.email}</h1>
        </div>
        <div className="mt-auto flex h-16 w-full items-center justify-center border bg-red-600">
          <button
            onClick={logout}
            className="rounded p-2 text-3xl text-gray-50"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
