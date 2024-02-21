import React, { useState } from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import ChartTypeSelector from "./ChartTypeSelector";

const Charts = ({ options = [], chartData, showImage = false, title = "" }) => {
  const [selected, setSelected] = useState(options[0].toLowerCase() || "");

  const handleSelect = (val) => setSelected(val);

  const graphProps = {
    data: chartData,
    options: {
      maintainAspectRatio: false,
    },
  };

  return (
    <div className="grow space-y-4 lg:w-1/2">
      <p className="text-sm font-semibold text-white">{title}</p>
      <ChartTypeSelector
        options={options}
        selected={selected}
        handleSelect={handleSelect}
      />
      <div className="relative flex h-auto w-full flex-wrap gap-4 rounded-md bg-[#161717] p-4 md:h-[400px]">
        <div className="max-w-full grow rounded-md border p-4 lg:max-w-[90%]">
          {selected === "line" ? (
            <Line {...graphProps} />
          ) : selected === "bar" ? (
            <Bar {...graphProps} />
          ) : selected === "pie" ? (
            <Pie
              {...{
                ...graphProps,
                options: {
                  ...graphProps.options,
                  plugins: {
                    legend: {
                      display: true,
                      position: "right",
                    },
                  },
                },
              }}
            />
          ) : selected === "doughnut" ? (
            <Doughnut
              {...{
                ...graphProps,
                options: {
                  ...graphProps.options,
                  plugins: {
                    legend: {
                      display: true,
                      position: "right",
                    },
                  },
                },
              }}
            />
          ) : null}

          {showImage && (
            <img
              src={
                "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/Analytics%20Dashboard/lwh0jhqf1jqaaemu5rwr"
              }
              alt="dummy-img"
              className="absolute bottom-0 right-0 z-0  hidden h-[200px] object-contain lg:block lg:h-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Charts;
