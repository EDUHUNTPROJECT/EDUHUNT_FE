"use client";
import React from "react";
import MainLayout from "../../components/core/layouts/MainLayout.jsx";

function ListQuestion() {
  return (
    <MainLayout>
      <div className="w-[100%] bg-white">
        <div className="w-[252px] ml-[48px] text-sky-300 text-[32px] font-extrabold">
          LIST QUESTION
        </div>
        <div>
          <div className="flex justify-center pt-[20px]">
            <div className="flex rounded-lg border-2 border-red-600">
              <div className="text-black text-xl font-extrabold border-r border-gray-900  p-[20px]">
                01
              </div>
              <div className="flex border-r border-gray-900  p-[20px] gap-[12px] ">
                <div>
                  <p className="text-black text-xl font-extrabold ">Subject:</p>
                  <p className="text-black text-xl font-extrabold">Question:</p>
                </div>
                <div>
                  <p className="text-black text-xl font-medium">Check the CV</p>
                  <p className="text-black text-xl font-medium">
                    What areas do you think I can improve upon that I should
                    address in my CV?
                  </p>
                </div>
              </div>
              <div className=" p-[20px]">
                <p className="text-stone-800 text-xl font-extrabold">
                  Date:{" "}
                  <span className="text-black text-xl font-semibold">
                    12/12/2023
                  </span>
                </p>
                <p className="text-stone-800 text-xl font-extrabold">
                  From:{" "}
                  <span className="text-black text-xl font-semibold">
                    Quoc Dat
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ListQuestion;
