// import React, { useContext, useEffect } from "react";
// import "./Record.css";

// // import { useNavigate } from "react-router-dom";
// import recordContext from "../context/recordContext";
// import { AiOutlineShareAlt } from "react-icons/ai";
// import { AiOutlineVideoCamera } from "react-icons/ai";
// import { AiOutlinePicture } from "react-icons/ai";
// import { AiOutlineForm } from "react-icons/ai";
// import { AiOutlineCamera } from "react-icons/ai";
// import { AiOutlineAudio } from "react-icons/ai";

// function App() {
//   const context = useContext(recordContext);
//   // const navigate = useNavigate();

//   const {
//     mainVideoRef,
//     camVideoRef,
//     isRecording,
//     startScreen,
//     startCamera,
//     startMicrophone,
//     startRecording,
//     stopRecording,
//     togglePiP,
//   } = context;

//   const starttest = async () => {
//     openInNewTab("/code");
//   };
//   const openInNewTab = (path) => {
//     window.open(path, "_blank");
//   };

//   window.addEventListener("beforeunload", (e) => {
//     e.preventDefault();
//     e.returnValue = "Are you sure you want to leave?";
//   });

//   useEffect(() => {
//     const handleStorageChange = (e) => {
//       if (e.key === "stopVideoSignal" && e.newValue) {
//         stopRecording();
//         localStorage.removeItem("stopVideoSignal");
//       }
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, [stopRecording]);
//   return (
//     <div>
//        <div className="mx-auto text-center mt-3" >
//         <h6>Please click on all the buttons sequentially</h6>
//       </div>
//       {/* {uploadedVideoPath && (
//         <div>
//           <h3>Your Video:</h3>
//           <video
//             controls
//             src={`http://localhost:3000/${uploadedVideoPath}`}
//           ></video>
//         </div>
//       )} */}

//       <video
//         ref={mainVideoRef}
//         // autoPlay
//         // controls
//         className="main-video"
//       ></video>
//       <video ref={camVideoRef} autoPlay muted className="cam-video"></video>
//       {/* <div className="testinfo">
//         <p>Please Click on all the buttons below to start the test</p>
//       </div> */}
//       <div className="button-recordcontainer mt-5 mx-auto">
//         <div>
//           {/* <p>Step 1. Share entire screen</p> */}
//           <button
//             onClick={startScreen}
//             data-bs-toggle="tooltip"
//             data-bs-placement="top"
//             title="Share Screen"
//           >
//             <AiOutlineShareAlt></AiOutlineShareAlt>
//           </button>
//           Share Screen
//         </div>
//         <div>
//           {/* <p>Step 2. Open Camera</p> */}
//           <button
//             type="button"
//             onClick={startCamera}
//             data-bs-toggle="tooltip"
//             data-bs-placement="top"
//             title="Open Camera"
//           >
//             <AiOutlineCamera></AiOutlineCamera>
//           </button>
//           Start Camera
//         </div>
//         <div>
//           {/* <p>Step 3. Open Mic</p> */}
//           <button
//             type="button"
//             onClick={startMicrophone}
//             data-bs-toggle="tooltip"
//             data-bs-placement="top"
//             title="Open Microphone"
//           >
//             <AiOutlineAudio></AiOutlineAudio>
//           </button>
//           Open Microphone
//         </div>
//         <div>
//           {/* <p>Step 4. Click on it</p> */}
//           <button
//             type="button"
//             onClick={togglePiP}
//             data-bs-toggle="tooltip"
//             data-bs-placement="top"
//             title="Share Camera"
//           >
//             <AiOutlinePicture></AiOutlinePicture>
//           </button>
//           Share Camera
//         </div>
//         <div>
//           {/* <p>Step 5. Start Recording</p> */}
//           <button
//             type="button"
//             onClick={isRecording ? stopRecording : startRecording}
//             data-bs-toggle="tooltip"
//             data-bs-placement="top"
//             title="Start Recording"
//           >
//             {isRecording ? (
//               <AiOutlineVideoCamera></AiOutlineVideoCamera>
//             ) : (
//               <AiOutlineVideoCamera></AiOutlineVideoCamera>
//             )}
//           </button>
//           Start Recording
//         </div>
//         <div>
//           {/* <p>Step 6. Start Test</p> */}
//           <button
//             type="button"
//             onClick={starttest}
//             data-bs-toggle="tooltip"
//             data-bs-placement="top"
//             title="Start Test"
//           >
//             <AiOutlineForm></AiOutlineForm>
//           </button>
//           Start Test
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useContext, useEffect, useState } from "react";
import "./Record.css";
// import { useNavigate } from "react-router-dom";
import recordContext from "../context/recordContext";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineForm } from "react-icons/ai";
import { AiOutlineCamera } from "react-icons/ai";
import { AiOutlineAudio } from "react-icons/ai";
import MainPoints from "./MainPoints";

// ... (other imports and code)

function App() {
  const context = useContext(recordContext);
  const {
    mainVideoRef,
    camVideoRef,
    isRecording,
    startScreen,
    startCamera,
    startMicrophone,
    startRecording,
    stopRecording,
    togglePiP,
  } = context;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [buttonsClicked, setButtonsClicked] = useState({
    shareScreen: false,
    startCamera: false,
    openMicrophone: false,
    shareCamera: false,
    startRecording: false,
  });

  const startTestEnabled =
    buttonsClicked.shareScreen &&
    buttonsClicked.startCamera &&
    buttonsClicked.openMicrophone &&
    buttonsClicked.shareCamera &&
    buttonsClicked.startRecording;

  const handleButtonClick = (buttonKey, action) => {
    setButtonsClicked((prevButtonsClicked) => ({
      ...prevButtonsClicked,
      [buttonKey]: true,
    }));
    action();
  };

  const starttest = async () => {
    openInNewTab("/code");
  };

  const openInNewTab = (path) => {
    window.open(path, "_blank");
  };

  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "Are you sure you want to leave?";
  });

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "stopVideoSignal" && e.newValue) {
        stopRecording();
        localStorage.removeItem("stopVideoSignal");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [stopRecording]);
  const handleClose = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

const onSubmitModal=()=>{
  setIsModalOpen(false);

}
  return (
    <div>
         <MainPoints
          isOpen={isModalOpen}
          onRequestClose={handleClose}
          onSubmit={onSubmitModal}
          
        />
      <div className="mx-auto text-center mt-3">
        <h6>Please click on all the buttons sequentially</h6>
      </div>
      <video ref={mainVideoRef} className="main-video"></video>
      <video ref={camVideoRef} autoPlay muted className="cam-video"></video>
      <div className="button-recordcontainer mt-5 mx-auto">
        <div>
          <button
            onClick={() => handleButtonClick("shareScreen", startScreen)}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Share Screen"
            disabled={buttonsClicked.shareScreen}
          >
            <AiOutlineShareAlt />
          </button>
          Share Screen
        </div>
        <div>
          <button
            type="button"
            onClick={() => handleButtonClick("startCamera", startCamera)}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Open Camera"
            disabled={buttonsClicked.startCamera}
          >
            <AiOutlineCamera />
          </button>
          Start Camera
        </div>
        <div>
          <button
            type="button"
            onClick={() => handleButtonClick("openMicrophone", startMicrophone)}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Open Microphone"
            disabled={buttonsClicked.openMicrophone}
          >
            <AiOutlineAudio />
          </button>
          Open Microphone
        </div>
        <div>
          <button
            type="button"
            onClick={() => handleButtonClick("shareCamera", togglePiP)}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Share Camera"
            disabled={buttonsClicked.shareCamera}
          >
            <AiOutlinePicture />
          </button>
          Share Camera
        </div>
        <div>
          <button
            type="button"
            onClick={() => handleButtonClick("startRecording", () => {
              if (isRecording) {
                stopRecording();
              } else {
                startRecording();
              }
            })}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Start Recording"
            disabled={buttonsClicked.startRecording}
          >
            {isRecording ? <AiOutlineVideoCamera /> : <AiOutlineVideoCamera />}
          </button>
          Start Recording
        </div>
        <div>
          <button
            type="button"
            onClick={starttest}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Start Test"
            disabled={!startTestEnabled}
          >
            <AiOutlineForm />
          </button>
          Start Test
        </div>
      </div>
    </div>
  );
}

export default App;
