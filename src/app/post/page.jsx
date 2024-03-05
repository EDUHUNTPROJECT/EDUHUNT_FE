"use client";
import React, { useState, useEffect } from "react";
import MainLayout from "../../components/core/layouts/MainLayout";
import { useScholarship } from "../../hooks/useScholarship";
import { useProfile } from "../../hooks/useProfile";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ImageIcon from "../../asset/icon/ImageIcon.png"
import MoreOptions from "../../asset/icon/MoreOptions.png"
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
      });
    } catch (error) {
      alert("Error posting scholarship");
    }
  };

  return (
    <MainLayout>
      <div>
        <h1 className="text-[120px] font-bold">Create Post</h1>
      </div>
      <div className="flex flex-row gap-[35px]">
        <div className="w-[450px] h-[450px] border-[2px] border-dashed shadow-sm rounded-[25px] border-[#B5B5B5] flex flex-col gap-[10px] items-center justify-center">
          <Image src={ImageIcon} width={400} height={400} className="w-[100px] h-[100px]"></Image>
          <input type="file" id="input_image" className="hidden"/>
          <h3 className="font-semibold">Drop your image here or <label htmlFor="input_image" className="text-[#1B92FF]">browse</label></h3>
        </div>
        <form className="flex flex-col gap-[15px]">
          <div className="w-[calc(100vw-600px)]">
            <h4 className="font-bold text-[30px]">Budget</h4>
            <textarea name="" id="" rows="1" className="w-full border border-[#B5B5B5] shadow-md p-[10px] rounded-[10px] text-[28px]"></textarea>
          </div>
          <div className="w-[calc(100vw-600px)]">
            <h4 className="font-bold text-[30px]">Title</h4>
            <textarea name="" id="" rows="2" className="w-full border border-[#B5B5B5] shadow-md p-[10px] rounded-[10px] text-[28px]"></textarea>
          </div>
          <div className="w-[calc(100vw-600px)]">
            <h4 className="font-bold text-[30px]">Location</h4>
            <textarea name="" id="" rows="1" className="w-full border border-[#B5B5B5] shadow-md p-[10px] rounded-[10px] text-[28px]"></textarea>
          </div>
          <div className="w-[calc(100vw-600px)]">
            <h4 className="font-bold text-[30px]">School Name</h4>
            <textarea name="" id="" rows="1" className="w-full border border-[#B5B5B5] shadow-md p-[10px] rounded-[10px] text-[28px]"></textarea>
          </div>
          <div className="w-[calc(100vw-600px)]">
            <h4 className="font-bold text-[30px]">URL</h4>
            <textarea name="" id="" rows="1" className="w-full border border-[#B5B5B5] shadow-md p-[10px] rounded-[10px] text-[28px]"></textarea>
          </div>
          <div className="w-[calc(100vw-600px)]">
            <h4 className="font-bold text-[30px]">Description</h4>
            <textarea name="" id="" rows="4" className="w-full border border-[#B5B5B5] shadow-md p-[10px] rounded-[10px] text-[28px]"></textarea>
          </div>
          <div className="flex flex-row justify-end ">
          <button type="submit" className="py-[20px] px-[90px] flex items-center justify-center bg-[#3EAEFF] rounded-[10px] text-[24px] font-semibold text-[#fff]">
            Post 
          </button>
        </div>
        </form>
        
      </div>
    </MainLayout>
  );
};

export default Profile;
