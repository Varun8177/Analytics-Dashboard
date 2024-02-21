import React, { useMemo } from "react";
import Header from "./Header";
import Overviews from "./container/Overviews";
// eslint-disable-next-line no-unused-vars
import { useMediaQuery } from "react-responsive";
import { twMerge } from "tailwind-merge";
import Charts from "./container/Charts";

function getRandomData(length = 12) {
  const temp = [];
  for (let i = 0; i < length; i++) {
    temp.push(Math.floor(Math.random() * (100 - 10 + 1)) + 10);
  }
  return temp;
}

const Container = () => {
  const iconsOnly = useMediaQuery({
    query: "(max-width: 700px)",
  });

  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        backgroundColor: "rgba(152, 145, 204, 1)",
        data: useMemo(() => {
          return getRandomData();
        }, []),
        borderColor: "rgba(152, 145, 204, 1)",
      },
      {
        label: "Traffic",
        backgroundColor: "rgba(255, 189, 105, 1)",
        data: useMemo(() => {
          return getRandomData();
        }, []),
        borderColor: "rgba(255, 189, 105, 1)",
      },
    ],
  };

  const pieData = {
    labels: ["Instagram", "Facebook", "Youtube", "website"],
    datasets: [
      {
        label: "Visitors",
        backgroundColor: [
          "rgba(232,99,132,1)",
          "rgba(232,211,6,1)",
          "rgba(54,162,235,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
        data: useMemo(() => {
          return getRandomData(4);
        }, []),
        borderColor: "rgba(152, 145, 204, 1)",
      },
    ],
  };

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
      <div className="flex flex-col gap-4 lg:flex-row">
        <Charts
          chartData={chartData}
          options={["Line", "Bar"]}
          showImage
          title="Sales and Traffic"
        />
        <Charts
          chartData={pieData}
          options={["Pie", "Doughnut"]}
          title="Visitors"
        />
      </div>
      <div className="h-10" />
    </div>
  );
};

export default Container;
