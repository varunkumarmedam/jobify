import React, { useState } from "react";

function CheckboxTest() {
  const [values, setValues] = useState({
    jobTypes: [],
  });

  const handleCheckboxChange = (field, value) => (event) => {
    setValues((prevState) => {
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
    console.log(values);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={values.jobTypes.includes("Internship")}
        onChange={handleCheckboxChange("jobTypes", "Internship")}
      />
      Internship
    </div>
  );
}

export default CheckboxTest;
