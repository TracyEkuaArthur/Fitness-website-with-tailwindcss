import React from "react";
import { Programs } from "./Data";

const Program = () => {
  return (
    <div className=" w-full h-96 flex justify-evenly py-9">
      {Programs.map((item, idx) => (
        <div className="border-2 h-72 w-80 px-10 py-14 bg-zinc-700 rounded" key={idx}>
          <h4 className="text-xl font-normal text-white">{item.heading1}</h4>
          <div>
            <h2 className="text-2xl font-bold text-white">{item.heading2}</h2>
          </div>
          <div>
            <p className="py-3 w-60 text-white">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Program;
