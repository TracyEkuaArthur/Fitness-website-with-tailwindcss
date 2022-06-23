import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";

const icon = () => {
  return (
    <div className="h-32 w-full bg-zinc-900 flex justify-between px-16 py-5">
      <div className="flex h-24 w-64 justify-between">
        <AiFillTwitterCircle size={95} color="gray" className="" />
        <p className="text-xs h-8 text-gray-700 font-bold mt-5">loading twitter...</p>
      </div>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-900 px-8 rounded inline-flex items-center h-12">
        Publish
      </button>
    </div>
  );
};

export default icon;
