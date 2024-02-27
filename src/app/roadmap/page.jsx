"use client";
import React, { useState, useEffect } from "react";
import MainLayout from "../../components/core/layouts/MainLayout";
import CloudinaryRoadMap from "../../components/cloud/CloudinaryRoadMap";
import { useRoadMap } from "../../hooks/useRoadMap";
import { Image } from "antd";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { postRoadMap } = useRoadMap();
  const [contentURL, setContentURL] = useState();
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "Mentor") {
      router.push("/");
    }
  }, []);

  const handleUpload = (url) => {
    setContentURL(url);
    const userId = localStorage.getItem("userId");
    postRoadMap(userId, url).then((response) => {
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
        {contentURL && <Image src={pdfToImageURL(contentURL)} alt="Uploaded" />}
      </div>
    </MainLayout>
  );
};

export default Profile;
