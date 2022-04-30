import React, { useEffect, useState, useContext } from "react";
// import { HiMenuAlt4 } from "react-icons/hi";
// import { AiOutlineClose } from "react-icons/ai";
import { FaTheaterMasks } from "react-icons/fa";
import nftPng from "../images/nft_1.png";

import { TransactionContext } from "../context/TransactionContext";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Navbar = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);

  return (
    <div className="relative bg-primary overflow-hidden h-screen">
      <nav className="relative max-w-7xl mx-auto flex flex-row-reverse items-center justify-between  p-2 sm:px-6">
        {/* Icon+logo */}
        {/* <div className="flex flex-row items-center text-white">
          <FaTheaterMasks size={30} />
          <p className=" p-2 font-medium"> Mask, take on is take off~</p>
        </div> */}
        {/* collect wallet */}
        <div>
          {currentAccount ? (
            <div className=" mt-2 py-2 mt-4  text-white font-medium text-base">
              {currentAccount}
            </div>
          ) : (
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 mt-4   border-2 text-base font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 "
              onClick={connectWallet}
            >
              CONNECT WALLET
            </a>
          )}
        </div>
      </nav>
      {/* Section:Welcome */}
      <div className="relative  h-96 flex flex-col  items-center p-10  ">
        <div className=" mt-10 pb-5">
          <FaTheaterMasks size={60} color={"white"} />
        </div>
        <div className=" text-white font-medium text-5xl">Masker</div>
        <div className=" mt-2 text-white font-medium text-base">
          <span className="   text-white font-medium text-2xl">[</span> take on
          the mask&nbsp;&nbsp;&nbsp; take to the new world&nbsp;
          <span className=" text-white font-medium text-2xl">]</span>
        </div>
        <div>
          <img className="h-60 mt-10" src={nftPng} alt="" />
        </div>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 mt-5  border-2 text-lg font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 "
        >
          Take On
        </button>
      </div>
    </div>
  );
};

export default Navbar;
