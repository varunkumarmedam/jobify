import React, { useState, useEffect, useRef } from "react";
import Rinput from "./Rinput";
import { useFormData } from "../context/formdatacontext";

export default function CompanyDetails() {
  const handleInputChange = (field) => (value) => {
    console.log(value)
    setAllFormData((prevData) => ({
      ...prevData,
      companyDetails: {
        ...prevData.companyDetails,
        [field]: value,
      },
    })
    );
    console.log(allFormData)
  };


  

  const { allFormData, setAllFormData } = useFormData();
  useEffect(() => {

    console.log("Updated allFormData:", allFormData);
  }, [allFormData]);

  const formData = allFormData.companyDetails || {
    companyName: "",
    companySize: "",
    yourName: "",
    phone: "",
    url:"",
    // companyCity: "",
    // companyState: "",
    // companyCountry: "",
    // companyStreetAddress: "",
    jobCity: "",
    jobState: "",
    jobCountry: "",
    jobStreetAddress: "",
  };

  // const sendData = (data) => {
  //   setAllFormData((prevData) => ({
  //     ...prevData,
  //     companyDetails: data,
  //   }));
  // };
  return (
    <div>
      <div>
        <form action="/">
          <div className="row">
            <div className="col-6">
              <Rinput
                text="Company Name"
                placeholdertext="Jobify"
                value={formData.companyName}
                onChange={handleInputChange("companyName")}
              ></Rinput>
            </div>
            <div className="col-6">
              <Rinput
                text="Company Size"
                placeholdertext="How many employees?"
                value={formData.companySize}
                onChange={handleInputChange("companySize")}
              ></Rinput>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6">
              <Rinput
                text="Your Name"
                placeholdertext="John Smith"
                value={formData.yourName}
                onChange={handleInputChange("yourName")}
              ></Rinput>
            </div>
            <div className="col-6">
              <Rinput
                text="Phone"
                placeholdertext="999-999-999-99"
                value={formData.phone}
                onChange={handleInputChange("phone")}
              ></Rinput>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6">
              <Rinput
                text="Website Url"
                placeholdertext="www.google.com"
                value={formData.url}
                onChange={handleInputChange("url")}
              ></Rinput>
            </div>
          
          </div>
          {/* <div
            className="mt-3"
            style={{ fontWeight: "bolder", color: "#0C1E34" }}
          >
            Company Location
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <Rinput
                text="City"
                placeholdertext="NY"
                value={formData.companyCity}
                onChange={handleInputChange("companyCity")}
              ></Rinput>
            </div>
            <div className="col-3">
              <Rinput
                text="State"
                placeholdertext="NY"
                value={formData.companyState}
                onChange={handleInputChange("companyState")}
              ></Rinput>
            </div>
            <div className="col-3">
              <Rinput
                text="Country"
                placeholdertext="USA"
                value={formData.companyCountry}
                onChange={handleInputChange("companyCountry")}
              ></Rinput>
            </div>
            <div className="col-3">
              <Rinput
                text="Company Street Address"
                placeholdertext="123,NY,USA"
                value={formData.companyStreetAddress}
                onChange={handleInputChange("companyStreetAddress")}
              ></Rinput>
            </div>
          </div> */}
          <div
            className="mt-3"
            style={{ fontWeight: "bolder", color: "#0C1E34" }}
          >
            Job Location
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <Rinput
                text="City"
                placeholdertext="NY"
                value={formData.jobCity}
                onChange={handleInputChange("jobCity")}
              ></Rinput>
            </div>
            <div className="col-3">
              <Rinput
                text="State"
                placeholdertext="NY"
                value={formData.jobState}
                onChange={handleInputChange("jobState")}
              ></Rinput>
            </div>
            <div className="col-3">
              <Rinput
                text="Country"
                placeholdertext="USA"
                value={formData.jobCountry}
                onChange={handleInputChange("jobCountry")}
              ></Rinput>
            </div>
            <div className="col-3">
              <Rinput
                text="Company Street Address"
                placeholdertext="123,NY,USA"
                value={formData.jobStreetAddress}
                onChange={handleInputChange("jobStreetAddress")}
              ></Rinput>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

