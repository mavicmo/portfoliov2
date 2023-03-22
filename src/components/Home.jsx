import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#d4d3c3]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-slate-800">
          Mo Taraq
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-slate-800">
          I'm a<span> </span>
          <Typed
            className="text-4xl sm:text-7xl font-bold text-slate-800"
            strings={["Full Stack", "Software", "Front-end", "Back-end"]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
          Developer
        </h2>

        <p className="text-slate-800 py-4 max-w-[700px]">
          Experienced software engineer with proficiency in multiple programming
          languages, frameworks, and databases. Expertise in Git and version
          control, as well as demonstrated skills in project management and
          technical support.
        </p>
        <div>
          <button className="text-slate-800 group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
