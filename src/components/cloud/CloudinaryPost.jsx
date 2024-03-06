import React, { useCallback, useState } from "react";
import axios from "axios";

const CloudinaryPost = ({ onUpload }) => {
  const role = localStorage.getItem("role");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileUpload = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  const handleUpload = useCallback(() => {
    const promises = selectedFiles.map((selectedFile) => {
      const formData = new FormData();
      formData.append("file", selectedFile);
      return axios
        .post(
          "https://api.cloudinary.com/v1_1/djnjql4tl/upload?upload_preset=tstdfsn5&api_key=579496954431158",
          formData
        )
        .then((response) => response.data.secure_url);
    });

    Promise.all(promises).then((urls) => {
      if (role === "Scholarship Provider") {
        onUpload(urls[0]);
      } else {
        onUpload(urls);
      }
      setSelectedFiles([]);
    });
  }, [onUpload, selectedFiles, role]);

  return (
    <div>
      <div className="max-w-md w-full space-y-8 mx-auto mt-8 p-4">
        <div>
          <div className="relative mt-2">
            <h3 className="font-semibold">
              Drop your image here or{" "}
              <label htmlFor="input_image" className="text-[#1B92FF]">
                browse
              </label>
            </h3>
            <input
              id="input_image"
              type="file"
              multiple={role === "Mentor"}
              accept="image/*,.pdf"
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>
        </div>
        {selectedFiles.length > 0 && (
          <button
            onClick={handleUpload}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm font-medium"
          >
            Upload
          </button>
        )}
      </div>
    </div>
  );
};

export default CloudinaryPost;
