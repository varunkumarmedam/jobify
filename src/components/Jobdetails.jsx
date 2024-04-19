
import React from "react";
import Rinput from "./Rinput";
import { useFormData } from "../context/formdatacontext";

export default function Jobdetails() {
  const handleCheckboxChange = (field, value) => (event) => {
    setAllFormData((prevState) => {
      if (prevState[field].includes(value)) {
        return {
          ...prevState,
          [field]: prevState[field].filter((item) => item !== value),
        };
      } else {
        return {
          ...prevState,
          [field]: [...prevState[field], value],
        };
      }
    });
  };

  const { allFormData, setAllFormData } = useFormData();
  const formData = {
    ...{
      jobTitle: "",
      experienceRequired: "",
      jobType: "",
      from: "",
      to: "",
      contractType: "",
      additionalCompensations: "",
    },
    ...allFormData.jobDetails,
  };

  const handleInputChange = (field) => (value) => {
    setAllFormData((prevData) => ({
      ...prevData,
      jobDetails: {
        ...prevData.jobDetails,
        [field]: value,
      },
    }));
  };

  return (
    <div>
      <div >
        <div className="row">
          <div className="col-6">
            <Rinput
              text="Job Title"
              placeholdertext="Looking for a creative designer"
              onChange={handleInputChange("jobTitle")}
              value={formData.jobTitle}
            />
          </div>
          <div className="col-6">
            <Rinput
              text="Experience Required?"
              placeholdertext="N/A"
              onChange={handleInputChange("experienceRequired")}
              value={formData.experienceRequired}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 mt-5">
            <Rinput
              text="Job Type?"
              placeholdertext="Full-Time/Part Time"
              onChange={handleInputChange("jobType")}
              value={formData.jobType}
            />
          </div>
          {/* <div className="col-6 mt-5">
            <div>What type of job is it?</div>
            {[
              "Full-Time",
              "Part-Time",
              "Temporary",
              "Contract",
              "Internship",
              "Commision",
            ].map((type, index) => (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`flexCheckDefaultJobType${index}`}
                  checked={formData.jobTypes.includes(type)}
                  onChange={() => handleCheckboxChange("jobTypes", type)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`flexCheckDefaultJobType${index}`}
                >
                  {type}
                </label>
              </div>
            ))}
          </div> */}
          <div className="col-6 mt-5">
            <div className="row">
              <div className="col-6">
                <Rinput
                  text="From"
                  placeholdertext="$16"
                  value={formData.from}
                  onChange={handleInputChange("from")}
                />
              </div>
              <div className="col-6">
                <Rinput
                  text="To"
                  placeholdertext="$20"
                  value={formData.to}
                  onChange={handleInputChange("to")}
                />
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-6">
              Are there Any Additional Form of Compensation Offered?
              {[
                "Tips",
                "Commission",
                "Bonuses",
                "Store-Discount",
                "Other-Forms",
              ].map((comp, index) => (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`flexCheckDefaultComp${index}`}
                    // checked={formData.additionalCompensations.includes(comp)}
                    onChange={() =>
                      handleCheckboxChange("additionalCompensations", comp)
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`flexCheckDefaultComp${index}`}
                  >
                    {comp}
                  </label>
                </div>
              ))}
            </div>
          </div> */}
        </div>
        <div className="row">
          <div className="col-12 mt-5">
            <Rinput
              text="Contract Type"
              placeholdertext="Per Hour"
              value={formData.contractType}
              onChange={handleInputChange("contractType")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5">
            <Rinput
              text="Additional Compensation"
              placeholdertext="Tips/Bonuses"
              value={formData.additionalCompensations}
              onChange={handleInputChange("additionalCompensations")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
