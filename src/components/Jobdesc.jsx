import React from "react";
import { useFormData } from "../context/formdatacontext";

export default function Jobdesc() {
  const { allFormData, setAllFormData } = useFormData();
  const formData = allFormData.jobDesc || {
    jobInfo: "",
  };
  const handleInputChange = (field) => (event) => {
    const value = event.target.value; // Extract value from event object
    setAllFormData((prevData) => ({
      ...prevData,
      jobDesc: {
        ...prevData.jobDesc,
        [field]: value,
      },
    }));
  };

  return (
    <div>
      <style>
        {`
                .textareainput{
                    border-radius: 7px !important;
                    height: 8rem;
                    padding: 1rem !important;                }
                
                `}
      </style>
      <div >
        <div>
          <h6>Write your full job description</h6>
        </div>
        <div style={{ fontSize: "12px" }}>
          Describe Job Description in details,Requirments
        </div>
        <div style={{ fontSize: "12px" }}>Skills and Education</div>
        <textarea
          class="form-control mt-4 textareainput "
          aria-label="With textarea"
          value={formData.jobInfo}
          onChange={handleInputChange("jobInfo")}
        ></textarea>
        {/* <h6 style={{ color: "#01BDF8" }} className="mt-3">
          Options Included
        </h6>
        <div className="">
          <div className="row mt-4">
            <span className="col-6">See All Videos</span>
            <span className="col-6">
              {" "}
              <div class="form-group">
                <div class="form-check fs-5 form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    formControlName="switchValue"
                  />
                </div>
              </div>
            </span>
          </div>
          <div className="row mt-4">
            <span className="col-6">Videocalling</span>
            <span className="col-6">
              {" "}
              <div class="form-group">
                <div class="form-check fs-5 form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    formControlName="switchValue"
                  />
                </div>
              </div>
            </span>
          </div>
          <div className="row mt-4">
            <span className="col-6">Email</span>
            <span className="col-6">
              {" "}
              <div class="form-group">
                <div class="form-check fs-5 form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    formControlName="switchValue"
                  />
                </div>
              </div>
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
