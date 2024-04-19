import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { calculateTotalPages, canGoNext, canGoPrevious, getNextPageIndex, getPreviousPageIndex, getRangesOnPageIndex } from "./paginationUtils";
import { getappliedcandidates } from "../../utilities/requests/appliedCandidateUtility";
import './AppliedCandidates.css'
import { viewResume } from "../../utilities/requests/appliedCandidateUtility";
import AppNav from "../AppNav";
import Modal from "react-modal";

export default function AppliedCandidates({ selectedJobId }) {
  const MAX_PROFILES_PER_PAGE = 10;

  const [pageIndex, setPageIndex] = useState(0);
  const [applied, setApplied] = useState([]);
  const location = useLocation();
  const jobid = location.state.jobid;
  const [showResume, setShowResume] = useState(false);
  const [resumeSrc, setResumeSrc] = useState('');

  const toggleResume = async (filename) => {
    if (showResume == filename) {
      setShowResume('')
      return;
    }
    setShowResume(filename);
    const url = await viewResume(filename)
    setResumeSrc(url);
  }

  const getTotalPages = () => {
    return calculateTotalPages(MAX_PROFILES_PER_PAGE, applied?.length || 0)
  }

  const goPrevious = () => {
    setPageIndex(getPreviousPageIndex(pageIndex || 0))
  }

  const goNext = () => {
    setPageIndex(getNextPageIndex(pageIndex, MAX_PROFILES_PER_PAGE, applied?.length || 0))
  }

  const getNavigationPageInfo = () => {
    return `Page ${pageIndex + 1} / ${getTotalPages()}`
  }

  useEffect(() => {
    try {
      getappliedcandidates(jobid)
        .then((responseData) =>
          !!responseData && setApplied(responseData)
        );
    } catch (error) {
      console.error("Failed to verify OTP", error);
    }
  }, []);

  return (
    <>
      <AppNav />
      <div className="p-5">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              <th scope="col">Resume</th>
            </tr>
          </thead>
          <tbody>
            {applied.length === 0 ? (
              <div style={{ padding: "1rem" }}></div>
            ) : (
              applied.slice(
                getRangesOnPageIndex(pageIndex, MAX_PROFILES_PER_PAGE, applied?.length || 0).startIndex,
                getRangesOnPageIndex(pageIndex, MAX_PROFILES_PER_PAGE, applied?.length || 0).endIndex,
              ).map((candidate, index) => (
                <>
                  <tr>
                    <th scope="row">{(pageIndex * 10) + index + 1}</th>
                    <td>{candidate.firstName}</td>
                    <td>{candidate.lastName}</td>
                    <td>{candidate.phoneNumber}</td>
                    <td>{candidate.email}</td>
                    <td>
                      <button className={showResume == candidate.resumeFileName ? "btn btn-warning" : "btn btn-primary"} onClick={() => toggleResume(candidate.resumeFileName)}>
                        {showResume == candidate.resumeFileName ? "Hide Resume" : "Show Resume"}
                      </button>
                    </td>
                  </tr>
                </>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div class="row" style={{ marginTop: "10px" }}>
          <div class="col-md-1"></div>
          <div className="col-md-3">
            <button
              type="button"
              className="btn btn-light col-md-3 nav-button"
              style={{ visibility: canGoPrevious(pageIndex) ? "visible" : "hidden" }}
              onClick={goPrevious}>
              &lt;</button>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-5">{getNavigationPageInfo()}</div>
          <div class="col-md-2">
            <button
              type="button"
              className="btn btn-light col-md-3 nav-button"
              style={{ visibility: canGoNext(pageIndex, MAX_PROFILES_PER_PAGE, applied.length || 0) ? "visible" : "hidden" }}
              onClick={goNext}>
              &gt;
            </button>
          </div>
        </div>

        <Modal
          isOpen={showResume}
          onRequestClose={() => { setShowResume(false) }}
          ariaHideApp={false}
          className="feedback-modal"
          shouldCloseOnOverlayClick={true}
        >
          <iframe src={`${resumeSrc}#toolbar=0`} style={{ overflow: "hidden" }} width="100%" height={"500px"} title="question" />
        </Modal>
      </div>
    </>

  );
}
