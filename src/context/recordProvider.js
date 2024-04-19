import React, { useRef, useState } from "react";
import RecordContext from "./recordContext";
import { useNavigate } from "react-router-dom";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import Swal from "sweetalert2";

const RecordProvider = (props) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/submissions");
  };
  const mainVideoRef = useRef(null);
  const camVideoRef = useRef(null);
  const mediaRecorderRef = useRef(null); // This ref will store the mediaRecorder instance
  let recordedChunks = [];
  const [isRecording, setIsRecording] = useState(false);
  const [streams, setStreams] = useState({});

  const startScreen = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      setStreams((prev) => ({ ...prev, screen: screenStream }));
      mainVideoRef.current.srcObject = screenStream;
      return "";
    } catch (error) {
      Swal.fire({
        title: 'Error',
        // text: 'My friend! you really need to click buttons sequentially, now go back, refresh and continue as usual',
        text:"Failed to share screen",
        icon: 'error',
        confirmButtonText: 'Close',
        confirmButtonColor: '#022A72'
      })
      return "fail";
    }

  };

  const startCamera = async () => {
    try {
      const cameraStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStreams((prev) => ({ ...prev, camera: cameraStream }));
      camVideoRef.current.srcObject = cameraStream;
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error,
        // text: 'My friend! you really need to click buttons sequentially, now go back, refresh and continue as usual',
        icon: 'error',
        confirmButtonText: 'Close',
        confirmButtonColor: '#022A72'
      })
      return "fail";
    }


  };

  const startMicrophone = async () => {
    try {
      const micStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      setStreams((prev) => ({ ...prev, microphone: micStream }));
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text:"Please provide microphone permission",
        // text: 'My friend! you really need to click buttons sequentially, now go back, refresh and continue as usual',
        icon: 'error',
        confirmButtonText: 'Close',
        confirmButtonColor: '#022A72'
      })
      return "fail";
    }

  };

  const startRecording = () => {
    try {
      const combinedTracks = Object.values(streams).flatMap((s) => s.getTracks());
      const combinedStream = new MediaStream(combinedTracks);

      mediaRecorderRef.current = new MediaRecorder(combinedStream);
      console.log("MediaRecorder initialized", mediaRecorderRef.current.state);
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = uploadVideo;
      mediaRecorderRef.current.start();

      console.log("After start called:", mediaRecorderRef.current.state);
      setIsRecording(true);

    } catch (error) {
      Swal.fire({
        title: 'Error in Recording',
        text: error,
        // text: 'My friend! you really need to click buttons sequentially, now go back, refresh and continue as usual',
        icon: 'error',
        confirmButtonText: 'Close',
        confirmButtonColor: '#022A72'
      })
      return "fail";
    }
  };

  const stopAllStreams = () => {
    Object.values(streams).forEach((stream) => {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    });
    if (mainVideoRef.current) mainVideoRef.current.srcObject = null;
    if (camVideoRef.current) camVideoRef.current.srcObject = null;
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      stopAllStreams();
      setStreams({});
      handleNavigation();
    } else {
      console.error(
        "Recording has not started or mediaRecorder is not initialized."
      );
    }
  };

  const uploadVideo = async () => {
    console.log("upload")
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    console.log(localStorage.getItem("jobId"));
    console.log(localStorage.getItem("email"));
    let email = JSON.parse(localStorage.getItem("email")); // This will remove quotes
    let jobId = localStorage.getItem("jobId");
    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData; // This will remove quotes
    let details = `N/A:N/A:${email}:N/A:${jobId}:N/A:N/A:N/A:N/A:N/A`;
    let encoded = base64_encode(details);
    // const filename = `${jobId}:${email}.webm`;

    const formData = new FormData();
    // formData.append("jobId", localStorage.getItem("jobId"));
    // formData.append("email", email);
    formData.append("file", blob);

    try {
      const response = await fetch(
        // "https://jobify-upload.onrender.com/upload",
        `https://jobify-backend-wrapper-7323fa1818eb.herokuapp.com/v1/jobify/apis/candidates/jobs/apply?encodedDetails=${encoded}&token=${token}&isResumeUpload=false`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data) {
        console.log(data.filePath);
        console.log(data);
        Swal.fire({
          title: "Submitted",
          // text: "Video Uploaded",
          icon: "success",
          confirmButtonText: "Close",
          confirmButtonColor: "#022A72",
        });
        localStorage.removeItem("jobId");
        return "fail";
      }
    } catch (error) {
      console.error("Failed to upload video:", error);
    }
  };

  // Toggle PiP function
  const togglePiP = async () => {
    try {
      if (document.pictureInPictureEnabled) {
        if (document.pictureInPictureElement) {
          await document.exitPictureInPicture();
          return "";
        } else {
          if (camVideoRef.current) {
            await camVideoRef.current.requestPictureInPicture();
            return "";
          }
        }
      } else {
        new Error("Picture-in-Picture is not supported by this browser.")
        alert("Picture-in-Picture is not supported by this browser.");
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error,
        // text: 'My friend! you really need to click buttons sequentially, now go back, refresh and continue as usual',
        icon: 'error',
        confirmButtonText: 'Close',
        confirmButtonColor: '#022A72'
      })
      return "fail";
    }
  };

  return (
    <RecordContext.Provider
      value={{
        mainVideoRef,
        camVideoRef,
        isRecording,
        startScreen,
        startCamera,
        startMicrophone,
        startRecording,
        stopRecording,
        togglePiP,
      }}
    >
      {props.children}
    </RecordContext.Provider>
  );
};
export default RecordProvider;
