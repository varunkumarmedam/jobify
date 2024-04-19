import React, { useState } from "react";
import image from "./../jupiter.png";
import { viewResume } from "../../utilities/requests/appliedCandidateUtility";

export const AppliedCandidate = (candidateInfo) => {
    const candidate = candidateInfo.candidate;
    const [showResume, setShowResume] = useState(false);

    const toggleResume = ()=>{
        
    }

    return (
        <div
            className="card col-12 pb-3 mx-auto mt-3"
            style={{ background: "white", borderRadius: "35px" }}
        >
            <div className="card-body">
                <div className="row">
                    <div className="col-2">
                        <img
                            src={image}
                            alt=""
                            srcset=""
                            style={{ height: "5rem" }}
                        />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <h3>
                                {candidate.firstName} {candidate.lastName}
                            </h3>
                        </div>
                        <div className="row d-flex">
                            <div>
                                <span style={{ color: "#3B82F6" }}>
                                    {candidate.email}
                                </span>

                                <span>&nbsp;| &nbsp;{candidate.phoneNumber}</span>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="d-flex">
                                <div
                                    className=" m-2 "
                                    style={{
                                        display: "inline",
                                        background: "rgb(245 245 245)",
                                        paddingLeft: "5px",
                                        color: "grey",
                                        paddingRight: "5px",
                                        padding: "4px",
                                        borderRadius: "4px",
                                    }}
                                >
                                    Yoe-{candidate.yoe}
                                </div>

                                <div
                                    className="m-2"
                                    style={{
                                        display: "inline",
                                        background: "rgb(245 245 245)",
                                        paddingLeft: "5px",
                                        color: "grey",
                                        paddingRight: "5px",
                                        padding: "4px",
                                        borderRadius: "4px",
                                    }}
                                >
                                    Notice Period-{candidate.noticePeriodInDays} days{" "}
                                </div>

                                <div
                                    className=" m-2"
                                    style={{
                                        display: "inline",
                                        background: "rgb(245 245 245)",
                                        paddingLeft: "5px",
                                        color: "grey",
                                        paddingRight: "5px",
                                        padding: "4px",
                                        borderRadius: "4px",
                                    }}
                                >
                                    CTC expectation-{candidate.expectedCTC} lpa
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-6 text-end">
                                <button
                                    type="button"
                                    className="btn btn-light"
                                    style={{ background: "#59B24F", color: "white" }}
                                    onClick={() => toggleResume(candidate.resumeFileName)}
                                >
                                    View Resume
                                </button>
                            </div>
                            {/* <div className="col-6">
                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        onClick={() => viewVideo(candidate.email, jobid)}
                                    >
                                        View Video
                                    </button>
                                </div> */}
                        </div>
                    </div>
                </div>
                <div>
                    show resume
                </div>
            </div>
        </div>

    );
}