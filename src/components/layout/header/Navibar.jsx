import React from "react";
import Hamburger from "../../../assets/hamburger.svg";
import DownArrow from "../../../assets/downarrow.svg";
import Support from "../../../assets/headphone.png";

const Navibar = () => {
  return (
    <div className="w-full bg-gray-dark px-10 max-sm:hidden sm:hidden md:flex xl:flex justify-between">
      <button className="bg-red lg:text-1.8rem xl:text-2.4rem flex text-white items-center gap-4 p-4">
        <img src={Hamburger} alt="nav" /> All Categories
        <img src={DownArrow} alt="arrow" />
      </button>
      <nav className="items-center flex w-1/2">
        <ul className="text-white lg:text-1.4rem xl:text-1.6rem flex justify-evenly uppercase w-full">
          <li>
            <a href="#" className="p-5">
              Home
            </a> 
          </li>
          <li>
            <a href="#" className="p-5">
              About
            </a> 
          </li>
          <li>
            <a href="#" className="p-5">
              Product
            </a> 
          </li>
          <li>
            <a href="#" className="p-5">
              Pages
            </a> 
          </li>
          <li>
            <a href="#" className="p-5">
              Contact
            </a> 
          </li>
        </ul>
      </nav>

      <div className="flex gap-4 items-center">
        <img src={Support} alt="support" className="w-12 h-12"/>
        <div className="text-white flex flex-col">
          <span className="lg:text-1.3rem xl:text-1.5rem  whitespace-nowrap font-light">Contact Us 24/7</span>
          <a className="lg:text-1.6rem xl:text-1.8rem" href="tel:+12012987481">+12012987481</a>
        </div>
      </div>
    </div>
  );
};

export default Navibar;
