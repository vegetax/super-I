import React, { useEffect, useState, useContext } from "react";
// import { HiMenuAlt4 } from "react-icons/hi";
// import { AiOutlineClose } from "react-icons/ai";
import { FaTheaterMasks } from "react-icons/fa";
import nftPng from "../images/nfts.jpg";
import video1 from "../images/test1.mp4";

import { TransactionContext } from "../context/TransactionContext";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Navbar = () => {
  const { isLogin, signOut, connectWallet } = useContext(TransactionContext);

  return (
    <div className=" relative ">
      <nav className="relative h-16 px-10 max-w-7xl mx-auto flex flex-row  justify-between items-center ">
        <div className=" w-40  text-white flex flex-row justify-between ">
          <div>Twitter</div>
          <div>Discord</div>
        </div>

        <div className=" items-center">
          {isLogin ? (
            <div className=" text-gray-500 font-medium text-base">
              <span className="mr-4">
                {window.localStorage.getItem("local_accounts")}{" "}
              </span>
              <button
                className="inline-flex items-center px-4 py-2   border-2 text-base font-medium rounded-md shadow-sm text-white bg-[#785ea4] hover:bg-gray-700 "
                onClick={signOut}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <a
              href="#"
              className="inline-flex items-center px-4 py-2   border-2 text-base font-medium rounded-md shadow-sm text-white bg-[#b95934]  hover:bg-gray-700 "
              onClick={connectWallet}
            >
              CONNECT
            </a>
          )}
        </div>
      </nav>
      {/* Section:Welcome */}

      <main className="relative h-4/6   mx-auto max-w-7xl  px-4    sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl: mt-24">
        <div className="  absolute  bottom-0 right-0 h-96 overflow-hidden    w-8/12">
          <video autoPlay loop muted>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        <div className="relative  sm:text-center lg:text-left  w-7/12    flex  flex-col  justify-start  ">
          <div>
            <span className="rounded mx-1 bg-purple-100 px-2.5 py-1 text-xs font-semibold text-indigo-600 tracking-wide uppercase">
              create together
            </span>
            <span className="rounded mx-1 bg-purple-100 px-2.5 py-1 text-xs font-semibold text-indigo-600 tracking-wide uppercase">
              earn together
            </span>
          </div>

          <div className="mb-8 mt-3 ">
            {/* <span className="  text-4xl text-black  ">the </span> */}
            <span className="cursor-default tracking-tight text-6xl  font-bold  text-white    ">
              Sovereign Individual
            </span>
          </div>
          <div className="  mt-3 mb-4 w-10/12  text-3xl text-purple-300  ">
            A collection of decorable NFT, created to bring together soverieign
            individuals all over the world
          </div>

          <div className="  mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="  flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md text-white bg-[#785ea4] hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                MINT
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
