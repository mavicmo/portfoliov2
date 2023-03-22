import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#d4d3c3] text-slate-800">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-5xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-5xl font-bold">
            <p>Hi, Mo here and welcome to my protfilio!</p>
          </div>
          <div>
            <p className="text-2xl">
              Ambitious Software Engineer from George Mason University and
              General Assembly with a concentration in programming languages,
              with 5+ years of professional experience in the IT industry.
              Determined individual, who is willing to go the extra mile to
              continuously learn and improve their knowledge. Seeking to
              transition to a coding-based role to continue learning and
              expanding my knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
