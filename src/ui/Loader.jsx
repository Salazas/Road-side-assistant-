import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <BounceLoader color="#d4ff00" />
    </div>
  );
};

export default Loader;
