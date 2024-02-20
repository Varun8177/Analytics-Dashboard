import React from "react";
import UserProfileCard from "./constants/UserProfileCard";
import SearchBar from "./constants/SearchBar";

const Header = () => {
  return (
    <div className="flex w-full justify-between gap-4">
      <SearchBar />
      <UserProfileCard name="Uroos Fatima" email="uroosfatima@gmail.com" />
    </div>
  );
};

export default Header;
