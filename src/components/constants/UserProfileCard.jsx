import React from "react";
import { useMediaQuery } from "react-responsive";

const UserProfileCard = ({ name = "", email = "" }) => {
  const imageOnly = useMediaQuery({
    query: "(max-width: 592px)",
  });
  return (
    <div className="flex max-w-[256px] items-center gap-2 text-sm text-white">
      {!imageOnly && (
        <div>
          <p>{name}</p>
          <p className="text-[#5E5E5E]">{email}</p>
        </div>
      )}
      <img
        src="https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/Analytics%20Dashboard/zowcm8azg4tyxcetqhv0"
        alt="profile-img"
        className="h-9 w-9 object-contain"
      />
    </div>
  );
};

export default UserProfileCard;
