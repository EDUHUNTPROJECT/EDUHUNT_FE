import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const CloudinaryCV = ({ onUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "bujjo1i5");
        axios
          .post("https://api.cloudinary.com/v1_1/du7wlrmpi/upload", formData)
          .then((response) => {
            const cvUrl = response.data.secure_url;
            onUpload(cvUrl);
          });
      });
    },
    [onUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".pdf", // accept only pdf files
  });

  return (
    <div
      {...getRootProps()}
      className="w-[60%] h-[300px] border-2 border-dashed p-4 text-center margin-auto flex items-center justify-center"
    >
      <input {...getInputProps()} />
      <p>Drag/drop your CV here, or click to select a file</p>
    </div>
  );
};

export default CloudinaryCV;
