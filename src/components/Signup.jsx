import React from "react";
import "./Login.css";
import Button from "./Button";

export default function Signup() {
  return (
    <div className="logsign">
      <div className="container mx-auto my-auto pt-5">
        <div className="row">
          <h1 className="heading ">JOBIFY</h1>
        </div>
        <div className="row mx-auto">
          <h5 className="heading2  mx-auto">Create a new Account</h5>
        </div>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Remember Me{" "}
            </label>
          </div>
          <Button text="Sign Up"></Button>
          <span className=" d-flex mt-3">
            <span>Already have an account?</span>&nbsp;
            <span style={{ color: "#01BDF8" }}>Sign in</span>
          </span>
        </form>
      </div>
    </div>
  );
}
