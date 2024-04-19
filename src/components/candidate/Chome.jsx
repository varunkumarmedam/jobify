
import React, { useState } from "react";
import JobsList from "./JobsList";
import "./Chome.css";
import AppNav from "../AppNav";

export default function Chome({setClassName}) {
  return (
    <>
      <AppNav setClassName={setClassName}/>
      <JobsList />
    </>
  );
}
