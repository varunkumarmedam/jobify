import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosInstance";
import ApplyNow from "../ApplyNow";
import Rinput from "../Rinput";
import Button from "../Button";
import image from "../jupiter.png";
import Starttest from "../Starttest";
import { useNavigate } from "react-router-dom";

import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2'

export default function Availablejobscard() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: "",
  });
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [jobId, setJobId] = useState(""); // Step 1
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const starttest = () => {
    Swal.fire({
      title: "Hey! have you applied for a job? If you did not, you wouldn't be eligible for taking the test",
      showDenyButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: '#022A72',

      denyButtonText: 'No',
      denyButtonColor: '#022A72'


    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/starttest");
      } else if (result.isDenied) {
      }
    })


  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handletest = () => { };
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(
        `jobify/apis/jobs/list?token=${JSON.parse(
          localStorage.getItem("auth")
        )}`,
        {}
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const handleFormSubmit = () => {
  //   toast.success("You have applied for the job successfully.");
  //   // Here, you might want to send the form data to the server or handle further actions.
  //   toast.error("Please fill in all the fields.");
  // };
  const OpenModal = (jobId) => {
    setSelectedJobId(jobId); // set the selected job ID
    setIsModalOpen(true);
  };
  const handleSubmit = () => {
    setIsModalOpen(false);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="mt-3 row">
        <div className="col-11 text-end">
          <button className=" btn btn-primary mx-end" onClick={starttest}>
            <FontAwesomeIcon icon={faFileLines} /> Start Test
          </button>
        </div>
      </div>

      <ApplyNow
        isOpen={isModalOpen}
        onRequestClose={handleClose}
        onSubmit={handleSubmit}
        jobId={selectedJobId}
      ></ApplyNow>

      {data.map((job, index) => (
        <div
          className="card col-sm-12 col-md-9 pb-3 mx-auto mt-3"
          style={{ background: "white", borderRadius: "35px" }}
        >
          <div className="card-body">
            <div className="row p-2">
              <div className="col-1 d-none d-lg-block">
                <img
                  src={image}
                  alt=""
                  srcset=""
                  style={{ height: "5rem", padding:"10px" }}
                />
              </div>
              <div className="col-sm-12 col-md-7">
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

                    <span style={{ color: "#3B82F6" }}>
                      {job.companyName}
                    </span>
                    {/* </div> */}
                    {/* <div className="col-6"> */}

                    <span>&nbsp;| &nbsp;{job.jobLocationCity}</span>
                    {/* </div> */}
                  </div>
                </div>
                <div className="row mt-3">
                  {job.jobDescription}
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
                </div>
              </div>
              <div className="col-sm-12 col-md-4 mt-3">
                <div className="row">
                  <div className="col-6 text-end">
                    <button
                      type="button"
                      className="btn btn-light"
                      // data-bs-toggle="modal"
                      style={{ background: "#59B24F", color: "white" }}
                      // data-bs-target={`#applyNow`}
                      onClick={() => OpenModal(job.jobPostUUID)}
                    >
                      Apply Now
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={starttest}
                    >
                      Take Test
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <div
          className="modal fade"
          id={`startest`}
          tabIndex="-1"
          aria-labelledby={`startest`}
          aria-hidden="true"
          show={showModal}
          onHide={() => setShowModal(false)}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row mx-auto">
                  <Rinput
                    text="Enter Job id"
                    value={jobId}
                    onChange={setJobId}
                  ></Rinput>
                </div>
                <div className="row mx-auto mt-3 p-3">
                  <Button
                    text="Start Test"
                    onClick={starttest}
                    // onClick={() => setShowModal(true)}
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* <div
          className="modal fade"
          id={`applyNow`}
          tabIndex="-1"
          aria-labelledby={`applyNowLabel`}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={`applyNowLabel`}>
                  Job Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group py-1">
                    <label htmlFor="firstName" className="h6">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      aria-describedby="firstName"
                      placeholder="First Name"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-group py-1">
                    <label for="lastName" className="h6">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      aria-describedby="lastName"
                      placeholder="Last Name"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-group py-1">
                    <label for="InputEmail1" className="h6">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="InputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-group py-1">
                    <label for="phone" className="h6">
                      Phone
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="phone"
                      placeholder="Phone no."
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-group py-3">
                    <label
                      for="formFileMultiple"
                      class="form-label"
                      className="h5"
                    >
                      Upload Resume
                    </label>
                    <input
                      class="form-control"
                      type="file"
                      id="formFileMultiple"
                      multiple
                      name="resume"
                      value={form.resume}
                      onChange={handleChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleFormSubmit}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div>
            <div className="row" style={{ fontSize: "14px" }}>
              <span>{`Job Title: ${job.jobDescription}`}</span>
            </div>
            <br />
            <div className="row" style={{ fontSize: "14px" }}>
              <span>{`Location: ${job.jobLocationCity}, ${job.jobLocationCountry}`}</span>
            </div>
            <br />
            <div className="row" style={{ fontSize: "14px" }}>
              <span>{`Salary Offered: ${job.ctcDetailsIfAny}`}</span>
            </div>
            <br />
            <div className="row" style={{ fontSize: "14px" }}>
              <span>{`Company Website: ${job.companyWebsiteUrl}`}</span>
            </div>
            <br />
            <div className="row" style={{ fontSize: "14px" }}>
              <span>{`Recruiter Email: ${job.recruiterEmail}`}</span>
            </div>
            <br />
            <div className="row" style={{ fontSize: "14px" }}>
              <span>{`Recruiter Contact: ${job.recruiterContactDetailsIfAny}`}</span>
            </div>
          </div> */}

      {/* </div> */}

      {/* {data.map((job, index) => (
        <div key={index} className="card mt-3 pb-3" style={{ background: 'white', borderRadius: '35px' }}>
        <div className="card-body">
        <div className="d-flex justify-content-between" style={{ color: '#013C5E', fontSize: '20px', fontWeight: 'bolder' }}>
        <span className="col-6 mt-4">{`Company Name: ${job.companyName}`}</span>
        <div className="my-3">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#applyNow${index}`}>
        Apply Now
        </button>
        </div>
        </div>
        
        <div className="modal fade" id={`applyNow${index}`} tabIndex="-1" aria-labelledby={`applyNowLabel${index}`} aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
        <h5 className="modal-title" id={`applyNowLabel${index}`}>
        Job Details
        </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group py-1">
                        <label htmlFor="firstName" className="h6">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          aria-describedby="firstName"
                          placeholder="First Name"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          />
                      </div>
                      <div class="form-group py-1">
                        <label for="lastName" className="h6">
                          Last Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="lastName"
                          aria-describedby="lastName"
                          placeholder="Last Name"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          />
                      </div>
                      <div class="form-group py-1">
                        <label for="InputEmail1" className="h6">
                          Email address
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="InputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          />
                      </div>
                      <div class="form-group py-1">
                        <label for="phone" className="h6">
                          Phone
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="phone"
                          placeholder="Phone no."
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          />
                      </div>
                      <div class="form-group py-3">
                        <label
                          for="formFileMultiple"
                          class="form-label"
                          className="h5"
                          >
                          Upload Resume
                        </label>
                        <input
                          class="form-control"
                          type="file"
                          id="formFileMultiple"
                          multiple
                          name="resume"
                          value={form.resume}
                          onChange={handleChange}
                          />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                      Close
                    </button>
                    <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row" style={{ fontSize: "14px" }}>
              <span>{`Job Title: ${job.jobDescription}`}</span>
            </div>
            <br />
            <div className="row" style={{ fontSize: "14px" }}>
              <span>{`Location: ${job.jobLocationCity}, ${job.jobLocationCountry}`}</span>
            </div>
            <br />
            <div className="row" style={{ fontSize: "14px" }}>
              <span>{`Salary Offered: ${job.ctcDetailsIfAny}`}</span>
            </div>
            <br />
            <div className="row" style={{ fontSize: "14px" }}>
              <span>{`Company Website: ${job.companyWebsiteUrl}`}</span>
            </div>
            <br />
            <div className="row" style={{ fontSize: "14px" }}>
              <span>{`Recruiter Email: ${job.recruiterEmail}`}</span>
            </div>
            <br />
            <div className="row" style={{ fontSize: "14px" }}>
              <span>{`Recruiter Contact: ${job.recruiterContactDetailsIfAny}`}</span>
            </div>
          </div>

        </div> 

))}*/}
    </>
  );
}
