import React, { useState } from "react";
import Button from "./Button";
import { Navigate, useNavigate } from "react-router-dom";
import Secondnav from "./Secondnav";
export default function Resumeupload() {
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState(null);
  const done = () => {
    navigate("/candidates-view");
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Secondnav></Secondnav>
      <div
        className=""
        Style="height:80vh;display:grid;place-items: center;justify-content: center;align-content: center;"
      >
        <div className=" mx-auto upload ">
          {!uploadedImage ? (
            <label>
              <img src="/upload.png" alt="" srcset="" />
              <div>Upload Resume</div>
              <input
                type="file"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </label>
          ) : (
            <img
              src={uploadedImage}
              alt="Uploaded"
              style={{ width: "200px", height: "100px" }}
            />
          )}
        </div>
        <div className="mx-auto mt-3 ">
          <Button text="Upload" onClick={done}></Button>
        </div>
      </div>
    </div>
  );
}
