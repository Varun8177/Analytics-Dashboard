import React from "react";
import { MdOutlineRefresh, MdReportGmailerrorred } from "react-icons/md";

const Error = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="m-auto max-w-[500px] space-y-4 rounded-md bg-[#161717] p-4 text-center text-white">
      <div className="flex items-center justify-center gap-2 text-2xl font-semibold">
        <>Error</>
        <MdReportGmailerrorred />
      </div>
      <p className="font-semibold">
        unable to load charts. Please refresh the page.
      </p>
      <button
        className="m-auto flex w-fit items-center gap-2 rounded-md bg-black px-4 py-2"
        onClick={refreshPage}
      >
        <>Refresh</>
        <MdOutlineRefresh />
      </button>
    </div>
  );
};

export default Error;
