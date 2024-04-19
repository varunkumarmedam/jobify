// CodeEditor.jsx
import React, { useState, useEffect, useCallback, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { reviewSubmit, runCodeAndSubmitRequest, runCodeRequest, submitSolution } from "./../utilities/requests/runCodeUtility";
import AceEditor from "react-ace";
import FeedbackModal from "./FeedbackModal";
import Swal from 'sweetalert2'
import "react-toastify/dist/ReactToastify.css";
import "./Editor.css";
import Split from '@uiw/react-split';

// Import themes and modes for the languages you want to support
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import { getDefaultCodeForLanguage as getDefaultSourceCodeForLanguage, getEncodedText, getFunctionText } from "../utilities/codecUtility";
import { Language, languageIdMapping } from "../utilities/language/languageUtilities";
import { getBasicTestCasesResult } from "../utilities/testsRunner/testRunnerUtility";
import { constructCodeExecutionResultFromResponseJson } from "../utilities/textFormatting/responseFormatting";
import { questions } from "../Questions/questions";
// Add other modes as required

const QUESTION_PDF_FILE = "./Question1.pdf";

const Editor = () => {
  const questionIndex = 0;
  const [time, setTime] = useState(45 * 60);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [sourceCode, setSourceCode] = useState(questions[questionIndex][Language.JAVA].codeSnippet);
  const [languageId, setLanguageId] = useState("62");
  const [codeResult, setCodeResult] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0);
  const [review, setReview] = useState("");
  const [runsubmit, setRunSubmit] = useState(false)
  const isInitialRender = useRef(true);
  const [output, setOutput] = useState("");
  const [testMessageClassName, setTestMessageClassName] = useState("hidden");
  const [testCasesResultMessage, setTestCasesResultMessage] = useState("");
  const [isTestPassed, setIsTestPassed] = useState(false);
  const [isCodingRunning, setIsCodeRunning] = useState(false);

  const [isTestCasesRunning, setIsTestCasesRunning] = useState(false);
  const [testCasesResult, setTestCasesResult] = useState([]);

  const notify = useCallback(() => {
    toast("5 min left");
  }, []);
  async function codesubmit() {
    const submitSolutionRecord = {
      candidateEmail: JSON.parse(localStorage.getItem("email")),
      codeInput: getEncodedText(sourceCode),
      codeOutput: getEncodedText(codeResult?.output),
      jobPostUUID: localStorage.getItem("jobId"),
      languageId: Number(languageId),
      isTestPassed: isTestPassed,
    };
    try {
      return await submitSolution(submitSolutionRecord).then(response => response.data);
    } catch (error) {
      throw error;
    }
  }

  const swalfire = async () => {
    try {
      await Swal.fire({
        title: '',
        text: 'Are you sure you want to submit the code',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#022A72',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then(async result => {
        if (result.isConfirmed) {
          const decodedValue = await runCodeandSubmit();
          if (decodedValue) {
          }
        }
      });


    } catch (error) {
      console.error(error);
    }
  };

  const handleCodeSubmission = useCallback(async () => {
    if (codeResult === null) {
      Swal.fire({
        title: 'Error',
        text: 'Please Run code before Submit',
        icon: 'error',
        confirmButtonText: 'Close',
        confirmButtonColor: '#022A72'
      })

    } else {
      const codesubmitted = await codesubmit();
      if (codesubmitted) {
        localStorage.setItem("stopVideoSignal", Date.now().toString());
        setIsModalOpen(true);

      }
    }
  }, [codeResult, sourceCode, setIsModalOpen, codesubmit]);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguageId(selectedLanguage);
    setSourceCode(getDefaultSourceCodeForLanguage(0, selectedLanguage));
  };

  useEffect(() => {
    const interval = time > 0 && setInterval(() => setTime(time - 1), 1000);
    if (time === 0) {
      handleCodeSubmission();
    }
    if (time === 50) {
      notify();
    }

    return () => clearInterval(interval);
  }, [time, handleCodeSubmission, notify]);

  useEffect(() => {
    setOutput(isCodingRunning ? "Loading..." : codeResult?.output || "");
  }, [isCodingRunning, codeResult]);

  const handleRatingChange = (newRating) => {
    setSelectedRating(newRating);
  };

  const handleReviewChange = (newReview) => {
    setReview(newReview);
  };

  const handleCloseWindow = () => {
    window.close();
  };

  const handleClose = () => {
    setIsModalOpen(false);
    handleCloseWindow();
  };

  const handleSubmit = () => {
    const postData = {
      candidateEmail: JSON.parse(localStorage.getItem("email")),
      jobPostUUID: localStorage.getItem("jobId"),
      review: review,
      stars: selectedRating,
    };

    reviewSubmit(postData)
      .then(function (response) {
        setIsModalOpen(false);
        localStorage.clear();
        handleCloseWindow();
      })
      .catch(function (error) {
        console.error("POST request failed:", error);
      });
  };

  const setTestResultToBlank = () => {
    setTestMessageClassName("hidden");
    setTestCasesResultMessage("");
    setTestCasesResult([])
  }

  const runCode = async () => {
    try {
      let encoded = getEncodedText(sourceCode);
      setIsCodeRunning(true);
      setTestResultToBlank();

      const responseJson = await runCodeRequest(encoded, languageId)
        .finally(() => setIsCodeRunning(false));
      const codeResult = constructCodeExecutionResultFromResponseJson(responseJson);
      setCodeResult(codeResult);

      if (codeResult.areAllStepsCompletedSuccessfully) {
        setIsTestCasesRunning(true);
        const functionText = getFunctionText(0, sourceCode, languageId);
        setTestCasesResult(
          await getBasicTestCasesResult(
            sourceCode, languageId, functionText, questions[questionIndex][languageIdMapping[languageId]]
            .testCases
          )
        )
      }
      return codeResult.output;
    } catch (error) {
      console.log(error);
    } finally {
      setIsTestCasesRunning(false);
    }
  };

  const runCodeandSubmit = async () => {
    try {
      const responseJson = await runCodeAndSubmitRequest(getEncodedText(sourceCode), languageId)
        .then(response => response.json());

      const codeResult = constructCodeExecutionResultFromResponseJson(responseJson);
      setCodeResult(codeResult);

      await handleCodeSubmission();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (runsubmit) {
      handleCodeSubmission();
    }
  }, [runsubmit]);

  useEffect(() => {
    setIsTestPassed(false);
    if (testCasesResult?.length === 0) {
      return;
    }

    if (testCasesResult.allTestCasesPassed) {
      setIsTestPassed(true);
      setTestMessageClassName("all-testcases-passed");
      setTestCasesResultMessage("Congratulations.. All initial test cases are passed.");
    } else if (testCasesResult.allTestCasesFailed) {
      setTestMessageClassName("all-testcases-failed");
      setTestCasesResultMessage("All initial test cases are failed.");
    } else {
      setTestMessageClassName("some-testcases-failed");
      setTestCasesResultMessage(`${testCasesResult.passedTestCount} out of ${testCasesResult.totalTestCount} initial test cases passed`);
    }

  }, [testCasesResult]);

  return (
    <div className="code">
      <div className="editor-container-fluid">
        <ToastContainer theme="dark" />
        <FeedbackModal
          isOpen={isModalOpen}
          onRequestClose={handleClose}
          onSubmit={handleSubmit}
          onRatingChange={handleRatingChange}
          onReviewChange={handleReviewChange}
        />
        <Split renderBar={({ onMouseDown, ...props }) => {
          return (
            <div {...props} style={{ boxShadow: 'none', background: 'transparent' }}>
              <div onMouseDown={onMouseDown} style={{ border: "5px solid white" }} />
            </div>
          );
        }}>
          <div className="col-5 d-flex flex-column">
            <div className="Timer">
              {minutes.toString().padStart(2, "0")}:
              {seconds.toString().padStart(2, "0")}
            </div>
            <div
              className="card codeeditorcard"
              Style="flex-grow: 1"
            >
              <iframe src={`/Q1.pdf#toolbar=0`} style={{ overflow: "hidden" }} width="100%" height="100%" title="question" scrolling="no" />
            </div>
          </div>
          <div className="col-7">
            <select
              className="language-selector"
              onChange={handleLanguageChange}
              value={languageId}
            >
              <option value="63">Languages</option>
              <option value="63">JavaScript</option>
              <option value="70">Python2</option>
              <option value="71">Python3</option>
              <option value="62">Java</option>
              <option value="54">C++</option>
              <option value="68">PHP</option>
              <option value="81">Scala</option>
              <option value="74">Typescript</option>
              <option value="73">Rust</option>
              <option value="72">Ruby</option>
              <option value="60">Golang</option>
              {/* Add other languages as options here */}
            </select>

            <Split mode="vertical">
              <AceEditor
                mode={languageId}
                style={{ marginTop: "0.6rem" }}
                theme="monokai"
                value={sourceCode}
                onChange={(newCode) => {
                  setTestResultToBlank();
                  setTestCasesResult([]);
                  setSourceCode(newCode);
                }}
                name="code-editor"
                editorProps={{ $blockScrolling: true }}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                width="100%"
                height="50%"
                setOptions={{
                  useWorker: false,
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
              />

              <div class="accordion" id="accordionPapanelsStayOpennelsStayOpenExample">
                <div class="accordion-item">
                  <div className="d-flex col-12 align-items-center p-2">
                    <div
                      class="w-50 col-6 b-none text-white"
                    >
                      <p style={{ margin: "0", marginLeft: "30px" }}>
                        Console
                      </p>
                    </div>
                    <div className="d-flex col-6 align-items-center justify-content-around">
                      <button
                        className="btn btn-success submit-button col-5"
                        onClick={swalfire}
                      >
                        Submit
                      </button>
                      <div className="col-5">
                        {isCodingRunning ?
                          <div
                            className="code_running_spinner text-white">
                            <div
                              className="spinner-border"
                              role="status"
                            >
                            </div>
                          </div>
                          :
                          <button
                            className="btn btn-success submit-button col-12"
                            onClick={runCode}
                          >
                            Run
                          </button>
                        }
                      </div>
                    </div>

                  </div>
                  <div
                    id="panelsStayOpen-collapseOne"
                    // class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div class="accordion-body">
                      <div className="terminal">
                        <div>Welcome to JOBIFY Terminal!</div>
                        <br />
                        <div>
                          $ <div>
                            {/* <pre className="terminal-content codeResult >{output}</pre> */}
                            <pre className=
                              {
                                codeResult?.areAllStepsCompletedSuccessfully || false
                                  ? "terminal-content"
                                  : "terminal-content-failed"
                              }
                            >{output}</pre>
                            {
                              <pre className={testMessageClassName}>{testCasesResultMessage}</pre>
                            }
                            {
                              isTestCasesRunning ?
                                <div>Test cases running...</div>
                                :
                                <>
                                  <pre className="failed-tests">
                                    {testCasesResult.failedTestCases}
                                  </pre>
                                  <pre className="passed-tests">
                                    {testCasesResult.passedTestCases}
                                  </pre>
                                </>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Split>
          </div>
        </Split>
      </div>
    </div >
  );
};

export default Editor;
