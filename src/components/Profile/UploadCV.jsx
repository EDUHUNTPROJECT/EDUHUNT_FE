import React, { useState, useEffect } from "react";
import CloudinaryCV from "../cloud/CloudinaryCV";
import { Image } from "antd";

const UploadCV = () => {
  const userId = localStorage.getItem("userId");
  const [cvUrl, setCvUrl] = useState("");

  useEffect(() => {
    let payload = {
      userId: userId,
    };

    let options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    };

    fetch("https://localhost:7292/api/Profiles/UploadCV", options)
      .then((response) => response.json())
      .then((response) => {
        if (response.urlCV) {
          setCvUrl(response.urlCV);
        }
      })
      .catch((error) => console.error("Error fetching CV:", error));
  }, [userId]);

  const handleCvUpload = (cvUrl) => {
    setCvUrl(cvUrl);
    let payload = {
      userId: userId,
      urlCV: cvUrl,
    };

    let options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    };

    fetch("http://localhost:5295/api/Profiles/UploadCV", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => console.error("Error uploading CV:", error));
  };

  return (
    <div className="bg-[#f0f0f0] flex flex-col justify-center items-center space-y-4 p-4">
      <CloudinaryCV onUpload={handleCvUpload} />
      {cvUrl && (
        <p className="text-center text-sm text-gray-700">
          CV uploaded successfully. URL: {cvUrl}
        </p>
      )}
      {cvUrl && (
        <Image
          className="mt-4 w-full h-auto"
          src={`${cvUrl.replace(
            "/upload/",
            "/upload/fl_attachment,fl_force_strip,pg_1/"
          )}.jpg`}
          alt="Uploaded CV"
        />
      )}
    </div>
  );
};

export default UploadCV;
