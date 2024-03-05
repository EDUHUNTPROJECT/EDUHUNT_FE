"use client";
import React, { useState, useEffect } from "react";
import MainLayout from "../../components/core/layouts/MainLayout";
import CloudinaryRoadMap from "../../components/cloud/CloudinaryRoadMap";
import { useRoadMap } from "../../hooks/useRoadMap";
import { useProfile } from "../../hooks/useProfile";
import { Image } from "antd";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { postRoadMaps } = useRoadMap();
  const { getProfile } = useProfile();
  const [contentURLs, setContentURLs] = useState([]);
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

  const handleUpload = (url) => {
    setContentURLs((prevURLs) => [...prevURLs, url]);
    const userId = localStorage.getItem("userId");
    postRoadMaps([{ userId, contentURL: url }]).then((response) => {
      console.log(response);
    });
  };

  const pdfToImageURL = (url) => {
    const newUrl = url.replace(/\.pdf$/, ".jpg");
    return newUrl;
  };

  return (
    <MainLayout>
      <div>
        <input type="text" />
        <CloudinaryRoadMap onUpload={handleUpload} />
        <div className="flex gap-4 justify-center h-[400px]">
          {contentURLs.map((url, index) => (
            <Image
              key={index}
              width={400}
              src={pdfToImageURL(url)}
              alt={`Uploaded ${index}`}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
