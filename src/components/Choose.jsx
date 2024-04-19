import React from "react";

export default function Choose() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 d-flex justify-content-end">
            <a href="/">
              <img
                src="/wantjob.png"
                alt=""
                style={{
                  height: "10rem",
                  width: "auto",
                  marginTop: "10rem",
                  textAlign: "end",
                }}
              />
            </a>
          </div>
          <div className="col-6">
            <a href="/">
              <img
                src="/givejob.png"
                alt=""
                style={{ height: "10rem", width: "auto", marginTop: "10rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
