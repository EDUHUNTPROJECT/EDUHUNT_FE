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

    fetch("https://localhost:7292/api/Profiles/UploadCV", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => console.error("Error uploading CV:", error));
  };

  const pdfToImageURL = (url) => {
    const newUrl = url.replace(/\.pdf$/, ".jpg");
    return newUrl;
  };

  return (
    <div className=" flex flex-col items-center space-y-4 p-4 h-[400px]">
      <CloudinaryCV onUpload={handleCvUpload} />
      {cvUrl && <Image src={pdfToImageURL(cvUrl)} alt="CV" width={800}></Image>}
    </div>
  );
};

export default UploadCV;
