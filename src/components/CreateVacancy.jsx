import React, { useState } from "react";
import "./Organization.css";
import Button from "./Button";

export default function Organization() {
  const [uploadedImage, setUploadedImage] = useState(null);
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
    <div className="container mt-5">
      <h5>Create Vacancies</h5>

      <div className="upload mt-3">
        {!uploadedImage ? (
          <label>
            <img src="/upload.png" alt="" srcset="" />
            <div>Upload Company Logo</div>
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
            style={{ width: "100px", height: "100px" }}
          />
        )}
      </div>
      <hr />
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Open Position
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" class="form-label">
            Salary per month
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" class="form-label">
            Location{" "}
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" class="form-label">
            Job Type{" "}
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <Button text="Post Job"></Button>
      </form>
    </div>
  );
}
