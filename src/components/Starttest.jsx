import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import Rinput from "./Rinput";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'

export default function Starttest() {
  const navigate = useNavigate();
  const location = useLocation()
  const [jobId, setJobId] = useState(location.search.split('?exam-id=')[1]); // Step 1

  const handleInputChange = (e) => {
    setJobId(e.target.value); // Step 2
  };

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        starttest();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [jobId])

  const starttest = () => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData;

    axiosInstance
      .get(`jobify/apis/jobs/check-eligibility?jobPostUUID=${jobId}&token=${token}`, {
        headers: {
          accept: "*/*",
        },
      })
      .then((response) => {
        // Handle the response data here
        localStorage.setItem("jobId", jobId); // Step 3
        console.log(response.data);
        navigate("/test-arena");
      })
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
        Swal.fire({
          title: "Error",
          icon: "error",
          text: "Please contact us at hello@jobify.club",
          confirmButtonText: "Close",
          confirmButtonColor: "#022A72",
        });
      });
    // Store jobId in localStorage
  };

  return (
    <>
      <div
        className="frame col-sm-12 col-md-4"
        style={{ flexDirection: "column", gap: "10px", padding: "20px" }}
      >
        <div className="row" style={{ width: "100%" }}>
          <b>
            Enter Job Id
          </b>
        </div>
        <div className="row" style={{ width: "100%" }}>

          <p >Enter job id send on your email Id</p>
        </div>
        <div className="row mx-auto" style={{ width: "100%" }}>
          <Rinput
            text="Enter Job id"
            value={jobId}
            onChange={setJobId}
          ></Rinput>
        </div>
        <div className="row mx-auto w-100">
          <button
            className="btn btn-primary w-100"
            onClick={starttest}
            style={{ width: "28rem" }}
          >
            Start Test
          </button>
        </div>
      </div>
      <div className="mt-4 col-12 d-flex justify-content-center">
        <p className="text-start">
          Having Trouble? &nbsp;
          <span>
            <a href="/contact-us">Contact Us </a>
          </span>
        </p>
      </div>
    </>
  );
}
