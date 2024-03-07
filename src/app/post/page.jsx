"use client";
import React, { useState, useEffect } from "react";
import MainLayout from "../../components/core/layouts/MainLayout";
import { useScholarship } from "../../hooks/useScholarship";
import { useProfile } from "../../hooks/useProfile";
import { useRouter } from "next/navigation";
import CloudinaryPost from "../../components/cloud/CloudinaryPost";
import UploadImg from "../../../public/Vector.png";
import { Image } from "antd";

const Profile = () => {
  const { postScholarship } = useScholarship();
  const { getProfile } = useProfile();
  const [scholarshipData, setScholarshipData] = useState({
    budget: "",
    title: "",
    location: "",
    schoolName: "",
    url: "",
    description: "",
    authorId: localStorage.getItem("userId"),
    imageUrl: "",
  });
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    const userId = localStorage.getItem("userId");
    if (role !== "Scholarship Provider") {
      router.push("/");
    } else {
      getProfile(userId).then((profile) => {
        if (!profile.isAllow) {
          router.push("/");
          alert("You are not allowed to post a scholarship.");
        }
      });
    }
  }, []);

  const handleChange = (e) => {
    setScholarshipData({ ...scholarshipData, [e.target.name]: e.target.value });
  };

  const handleUpload = (url) => {
    setScholarshipData({ ...scholarshipData, imageUrl: url });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(scholarshipData);
      await postScholarship(scholarshipData);
      alert("Scholarship posted successfully");
      setScholarshipData({
        budget: "",
        title: "",
        location: "",
        schoolName: "",
        url: "",
        description: "",
        authorId: localStorage.getItem("userId"),
        imageUrl: "",
      });
    } catch (error) {
      alert("Error posting scholarship");
    }
  };

  return (
    <MainLayout>
      <div>
        <h1 className="text-[60px] font-bold ml-[62px]">Create Post</h1>
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
            <h4 className="font-bold text-[20px]">Budget</h4>
            <textarea
              name="budget"
              rows="1"
              value={scholarshipData.budget}
              onChange={handleChange}
              className="w-full pl-4  border border-[#B5B5B5] shadow-md rounded-[10px] text-[18px]"
            ></textarea>
          </div>
          <div className="w-[calc(100vw-600px)]">
            <h4 className="font-bold text-[20px]">Title</h4>
            <textarea
              name="title"
              rows="2"
              value={scholarshipData.title}
              onChange={handleChange}
              className="w-full pl-4  border border-[#B5B5B5] shadow-md rounded-[10px] text-[18px]"
            ></textarea>
          </div>
          <div className="w-[calc(100vw-600px)]">
            <h4 className="font-bold text-[20px]">Location</h4>
            <textarea
              name="location"
              rows="1"
              value={scholarshipData.location}
              onChange={handleChange}
              className="w-full pl-4  border border-[#B5B5B5] shadow-md rounded-[10px] text-[18px]"
            ></textarea>
          </div>
          <div className="w-[calc(100vw-600px)]">
            <h4 className="font-bold text-[20px]">School Name</h4>
            <textarea
              name="schoolName"
              rows="1"
              value={scholarshipData.schoolName}
              onChange={handleChange}
              className="w-full pl-4  border border-[#B5B5B5] shadow-md rounded-[10px] text-[18px]"
            ></textarea>
          </div>
          <div className="w-[calc(100vw-600px)]">
            <h4 className="font-bold text-[20px]">URL</h4>
            <textarea
              name="url"
              rows="1"
              value={scholarshipData.url}
              onChange={handleChange}
              className="w-full pl-4  border border-[#B5B5B5] shadow-md rounded-[10px] text-[18px]"
            ></textarea>
          </div>
          <div className="w-[calc(100vw-600px)]">
            <h4 className="font-bold text-[20px]">Description</h4>
            <textarea
              name="description"
              rows="4"
              value={scholarshipData.description}
              onChange={handleChange}
              className="w-full pl-4  border border-[#B5B5B5] shadow-md  rounded-[10px] text-[18px]"
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
