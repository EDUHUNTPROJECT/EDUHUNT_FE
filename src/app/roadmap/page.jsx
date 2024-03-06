"use client";
import React, { useState, useEffect } from "react";
import MainLayout from "../../components/core/layouts/MainLayout";
import CloudinaryPost from "../../components/cloud/CloudinaryPost";
import { useRoadMap } from "../../hooks/useRoadMap";
import { useProfile } from "../../hooks/useProfile";
import { useRouter } from "next/navigation";
import UploadImg from "../../../public/Vector.png";
import { Image } from "antd";

const Profile = () => {
  const { postRoadMaps } = useRoadMap();
  const { getProfile } = useProfile();
  const [roadMapData, setRoadMapData] = useState({
    title: "",
    content: "",
    location: "",
    school: "",
    contentURL: "",
  });
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    const userId = localStorage.getItem("userId");

    if (role !== "Mentor") {
      router.push("/");
    } else {
      getProfile(userId).then((profile) => {
        if (!profile.isAllow) {
          router.push("/");
          alert("You are not allowed to post a roadmap.");
        }
      });
    }
  }, []);

  const handleInputChange = (e) => {
    setRoadMapData({ ...roadMapData, [e.target.name]: e.target.value });
  };

  const handleUpload = (urls) => {
    urls.forEach((url) => {
      const newRoadMap = { ...roadMapData, contentURL: url };
      setRoadMapData(newRoadMap);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("userId");
      console.log([{ userId, ...roadMapData }]);
      await postRoadMaps([{ userId, ...roadMapData }]);
      alert("Roadmap posted successfully");
      setRoadMapData({
        title: "",
        content: "",
        location: "",
        school: "",
        contentURL: "",
      });
    } catch (error) {
      alert("Error posting roadmap");
    }
  };

  return (
    <MainLayout>
      <div>
        <h1 className="text-[60px] font-bold">Create Roadmap</h1>
      </div>
      <div className="flex flex-row gap-[35px]">
        <div className="w-[450px] h-[450px] border-[2px] border-dashed shadow-sm rounded-[25px] flex flex-col gap-[10px] items-center justify-center">
          <Image
            src={UploadImg.src}
            className="w-[60px] h-[60px]"
            alt="Upload"
          ></Image>
          <CloudinaryPost onUpload={handleUpload} />
        </div>
        <form className="flex flex-col gap-[15px]" onSubmit={handleSubmit}>
          <div className="w-[calc(100vw-600px)]">
            <h4 className="font-bold text-[20px]">Title</h4>
            <textarea
              name="title"
              rows="2"
              value={roadMapData.title}
              onChange={handleInputChange}
              className="flex w-full pl-4  border border-[#B5B5B5] shadow-md rounded-[10px] text-[18px]"
            ></textarea>
          </div>
          <div className="w-[calc(100vw-600px)]">
            <h4 className="font-bold text-[20px]">Content</h4>
            <textarea
              name="content"
              rows="4"
              value={roadMapData.content}
              onChange={handleInputChange}
              className="w-full pl-4  border border-[#B5B5B5] shadow-md  rounded-[10px] text-[18px]"
            ></textarea>
          </div>
          <div className="w-[calc(100vw-600px)]">
            <h4 className="font-bold text-[20px]">Location</h4>
            <textarea
              name="location"
              rows="1"
              value={roadMapData.location}
              onChange={handleInputChange}
              className="w-full pl-4  border border-[#B5B5B5] shadow-md rounded-[10px] text-[18px]"
            ></textarea>
          </div>
          <div className="w-[calc(100vw-600px)]">
            <h4 className="font-bold text-[20px]">School</h4>
            <textarea
              name="school"
              rows="1"
              value={roadMapData.school}
              onChange={handleInputChange}
              className="w-full pl-4  border border-[#B5B5B5] shadow-md rounded-[10px] text-[18px]"
            ></textarea>
          </div>
          <div className="flex flex-row justify-end ">
            <button
              type="submit"
              className="py-[10px] px-[20px] flex items-center justify-center bg-[#3EAEFF] rounded-[10px] text-[24px] font-semibold text-[#fff]"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default Profile;
