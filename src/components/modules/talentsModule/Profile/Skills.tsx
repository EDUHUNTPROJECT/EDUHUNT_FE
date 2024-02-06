import React from "react";

function Skills() {
  return (
    <div className=" rounded-lg  basis-[70%] w-ful ">
    <div className="relative h-full">
      <span className="absolute w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
      <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
        <div className="flex items-center -mt-1">
          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Project Audit</h3>
        </div>
        <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
        <p className="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
          to assess the extent up to which project management standards are being upheld.</p>
      </div>
    </div>
  </div>
  );
}

export default Skills;
