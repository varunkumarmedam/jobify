import React, { useEffect, useState } from "react";
import axios from "axios";
import image from "./jupiter.png";
import axiosInstance from "../axiosInstance";
import { useLocation } from "react-router-dom";

export default function AppliedCandidates({ selectedJobId }) {
  const [applied, setapplied] = useState([]);
  const location = useLocation();
  const jobid = location.state.jobid;

  const getsuccessfulcandidates = async () => {
    try {
      let token = JSON.parse(localStorage.getItem("auth"))
      // Send a POST request with the email, role, and entered OTP
      const response = await axiosInstance.get(
        `jobify/apis/candidates/successful?jobPostUUID=${jobid}&token=${token}`
      );
      if (response.data) {
        console.log(response.data);
        setapplied(response.data);
      }
    } catch (error) {
      console.error("Failed to verify OTP", error);
    }
  };
  const viewResume = async (email) => {
    try {
      // Send a POST request with the email, role, and entered OTP
      const response = await axios.get(
        // `http://ec2-3-70-52-108.eu-central-1.compute.amazonaws.com:8080/v1/apis/pre-signed-url?fileName=${selectedJobId}-${email}.pdf`
        `https://jobify-backend-wrapper-7323fa1818eb.herokuapp.com/v1/jobify/apis/view-files?fileName=${email}
`
      );
      if (response.data) {
        console.log(response.data);
        window.open(response.data, "_blank");

        // setapplied(response.data);
      }
    } catch (error) {
      console.error("Failed to verify OTP", error);
    }
  };
  const viewVideo = async (email) => {
    try {
      // Send a POST request with the email, role, and entered OTP
      const response = await axios.get(
        // `http://ec2-3-70-52-108.eu-central-1.compute.amazonaws.com:8080/v1/apis/pre-signed-url?fileName=${selectedJobId}-${email}.webm`
        // `https://jobify-upload.onrender.com/api/viewvideo?jobId=${selectedJobId}&emailid=${email}`
        `https://jobify-backend-wrapper-7323fa1818eb.herokuapp.com/v1/jobify/apis/view-files?fileName=${email}
        `
      );
      if (response.data) {
        console.log(response.data);
        window.open(response.data, "_blank");

        // setapplied(response.data);
      }
    } catch (error) {
      console.error("Failed to verify OTP", error);
    }
  };
  useEffect(() => {
    getsuccessfulcandidates();
  }, []);
  return (
    <div>


      <div className="container">
        {applied.length === 0 ? (
          <div style={{ padding: "1rem" }}></div>
        ) : (
          applied.map((candidate, index) => (
            <div
              className="card col-10 pb-3 mx-auto mt-3"
              style={{ background: "white", borderRadius: "35px" }}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-2">
                    <img
                      src={image}
                      alt=""
                      srcset=""
                      style={{ height: "5rem" }}
                    />
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <h3>
                        {candidate.firstName} {candidate.lastName}
                      </h3>
                    </div>
                    <div className="row d-flex">
                      <div>
                        <span style={{ color: "#3B82F6" }}>
                          {candidate.candidateEmail}
                        </span>

                        <span>&nbsp;| &nbsp;{candidate.phoneNumber}</span>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="d-flex">
                        <div
                          className=" m-2 "
                          style={{
                            display: "inline",
                            background: "rgb(245 245 245)",
                            paddingLeft: "5px",
                            color: "grey",
                            paddingRight: "5px",
                            padding: "4px",
                            borderRadius: "4px",
                          }}
                        >
                          Yoe-{candidate.yoe}
                        </div>

                        <div
                          className="m-2"
                          style={{
                            display: "inline",
                            background: "rgb(245 245 245)",
                            paddingLeft: "5px",
                            color: "grey",
                            paddingRight: "5px",
                            padding: "4px",
                            borderRadius: "4px",
                          }}
                        >
                          Notice Period-{candidate.noticePeriodInDays} days{" "}
                        </div>

                        <div
                          className=" m-2"
                          style={{
                            display: "inline",
                            background: "rgb(245 245 245)",
                            paddingLeft: "5px",
                            color: "grey",
                            paddingRight: "5px",
                            padding: "4px",
                            borderRadius: "4px",
                          }}
                        >
                          CTC expectation-{candidate.expectedCTC} lpa
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row">
                      <div className="col-6 text-end">
                        <button
                          type="button"
                          className="btn btn-light"
                          style={{ background: "#59B24F", color: "white" }}
                          onClick={() => viewResume(candidate.resumeFileName)}
                        >
                          View Resume
                        </button>
                      </div>
                      <div className="col-6">
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() => viewVideo(candidate.videoFileName)}
                        >
                          View Video
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
