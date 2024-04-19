// FeedbackModal.js
import React, { useState } from "react";
import Modal from "react-modal";
import StarRatings from "react-star-ratings";
import "./MainPoints.css";
const MainPoints = ({
  isOpen,
  onRequestClose,
  onSubmit,
  
}) => {


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      className="policymodal"
      shouldCloseOnOverlayClick={false}
      style={{width:"auto"}}
    >
      1. Now, once you proceed, you will see a window in the middle of screen
      with bunch of buttons/icons available on the left side.<br></br>
      2. VERY IMPORTANT : Please click each buttons top to bottom one by one.
      <br></br>
      3. Whenever you will click "Share Screen" icon, you will get three sharing
      options, you are supposed to click on "Entire Screen" option and ensure
      your whole screen is shared.<br></br>
      4. There will be another "Start Test" icon which will eventually take you
      to the actual test window.<br></br>
      5. In case you feel the code compiler is not convenient for you, please
      feel free to use your own code editor from your local machine, eg,
      Intellij.<br></br>
      6. Remember, your whole screen is monitored, and in case it is not, cancel
      your process immediately, go back and refresh the page and again re-start
      the whole process, in case your whole screen is actually monitored , then
      no concerns so far, anything you write on your local machine or local code
      editor, it's all being monitored.<br></br>
      7. Once you feel your whole code is completed, copy pasted the whole code
      on the jobify code editor and click on Run and then click on Submit
      button.<br></br>
      8. That's all, your process is completed, you are provided with 45 minutes
      maximum time by default here.<br></br>
      <button onClick={onSubmit} className="submit-button">
        Apply & Proceed
      </button>
      {/* <button onClick={onRequestClose} className="close-button">
        Close
      </button> */}
    </Modal>
  );
};

export default MainPoints;
