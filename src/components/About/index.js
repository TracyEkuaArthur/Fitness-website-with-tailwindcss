import React from "react";

const About = () => {
  return (
    <div className="h-screen w-full  flex justify-evenly mt-9 bg-slate-900">
      <div className=" h-96 w-72">
        <div className="">
          <h1 className="font-bold text-white text-xm mt-10">ABOUT ME</h1>
        </div>
        <div className=" w-60 h-40">
          <img src="/images/no.jpg" className="h-44 w-56 mt-5" alt="" />
        </div>
        <div>
          <p className=" mt-7 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            provident
          </p>
        </div>
        <div>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            iste autem amet itaque explicabo in hic animi
          </p>
        </div>
      </div>
      <div className="h-40 w-56  mt-14" style={{ marginLeft: "-5rem" }}>
        <p className="text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nemo
          sed sequi, corrupti, rerum similique, quod provident temporibus
          perspiciatis quam suscipit enim uoigygoby iydtz huiy buio
          bettoubhtrrewqsf bnmojp98ce ytrf vrdly bmih iungf rwgh go
        </p>
      </div>
      <div className="h-96 w-56">
        <div>
          <h1 className="font-bold text-white text-xm mt-10">NAVIGATION</h1>
        </div>
        <div>
          <ul className="">
            <li className="font-bold  mt-6 text-gray-400">Testimony</li>
            <li className="font-bold mt-6 text-gray-400">About Me</li>
            <li className="font-bold mt-6 text-gray-400">Program</li>
            <li className="font-bold mt-6 text-gray-400">Blog</li>
            <li className="font-bold mt-6 text-gray-400">Contact</li>
          </ul>
        </div>
      </div>
      <div className=" h-96 w-56 mr-10">
        <div>
          <h1 className="font-bold text-white text-xm mt-10">ARCHEVES</h1>
        </div>
        <div>
          <ul className="h-52 my-6">
            <li className="flex">
              <p className="font-bold text-gray-400">July 2005</p>{" "}
              <span className="text-sky-400">(9)</span>
            </li>
            <li className="flex mt-6">
              <p className="font-bold text-gray-400">November 2001</p>{" "}
              <span className="text-sky-400">(9)</span>
            </li>
            <li className="flex mt-6">
              <p className="font-bold text-gray-400">June 2003</p>{" "}
              <span className="text-sky-400">(9)</span>
            </li>
            <li className="flex mt-6">
              <p className="font-bold text-gray-400">October 2006</p>{" "}
              <span className="text-sky-400">(9)</span>
            </li>
            <li className="flex mt-6">
              <p className="font-bold text-gray-400">June 2001</p>{" "}
              <span className="text-sky-400">(9)</span>
            </li>
            <li className="flex mt-6">
              <p className="font-bold text-gray-400">January 2001</p>{" "}
              <span className="text-sky-400">(9)</span>
            </li>
            <li className="flex mt-6">
              <p className="font-bold text-gray-400">May 2001</p>{" "}
              <span className="text-sky-400">(9)</span>
            </li>
          </ul>
        </div>
      </div>
      <div className=" h-96 w-56">
        <div>
          <h1 className="font-bold text-white mt-10 ">LATEST COMMENTS</h1>
        </div>
        <div className="h-20 w-20 bg-slate-200 flex mt-8">
          <img src="/images/profile.png" alt="" />
          <div>
          
            <p className="text-sky-500 mx-4 mt-4">admin</p>
            <p className="w-28 mx-4 text-gray-600">21st May 2008</p>
          </div>
          
        </div>
        <div>
              <p className="text-gray-600 w-64 mt-4 h-24 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis sapiente suscipit sequi 
                
              </p>
            </div>
        <div>
        <div className=" h-20 w-20 bg-slate-200 flex mt-8">
          <img src="/images/profile.png" alt="" />
          <div>
          
            <p className="text-sky-500 mx-4 mt-4">admin</p>
            <p className=" w-28 mx-4 text-gray-600">21st May 2008</p>
          </div>
          
        </div>
        <div>
              <p className="text-gray-600 w-64 mt-4 h-24">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis sapiente suscipit sequi 
                
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
