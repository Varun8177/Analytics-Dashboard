import React from "react";
import { twMerge } from "tailwind-merge";

const ChartTypeSelector = ({ options = [], selected, handleSelect }) => {
  return (
    <div className="flex w-fit gap-4 rounded-md bg-[#161717] px-2 py-2 text-white">
      {options.map((item, i) => (
        <button
          className={twMerge(
            "w-28 rounded-md p-2",
            selected === item.toLowerCase() && "bg-black",
          )}
          onClick={() => handleSelect(item.toLowerCase())}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ChartTypeSelector;
