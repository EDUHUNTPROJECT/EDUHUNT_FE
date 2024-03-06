"use client";
import React, { useState, useEffect } from "react";
import MainLayout from "../../components/core/layouts/MainLayout";
import { useScholarship } from "../../hooks/useScholarship";
import { useProfile } from "../../hooks/useProfile";
import { useRouter } from "next/navigation";

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
      console.log("check============")
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
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="budget">
            Budget:
          </label>
          <input
            name="budget"
            type="number"
            value={scholarshipData.budget}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="title">
            Title:
          </label>
          <textarea
            name="title"
            value={scholarshipData.title}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="location">
            Location:
          </label>
          <input
            name="location"
            value={scholarshipData.location}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="schoolName">
            School Name:
          </label>
          <input
            name="schoolName"
            value={scholarshipData.schoolName}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="url">
            URL:
          </label>
          <input
            name="url"
            type="url"
            value={scholarshipData.url}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="description">
            Description:
          </label>
          <textarea
            name="description"
            value={scholarshipData.description}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 rounded bg-[#00277f] text-[white]"
        >
          Submit
        </button>
      </form>
    </MainLayout>
  );
};

export default Profile;
