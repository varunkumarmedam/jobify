import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import "./Otp.css";
import { useLocation } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import { toast } from "react-toastify";
import image from "./jobify.png";
import Swal from 'sweetalert2'

export default function Otp() {
  const navigate = useNavigate();
  const location = useLocation();

  const role = location.state.role;
  const email = location.state.email;
  const [isLoading, setIsLoading] = useState(false);
  console.log("role", location.state.role);

  const [otp, setOtp] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
  });

  const verifyotp = async () => {
    const enteredOtp = `${otp.first}${otp.second}${otp.third}${otp.fourth}${otp.fifth}${otp.sixth}`;

    try {
      // Send a POST request with the email, role, and entered OTP
      const response = await axiosInstance.get(
        `jobify/apis/otp/verify?email=${email}&otp=${enteredOtp}`,
        {
          // email: email,
          // otp: enteredOtp,
        }
      );

      // Check the response from the server
      if (response.data) {
        localStorage.setItem("auth", JSON.stringify(response.data._token));
        localStorage.setItem("email", JSON.stringify(response.data.email));
        localStorage.setItem("role", role);
        console.log(response.data);

        // Adjust this based on your server's response structure
        if (role === "recruiter") {
          navigate("/recruiters-view");
        } else if (role === "candidate") {
          navigate("/candidates-view");
          toast.success("Successfully Logged In!");
        }
      } else {
        // alert("Invalid OTP. Please try again.");
        Swal.fire({
          title: 'Error',
          // text: 'Invalid Otp',
          icon: 'error',
          confirmButtonText: 'Close',
          confirmButtonColor: '#022A72'
        })
      }
    } catch (error) {
      console.error("Failed to verify OTP", error);
      // alert("An error occurred. Please try again.");
      Swal.fire({
        title: 'Error',
        text: 'Failed to Verify',
        icon: 'error',
        confirmButtonText: 'Close',
        confirmButtonColor: '#022A72'
      })
    }
  };

  // const verifyotp = async () => {
  //   const enteredOtp = `${otp.first}${otp.second}${otp.third}${otp.fourth}${otp.fifth}${otp.sixth}`;
  //   const token = localStorage.getItem("authToken"); // Retrieve the token from local storage

  //   try {
  //     // Send a GET request with the email, role, entered OTP, and token as query parameters
  //     const response = await axiosInstance.get("jobify/apis/otp/verify", {
  //       params: {
  //         otp: enteredOtp,
  //         token: token,
  //         role: role, // Include the "role" as a query parameter
  //       },
  //     });

  //     // Check the response from the server
  //     if (response.data) {
  //       // Adjust this based on your server's response structure
  //       if (role === "RECRUITER") {
  //         navigate("/rhome");
  //       } else if (role === "CANDIDATE") {
  //         navigate("/chome");
  //         toast.success("Successfully Logged In!");
  //       }
  //     } else {
  //       alert("Invalid OTP. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Failed to verify OTP", error);
  //     alert("An error occurred. Please try again.");
  //   }
  // };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && e.target.value === "") {
      const prevSibling = e.target.previousSibling;
      if (prevSibling && prevSibling.tagName === "INPUT") {
        prevSibling.focus();
      }
    }
  };
  const handleChange = (e) => {
    const { id, value, maxLength } = e.target;

    setOtp((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    if (value.length === maxLength) {
      const nextSibling = e.target.nextSibling;
      if (nextSibling && nextSibling.tagName === "INPUT") {
        nextSibling.focus();
      }
    }
  };

  const getCamelCaseText = (text) => {
    if (typeof (text) === 'string' && text.length >= 1)
      return text[0].toUpperCase().concat(text.substring(1, text.length));

    return text;
  }

  const sendOtpRequest = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      verifyotp();
    }, 2000); // 5 seconds
  };

  const pasteOtp = (otp) => {
    setOtp({
      first: otp[0],
      second: otp[1],
      third: otp[2],
      fourth: otp[3],
      fifth: otp[4],
      sixth: otp[5],
    })
  };

  const focusLastOtpCell = () => {
    document.getElementById('sixth').focus();
  }

  const pasteAndFocusOnLastCell = (otpText) => {
    pasteOtp(otpText)
    focusLastOtpCell()
  }

  const isNumeric = (value) => {
    return /^-?\d+$/.test(value);
  }

  const ifPastedTextIsOtp = text => {
    return isNumeric(text) && text.length === 6;
  }

  const handlePaste = (event) => {
    const otpText = event.clipboardData.getData('text');
    ifPastedTextIsOtp(otpText) && pasteAndFocusOnLastCell(otpText)
  }

  useEffect(() => {
    const handlePasteEvent = event => {
      handlePaste(event);
    };
    window.addEventListener('paste', handlePasteEvent);
  }, []);

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        sendOtpRequest();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [otp])
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgb(224, 233, 246) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <img src={image} alt="Jobify" className="jobify-image" />

      <div className="otpcontainer  d-flex flex-column justify-content-center align-items-center p-3 col-lg-4">
        <div className="frame" style={{ marginTop: "11rem" }}>
          <div className="p-2">
            {/* <h6>Create New Pin</h6> */}
            <div className="text-start">
              <b><span>{getCamelCaseText(role)} Login</span></b>
            </div>
            <div>
              <b><span>Enter 6 digit OTP sent on {email}</span></b>
            </div>
            <div>
              <span>We sent a verification code to your mail id</span>
              {/* <small></small> */}
            </div>
            <div
              id="otp"
              className="inputs d-flex flex-row justify-content-center mt-2"
            >
              <input
                className="m-2 text-center form-control rounded"
                type="text"
                id="first"
                maxLength="1"
                value={otp.first}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              <input
                className="m-2 text-center form-control rounded"
                type="text"
                id="second"
                maxLength="1"
                value={otp.second}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              <input
                className="m-2 text-center form-control rounded"
                type="text"
                id="third"
                maxLength="1"
                value={otp.third}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              <input
                className="m-2 text-center form-control rounded"
                type="text"
                id="fourth"
                maxLength="1"
                value={otp.fourth}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              <input
                className="m-2 text-center form-control rounded"
                type="text"
                id="fifth"
                maxLength="1"
                value={otp.fifth}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              <input
                className="m-2 text-center form-control rounded"
                type="text"
                id="sixth"
                maxLength="1"
                value={otp.sixth}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="mt-2">
              <p>
                By Logging I agree to the &nbsp;
                <span>
                  <a href="/terms-and-conditions">Terms of Use</a>
                </span>
                &nbsp; and &nbsp;
                <span>
                  <a href="/privacy">Privacy Policy.</a>
                </span>
              </p>
            </div>
            <div className="mt-4">
              <div className="mt-4">
                <div className="mt-4">
                  <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onClick={sendOtpRequest}
                    disabled={isLoading}
                    style={{ width: "100%" }}
                  >
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
        <div className="mt-4 ">
          <p className="text-start">
            Having Trouble? &nbsp;
            <span>
              <a href="/contact-us">Contact Us </a>
            </span>
          </p>
        </div>
      </div>
    </div >
  );
}
