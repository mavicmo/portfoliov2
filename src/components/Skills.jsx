import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import ExpressImg from "../assets/expressImg.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#d4d3c3] text-slate-800">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          {/* <p className='py-4'>// These are the technologies I've worked with</p> */}
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 transition duration-150 ease-in-out">
          <div className=" mt-2 shadow-[#040c16] hover:scale-110 ">
            <img className="w-20 mx-auto mt-2" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className=" mt-2 shadow-[#040c16] hover:scale-110 ">
            <img className="w-20 mx-auto mt-2" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className=" mt-2 shadow-[#040c16] hover:scale-110 ">
            <img
              className="w-20 mx-auto mt-2"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className=" mt-2 shadow-[#040c16] hover:scale-110 ">
            <img className="w-20 mx-auto mt-2" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className=" mt-2 shadow-[#040c16] hover:scale-110 ">
            <img className="w-20 mx-auto mt-2" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className=" mt-2 shadow-[#040c16] hover:scale-110 ">
            <img className="w-20 mx-auto mt-2" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className=" mt-2 shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-2" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className=" mt-2 shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-2" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          {/* <div className=' mt-2 shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-2' src={FireBase} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div> */}
          <div className=" mt-2 shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-2"
              src={ExpressImg}
              alt="HTML icon"
            />
            <p className="my-4">Express</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
