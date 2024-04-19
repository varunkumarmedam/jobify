
import { useFormData } from "../context/formdatacontext";
import Swal from 'sweetalert2'
import Button from "./Button";
import React, { useState } from "react";
import CompanyDetails from "./CompanyDetails";
import Candidatereq from "./Candidatereq";
import Jobdesc from "./Jobdesc";
import Jobdetails from "./Jobdetails";
import axiosInstance from "../axiosInstance";

export default function Rpost() {
  const { allFormData, setAllFormData } = useFormData();

  const handleChildData = (section) => (data) => {
    console.log(section, data); // This will log the section and data

    setAllFormData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };

  const tabs = [
    "Company Details",
    "Job Details",
    "Candidate Requirement",
    "Job Description",
  ];

  const [activeItem, setActiveItem] = useState("Company Details");
  const renderComponent = () => {
    switch (activeItem) {
      case "Company Details":
        return (
          <CompanyDetails
            existingData={allFormData.companyDetails}
            sendData={handleChildData("companyDetails")}
          />
        );
      case "Job Details":
        return <Jobdetails sendData={handleChildData("jobDetails")} />;
      case "Candidate Requirement":
        return <Candidatereq sendData={handleChildData("candidateReq")} />;
      case "Job Description":
        return <Jobdesc sendData={handleChildData("jobDesc")} />;
      default:
        return null;
    }
  };
  const handleSubmit = async () => {
    console.log(allFormData);
    const { companyDetails, jobDetails, candidateReq, jobDesc } = allFormData;
    const authData = JSON.parse(localStorage.getItem("auth"));
    const email = JSON.parse(localStorage.getItem("email"));
    const token = authData;
    const transformedData = {
      // info: {
      //   ...companyDetails,
      //   ...jobDetails,
      //   ...candidateReq,
      //   ...jobDesc,
      // },
      // name: companyDetails.yourName,
      // desc: jobDetails.jobTitle,

      jobPostInfo: {
        companyName: companyDetails.companyName || "N/A",
        companyWebsiteUrl: companyDetails.url || "N/A",
        ctcDetailsIfAny: (jobDetails.from !== undefined && jobDetails.to !== undefined) ? `${jobDetails.from} - ${jobDetails.to}` : "N/A",
        jobTitle: jobDetails.jobTitle || "N/A",
        jobDescription: jobDesc.jobInfo || "N/A",
        jobLocationCity: companyDetails.jobCity || "N/A",
        jobLocationCountry: companyDetails.jobCountry || "N/A",
        recruiterContactDetailsIfAny: companyDetails.phone || "N/A",
        recruiterEmail: email || "N/A",
        recruiterExtraInfoMetadata: "N/A"
      },
      token: authData
    };
    try {
      console.log(transformedData)
      const response = await axiosInstance.post("jobify/apis/recruiters/jobs/create", transformedData, {

      });
      if (response.data) {
        Swal.fire({
          title: 'Submitted',
          text: 'Job Posted',
          icon: 'success',
          confirmButtonText: 'Close',
          confirmButtonColor: '#022A72'
        })
        console.log("Successfully posted job data:", response.data);
      }

    } catch (error) {
      console.error(
        "Error posting job data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleNextClick = (isPrev) => {
    const currentIndex = tabs.indexOf(activeItem);
    const nextIndex = isPrev === true ? currentIndex - 1 : currentIndex + 1;
    console.log(allFormData);

    if (nextIndex < tabs.length) {
      setActiveItem(tabs[nextIndex]);
    }
  };
  return (
    <>
      {/* <Navbar></Navbar> */}
      <style>
        {`.custom-scroll::-webkit-scrollbar {
              display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
          }

          .custom-scroll {
              -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
              scrollbar-width: none; /* Hide scrollbar for Firefox */
          }
       `}
      </style>
      {/* <div className="container mt-5"> */}
      {/* <div
            className="col-3"
            style={{
              background: "#EFF5F6",
              borderRadius: "1rem",
              height: "80vh",
            }}
          >
            <div className="row">
              <div className="col-12 mx-auto p-3  d-flex justify-content-center align-items-center">
                <img
                  src="/ishaanwalecha.jpg"
                  alt=""
                  srcset=""
                  style={{ borderRadius: "33%", height: "auto", width: "5rem" }}
                />
              </div>
            </div>
            <div className="row p-5">
              <Button text={"Complete Profile"}></Button>
            </div>
            <div
              className="row p-2 d-flex justify-content-center align-items-center"
              style={{ height: "50px" }}
            >
              Post Jobs
            </div>
            <div
              className="row p-2 d-flex justify-content-center align-items-center"
              style={{ height: "50px" }}
            >
              Active Jobs
            </div>{" "}
            <div
              className="row p-2 d-flex justify-content-center align-items-center"
              style={{ height: "50px" }}
            >
              Messages
            </div>{" "}
          </div> */}
      <div
        className="col-md-8 mx-auto"
        style={{
          background: "white",
          borderRadius: "1rem",
        }}
      >
        <div
          className="p-3"
          style={{
            color: "black",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          Create a Job
        </div>
        <nav className="navbar navbar-expand-lg navbar-light ">
          {/* <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav w-100 d-flex justify-content-around">
              {[
                "Company Details",
                "Job Details",
                "Candidate Requirement",
                "Job Description",
              ].map((item) => (
                <div key={item} className="nav-wrapper">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveItem(item);
                      }}
                      Style={activeItem === item ? { color: "#01BDF8" } : {}}
                    >
                      {item}
                    </a>
                    {activeItem === item && (
                      <hr
                        className="active-indicator"
                        style={{ margin: "0.1rem" }}
                      />
                    )}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </nav>
        <div className="container-fluid mt-4" Style="position:relative">
          {renderComponent()}
        </div>
        <div
          className="col-md-2 mt-4 mx-auto"
        >
          <div className="d-flex">
            {activeItem !== "Company Details" && <div className="d-md-none col-sm-6 w-100 m-3">
              <Button onClick={() => handleNextClick(true)} text={"Previous"}></Button>
            </div>}
            <div className="w-100 m-3">
              {activeItem !== "Job Description"
                ? <Button onClick={handleNextClick} text={"Next"}></Button>
                : <Button text={"Submit"} onClick={handleSubmit}></Button>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
