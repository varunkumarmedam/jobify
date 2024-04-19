import React from "react";
import Button from "./Button";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
export default function Secondnav() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    localStorage.clear();
  };
  return (
    <div>
      <style>
        {`
        .navbar{
          background-color: #022a72;
        }
        .myUniqueInput{
          padding-right: 1rem !important;
          padding-left: 1rem !important;
        }
  .myUniqueInput::placeholder {
    color: #01BDF8;
 
  }
`}
      </style>
      {/* <nav class="navbar  navbar-light bg-light"> */}
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ color: "black" }}
      >
        <div class="container-fluid">
          <h1 className="heading ">JOBIFY</h1>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-start mb-2 mb-lg-0">
              {/* <li class="nav-item mx-5">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li> */}
              {/* <li class="nav-item  mx-5">
                <a class="nav-link" href="/">
                  Jobs
                </a>
              </li>
              <li class="nav-item mx-5">
                <a class="nav-link" href="/">
                  Companies
                </a>
              </li>
              <li className="nav-item mx-5">
                <a className="nav-link" href="/">
                  Services
                </a>
              </li>
              <form class="d-flex">
                <input
                  className="form-control myUniqueInput me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form> */}
              {/* <li className="nav-item mx-2">
                <Button text="Login"></Button>
              </li>
              <li className="nav-item mx-2">
                <Button text="Sign Up"></Button>
              </li> */}
              {/* 
              <li class="nav-item dropdown mx-5">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  For employers
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/">
                      Post a Job
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Employer Login{" "}
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="/">
                      Admin Login{" "}
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Give Test{" "}
                    </a>
                  </li>
                </ul>
              </li> */}
              <li style={{ position: "absolute", right: "30px", bottom: "15px" }} className="text-white">
                <AiOutlineBell style={{ fontSize: "23px" }}></AiOutlineBell>
              </li>
              <li style={{ position: "absolute", right: "60px", bottom: "15px" }} className="text-white">
                <AiOutlineUser style={{ fontSize: "23px" }}></AiOutlineUser>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
