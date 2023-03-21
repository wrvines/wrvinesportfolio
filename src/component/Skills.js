import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import Firebase from "../assets/firebase.png";

function Skills() {
  return (
    <div name="skills" className="bg-[#363534] text-gray-200 h-screen w-full ">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#E52424] ">
            Skills
          </p>
          <p className="py-4 text-[#8892b0]">
            // These are some of the techonologies I have worked with.
          </p>
        </div>
        {/* icon container */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center pt-8 pb-28">
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Html} alt="html icon" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Css} alt="css icon" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Javascript}
              alt="javascript icon"
            />
            <p>JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p>React JS</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="tailwind icon" />
            <p>Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p>Github</p>
          </div>
          {/* <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={Firebase}
							alt="firebase icon"
						/>
						<p>Firebase</p>
					</div> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
