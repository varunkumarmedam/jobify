import React from "react";
import Rinput from "./Rinput";
import { useFormData } from "../context/formdatacontext";

export default function Candidatereq() {
  const { allFormData, setAllFormData } = useFormData();
  const formData = allFormData.candidateReq || {
    candidateReq: "",
    candidateReqDays: "",
    additionalinfo: "",
    skills: "",
  };
  const handleInputChange = (field) => (value) => {
    setAllFormData((prevData) => ({
      ...prevData,
      candidateReq: {
        ...prevData.candidateReq,
        [field]: value,
      },
    }));
  };
  return (
    <div>
      <h6>Candidate Requirement</h6>
      <div className="row">
        <div className="col-6">
          <Rinput
            text="How many Hires do you require for this job?"
            placeholdertext="10"
            value={formData.candidateReq}
            onChange={handleInputChange("candidateReq")}
          ></Rinput>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <Rinput
            text="How urgently do you need to make a hire"
            placeholdertext="14"
            value={formData.candidateReqDays}
            onChange={handleInputChange("candidateReqDays")}
          ></Rinput>
        </div>
      </div>
      <h6 style={{ color: "#1A4F6E" }} className="mt-4">
        Additional Job Details
      </h6>
      <div className="row mt-4">
        <div className="col-6">
          <Rinput
            text="Monday-Saturday"
            placeholdertext="5/6 days a working"
            value={formData.additionalinfo}
            onChange={handleInputChange("additionalinfo")}
          ></Rinput>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <Rinput
            text="Skills"
            placeholdertext="Enter Skills separated by comma"
            value={formData.skills}
            onChange={handleInputChange("skills")}
          ></Rinput>
        </div>
      </div>
      {/* <p style={{ color: "#1A4F6E" }}>
        What availability is needed for the job
      </p>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Monday to Friday
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          No Weekends{" "}
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Weekend Required{" "}
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Holidays Required{" "}
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Day Shift{" "}
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Night Shift{" "}
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Overtime{" "}
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          8 Hours Shift{" "}
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          10 Hours Shift{" "}
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          12 Hours Shift{" "}
        </label>
      </div> */}
    </div>
  );
}
