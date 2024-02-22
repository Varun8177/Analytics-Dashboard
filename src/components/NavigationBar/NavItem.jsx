import React from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const NavItem = ({ active, id, handleActive, icon }) => {
  return (
    <div
      className={twMerge(
        `m-auto flex w-[50px] cursor-pointer justify-center rounded-md px-1 py-3`,
        active === id && "bg-black",
      )}
      onClick={() => {
        handleActive(id);
      }}
    >
      {icon}
    </div>
  );
};

export default NavItem;
