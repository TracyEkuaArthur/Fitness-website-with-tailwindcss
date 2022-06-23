import React from "react";
import { Stories } from "../Program/Data";
import { AiTwotoneMinusCircle } from "react-icons/ai";

const News = () => {
  return (
    <div className=" h-screen w-full flex">
      <div className=" h-5/6 w-6/12">
        <div className="px-20">
          <h1 className=" font-semibold text-white">NEWS & UPDATES</h1>
        </div>
        {Stories.map((items, idx) => (
          <div className="flex">
            <div className="h-40 w-60 ml-20 mt-8 ">
              <img src={items.image} alt="" />
            </div>

            <div className=" mx-16">
              <p className=" mt-7 text-xm font-bold text-white">
                {items.heading}
              </p>
              <div className="flex">
                <h6 className="text-xs text-gray-300">{items.date}</h6>{" "}
                <span className=" mx-2">{items.icon}</span>
              </div>
              <div>
                <p className=" w-72 text-gray-500">{items.content}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="h-10 w-32 mx-20 my-10 bg-slate-500 rounded">
          <button className="text-white px-5 py-2 font-bold text-xs hover:bg-slate-700">
            View All News
          </button>
        </div>
      </div>
      <div className=" h-5/6 w-6/12">
        <h1 className=" font-semibold text-white">CATERGORIES</h1>
        <div>
          <ul className="h-52 my-8">
            <li className="flex">
              <AiTwotoneMinusCircle className="text-blue-600 my-1" />
              <span className="text-white ml-2 mb-4">Weight Gain</span>
            </li>
            <li className="flex">
              <AiTwotoneMinusCircle className="text-blue-600 my-1" />
              <span className="text-white ml-2 mb-4">Loss Weight</span>
            </li>
            <li className="flex">
              <AiTwotoneMinusCircle className="text-blue-600 my-1" />
              <span className="text-white ml-2 mb-4">Hip Enlargement</span>
            </li>
            <li className="flex">
              <AiTwotoneMinusCircle className="text-blue-600 my-1" />
              <span className="text-white ml-2 mb-4">News and Update</span>
            </li>
            <li className="flex">
              <AiTwotoneMinusCircle className="text-blue-600 my-1" />
              <span className="text-white ml-2 mb-4">Catergories</span>
            </li>
            <li className="flex">
              <AiTwotoneMinusCircle className="text-blue-600 my-1" />
              <span className="text-white ml-2 mb-4">Luctus</span>
            </li>
            <li className="flex">
              <AiTwotoneMinusCircle className="mt-2 text-blue-600" />
              <span className="text-white ml-3">Linic</span>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mt-28 font-semibold text-white">
            TESTIMONIES
          </h1>
        </div>
        <div className="w-1/2">
          <p className=" h-44 mt-3 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem numquam quasi nisi, aliquid esse minus ducimus vitae
            magni. Eaque repudiandae veritatis quam tempora quaerat impedit
            laboriosam officiis animi quia ipsam! agni. Eaque repudiandae
            veritatis quam quia ipsam! agni.!
          </p>
        </div>
        <div className="h-10 w-32 mt-12 bg-slate-500 rounded">
          <button className="text-white px-5 py-2 font-bold text-xs hover:bg-slate-700">
            All Testimonies
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
