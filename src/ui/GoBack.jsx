import React from "react";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const GoBack = ({ title }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative flex w-full items-center justify-between gap-4 rounded-full bg-gray-900 py-2 text-yellow-300">
      <LiaLongArrowAltLeftSolid
        onClick={handleBack}
        className="absolute left-2 cursor-pointer text-4xl"
      />
      <h2 className="mx-auto text-lg font-normal">{title}</h2>
    </div>
  );
};

export default GoBack;
