import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex h-[53px] grow items-center justify-center gap-2 rounded-md bg-[#545454] px-2">
      <div className="h-fit">
        <CiSearch className="text-white" size={25} />
      </div>
      <input
        type="text"
        placeholder="search here..."
        className="h-full w-full rounded-md bg-[#545454] text-white placeholder:text-white focus-within:border-none focus-within:outline-none"
      />
    </div>
  );
};

export default SearchBar;
