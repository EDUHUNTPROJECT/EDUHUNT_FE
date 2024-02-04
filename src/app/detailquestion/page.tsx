import React from "react";
import Image from "next/image";

function DetailQuestion() {
  return (
    <>
      <div className="w-[100%] bg-white shadow">
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
        <div className="w-[360px] ml-[48px] text-sky-300 text-[32px] font-extrabold">
          ANSWER QUESTION
        </div>
        <div className="p-4 border">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                defaultValue=""
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                defaultValue=""
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="" className="">
                From:
              </label>
              <span>Bao Khanh</span>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="question"
              className="block text-sm font-medium text-gray-700"
            >
              Question
            </label>
            <textarea
              id="question"
              name="question"
              className="mt-1 p-2 w-full border rounded-md"
              defaultValue=""
            ></textarea>
          </div>

          <div className="mt-4">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700"
            >
              File
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="answer"
              className="block text-sm font-medium text-gray-700"
            >
              Answer
            </label>
            <textarea
              id="answer"
              name="answer"
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailQuestion;
