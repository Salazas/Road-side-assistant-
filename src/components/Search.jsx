import React from "react";
import { IoMdSearch } from "react-icons/io";

const Search = ({ placeholderText, value, onChange }) => {
  return (
    <div className="flex items-center gap-2 rounded-md bg-slate-100 p-1 px-3 font-bold">
      <IoMdSearch className="text-2xl text-yellow-400" />
      <input
        type="text"
        placeholder={placeholderText}
        value={value}
        className="w-full bg-transparent p-1 outline-none placeholder:font-normal"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
