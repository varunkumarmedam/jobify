import React, { useEffect, useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import image from "./jobify.png";
import axiosInstance from "../axiosInstance";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const Login = () => {
  const [email, setEmail] = useState("");
  const [isCandidate, setIsCandidate] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRecruite, setIsRecruite] = useState(true);

  const [activeTab, setActiveTab] = useState("recruiter");

  const handleTabSwitch = (tab) => {
    console.log(tab)
    setActiveTab(tab);
    console.log(activeTab)

  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  function setvalue() {
    if (activeTab === "recruiter") {
      setIsRecruite(true);
    } else {
      setIsRecruite(false);
    }
  }
  const handleContinue = () => {
    setIsLoading(true);
    console.log(activeTab)
    // setvalue()

    console.log("hello")
    console.log(isRecruite)
    if (validateEmail(email)) {
      axiosInstance
        .get(`/jobify/apis/otp?email=${encodeURIComponent(email)}&isRecruiter=${activeTab === "recruiter" ? true : false}`)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setIsLoading(false);

            // alert("Form submitted!");
            // window.location.href = '/otp';
            handleNavigation();
          } else {
            // alert("Failed to submit form. Please try again.");
          }
        })
        .catch((error) => {

          setIsLoading(false);
          Swal.fire({
            title: 'Error',
            text: 'You are not a recruiter partner with us yet! Please contact hello@jobify.club',
            icon: 'error',
            confirmButtonText: 'Close',
            confirmButtonColor: '#022A72'
          })
          setEmail("")
          // alert("An error occurred while submitting the form.");
          console.error("Error:", error);
        });
    } else {
      setIsLoading(false);

      setEmailError(true);
    }
  };
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/otp", { state: { role: activeTab, email: email } });
  };

  const isEnterPressed = (event) => {
    return event.code === "Enter" || event.code === "NumpadEnter";
  }

  useEffect(() => {
    const listener = event => {
      if (isEnterPressed(event)) {
        event.preventDefault();
        handleContinue();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [email, activeTab])

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="frame">
          <div className="div">
            <a href="/">
              <img src={image} alt="Jobify" className="jobify-image" />
            </a>
            <div className="text-wrapper">Login</div>
            <div className="div-3 p-2" style={{ background: "#EBECF0 !important", borderRadius: "2rem", border:"1px solid grey" }}>
              <div className="d-flex">
                <nav variant="tabs" className="custom-tabs">
                  {/* <Nav.Item> */}
                  <Nav.Link style={{ borderRadius: "2rem" }}
                    eventKey="#recruiter"
                    className={
                      activeTab === "recruiter"
                        ? "active custom-tab"
                        : "custom-tab"
                    }
                    onClick={() => handleTabSwitch("recruiter")}
                  >
                    Recruiter
                  </Nav.Link>
                  {/* </Nav.Item> */}
                  {/* <Nav.Item> */}
                  <Nav.Link style={{ borderRadius: "2rem" }}
                    eventKey="#candidate"
                    className={
                      activeTab === "candidate"
                        ? "active custom-tab"
                        : "custom-tab"
                    }
                    onClick={() => handleTabSwitch("candidate")}
                  >
                    Candidate
                  </Nav.Link>
                  {/* </Nav.Item> */}
                </nav>
              </div>
            </div>
            <div className="div-3">
              <div className="text-wrapper-2">Email*</div>
              <div className="div-4">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className={emailError ? "error" : ""}
                  placeholder="Enter your email"
                />
                {emailError && (
                  <div className="text-wrapper-3">Invalid email format</div>
                )}
              </div>
            </div>
            <div className="link">
              <button className="text-wrapper-4" onClick={handleContinue}>
                {isLoading ? (
                  <div>
                    <div
                      className="spinner-border spinner-border-sm text-light"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    &nbsp; &nbsp;
                    <span>Loading...</span>
                  </div>
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;