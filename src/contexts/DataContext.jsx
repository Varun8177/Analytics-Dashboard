import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const baseUrl = process.env.REACT_APP_BASEURL;

export const dataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseUrl}`, {
        params: searchParams,
      });
      const salesAndTraffic = {
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
            data: res?.data?.salesAndTraffic?.sales,
            borderColor: "rgba(152, 145, 204, 1)",
          },
          {
            label: "Traffic",
            backgroundColor: "rgba(255, 189, 105, 1)",
            data: res?.data?.salesAndTraffic?.traffic,
            borderColor: "rgba(255, 189, 105, 1)",
          },
        ],
      };

      const visitors = {
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
            data: res.data.visitors.visitors,
            borderColor: "rgba(152, 145, 204, 1)",
          },
        ],
      };
      setData({ salesAndTraffic, visitors });
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [searchParams]);
  return (
    <dataContext.Provider value={{ data, loading, error }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
