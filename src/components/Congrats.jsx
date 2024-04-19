import React from "react";
import Button from "./Button";

export default function Congrats() {
  return (
    <div
      className="container"
      style={{
        width: "20%",
        textAlign: "center",
        marginTop: "10rem",
        marginBottom: "auto",
      }}
    >
      <img
        src="/congrats.png"
        alt="Congratulations"
        style={{ height: "10rem", width: "auto" }}
        className="mx-auto"
      />
      <div>
        <h1>Congrats !</h1>
      </div>
      <div className="mt-5">
        <p>Your account is ready to use</p>
      </div>
      <Button text="Let's Go"></Button>
    </div>
  );
}
