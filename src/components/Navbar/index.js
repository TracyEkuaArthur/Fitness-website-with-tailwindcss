import React from "react";

const index = () => {
  return (
    <div className=" h-16 w-full">
       <div className="flex ml-5">
       <h1 className=" w-10 text-2xl font-bold mr-3 ml-24 py-4">TIM</h1> <span className="font-bold text-2xl text-blue-500 mr-40 py-4">BRAUN</span>
       <div className=" w-1/2 px-px">
        <ul className="flex mr-32 py-4 justify-evenly">
          <button className="py-1 px-2 rounded bg-black text-white">HOME</button>
          <li>ABOUT ME</li>
          <li>PROGRAMS</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>
       </div>
       </div>
      
    </div>
  );
};

export default index;
