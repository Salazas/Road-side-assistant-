import React from "react";

const Banner = () => {
  return (
    <div className="relative flex h-40">
      <img
        className="h-full w-full rounded-md object-cover shadow-md brightness-90"
        src="https://img.freepik.com/premium-photo/directly-shot-toy-cars-yellow-background_1048944-12134874.jpg"
        alt="banner"
      />

      <div className="absolute inset-0 flex items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold text-white">Welcome to RSS</h1>
          <p className="text-xl text-white">Your vehicle, our care</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
