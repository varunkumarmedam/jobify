import React from "react";

export default function Button({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      // type="submit"
      style={{
        background: "#022a72",
        width: "100%",
        margin: "0px",
        borderRadius: "24px",
        paddingRight: "15px",
        paddingLeft: "15px",
        border: "none",
      }}
      className="btn btn-primary"
    >
      {text}
    </button>
  );
}
