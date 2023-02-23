import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#363534] text-gray-200">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#E52424]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Will, pleasure to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className="text-[#8892b0]">
              I have found a new enthusiasm by way of Front-End Development. I
              took a non-traditional approach and spent a majority of my career
              so far in management and leadership positions. I am looking to
              parley that dedication and knowledge into the world of Front End
              Development. I am excited to go on this journey with you and see
              what amazing apps we can make together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
