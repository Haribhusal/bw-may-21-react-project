import React from "react";

import HeroSlider from "../components/HeroSlider";

const HeroSection = () => {
  return (
    <section className="flex bg-violet-50 p-10 gap-10 justify-center">
      <div className="catmenu w-1/4 bg-white p-5 rounded-md">
        <div className="heading border-b-2 mb-4 pb-4 border-violet-200">
          <h4 className="text-violet-600 font-bold">Product Categories</h4>
        </div>
        <ul className="flex flex-col gap-3">
          <li>
            <a href="/" className="flex justify-between">
              <div className="text">Beauty</div>
              <span className="border-2 text-violet-600 rounded-md border-violet-400 text-sm px-2 ">
                34
              </span>
            </a>
          </li>
          <li>
            <a href="/" className="flex justify-between">
              <div className="text">Fashion</div>
              <span className="border-2 text-violet-600 rounded-md border-violet-400 text-sm px-2 ">
                22
              </span>
            </a>
          </li>
          <li>
            <a href="/" className="flex justify-between">
              <div className="text">Lifestyle</div>
              <span className="border-2 text-violet-600 rounded-md border-violet-400 text-sm px-2 ">
                51
              </span>
            </a>
          </li>
          <li>
            <a href="/" className="flex justify-between">
              <div className="text">Electronics</div>
              <span className="border-2 text-violet-600 rounded-md border-violet-400 text-sm px-2 ">
                11
              </span>
            </a>
          </li>
          <li>
            <a href="/" className="flex justify-between">
              <div className="text">Communication</div>
              <span className="border-2 text-violet-600 rounded-md border-violet-400 text-sm px-2 ">
                55
              </span>
            </a>
          </li>
          <li>
            <a href="/" className="flex justify-between">
              <div className="text">Networks</div>
              <span className="border-2 text-violet-600 rounded-md border-violet-400 text-sm px-2 ">
                25
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="image w-3/4 relative">
        <HeroSlider />
      </div>
    </section>
  );
};

export default HeroSection;
