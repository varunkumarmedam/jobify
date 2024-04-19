import React, { useState, useEffect } from "react";
import Button from "./Button";
import image from "./jupiter.png";
import { Navigate, useNavigate } from "react-router-dom";

import axiosInstance from "../axiosInstance";

export default function ActiveJobs({ onButtonClick }) {
  const navigate = useNavigate()
  const [data, setData] = useState(null);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const handleButtonClick = (jobId) => {
    console.log("Selected Job ID:", jobId);
    setSelectedJobId(jobId);
    navigate("/applied-candidates-view", { state: { jobid: jobId } });
  };
  const handleSucessfullButtonClick = (jobId) => {
    console.log("Selected Job ID:", jobId);
    setSelectedJobId(jobId);
    navigate("/sucessful-candidates-view", { state: { jobid: jobId } });
  };
  // if (onButtonClick) onButtonClick(jobId);

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData;

    if (token) {
      axiosInstance
        .get(`jobify/apis/jobs/listings/recruiters?token=${token}`, {
          headers: {
            // Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          // setError(error);
          console.log(error);
        });
    } else {
      // setError("Token is not available");
    }
  }, []);
  return (
    <>
      {data &&
        data.map((job) => (
          <div
            className="card col-sm-10 col-md-9 pb-3 mx-auto mt-3"
            style={{ background: "white", borderRadius: "35px" }}
          >
            <div className="card-body">
              <div className="row p-2">
                <div className="col-1 d-none d-lg-block">
                  <img
                    src={image}
                    alt=""
                    srcset=""
                    style={{ height: "5rem" }}
                  />
                </div>
                <div className="col-sm-12 col-md-8">
                  <div className="row col-12">
                    <img
                      className="d-sm-none col-4 p-0"
                      src={image}
                      alt=""
                      srcset=""
                    // style={{ height: "5rem" }}
                    />
                    <h3 className="col-8">{job.jobTitle}</h3>
                  </div>
                  <div className="row d-flex">
                    <div>
                      {/* <div className="col-3"> */}

                      <span style={{ color: "#3B82F6" }}>{job.companyName}</span>
                      {/* </div> */}
                      {/* <div className="col-6"> */}

                      <span>&nbsp;| &nbsp;{job.jobLocationCity}</span>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="row mt-2 p-2">
                    {/* <div className="d-flex">
                    
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
                      5+
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
                      Full Time
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
                      Remote
                    </div>
                    
                  </div> */}
                    {job.jobDescription}
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 mt-3">
                  <div className="row">
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn btn-success w-100"
                        onClick={() => handleButtonClick(job.jobPostUUID)}
                      >
                        Applied
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn btn-success w-100"
                        onClick={() => handleSucessfullButtonClick(job.jobPostUUID)}
                      >
                        Sucessful
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {/* <h1>Active JObs</h1> */}
      {/* {data &&
        data.data.map((job) => (
          <div
            className="card mt-3 pb-3"
            style={{
              background: "white",
              height: "45vh",
              borderRadius: "35px",
            }}
          >
            <div className="card-body">
              <div className="container">
                <div
                  className="row d-flex justify-content-between"
                  style={{
                    color: "#013C5E",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  }}
                >
                  <span className="col-6">{job.info.jobTitle}</span>
                  <div className="col-4">
                    <Button
                      text="Applied Candidates"
                      onClick={() => handleButtonClick(job._id)}
                    ></Button>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  <span>{job.info.companyName}</span>
                </div>
                <br />
                <div
                  className="row"
                  style={{
                    color: "#013C5E",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  }}
                >
                  <span>Requirements</span>
                </div>
                <div
                  className="row"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  <span>
                    -{job.info.experienceRequired} Experience <br></br>-
                    {job.info.jobInfo} <br></br>
                    -5 Year Experience <br></br>
                  </span>
                </div>
                <div className="row mt-3">
                  <div
                    className="d-flex"
                    style={{ color: "#01BDFB", padding: "0.5rem" }}
                  >
                    <h6>Skills -</h6>
                    {job.info && job.info.skills
                      ? job.info.skills.split(",").map((skill) => (
                          <span
                            key={skill.trim()} // using .trim() to remove any leading/trailing whitespace
                            className="badge bg-info text-dark mx-3"
                            style={{ borderRadius: "30px", padding: "0.5rem" }}
                          >
                            {skill.trim()}
                          </span>
                        ))
                      : null}
                  </div>
                </div>

                <div
                  className="d-flex justify-content-between mt-3"
                  style={{ color: "#01BDFB" }}
                >
                  <div className="d-flex">
                    <div className="mt-2 mb-2 ">
                      <h6>Location-{job.info.jobCity}</h6>
                    </div>
                    <div className="mt-2 mb-2 mx-4">
                      <h6>Type-{job.info.jobType}</h6>
                    </div>
                  </div>
                  <div className="m-2">
                    <h6>
                      Salary-{job.info.from}-{job.info.to}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}*/}
    </>
  );
}
