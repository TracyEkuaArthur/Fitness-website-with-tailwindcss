import React from "react";

const Header = () => {
  return (
    <div className=" w-10/12 h-5/6 my-0 mx-auto flex justify-center">   
      <div className=" h-3/5 w-1/2 mt-10">
        <div className="py-10 ">
          <p className="font-light text-2xl text-blue-500 ">
            TRANSFORM
          </p>{" "}
          <span className="font-bold text-3xl my-1 text-white">YOUR LIFE</span>
        </div>
        <div className=" h-10 w-96">
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            itaque alias rerum ab aliquid quod? Repellat, temporibus, omnis
            laboriosam necessitatibus odio, similique natus quasi commodi iure
            vero voluptatum voluptatibus hic.
          </p>
        </div>
        <div>
          <button className="border-2 my-32 py-2 px-2 bg-blue-500 rounded">
            READ MORE
          </button>
        </div>
        
      </div>
      <div className="h-3/4 w-1/2 ">
          <img src="/images/strong.png" className=" h-3/4 w-full" alt="" />
        </div>
    </div>
  );
};

export default Header;
