import React from "react";
import { useSearchParams } from "react-router-dom";

const ChartYearFilter = ({ yearQueryTitle }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const years = [2020, 2021, 2022, 2023, 2024];

  return (
    <select
      id={`${yearQueryTitle}-year`}
      className="block w-full rounded-lg border bg-[#161717] p-2.5 text-sm text-white"
      defaultValue={+searchParams.get(yearQueryTitle) || ""}
      onChange={(e) => {
        const value = e.target.value;
        if (value) {
          searchParams.set(yearQueryTitle, e.target.value);
        } else {
          searchParams.delete(yearQueryTitle);
        }
        setSearchParams(searchParams);
      }}
    >
      <option value="">Choose a year</option>
      {years.map((year) => (
        <option value={year} key={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default ChartYearFilter;
