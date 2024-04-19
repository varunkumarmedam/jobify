import React from "react";

function Thankyou() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
    backgroundColor: "#f7f7f7",
  };

  const titleStyle = {
    color: "#333",
    fontSize: "2rem",
    marginBottom: "1rem",
  };

  const messageStyle = {
    color: "#666",
    fontSize: "1rem",
    textAlign: "center",
    marginBottom: "1rem",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Thank You!</h1>
      <p style={messageStyle}>We appreciate your feedback.</p>
      <p style={messageStyle}>
        Your test has been submitted. Please close the window.
      </p>
    </div>
  );
}

export default Thankyou;
