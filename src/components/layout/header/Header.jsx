import React from "react";
import Logo from "../../../assets/logo.svg";
import HeaderUtils from "./HeaderUtils";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-12">
      <div className="sm:w-1/2 md:w-1/6 align-middle	">
        <img src={Logo} alt="eShop" className="max-sm:w-24 max-md:w-24 max-lg:w-48" />
      </div>
      <SearchBar />
      <HeaderUtils />
    
    </header>
  );
};

export default Header;
