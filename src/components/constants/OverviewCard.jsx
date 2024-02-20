import React from "react";

const OverviewCard = ({
  bgColor = "#0BF4C8",
  title = "",
  value = "",
  overviewImage = "",
}) => {
  return (
    <div
      className={`bg-[${bgColor}] relative h-[159px] w-[250px] min-w-[250px] grow rounded-md p-4`}
    >
      <div className="space-y-4">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-3xl font-semibold">{value}</p>
        <p className="cursor-pointer text-sm font-semibold underline">
          View entire list
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/Analytics%20Dashboard/qp483ydrergexxbp2bv7"
        alt="strokes"
        className="absolute right-0 top-0 h-20 object-contain lg:h-auto lg:w-auto"
      />
      <img
        src={overviewImage}
        alt="dummy-img"
        className="absolute bottom-0 right-0 z-10 object-contain"
      />
    </div>
  );
};

export default OverviewCard;
