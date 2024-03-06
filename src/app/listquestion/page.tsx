"use client";
import React from "react";

function ListQuestion() {
  return (
    <>
      <div className="w-[100%] bg-white">
        <div className="w-[100%] h-[104px] flex justify-between items-center px-[48px]">
          <div>
            <div className=" text-yellow-700 text-[40px] font-extrabold">
              EduHunt
            </div>
          </div>
          <div className="flex gap-[48px]">
            <div className="text-center text-zinc-500 text-base font-bold ">
              Contacts
            </div>
            <div className="text-center text-zinc-500 text-base font-bold ">
              News
            </div>
            <div className="text-center text-zinc-500 text-base font-bold ">
              Hahahahaha
            </div>
            <div className="text-center text-slate-700 text-base font-bold ">
              Home
            </div>
          </div>
        </div>
        <div className="w-[252px] ml-[48px] text-sky-300 text-[32px] font-extrabold">
          LIST QUESTION
        </div>
        <div>
          <div className=" flex gap-[12px]">
            <button
              onClick={() => {
                window.location.href = "/detailquestion?action=add";
              }}
            >
              ADD
            </button>
            <button
              onClick={() => {
                window.location.href = "/detailquestion?action=edit";
              }}
            >
              EDIT
            </button>
          </div>
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
    </>
  );
}

export default ListQuestion;
