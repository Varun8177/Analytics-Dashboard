import React from "react";
import { useSearchParams } from "react-router-dom";

const ChartYearFilter = ({ queryTitle }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const years = [2020, 2021, 2022, 2023, 2024];

  return (
    <select
      id={`${queryTitle}-year`}
      className="block w-full rounded-lg border bg-[#161717] p-2.5 text-sm text-white"
      defaultValue={+searchParams.get(queryTitle) || ""}
      onChange={(e) => {
        const value = e.target.value;
        if (value) {
          searchParams.set(queryTitle, e.target.value);
        } else {
          searchParams.delete(queryTitle);
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
