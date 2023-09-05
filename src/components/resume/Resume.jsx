import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Auraglobal Information Services Pvt.ltd, chennai
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2022 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  <p>
                    ➢ Build dynamic, visually-attractive, end-to-end, and
                    innovative software product/apps including front-end and
                    back-end.
                  </p>
                  <p>
                    ➢ Able to design the user experience, user interaction,
                    responsive design, and complete architecture.
                  </p>
                  <p>
                    ➢ Able to work with databases such as MongoDB & PostgreSQL,
                    servers, APIs, version control systems, and third-party
                    apps.
                  </p>
                  <p>
                    ➢ Provide insights on continuous improvement and add/remove
                    functionality as per needs.
                  </p>
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                {/* College */}
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.E, Instrumentation Engineering
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Rajas Engineering College
                </span>
                <div className=" flex justify-between">
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2013 - 2017
                </span>
                <span className=" text-[.9rem] font-semibold text-black sm:text-base">CGPA: <span style={{fontSize: "1.1rem"}}>65 %</span> </span>
                </div>
                {/* Hsc */}
                <h1 className="text-[1.2rem] font-semibold sm:text-xl">
                  HSC
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Scott Christian Higher Secondary School
                </span>
                <div className=" flex justify-between">
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2011 - 2013
                </span>
                <span className=" text-[.9rem] font-semibold text-black sm:text-base">CGPA: <span style={{fontSize: "1.1rem"}}>75 %</span> </span>
                </div>
                {/* SSLC */}
                <h1 className="text-[1.2rem] font-semibold sm:text-xl">
                  SSLC
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  St.Aloysius High School
                </span>
                <div className=" flex justify-between">
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2011
                </span>
                <span className=" text-[.9rem] font-semibold text-black sm:text-base">CGPA: <span style={{fontSize: "1.1rem"}}>91 %</span> </span>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
