import React from "react";
import Header from "./Header";
import Overviews from "./container/Overviews";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { useMediaQuery } from "react-responsive";
import { twMerge } from "tailwind-merge";

const Container = () => {
  const iconsOnly = useMediaQuery({
    query: "(max-width: 700px)",
  });
  const chartData = {
    labels: [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
    datasets: [
      {
        label: "sales",
        backgroundColor: "#383456",
        data: [17, 15, 19, 12, 16, 18, 14, 11, 13, 20, 27],
        borderColor: "#383456",
      },
    ],
  };

  return (
    <div
      className={twMerge(
        "h-screen grow space-y-4 px-4 pt-2 sm:mb-0",
        iconsOnly && "mb-72",
      )}
    >
      <Header />
      <p className="text-3xl font-semibold text-white">Hello, Uroos</p>
      <Overviews />
      <div className="relative h-auto w-auto rounded-md bg-[#161717] text-white md:h-[300px] md:w-[500px]">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Container;
