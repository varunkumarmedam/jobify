import React, { createContext, useContext, useState } from "react";

// Provide a default value for your context
const FormDataContext = createContext({
  allFormData: {
    companyDetails: {},
    jobDetails: {},
    candidateReq: {},
    jobDesc: {},
  },
  setAllFormData: () => {}, // this is just a placeholder function
});

export function useFormData() {
  // Check if context is available
  const context = useContext(FormDataContext);
  if (context === undefined) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
}

export function FormDataProvider({ children }) {
  const [allFormData, setAllFormData] = useState({
    companyDetails: {},
    jobDetails: {},
    candidateReq: {},
    jobDesc: {},
  });

  return (
    <FormDataContext.Provider value={{ allFormData, setAllFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}
