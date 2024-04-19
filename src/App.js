import React, { useEffect, useState } from "react";
import "./App.css";
import RecordComponent from "./components/RecordComponent";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import CodeEditor from "./components/Editor";
import Congrats from "./components/Congrats";
import Otp from "./components/Otp";
import Choose from "./components/Choose";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecordProvider from "./context/recordProvider";
import Organization from "./components/Organization";
import Cvacancy from "./components/CreateVacancy";
import Rhome from "./components/recruiter/Rhome";
import Thankyou from "./components/Thankyou";
import Term from "./components/Term";
import Rpost from "./components/Rpost";
import Chome from "./components/candidate/Chome";
import Applied from "./components/AppliedCandidatePage/AppliedCandidates"
import Sucess from "./components/Sucess"
// import MainHome from "./components/MainHome";
import Contactus from "./components/Contactus";
import About from "./components/About";
import Features from "./components/Features";
import Faq from "./components/Faq";
import Starttest from "./components/Starttest";
import Privacy from "./components/Privacy";
import Resumeupload from "./components/Resumeupload";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormDataProvider } from "./context/formdatacontext";
import { Redirect } from 'react-router-dom';
import { Navigate, useNavigate } from "react-router-dom";


import 'font-awesome/css/font-awesome.min.css';
import NewHome from "./home";
import TestPermissionPage from "./components/TestPermissionPage";
import { keepTheme } from "./utilities/themes";

function App() {
  const navigate = useNavigate();

  const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            navigate('/login'))
        }
      />
    );
  };
  const isAuthenticated = localStorage.getItem('auth') !== null;
  const isRecruiterRole = localStorage.getItem('role') === 'recruiter'
  const isCandidateRole = localStorage.getItem('role') === 'candidate'

  const [className, setClassName] = useState("theme-dark");

  useEffect(() => {
    keepTheme(setClassName)
  }, [setClassName])

  return (
    <RecordProvider>
      {/* <Router> */}
      <FormDataProvider>

        <div className={`App ${className} app-box`}>
          <Routes>
            {/* <Route path="/code" element={<CodeEditor />}></Route> */}
            {/* <Route path="/test-arena" element={<RecordComponent />}></Route> */}
            <Route path="/" element={<NewHome />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/congrats" element={<Congrats />}></Route>
            <Route path="/otp" element={<Otp />}></Route>
            <Route path="/choose" element={<Choose />}></Route>
            <Route path="/organization" element={<Organization />}></Route>
            {/* <Route path="/rhome" element={<Rhome />}></Route> */}
            <Route path="/submissions" element={<Thankyou />}></Route>
            <Route path="/create-vacancy" element={<Cvacancy />}></Route>
            <Route path="/rpost" element={<Rpost />}></Route>
            <Route path="/terms-and-conditions" element={<Term />}></Route>
            <Route path="/contact-us" element={<Contactus />}></Route>
            {/* <Route path="/chome" element={<Chome />}></Route> */}
            <Route path="/features" element={<Features />}></Route>
            <Route path="/about-us" element={<About />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/privacy" element={<Privacy />}></Route>
            <Route path="/resume" element={<Resumeupload />}></Route>
            {/* <Route path="/starttest" element={<Starttest />}></Route> */}
            <Route path="/applied-candidates-view" element={<Applied />}></Route>
            <Route path="/sucessful-candidates-view" element={<Sucess />}></Route>
            <Route path="/candidates-view" element={isAuthenticated && isCandidateRole ? <Chome setClassName={setClassName}/> : <Navigate to="/login" />} />
            <Route path="/code" element={isAuthenticated && isCandidateRole ? <CodeEditor /> : <Navigate to="/login" />} />
            <Route path="/starttest" element={isAuthenticated && isCandidateRole ? <Starttest /> : <Navigate to="/login" />} />
            <Route path="/test-arena" element={isAuthenticated && isCandidateRole ? <TestPermissionPage /> : <Navigate to="/" />} />
            <Route path="/recruiters-view" element={isAuthenticated && isRecruiterRole ? <Rhome /> : <Navigate to="/login" />} />
          </Routes>
        </div>
        {/* </Router> */}
      </FormDataProvider>
      <ToastContainer />
    </RecordProvider>
  );
}

export default App;
