import React from "react";
import OverviewCard from "../constants/OverviewCard";

const Overviews = () => {
  const overviewData = [
    {
      title: "Weekly Revenue",
      value: "$20k",
      overviewImage:
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/Analytics%20Dashboard/dgogg41o4thopqldtv7r",
    },
    {
      title: "Monthly Orders",
      value: "376",
      overviewImage:
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/Analytics%20Dashboard/qnspxqe9tyu33ucykpye",
    },
    {
      title: "Customers Joined Today",
      value: "5",
      overviewImage:
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/Analytics%20Dashboard/dmssfdrcqsivaw4dhr9e",
    },
  ];
  return (
    <div className="flex w-full flex-wrap gap-4">
      {overviewData.map((item, i) => (
        <OverviewCard key={i} {...item} index={i} />
      ))}
    </div>
  );
};

export default Overviews;
