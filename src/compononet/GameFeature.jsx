/* This example requires Tailwind CSS v2.0+ */
import React, { useContext } from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import { MdOutlineTask } from "react-icons/Md";
import { FaMedal, FaRegGem } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

import nftPng2 from "../images/task.jpg";
import earnVideo from "../images/earn.mp4";
import togetherPng from "../images/together.jpg";
import { TransactionContext } from "../context/TransactionContext";

const text = {
  id: 1,
  name_en: "WHO IS SOVEREIGN INDIVIDUAL？",
  name_cn: "什么样的人可以称之为主权个人？",
  description1_en:
    "those who can educate themselves and believe they can do anything,because the greatest source of wealth will be the ideas in your head rather than physical capital.",
  description2_en:
    "adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  description1_cn:
    "那些不断实现自我迭代与成长并且不给自己设限的人。在这个时代，最大的财富来自于你的智慧",
  description2_cn:
    "设计、艺术、程序、市场，所有任务的目的只有一个，就是为NFT赋能一共有四种类型：设计、艺术、程序、市场，所有任务的目的只有一个，就是为NFT赋能一共有四种类型：设计、艺术、程序、市场，所有任务的目的只有一个，就是为NFT赋能",
  creatTogether_en:
    "As a sovereign individual,you can empower NFT through your own enthusiasm and talents, pick up tasks you are good at and get them done to gain corresponding reputation.",
  creatTogether_cn:
    "每个主权个体都可以通过自己的热情和才能为NFT赋能，接取自己擅长的任务 ，完成它获得相应的声望。",
  earnTogether_en:
    "As the gems on the NFT are light up one by one, it will makes the NFT more precious and special, and allows you to get part of the royalty of this NFT.",
  earnTogether_cn:
    "随着NFT上宝石被逐个点亮，这不仅使得NFT更加珍贵和特别，还能让你收获永久的版税。",
  mintDes_en: "We have 5000 Sovereign Individuals. Mint one to join us",
  mintDes_cn: "总共有5000个Sovereign Individuals NFT，快来加入我们吧",
};
const takeReputation = [
  {
    id: 1,
    name_en: "TASK",
    name_cn: "任务",

    description_en:
      "There are four types of tasks: Design,  Engineering&Technology,  Marketing&Communications,  Business Strategy. All tasks have only one purpose, empower your NFT",
    description_cn:
      "一共有四种类型：设计、艺术、程序、市场，所有任务的目的只有一个，就是为NFT赋能",
    icon: MdOutlineTask,
  },
  {
    id: 2,
    name_en: "REPUTATION",
    name_cn: "声望",
    description_en:
      "Complete tasks to gain reputation, which is not only a manifestation of your influence, but also can light up the gems on your NFT",
    description_cn: "完成任务获得声望，不仅是影响力的体现，也能点亮NFT上的宝石",
    icon: FaMedal,
  },
];
const gemRoyalty = [
  {
    id: 1,
    name_en: "GEM",
    name_cn: "宝石",
    description_en:
      "Every NFT is studded with sleeping gems, and only reputation can light them up.",
    description_cn: "每个NFT上都镶嵌着沉睡的宝石，只有声望才能点亮它们.",
    icon: FaRegGem,
  },
  {
    id: 2,
    name_en: "ROYALTY",
    name_cn: "版税",

    description_en:
      "A protection of the intellectual propety rights of each sovereign individual. After lighting up the gems, each transaction of NFT will bring you benefits, the more gems you light up, the higher royalty rate you will get.",
    description_cn:
      " 点亮宝石后，NFT的每次交易都将为你带来收益，点亮的宝石越多，获得的版税越多。",
    icon: RiMoneyDollarCircleLine,
  },
];

export default function GameFeature() {
  const { language } = useContext(TransactionContext);
  return (
    <div className="relative  pt-24 bg-gradient-to-b   from-[#160823]  via-[#160823] to-purple-900   ">
      {/* //主权个体介绍 */}
      <div className="  relative  h-[34rem]">
        <div className=" absolute top-20 -left-20">
          <img className="h-96" src={togetherPng} alt="" />
        </div>
        <div className="absolute w-5/12 top-20 right-16 text-left">
          <h2 className="text-3xl italic leading-8 font-semibold tracking-tight text-white sm:text-4xl">
            {language == 1 ? text.name_cn : text.name_en}
          </h2>
          <p className="mt-10 max-w-3xl mx-auto  text-xl text-white">
            {language == 1 ? text.description1_cn : text.description1_en}
          </p>
          <p className="mt-10 max-w-3xl mx-auto  text-xl text-white">
            {language == 1 ? text.description2_cn : text.description2_en}
          </p>
        </div>
      </div>
      {/***mint **/}
      <div className="mt-10 mb-24 max-w-7xl  h-60 mx-auto flex justify-around items-center  shadow-xl bg-yellow-400">
        <div className=" w-[30%] font-bold italic text-5xl  text-center ">
          WELCOME TO OUR CLUB
        </div>
        <div className="w-[30%] text-xl font-bold text-center ">
          {language == 1 ? text.mintDes_cn : text.mintDes_en}
        </div>
        <div className="w-[20%] text-xl  text-center">
          <button className="h-12  px-16 text-2xl font-medium rounded-md text-yellow-400 bg-gray-700 hover:bg-gray-600 ">
            Mint
          </button>
        </div>
      </div>
      {/* 线 */}

      <div className="relative  pt-28 max-w-7xl mx-auto   border-t  border-gray-400">
        <div className="relative flex flex-row  justify-between ">
          <div className="relative w-6/12 pl-32">
            <h2
              id="creat"
              className="text-3xl italic leading-8 font-semibold tracking-tight text-white sm:text-4xl"
            >
              CREATE TOGETHER
            </h2>
            <p className="mt-3 text-lg text-white ">
              {language == 1 ? text.creatTogether_cn : text.creatTogether_en}
            </p>

            <dl className="mt-10 space-y-10">
              {takeReputation.map((item) => (
                <div key={item.id} className=" my-10 relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md border-[2px] border-[#364153] bg-[#212936] text-white">
                      <item.icon
                        style={{ color: "white" }}
                        className="h-7 w-7 "
                        aria-hidden="true"
                      />
                    </div>
                    <p className="ml-16 text-xl leading-6  font-extrabold italic text-white">
                      {language == 1 ? item.name_cn : item.name_en}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-white">
                    {language == 1 ? item.description_cn : item.description_en}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative  -top-4 pr-14 " aria-hidden="true">
            <img className="relative mx-auto w-[33rem]" src={nftPng2} alt="" />
          </div>
        </div>

        <div className="relative py-28  ">
          <div className="relative flex  flex-row-reverse  justify-between  ">
            <div className="mr-10 w-5/12">
              <h3
                id="earn"
                className="text-3xl italic leading-8 font-semibold tracking-tight text-white sm:text-4xl"
              >
                EARN TOGETHER
              </h3>
              <p className="mt-3 text-lg bg-clip-text text-white   ">
                {language == 1 ? text.earnTogether_cn : text.earnTogether_en}
              </p>

              <dl className="mt-10 space-y-10">
                {gemRoyalty.map((item) => (
                  <div key={item.id} className=" my-10 relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md border-[2px] border-[#364153] bg-[#212936] text-white">
                        <item.icon
                          style={{ color: "white" }}
                          className="h-7 w-7 "
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-16 text-xl leading-6  font-extrabold italic text-white ">
                        {language == 1 ? item.name_cn : item.name_en}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-white ">
                      {language == 1
                        ? item.description_cn
                        : item.description_en}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className=" ml-36 mt-2  overflow-hidden  rounded-3xl   relative  ">
              <video className="w-[28rem]" autoPlay loop muted>
                <source src={earnVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
