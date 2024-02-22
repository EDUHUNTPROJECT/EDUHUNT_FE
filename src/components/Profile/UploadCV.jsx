import React, { useState, useEffect } from "react";
import CloudinaryCV from "../cloud/CloudinaryCV";

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
    <div className="w-[calc(100%-16px)] bg-[#f0f0f0]">
      <h1>Upload CV</h1>
      <CloudinaryCV onUpload={handleCvUpload} />
      {cvUrl && <p className="mt-4">CV uploaded successfully. URL: {cvUrl}</p>}
    </div>
  );
};

export default UploadCV;
