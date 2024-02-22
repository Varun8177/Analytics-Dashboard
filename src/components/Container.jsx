import React, { useContext } from "react";
import Header from "./Header";
import Overviews from "./container/Overviews";
// eslint-disable-next-line no-unused-vars
import { useMediaQuery } from "react-responsive";
import { twMerge } from "tailwind-merge";
import Charts from "./container/Charts";
import { dataContext } from "../contexts/DataContext";
import Loader from "./constants/Loader";
import Error from "./constants/Error";

const Container = () => {
  const { data, loading, error } = useContext(dataContext);
  const iconsOnly = useMediaQuery({
    query: "(max-width: 700px)",
  });

  return (
    <div
      className={twMerge(
        "h-full max-h-screen grow space-y-4 overflow-y-auto px-4 pt-2",
        iconsOnly && "max-h-[90vh]",
      )}
    >
      <Header />
      <p className="text-3xl font-semibold text-white">Hello, Uroos</p>
      <Overviews />
      {loading ? (
        <Loader />
      ) : data ? (
        <div className="flex flex-col gap-4 lg:flex-row">
          <Charts
            chartData={data?.salesAndTraffic}
            options={["Line", "Bar"]}
            showImage
            title="Sales and Traffic"
            yearQueryTitle="salesYear"
            typeQueryTitle="sales-graph-type"
          />
          <Charts
            chartData={data?.visitors}
            options={["Pie", "Doughnut"]}
            title="Visitors"
            yearQueryTitle="visitorYear"
            typeQueryTitle="visitor-graph-type"
          />
        </div>
      ) : error ? (
        <Error />
      ) : null}
      <div className="h-10" />
    </div>
  );
};

export default Container;
