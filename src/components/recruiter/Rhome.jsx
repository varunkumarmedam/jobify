import React, { useState } from "react";
import Rpost from "../Rpost";
import ActiveJobs from "../ActiveJobs";
import AppliedCandidates from "../AppliedCandidatePage/AppliedCandidates";
import { useNavigate } from "react-router-dom";
import AppNav from "../AppNav";
import { TabList, TabPanel, Tab, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import CreateJob from "./CreateJob";

export default function Rhome() {
  const navigate = useNavigate();

  const [selectedJobId, setSelectedJobId] = useState(null);
  const handleJobButtonClick = (jobId) => {
    console.log("edbibei");
    console.log(jobId);
    setSelectedJobId(jobId);
    setActiveItem("applied");
  };
  const [activeItem, setActiveItem] = useState("Post");
  const [isClassic, setIsClassic] = useState(true);

  const renderComponent = () => {
    switch (activeItem) {
      case "Post":
        return <Rpost />;
      case "Active":
        return <ActiveJobs onButtonClick={handleJobButtonClick} />;
      case "Applied":
        return (
          <AppliedCandidates selectedJobId={selectedJobId}></AppliedCandidates>
        );

      default:
        return null;
    }
  };
  const handlesignout = () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <div>
      <AppNav />
      {/* <nav className="navbar navbar-expand-lg navbar-light ">
        <div>
          <img src={image} alt="" srcset="" style={{ height: "3rem" }} />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav w-100 d-flex justify-content-center">
            {[
              "Post",
              "Active",
              // "Start Test",
              // "Candidate Requirement",
              // "Job Description",
            ].map((item) => (
              <div key={item} className="nav-wrapper">
                <li className="nav-item">
                  <a
                    className="nav-link text"
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveItem(item);
                    }}
                    style={
                      activeItem === item
                        ? {
                          color: "white",
                          backgroundColor: "black",
                          borderRadius: "0.5rem",
                          paddingRight: "1rem",
                          paddingLeft: "1rem",
                        }
                        : {}
                    }
                  >
                    {item}
                  </a>
                  {
                    activeItem === item
                    // && (
                    // <hr
                    //   className="active-indicator"
                    //   style={{ margin: "0.1rem" }}
                    // />
                    // )
                  }
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="link-wrapper">
          <div className="link-10">
            <div className="button-container" onClick={handlesignout}>
              <div className="text-wrapper-36"> <p style={{ color: "#4a4afb" }}>
                Sign Out
              </p>
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      {/* <Navbar></Navbar> */}
      <style>
        {`
    .custom-scroll::-webkit-scrollbar {
        display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
    }

    .custom-scroll {
        -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
        scrollbar-width: none; /* Hide scrollbar for Firefox */
    }
    .myrow{
      --bs-gutter-x:"0rem"
    }
  `}
      </style>
      <div>
        <div className="col-11 col-md-12 mx-auto pt-3">
          <Tabs>
            <TabList>
              <Tab>Post a Job</Tab>
              <Tab>Active Jobs</Tab>
            </TabList>

            <TabPanel>
              <div class="form-check form-switch d-flex justify-content-center">
                <input class="form-check-input" type="checkbox" role="switch" onChange={(e) => setIsClassic(!isClassic)} id="flexSwitchCheckDefault" checked={isClassic} />
                <label class="form-check-label m-2" for="flexSwitchCheckDefault">Classic</label>
              </div>
              {isClassic && <CreateJob />}
              {!isClassic && <Rpost />}
            </TabPanel>
            <TabPanel>
              <ActiveJobs onButtonClick={handleJobButtonClick} />
            </TabPanel>
          </Tabs>
          {/* <div
            className="col-3"
            style={{
              background: "#EFF5F6",
              borderRadius: "1rem",
              height: "80vh",
            }}
          >
            <div className="row">

            </div>

            <div
              className="row p-2 d-flex justify-content-center align-items-center my-auto mt-5"
              onClick={(e) => {
                e.preventDefault();
                setActiveItem("post");
              }}
              style={
                activeItem === "post"
                  ? { color: "#01BDF8", height: "50px", cursor: "pointer" }
                  : { height: "50px", cursor: "pointer" }
              }
            >
              Post Jobs
            </div>
            <div
              className="row p-2 d-flex justify-content-center align-items-center"
              onClick={(e) => {
                e.preventDefault();
                setActiveItem("active");
              }}
              style={
                activeItem === "active"
                  ? { color: "#01BDF8", height: "50px", cursor: "pointer" }
                  : { height: "50px", cursor: "pointer" }
              }
            >
              Active Jobs
            </div>{" "}

          </div> */}
          {/* {renderComponent()} */}
        </div>
      </div>
    </div>
  );
}
