import React, { useState } from "react";
import Modal from "react-modal";
import Rinput from "./Rinput";
import axios from "axios";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import axiosInstance from "../axiosInstance";

import Swal from 'sweetalert2'

export default function ApplyNow({ isOpen, onRequestClose, onSubmit, jobId }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [noticeperiod, setNoticePeriod] = useState("");
  const [company, setCompany] = useState("");
  const [currentctc, setCurrentctc] = useState("");
  const [expectedctc, setExpectedctc] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [experience, setexperience] = useState("");
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setNoticePeriod("");
    setCompany("");
    setCurrentctc("");
    setExpectedctc("");
    setUploadedFileName("");
    setexperience("")
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFileName(file);
    }
  };

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !phone || !uploadedFileName) {
      Swal.fire({
        title: 'Error',
        text: 'Fill all Details',
        icon: 'error',
        confirmButtonText: 'Close',
        confirmButtonColor: '#022A72'
      })
      return;
    }
    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData;
    let details = `${firstName}:${lastName}:${email}:${phone}:${jobId}:${currentctc}:${expectedctc}:${noticeperiod}:${company}:${experience}`
    console.log(details)
    let encoded = base64_encode(details);

    const formData = new FormData();

    formData.append("file", uploadedFileName);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    axiosInstance
      .post(`jobify/apis/candidates/jobs/apply?encodedDetails=${encoded}&token=${token}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        resetForm();
        Swal.fire({
          title: 'Submitted',
          text: 'Applied',
          icon: 'success',
          confirmButtonText: 'Close',
          confirmButtonColor: '#022A72'
        })
        onRequestClose();
      })
      .catch((error) => {
        console.error("Error uploading data:", error);
        // alert("Error uploading data. Please try again.");
        Swal.fire({
          title: 'Error',
          text: 'Not Submitted',
          icon: 'error',
          confirmButtonText: 'Close',
          confirmButtonColor: '#022A72'
        })
        resetForm();
      });
  };


  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        ariaHideApp={false}
        className="feedback-modal"
        shouldCloseOnOverlayClick={true}
      >
        <div className="container-fluid">
          <div className="mx-auto upload">
            {!uploadedFileName ? (
              <label>
                <img src="/upload.png" alt="" />
                <div>Upload Resume</div>
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </label>
            ) : (
              <div>
                <img
                  src="/uploaded-icon.png"
                  alt="Uploaded Icon"
                  style={{ height: "2rem" }}
                />
                <div>Uploaded: {uploadedFileName.name}</div>
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-6">
              <div className="row p-3">
                <Rinput
                  text="Enter First Name"
                  className="mt-3"
                  value={firstName}
                  onChange={setFirstName}
                ></Rinput>
              </div>
              <div className="row p-3">
                <Rinput
                  text="Enter Last Name"
                  className="mt-3"
                  value={lastName}
                  onChange={setLastName}
                ></Rinput>
              </div>
              <div className="row p-3">
                <Rinput
                  text="Email"
                  className="mt-3"
                  value={email}
                  onChange={setEmail}
                ></Rinput>
              </div>
              <div className="row p-3">
                <Rinput
                  text="Phone"
                  className="mt-3"
                  value={phone}
                  onChange={setPhone}
                ></Rinput>
              </div>
              <div className="row p-3">
                <Rinput
                  text="Years of experience"
                  className="mt-3"
                  value={experience}
                  onChange={setexperience}
                ></Rinput>
              </div>
            </div>
            <div className="col-6">
              <div className="row p-3">
                <Rinput
                  text="Notice-Period"
                  className="mt-3"
                  value={noticeperiod}
                  onChange={setNoticePeriod}
                ></Rinput>
              </div>
              <div className="row p-3">
                <Rinput
                  text="Current/Present Company"
                  className="mt-3"
                  value={company}
                  onChange={setCompany}
                ></Rinput>
              </div>
              <div className="row p-3">
                <Rinput
                  text=" Current CTC"
                  className="mt-3"
                  value={currentctc}
                  onChange={setCurrentctc}
                ></Rinput>
              </div>
              <div className="row p-3">
                <Rinput
                  text="Expected Ctc"
                  className="mt-3"
                  value={expectedctc}
                  onChange={setExpectedctc}
                ></Rinput>
              </div>

            </div>
          </div>
          <div className="row p-3">
            <button onClick={handleSubmit} className="submit-button">
              Submit
            </button>
          </div>
        </div>

      </Modal>
    </div>
  );
}
