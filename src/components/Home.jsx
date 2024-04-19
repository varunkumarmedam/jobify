import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Home.css";
import image from "./jobify.png";
import jobdes from "./jobdes.png";
import candidate from "./candidate.png";
import Building from "./Building.png";
import Rickimage from "./Rickimage.png";
import Maximage from "./Maximage.png";
import Pimage from "./Pimage.png";
import sunimage from "./sun.png";
import jobicon from "./jobicon.png";
import caseicon from "./caseicon.png";
import lookicon from "./lookicon.png";
import thunderimage from "./thunder.png";
import profileimage from "./aryan.png";
import imagejupiter from "./jupiter.png";
import backgroundimage from "./backgroundimage.png";
import duffel from "./duffel.png";
import taxdoo from "./taxdoo.png";
import prefect from "./prefect.png";
import incident from "./incident.png";
import raycast from "./raycast.png";
import moonpay from "./moonpay.png";
import kandji from "./kandji.png";
import wagmo from "./wagmo.png";
import { FiArrowRight } from "react-icons/fi";
import { FaLaptop } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import { FaBuilding, FaSuitcase, FaUser } from "react-icons/fa";
import HomeFooter from "./HomeFooter";

export default function Home() {

  const location = useLocation();

  const handleFeaturesClick = () => {
    window.location.href = "/features";
  };
  const handleFAQClick = () => {
    window.location.href = "/faq";

  }
  const handleloginClick = () => {
    window.location.href = "/login";
  }


  return (
    <div className="home w-100">
      <div className="div w-100">
        <div className="overlap w-100">
          <img className="img" alt="Img" src={backgroundimage} />
          <div className="button">
            <div className="div-hidden">
              <p className="text-wrapper">A Glimpse</p>
            </div>
          </div>
          <p className="jobify-is-a-platform">
            <span className="span">Jobify</span>
            <span className="text-wrapper-2">
              {" "}
              is a platform created to revolutionize the way job applicants
              are screened and hired. By providing a platform for job applicants
              to take monitored and monitored tests, Jobify can save
              recruiters a significant amount of time and effort in the
              screening process. Additionally, the recorded videos of successful
              candidates can provide recruiters with valuable insights into
              their skills and problem-solving abilities.
            </span>
          </p>
          <div className="div-w-node">
            <div className="div-textbox">
              <div className="div-blue-text">
                <div className="text-wrapper-3">FOR RECRUITERS</div>
              </div>
              <div className="heading">
                <p className="p">
                  “What’s our runway if we hire 3 more
                  <br />
                  engineers?”
                </p>
              </div>
              <div className="div-text">
                <div className="div-2">
                  <div className="div-m">
                    <div className="div-flex">
                      <div className="tick-icon">
                        <BiCheck />
                      </div>
                      <div className="div-text-md">
                        <p className="text-wrapper-4">
                          Save time and effort on screening candidates
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="div-flex-wrapper">
                    <div className="div-flex">
                      <div className="tick-icon">
                        <BiCheck />
                      </div>{" "}
                      <div className="div-text-md">
                        <p className="text-wrapper-4">
                          Identify the most qualified candidates quickly and
                          easily
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-m-2">
                <div className="div-flex-2">
                  <div className="tick-icon">
                    <BiCheck />
                  </div>{" "}
                  <div className="get-a-better-wrapper">
                    <p className="text-wrapper-5">
                      Get a better understanding of candidates&#39;
                      skills and problem-solving abilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-w-node-ce">
            <div className="div-textbox-2">
              <div className="div-blue-text-2">
                <div className="text-wrapper-6">FOR JOB APPLICANTS</div>
              </div>
              <div className="how-did-we-spend-so-wrapper">
                <p className="p">
                  “How did we spend so much on
                  <br />
                  contractors last quarter?”
                </p>
              </div>
              <div className="div-m-3">
                <div className="div-flex-3">
                  <div className="tick-icon">
                    <BiCheck />
                  </div>{" "}
                  <div className="div-text-md-2">
                    <p className="text-wrapper-5">
                      Have the opportunity to showcase their skills to
                      potential employers
                    </p>
                  </div>
                </div>
              </div>
              <div className="div-m-4">
                <div className="div-flex-3">
                  <div className="tick-icon">
                    <BiCheck />
                  </div>{" "}
                  <div className="div-text-md-2">
                    <p className="text-wrapper-5">
                      Get feedback on their performance from recruiters
                    </p>
                  </div>
                </div>
              </div>
              <div className="div-m-5">
                <div className="div-flex-3">
                  <div className="tick-icon">
                    <BiCheck />
                  </div>{" "}
                  <div className="div-text-md-2">
                    <p className="text-wrapper-5">
                      Have a record of their tests to prove their skills
                      to potential employers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame">
            <div className="group">
              <div className="overlap-group">
                <div className="frame-wrapper">
                  <div className="frame-2">
                    <div className="frame-3">
                      <div className="frame-4">
                        <div className="frame-5">
                          <div className="text-wrapper-7">Upload resume</div>
                          <p className="text-wrapper-8">
                            An updated resume is key to being shortlisted
                          </p>
                        </div>
                        <div className="frame-6">
                          <p className="step">
                            <span className="text-wrapper-9">Step: </span>
                            <span className="text-wrapper-10">3/3</span>
                          </p>
                          <div className="frame-7">
                            <div className="rectangle" />
                            <div className="rectangle" />
                            <div className="rectangle-2" />
                          </div>
                        </div>
                      </div>
                      <div className="frame-8">
                        <p className="text-wrapper-11">
                          What is your current job title and company?
                        </p>
                        <div className="frame-4">
                          <div className="frame-9">
                            <div className="text-wrapper-12">Job title</div>
                          </div>
                          <div className="frame-10">
                            <div className="frame-11">
                              <div className="text-wrapper-12">Company</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-8">
                        <div className="frame-12">
                          <div className="text-wrapper-11">
                            Upload your updated resume:
                          </div>
                          <p className="if-you-don-t-have-an">
                            If you don&#39;t have an updated resume, we strongly
                            suggest you create one. Otherwise upload a PDF of
                            your updated LinkedIn profile
                          </p>
                        </div>
                        <div className="frame-13">
                          <div className="text-wrapper-13">
                            Anuragsingh_resume.pdf
                          </div>
                          <img
                            className="repeat"
                            alt="Repeat"
                            src="repeat.svg"
                          />
                        </div>
                      </div>
                      <div className="frame-4">
                        <div className="link-2">
                          <div className="text-wrapper-14">Finish</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-14">
                  <div className="frame-15">
                    <div className="frame-16">
                      <div className="frame-17">
                        <div className="text-wrapper-15">Add your skills</div>
                        <p className="text-wrapper-16">
                          Hi,We just need some info about your ideal job.
                        </p>
                      </div>
                      <div className="frame-18">
                        <p className="step-2">
                          <span className="text-wrapper-17">Step: </span>
                          <span className="text-wrapper-18">1/3</span>
                        </p>
                        <div className="frame-19">
                          <div className="rectangle-3" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                        </div>
                      </div>
                    </div>
                    <div className="div-3">
                      <p className="text-wrapper-19">
                        Are you a working professional or freelancer?
                      </p>
                      <div className="frame-20">
                        <div className="dropdown-label">
                          <div className="frame-21">
                            <div className="placeholder-wrapper">
                              <div className="placeholder">
                                I am working professional
                              </div>
                            </div>
                          </div>
                          <div className="checkbox-checked">
                            <img
                              className="path-copy"
                              alt="Path copy"
                              src="path-5-copy-10.svg"
                            />
                          </div>
                        </div>
                        <div className="dropdown-label">
                          <div className="frame-21">
                            <div className="frame-17">
                              <div className="placeholder">I am freelancer</div>
                            </div>
                          </div>
                          <div className="checkbox-checked-2" />
                        </div>
                      </div>
                    </div>
                    <div className="div-3">
                      <p className="text-wrapper-20">
                        How many years of work experience do you have? Don&#39;t
                        include internships.
                      </p>
                      <div className="frame-22">
                        <div className="frame-23">
                          <div className="frame-24">
                            <div className="text-wrapper-21">Eg. 3</div>
                          </div>
                        </div>
                        <div className="frame-25">
                          <div className="frame-26">
                            <div className="text-wrapper-22">Years</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="div-3">
                      <div className="text-wrapper-20">
                        Select your current role:
                      </div>
                      <div className="frame-27">
                        <div className="frame-23">
                          <div className="frame-28">
                            <div className="text-wrapper-21">Eg. 3</div>
                          </div>
                        </div>
                        {/* <img className="arrow-chevron-down" alt="Arrow chevron down" src="arrow-chevron-down.svg" /> */}
                      </div>
                    </div>
                    <div className="link-3">
                      <div className="text-wrapper-23">Next</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-wrapper">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="frame-29">
                  <div className="div-4">
                    <div className="frame-30">
                      <div className="frame-31">
                        <FaBuilding className="icon" />{" "}
                        <div className="text-wrapper-24">Company details</div>
                      </div>
                      {/* <img className="img-4" alt="Arrow chevron down" src="arrow-chevron-down-2.svg" /> */}
                      <div className="frame-32">
                        <div className="img-4">
                          <FaSuitcase className="icon" />
                        </div>
                        <div className="text-wrapper-24">Job details</div>
                      </div>
                      {/* <img className="img-4" alt="Arrow chevron down" src="arrow-chevron-down-3.svg" /> */}
                      <div className="frame-33">
                        <FaUser className="icon" />
                        <div className="text-wrapper-25">Candidate details</div>
                      </div>
                      {/* <img className="arrow-chevron-down-2" alt="Arrow chevron down" src="arrow-chevron-down-4.svg" /> */}
                      <div className="frame-33">
                        <img
                          className="iconsax-linear-2"
                          alt="Iconsax linear"
                          src="messagetext.svg"
                        />
                        <div className="text-wrapper-26">Job description</div>
                      </div>
                    </div>
                    <img
                      className="vector-2"
                      alt="Vector"
                      src="vector-110.svg"
                    />
                  </div>
                  <div className="frame-34">
                    <div className="frame-35">
                      <div className="frame-36">
                        <div className="text-wrapper-27">Job details</div>
                        <div className="frame-37">
                          <div className="frame-38">
                            <div className="text-wrapper-28">Job Title</div>
                            <div className="frame-39">
                              <div className="text-wrapper-29">
                                UX designer|
                              </div>
                            </div>
                          </div>
                          <div className="frame-38">
                            <div className="text-wrapper-28">
                              Experience Required?
                            </div>
                            <div className="frame-40">
                              <div className="text-wrapper-30">N/A</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-36">
                        <div className="frame-37">
                          <div className="frame-41">
                            <div className="text-wrapper-28">Job Type?</div>
                            <div className="frame-40">
                              <div className="text-wrapper-29">Full time</div>
                              {/* <img
                                className="arrow-chevron-down-4"
                                alt="Arrow chevron down"
                                src="arrow-chevron-down-6.svg"
                              /> */}
                            </div>
                          </div>
                          <div className="frame-38">
                            <div className="text-wrapper-28">
                              Compensation(From)
                            </div>
                            <div className="frame-42">
                              <div className="text-wrapper-30">$20</div>
                            </div>
                          </div>
                          <div className="frame-38">
                            <div className="text-wrapper-28">
                              Compensation(To)
                            </div>
                            <div className="frame-42">
                              <div className="text-wrapper-30">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-36">
                        <div className="frame-37">
                          <div className="frame-43">
                            <div className="text-wrapper-28">Contract Type</div>
                            <div className="frame-42">
                              <div className="text-wrapper-30">Per hour</div>
                            </div>
                          </div>
                          <div className="frame-38">
                            <div className="text-wrapper-28">
                              Additional Compensation
                            </div>
                            <div className="frame-42">
                              <div className="text-wrapper-30">
                                Tips/ Bonuses
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-44">
                  <div className="frame-45">
                    <div className="text-wrapper-15">Design System - UX</div>
                    <div className="frame-46">
                      <div className="frame-47">
                        <div className="frame-48">
                          <div className="placeholder-wrapper">
                            <div className="placeholder-2">
                              Job in Banaglore
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="vector-3"
                        alt="Vector"
                        src="vector-107-2.svg"
                      />
                      <div className="frame-47">
                        <div className="frame-48">
                          <div className="placeholder-wrapper">
                            <div className="placeholder-2">20-50 employees</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-46">
                    <div className="link-4">
                      <div className="text-wrapper-31">Preview Job</div>
                    </div>
                    <div className="link-5">
                      <div className="text-wrapper-32">Next</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-2 w-100">
          <div className="div-hero-section">
            <div className="div-startup-trusted">
              <div className="div-5">
                <p className="text-wrapper-33">
                  Trusted by founders, recruiters and recruitment firms
                </p>
              </div>
              <div className="div-w-layout-grid">
                <div className="div-w-node-ab">
                  <img
                    className="img-6"
                    alt="Img"
                    src={duffel}
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="img-7"
                    alt="Img"
                    src={taxdoo}
                  />
                </div>
                <img
                  className="div-w-node-2"
                  alt="Div w node"
                  src={kandji}
                />
                <div className="div-w-node-3">
                  <img
                    className="img-8"
                    alt="Img"
                    src={prefect}
                  />
                </div>
                <div className="div-w-node-4">
                  <img
                    className="img-9"
                    alt="Img"
                    src={incident}
                  />
                </div>
                <img
                  className="div-w-node-2"
                  alt="Div w node"
                  src={wagmo}
                />
                <div className="div-w-node-5">
                  <img
                    className="img-10"
                    alt="Img"
                    src={raycast}
                  />
                </div>
                <div className="div-w-node-6">
                  <img
                    className="img-11"
                    alt="Img"
                    src={moonpay}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="div-nav w-100">
            <div className="nav-global">
              <div className="global">
                <div className="link-6">
                  <div className="span-ml-margin">
                    <img className="group-2" alt="Group" src={image} />
                  </div>
                </div>
              </div>

              <div className="div-hidden-2">
                <div className="link-7" onClick={handleFeaturesClick}>
                  <div className="text-wrapper-35">Features</div>
                </div>
                <div className="link-9" onClick={handleFAQClick}>
                  <div className="text-wrapper-35">FAQ</div>
                </div>
              </div>
              <div className="link-wrapper">
                <div className="link-10">
                  <Link to="/login">
                    <div className="button-container">
                      <div className="text-wrapper-36">Login</div>
                      <FiArrowRight className="span-ml-margin-2" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="heading-2 w-100">
            <p className="text-wrapper-37">
              Skill speaks louder than your resumé
            </p>
          </div>
          <div className="p-mx-auto">
            <p className="we-help-job">
              We help job applicants prove their worth by taking up a
              quick test. We push the successful ones’ profiles towards relevant recruiters & companies
            </p>
          </div>
          <div className="d-flex w-100">
            <div className="link-11" onClick={handleloginClick}>
              <div className="text-wrapper-23">Signup</div>
            </div>
            <div className="link-12" onClick={handleFAQClick}>
              <div className="text-wrapper-38">Read FAQ</div>
            </div>
          </div>

          <div className="frame-49">
            <div className="div-flex-4">
              <FaEdit className="editor-icon" />
              <div className="span-ml-margin-3">
                <div className="text-wrapper-39">Code platform</div>
              </div>
            </div>
            <div className="div-flex-4">
              <FaLaptop className="computer-icon" />
              <div className="span-ml-margin-3">
                <p className="text-wrapper-39">
                  Windows, Mac, Linux (on any web)
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-wrapper-40">Deserving! but still got rejected ?</p>
        <p className="worry-not-jobify-is">
          <span className="text-wrapper-10">Worry not, </span>
          <span className="text-wrapper-41">Jobify</span>
          <span className="text-wrapper-10"> is here !</span>
        </p>
        <div className="to-desktop-handles-wrapper">
          <div className="to-desktop-handles">
            To Desktop handles
            <br />
            the details
          </div>
        </div>

        <div className="overlap-3">
          <div className="div-group">
            <div className="div-relative">
              <div className="div-font-display">
                <p className="text-wrapper-42">
                  Monitored and monitored tests
                </p>
              </div>
            </div>
          </div>
          <div className="frame-50">
            <div className="frame-51">
              <img className="image-2" alt="Image" src={imagejupiter} />
              <div className="frame-52">
                <div className="text-wrapper-43">Design System - UX</div>
                <div className="frame-53">
                  <div className="frame-54">
                    <div className="text-wrapper-44">Jupiter Inc</div>
                  </div>
                  <img className="vector-4" alt="Vector" src="vector-107.svg" />
                  <div className="frame-55">
                    <div className="link-13">
                      <div className="text-wrapper-45">5+</div>
                    </div>
                    <div className="link-13">
                      <div className="text-wrapper-45">Remote</div>
                    </div>
                  </div>
                </div>
                <div className="frame-56">
                  <div className="frame-55">
                    <div className="link-13">
                      <div className="text-wrapper-45">Fulltime</div>
                    </div>
                    <div className="link-13">
                      <div className="text-wrapper-45">Bangalore</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-57">
              <div className="frame-58">
                <div className="link-14">
                  <div className="text-wrapper-46">Take Test</div>
                </div>
              </div>
              <div className="frame-59">
                <div className="link-15">
                  <div className="ellipse-wrapper">
                    <img
                      className="ellipse"
                      alt="Ellipse"
                      src="ellipse-29.png"
                    />
                  </div>
                  <div className="text-wrapper-47">Record</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-relative-2">
          <div className="div-font-display-2">
            <div className="text-wrapper-48">
              Streamlined interview process:
            </div>
          </div>
          <div className="div-text-center">
            <p className="text-wrapper-49">
              Jobify is helpful in streamlining the interview process by
              allowing recruiters to schedule interviews with candidates
              directly through the platform. This could save recruiters time and
              effort, and make the job search process more efficient for
              everyone involved.
            </p>
          </div>
          <div className="frame-60">
            <div className="div-m-6">
              <div className="div-flex">
                <div className="text-wrapper-50">Step 1</div>
              </div>
            </div>
            {/* <Chevron className="chevron-instance" /> */}
            <div className="div-m-7">
              <div className="div-flex">
                <div className="text-wrapper-51">Step 1</div>
              </div>
            </div>
            {/* <Chevron className="chevron-instance" /> */}
            <div className="div-m-7">
              <div className="div-flex">
                <div className="text-wrapper-51">Step 3</div>
              </div>
            </div>
            {/* <Chevron className="chevron-instance" /> */}
            <div className="div-m-7">
              <div className="div-flex">
                <div className="text-wrapper-51">Step 4</div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-group-2">
          <div className="div-font-display-3">
            <div className="text-wrapper-48">Light/ dark themes</div>
          </div>
          <div className="components">
            <div className="frame-61">
              <div className="frame-62">
                <div className="text-wrapper-52">My account</div>
              </div>
            </div>
            <div className="frame-61">
              <img
                className="avatars-single"
                alt="Avatars single"
                src={profileimage}
              />
              <div className="frame-63">
                <div className="frame-64">
                  <div className="text-wrapper-53">Aryan Singh</div>
                  <div className="div-m-8">
                    <div className="div-flex-5">
                      <div className="text-wrapper-54">Candidate profile</div>
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-55">singhc102@gmail.com</div>
              </div>
            </div>
            <div className="frame-65">
              <div className="dropdown-label-2">
                <div className="frame-66">
                  <img className="img-13" alt="Sun" src={sunimage} />
                  <div className="frame-67">
                    <div className="frame-68">
                      <div className="placeholder-3">Theme</div>
                    </div>
                    <div className="placeholder-4">System</div>
                  </div>
                  {/* <img className="img-13" alt="Chevron right" src="chevron-right.svg" /> */}
                </div>
              </div>
              <div className="dropdown-label-3">
                <div className="frame-66">
                  <img className="img-13" alt="Zap" src={thunderimage} />
                  <div className="frame-67">
                    <div className="frame-68">
                      <div className="placeholder-5">PLan</div>
                    </div>
                    <div className="placeholder-6">Active</div>
                  </div>
                  {/* <img className="chevron-right" alt="Chevron right" src="chevron-right-2.svg" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="div-relative-3">
            <div className="div-font-display-4">
              <p className="text-wrapper-48">Focus on job applicants</p>
            </div>
            <div className="todesktop-ensures-wrapper">
              <p className="todesktop-ensures">
                ToDesktop ensures the underlying
                <br />
                browser, performance improvements,
                <br />
                security patches and additional features
                <br />
                are always up to date.
              </p>
            </div>
          </div>
          <div className="frame-69">
            <div className="group-3">
              <img className="group-4" alt="Group" src={jobicon} />
            </div>
            {/* <ArrowsJoinWrapper className="arrows-join" /> */}
            <div className="briefcase-wrapper">
              <img className="briefcase" alt="Briefcase" src={caseicon} />
            </div>
          </div>
        </div>
        <div className="div-relative-wrapper">
          <div className="div-relative-4">
            <div className="div-font-display-5">
              <div className="text-wrapper-48">Customizable look and feel</div>
            </div>
            <img
              className="look-and-feel-png"
              alt="Look and feel png"
              src={lookicon}
            />
          </div>
        </div>
        <div className="overlap-5">
          <div className="div-group-3">
            <div className="div-relative-5">
              <div className="div-font-display-6">
                <div className="text-wrapper-48">
                  Feedback to job applicants:
                </div>
              </div>
              <p className="text-wrapper-56">
                Jobify could provide feedback to job applicants after
                interviews. This feedback could help job applicants to improve
                their interviewing skills and increase their chances of getting
                hired.
              </p>
            </div>
          </div>
          <div className="frame-70">
            {/* <div className="star-wrapper">
              <Star className="star-instance" />
            </div> */}
            {/* <div className="star-wrapper">
              <Star className="star-instance" />
            </div> */}
            {/* <div className="star-wrapper">
              <IconComponentNode className="star-instance" />
            </div>
            <div className="star-wrapper">
              <Star className="star-instance" />
            </div>
            <div className="star-wrapper">
              <Star className="star-instance" />
            </div> */}
          </div>
        </div>
        <div className="overlap-6">
          <div className="div-mx">
            <div className="section">
              <div className="heading-margin">
                <div className="text-wrapper-57">Multi-window support</div>
              </div>
              <div className="div-my-margin">
                <div className="text-wrapper-58">•</div>
              </div>
              <div className="heading-trays-wrapper">
                <div className="text-wrapper-57">Trays</div>
              </div>
              <div className="div-my-margin">
                <div className="text-wrapper-58">•</div>
              </div>
              <div className="heading-deep-wrapper">
                <div className="text-wrapper-57">Deep Linking</div>
              </div>
              <div className="div-my-margin">
                <div className="text-wrapper-58">•</div>
              </div>
              <div className="heading-launch-at-wrapper">
                <div className="text-wrapper-57">Launch at Startup</div>
              </div>
              <div className="div-my-margin">
                <div className="text-wrapper-58">•</div>
              </div>
              <div className="heading-screen-wrapper">
                <div className="text-wrapper-57">Screen Recording</div>
              </div>
              <div className="div-my-margin">
                <div className="text-wrapper-58">•</div>
              </div>
            </div>
            <div className="section-2">
              <div className="heading-code-wrapper">
                <div className="text-wrapper-57">Code Signing</div>
              </div>
              <div className="div-my-margin">
                <div className="text-wrapper-58">•</div>
              </div>
              <div className="heading-offline-wrapper">
                <div className="text-wrapper-57">Offline Support</div>
              </div>
              <div className="div-my-margin">
                <div className="text-wrapper-58">•</div>
              </div>
            </div>
          </div>
          <div className="rectangle-5" />
        </div>
        <p className="text-wrapper-59">Loved by founders and Recruitment firms</p>
        <div className="div-flex-6">
          <div className="div-flex-7">
            <div className="div-flex-8">
              <div className="div-font-display-wrapper">
                <div className="div-font-display-7">
                  <div className="text-wrapper-48">Native APIs</div>
                </div>
              </div>
              <div className="div-text-lg">
                <div className="overlap-group-3">
                  <p className="what-sets-todesktop">
                    “What sets ToDesktop apart is its
                    <br />
                    seamless integration with native APIs
                    <br />
                    using our existing web codebase. By
                    <br />
                    tapping into APIs like
                  </p>
                  <div className="link-16">
                    <div className="text-wrapper-60">Tray</div>
                  </div>
                  <div className="and"> and</div>
                </div>
                <div className="link-17">
                  <div className="text-wrapper-60">Notifications</div>
                </div>
                <div className="we-ve-crafted-an">, we&#39;ve crafted an</div>
                <div className="overlap-7">
                  <div className="exceptionally">
                    exceptionally polished desktop user
                    <br />
                    experience.”
                  </div>
                  <div className="text-wrapper-61">”</div>
                </div>
                <div className="text-wrapper-62">“</div>
              </div>
            </div>
            <div className="div-flex-9">
              <div className="div-flex-10">
                <img className="img-14" alt="Rick jpg" src={Rickimage} />
              </div>
              <div className="div-6">
                <div className="div-font-semibold">
                  <div className="text-wrapper-63">Rick Pastoor</div>
                </div>
                <div className="div-text-gray">
                  <div className="link-18">
                    <div className="text-wrapper-64">Rise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-flex-11">
            <div className="div-flex-8">
              <div className="div-font-display-wrapper">
                <div className="div-font-display-8">
                  <div className="text-wrapper-65">
                    Cleaner, less cluttered UI
                  </div>
                </div>
              </div>
              <div className="div-text-lg-2">
                <div className="overlap-group-4">
                  <p className="having-a-desktop-app">
                    “Having a desktop app gives us the
                    <br />
                    freedom to design the experience we
                    <br />
                    want, including better keyboard
                    <br />
                    shortcuts and a cleaner UI. It was a<br />
                    no-brainer for us to use ToDesktop.”
                  </p>
                  <div className="text-wrapper-66">”</div>
                </div>
                <div className="text-wrapper-62">“</div>
              </div>
            </div>
            <div className="div-flex-12">
              <div className="div-flex-10">
                <img className="img-14" alt="Max jpg" src={Maximage} />
              </div>
              <div className="div-6">
                <div className="div-font-semibold">
                  <div className="text-wrapper-63">Max Musing</div>
                </div>
                <div className="div-text-gray-2">
                  <div className="link-19">
                    <div className="text-wrapper-64">Basedash</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-flex-13">
            <div className="div-flex-8">
              <div className="div-font-display-wrapper">
                <div className="div-font-display-9">
                  <div className="text-wrapper-48">Code optional</div>
                </div>
              </div>
              <div className="div-text-lg">
                <div className="overlap-group-5">
                  <p className="it-was-unbelievably">
                    “It was unbelievably simple for us to get
                    <br />a desktop app up and running, and we
                    <br />
                    didn’t have to write a single line of
                    <br />
                    code. Once we had this MVP, we were
                    <br />
                    able to extend the app’s functionality
                    <br />
                    with custom behavior using
                    <br />
                    ToDesktop’s libraries. “
                  </p>
                  <div className="text-wrapper-67">”</div>
                </div>
                <div className="text-wrapper-62">“</div>
              </div>
            </div>
            <div className="div-flex-14">
              <div className="div-flex-10">
                <img className="img-14" alt="Pouya jpg" src={Pimage} />
              </div>
              <div className="div-6">
                <div className="div-font-semibold">
                  <div className="text-wrapper-63">Pouya Rad</div>
                </div>
                <div className="div-text-gray-3">
                  <div className="link-20">
                    <div className="text-wrapper-64">LifeAt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-8">
          <div className="div-relative-6">
            <div className="div-relative-7">
              <div className="div-7">
                <div className="ready-for-revolution-wrapper">
                  <div className="ready-for-revolution">
                    READY FOR REVOLUTION ?
                  </div>
                </div>
                <div className="heading-3">
                  <div className="overlap-group-6">
                    <p className="use-our-bestest-jobs">
                      Use our bestest jobs
                      <br />
                      portal app for free
                    </p>
                    <div className="superscript">*</div>
                  </div>
                </div>
                <div className="link-21">
                  <div className="text-wrapper-68"><a href="/login">
                    Try demo
                  </a>
                  </div>
                </div>
                <div className="overlap-wrapper">
                  <div className="overlap-9">
                    <div className="superscript-2">*</div>
                    <p className="text-wrapper-69">
                      Demo is free until production version is ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-aspect-w" />
          </div>
          <div className="jobs-page-create" data-colors-mode="light">
            <div className="overlap-9">
              <div className="frame-71">
                <div className="link-22">
                  <img className="group-6" alt="Group" src={jobicon} />
                  <div className="span-ml-margin-4">
                    <div className="text-wrapper-70">JOBIFY</div>
                  </div>
                </div>
                <div className="frame-72">
                  <div className="dropdown-label-4">
                    <div className="placeholder-7">Jobs</div>
                  </div>
                  <div className="dropdown-label-5">
                    <div className="placeholder-8">Applied</div>
                  </div>
                </div>
                <div className="frame-73">
                  <div className="frame-74">
                    <div className="frame-75">
                      <img
                        className="avatars-single-2"
                        alt="Avatars single"
                        src="single-2.svg"
                      />
                      <div className="frame-76">
                        <div className="text-wrapper-71">
                          singhc102@gmail.com
                        </div>
                      </div>
                      <div className="div-m-9">
                        <div className="div-flex-15">
                          <div className="text-wrapper-72">CP</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="vector-5" alt="Vector" src="vector-56.svg" />
                  <img className="frame-77" alt="Frame" src="frame-5.svg" />
                </div>
              </div>
              <div className="frame-78">
                <div className="div-4">
                  <div className="frame-79">
                    <div className="frame-80">
                      <img className="img-15" alt="Buildings" src={Building} />
                      <div className="text-wrapper-73">Company details</div>
                    </div>
                    <div className="frame-81">
                      <div className="img-15">
                        <img className="icon-2" alt="Icon" src={caseicon} />
                      </div>
                      <div className="text-wrapper-74">Job details</div>
                    </div>
                    <div className="frame-81">
                      <img
                        className="iconsax-linear-3"
                        alt="Iconsax linear"
                        src={candidate}
                      />
                      <div className="text-wrapper-75">Candidate details</div>
                    </div>
                    <div className="frame-81">
                      <img
                        className="iconsax-linear-4"
                        alt="Iconsax linear"
                        src={jobdes}
                      />
                      <div className="text-wrapper-76">Job description</div>
                    </div>
                  </div>
                  <img
                    className="vector-6"
                    alt="Vector"
                    src="vector-110-2.svg"
                  />
                </div>
                <div className="frame-82">
                  <div className="frame-83">
                    <div className="frame-84">
                      <div className="text-wrapper-77">Company info</div>
                      <div className="frame-85">
                        <div className="frame-86">
                          <div className="img-15">
                            <img
                              className="icon-2"
                              alt="Icon"
                              src="icon-3.svg"
                            />
                          </div>
                          <div className="text-wrapper-78">
                            Logo update(400X400)
                          </div>
                        </div>
                        <div className="frame-87">
                          <div className="frame-88">
                            <div className="text-wrapper-79">Company name*</div>
                            <div className="frame-89">
                              <div className="text-wrapper-80">Jobify</div>
                            </div>
                          </div>
                          <div className="frame-88">
                            <div className="text-wrapper-79">Company Size*</div>
                            <div className="frame-90">
                              <div className="text-wrapper-81">
                                How many employees
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-91">
                        <div className="frame-92">
                          <div className="text-wrapper-79">
                            Company website*
                          </div>
                          <div className="frame-93">
                            <div className="text-wrapper-80">Jobify</div>
                          </div>
                        </div>
                        <div className="frame-92">
                          <div className="text-wrapper-79">
                            Company linkedIn*
                          </div>
                          <div className="frame-94">
                            <div className="text-wrapper-80">
                              lidken.com/jupiter
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-95">
                      <div className="frame-91">
                        <div className="frame-92">
                          <div className="text-wrapper-79">Your name*</div>
                          <div className="frame-96">
                            <div className="text-wrapper-81">John Smith</div>
                          </div>
                        </div>
                        <div className="frame-92">
                          <div className="text-wrapper-79">Employees*</div>
                          <div className="frame-96">
                            <div className="text-wrapper-81">
                              How many employees
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="vector-7"
                      alt="Vector"
                      src="vector-108.svg"
                    />
                    <div className="frame-95">
                      <div className="text-wrapper-77">Job Location</div>
                      <div className="frame-91">
                        <div className="frame-92">
                          <div className="text-wrapper-79">City</div>
                          <div className="frame-96">
                            <div className="text-wrapper-81">NY</div>
                          </div>
                        </div>
                        <div className="frame-92">
                          <div className="text-wrapper-79">State</div>
                          <div className="frame-96">
                            <div className="text-wrapper-81">NY</div>
                          </div>
                        </div>
                        <div className="frame-92">
                          <div className="text-wrapper-79">Country</div>
                          <div className="frame-96">
                            <div className="text-wrapper-81">USA</div>
                          </div>
                        </div>
                        <div className="frame-92">
                          <div className="text-wrapper-79">
                            Company Street Address
                          </div>
                          <div className="frame-96">
                            <div className="text-wrapper-81">123, NY, USA</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="vector-8"
                      alt="Vector"
                      src="vector-109.svg"
                    />
                    <div className="frame-95">
                      <div className="text-wrapper-77">Company Location</div>
                      <div className="frame-91">
                        <div className="frame-92">
                          <div className="text-wrapper-79">City</div>
                          <div className="frame-96">
                            <div className="text-wrapper-81">NY</div>
                          </div>
                        </div>
                        <div className="frame-92">
                          <div className="text-wrapper-79">State</div>
                          <div className="frame-96">
                            <div className="text-wrapper-81">NY</div>
                          </div>
                        </div>
                        <div className="frame-92">
                          <div className="text-wrapper-79">Country</div>
                          <div className="frame-96">
                            <div className="text-wrapper-81">USA</div>
                          </div>
                        </div>
                        <div className="frame-92">
                          <div className="text-wrapper-79">
                            Company Street Address
                          </div>
                          <div className="frame-96">
                            <div className="text-wrapper-81">123, NY, USA</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-97">
                <div className="text-wrapper-82">Create a Job</div>
                <div className="text-wrapper-83">Step 1/4</div>
              </div>
            </div>
          </div>
        </div>


        <div className="div-footer">
          <div className="div-container">
            <div className="link-28">
              <img className="group-2" alt="Group" src={image} />
            </div>
            <div class="div-w-layout-grid-2">
              <div class="div-w-node-aaea">
                <div class="div-footer-title-div">
                </div>
                <div class="footer-links-container">
                  <div class="div-linkbox-margin">
                    <div class="div-linkbox">
                      <a href="/about-us">

                        <div class="text-wrapper-108">ABOUT US</div>
                      </a>
                    </div>
                  </div>
                  <div class="div-linkbox-margin">
                    <div class="div-linkbox">
                      <a href="/privacy">

                        <div class="text-wrapper-108">PRIVACY</div>
                      </a>
                    </div>
                  </div>
                  <div class="div-linkbox-margin">
                    <div class="link-integrations-wrapper">
                      <a href="/contact-us">

                        <div class="text-wrapper-108">CONTACT US</div>
                      </a>
                    </div>
                  </div>
                  <div class="div-linkbox-margin">
                    <div class="link-trust-and-wrapper">
                      <a href="/terms-and-conditions">
                        <div class="text-wrapper-108">TERMS AND CONDITIONS</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}

