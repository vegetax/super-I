/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

import nftPng2 from "../images/task.jpg";
import nftPng3 from "../images/comparison.jpg";

const transferFeatures = [
  {
    id: 1,
    name: "任务",
    description:
      "一共有四种类型：设计、艺术、程序、市场，所有任务的目的只有一个，就是为NFT赋能",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "声望",
    description: "完成任务获得声望，不仅是影响力的体现，也能点亮NFT上的宝石",
    icon: ScaleIcon,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: "宝石",
    description: "每个NFT上都镶嵌着沉睡的宝石，只有声望才能点亮它们.",
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: "版税",
    description:
      " 点亮宝石后，NFT的每次交易都将为你带来收益，点亮的宝石越多，获得的版税越多。",
    icon: MailIcon,
  },
];

export default function GameFeature() {
  return (
    <div className="py-32 overflow-hidden ">
      <div className="relative max-w-7xl mx-auto sm:px-6 ">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
            The Sovereign Individual
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            magnam voluptatum cupiditate veritatis in, accusamus quisquam.Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-black  tracking-tight sm:text-3xl">
              CREATE TOGETHER
            </h3>
            <p className="mt-3 text-lg text-black ">
              每个主权个体都可以通过自己的热情和才能为NFT赋能，接取自己擅长的任务
              ，完成它获得相应的声望。
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-black">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <img
              className="relative mx-auto"
              width={490}
              src={nftPng2}
              alt=""
            />
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                EARN TOGETHER
              </h3>
              <p className="mt-3 text-lg bg-clip-text   ">
                随着NFT上宝石被逐个点亮，这不仅使得NFT更加珍贵和特别，还能让你收获永久的版税。
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-black">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <img
                className="relative mx-auto"
                width={490}
                src={nftPng3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
