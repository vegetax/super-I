import React, { useContext } from "react";
import { Link } from "react-scroll";
import { FaTheaterMasks } from "react-icons/fa";
import nftPng from "../images/nfts.jpg";
import video1 from "../images/5M.mp4";

import { TransactionContext } from "../context/TransactionContext";

const text = {};

const Navbar = () => {
  const { isLogin, signOut, language, connectWallet, selectLanguage } =
    useContext(TransactionContext);

  return (
    <div className=" relative h-screen  pt-24  bg-gradient-to-b from-black via-black   to-[#160823] ">
      <nav className=" fixed top-0 left-0  h-16 px-20  w-screen   mx-auto  z-50 bg-black flex   justify-between items-center ">
        <div className=" flex  justify-between items-baseline ">
          <div className="pl-4 pr-10  tracking-tight font-extrabold text-2xl text-white">
            Sovereign Individual
          </div>
          <div className=" w-32  text-white flex flex-row justify-between ">
            <div>Twitter</div>
            <div>Discord</div>
          </div>
          <button className=" mx-10 text-white   " onClick={selectLanguage}>
            {language == 1 ? "English" : "中文"}
          </button>
        </div>
        <div className=" items-center">
          {isLogin ? (
            <div className=" text-gray-500 font-medium text-base">
              <span className="mr-4">
                {window.localStorage.getItem("local_accounts")}{" "}
              </span>
              <button
                className="h-11   px-2 text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-400 "
                onClick={signOut}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              href="#"
              className="h-11    px-2 text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-400 "
              onClick={connectWallet}
            >
              CONNECT
            </button>
          )}
        </div>
      </nav>
      {/* Section:Welcome */}

      <main className=" relative  h-[40rem]  mx-auto max-w-7xl   px-4   ">
        <div className="  absolute  top-0 right-10  h-[38rem] w-[38rem] overflow-hidden    ">
          <video autoPlay loop muted>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        <div className="relative py-10   sm:text-center lg:text-left  w-8/12    flex  flex-col  justify-start  ">
          {language == 1 ? (
            <div className="mb-8 my-3 ">
              <div className="  mt-3 mb-4 w-10/12  leading-relaxed text-5xl text-white  ">
                一套可装饰的NFT，为了聚集
                <br />
                全世界的
              </div>
              <div className="my-5 cursor-default tracking-tight text-8xl  font-bold  text-purple-600    ">
                主权个人
              </div>
            </div>
          ) : (
            <div className="mb-8 my-3 ">
              <div className="  mt-3 mb-4 w-10/12  text-5xl text-white  ">
                A collection of decorable NFTs <br />
                created to
              </div>
              <div className="my-5 cursor-default tracking-tight text-7xl  font-bold  text-purple-600    ">
                bring together <br /> Sovereign Individual
              </div>
            </div>
          )}

          <div className="  my-8">
            <Link
              to="creat"
              spy={true}
              smooth={true}
              offset={-120}
              duration={700}
              href="#"
              className=" mx-2 px-4 py-4 text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-400 "
            >
              Creat Together
            </Link>
            <Link
              to="earn"
              spy={true}
              smooth={true}
              offset={-120}
              duration={700}
              href="#"
              className=" mx-2 px-4 py-4 text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-400 "
            >
              Earn Together
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
