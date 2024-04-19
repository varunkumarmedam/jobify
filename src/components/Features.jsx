import React from "react";
import "./About.css";
import "./Features-Faq.css";
import HomeFooter from "./HomeFooter";

const Features = () => {
  return (<>
    <div className="main-body">

      <h1 className="title-text">Features</h1>
      <hr className="head-divider" />

      <div className="text-content-body">

        <p className="text-content">
          <h5 className="side-heading">About the Product</h5>
          <hr className="title-divider" />
          Jobify is a website that enables job recruiters/posters to post jobs, and at the same time, enables job applicants
          to participate in a video-monitored test with their screens shared from the comfort of their own homes. Jobify
          ensures successful candidates’ profiles are shared with relevant recruiters, and whenever this is done, job
          applicants are kept informed via email about the status in terms of any response received from recruiters towards
          Jobify.
        </p>

        <p className="text-content">
          <h5 className="side-heading">1. Main Features</h5>
          <hr className="title-divider" />
          Jobify ensures the tests' assessment remains fair, in a world where we often say the tech hiring process
          is broken, unfair assessment is the last thing on our mind. We want to bridge the gap between job applicants and
          recruiters, match them as if it’s an Uber ride for both of the sides. Both sides should be able to engage at
          their comfort level, and recruiters should feel content when they receive job applicants’ profiles with a fair
          amount of data points, e.g., the test results & recorded videos.
        </p>

        <p className="text-content">
          <h5 className="side-heading">2. Additional Features</h5>
          <hr className="title-divider" />
          Jobify also has an admin system to monitor the
          end-to-end processes and also take needed actions where it’s necessary & mandatory. It also helps enable both
          sides to connect in a meaningful way. In a chaotic world where we see tons of layoffs, we want to appear as a very
          reliable platform in front of the world. We intend to start off this journey with software engineers as the
          onboarded job applicants; in the future, we would like to onboard applicants of various domains too.
        </p>
        <br /><br />

        <hr />
        Thank you.<br />
        Last updated: 9th October, 2023<br />
        Bangalore, IN.
      </div>
    </div>
    <HomeFooter />
  </>

  );
};

export default Features;
