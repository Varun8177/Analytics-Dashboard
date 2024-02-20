import React from "react";
import Header from "./Header";
import Overviews from "./container/Overviews";
import { Bar, Line, Pie } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { useMediaQuery } from "react-responsive";
import { twMerge } from "tailwind-merge";

const Container = () => {
  const iconsOnly = useMediaQuery({
    query: "(max-width: 700px)",
  });
  const charts = [
    {
      chart: (
        <Line
          data={{
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
                data: [20, 15, 19, 12, 36, 18, 14, 11, 13, 20, 25, 23],
                borderColor: "#9891cc",
                fill: true,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
          }}
        />
      ),
    },
    {
      chart: (
        <Bar
          data={{
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
                data: [20, 15, 19, 12, 36, 18, 14, 11, 13, 20, 25, 23],
                borderColor: "#9891cc",
                fill: true,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
          }}
        />
      ),
    },
    {
      chart: (
        <Pie
          data={{
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
                data: [20, 15, 19, 12, 36, 18, 14, 11, 13, 20, 25, 23],
                borderColor: "#9891cc",
                fill: true,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
          }}
        />
      ),
    },
  ];
  //   const chartData = ;

  return (
    <div
      className={twMerge(
        "h-full  max-h-screen grow space-y-4 overflow-y-auto px-4 pt-2",
        iconsOnly && "max-h-[90vh]",
      )}
    >
      <Header />
      <p className="text-3xl font-semibold text-white">Hello, Uroos</p>
      <Overviews />
      <div className="justify-left flex w-fit flex-wrap gap-4 rounded-md bg-[#161717] p-4">
        {charts.map((item, i) => (
          <div key={i} className="max-w-[400px] grow rounded-md border">
            {item.chart}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
