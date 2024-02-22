import React, { useState } from "react";

const CloudinaryUpload = ({ onUpload }) => {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "bujjo1i5");
    const preset = "bujjo1i5";
    const apiKey = "848457936193612"; // Replace Your_API_Key with your actual Cloudinary API key
    const cloudName = "du7wlrmpi"; // Replace Your_Cloud_Name with your actual Cloudinary Cloud Name

    const data = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload?upload_preset=${preset}&api_key=${apiKey}`,
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    setImageSrc(data.secure_url);
    setUploadData(data);

    // Pass the URL of the uploaded image to the external handler function
    onUpload(data.secure_url);
  }

  return (
    <div>
      <form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
        <p>
          <input type="file" name="file" />
        </p>

        <img src={imageSrc} alt="Uploaded" />

        {imageSrc && !uploadData && (
          <p>
            <button>Upload Files</button>
          </p>
        )}

        {/* {uploadData && (
          <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
        )} */}
      </form>
    </div>
  );
};

export default CloudinaryUpload;
