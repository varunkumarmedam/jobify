import AppNav from "./AppNav";
import './TestPermissionPage.css';
import recordContext from "../context/recordContext";
import { useContext, useState } from "react";
import { AiOutlineDesktop, AiFillCamera, AiFillAudio, AiFillSafetyCertificate } from "react-icons/ai";

export default function TestPermissionPage() {
    const context = useContext(recordContext);
    const [isLoading, setIsLoading] = useState(false);
    const [stepper, setStepper] = useState(0);

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

    const grantPermissions = async () => {
        try {
            let isFailed = "";
            isFailed = await startScreen();
            isFailed = await startCamera();
            isFailed = await startMicrophone();
            if (isFailed != "fail")
                setStepper(1);
        } catch (error) {
            console.log(error);
        }
    }

    const handleButtonClick = async (name, action) => {
        let isFail = "";
        isFail = action();
        if (isFail != "fail") {
            const step = stepper + 1;
            setStepper(step);
        }
    };

    return <>
        <video ref={mainVideoRef} className="main-video d-none"></video>
        <video ref={camVideoRef} autoPlay muted className="cam-video"></video>

        <AppNav />
        <div className="per-main-body">
            <div>
                <p className="permissions-page-head">
                    We require permissions to proceed
                </p>
                <p className="per-sub-head">
                    Having any trouble? <span><a href="#">Learn more</a></span>
                </p>
            </div>
            <div className="per-block-body">
                <div className="d-flex">
                    <AiOutlineDesktop className="per-block-icon" />
                    <div className="per-block">
                        <p className="per-block-head">
                            Window management
                        </p>
                        <p className="per-block-content">
                            Required to make sure there are no extended screens
                        </p>
                    </div>
                </div>
                <div className="d-flex">
                    <AiFillCamera className="per-block-icon" />
                    <div className="per-block">
                        <p className="per-block-head">
                            Enable access to camera
                        </p>
                        <p className="per-block-content">
                            Required to capture live actions of candidate for fair evaluation
                        </p>
                    </div>
                </div>
                <div className="d-flex">
                    <AiFillAudio className="per-block-icon" />
                    <div className="per-block">
                        <p className="per-block-head">
                            Enable access to microphone
                        </p>
                        <p className="per-block-content">
                            Required to record candidate voice recording
                        </p>
                    </div>
                </div>
            </div>
            <div className="per-terms-body">
                <p className="per-terms-head">
                    <AiFillSafetyCertificate className="per-safe-icon" />
                    Our proctoring steps for ensuring a violation-free screening :
                </p>
                <ul className="per-terms-content">
                    <li> Ensures there are no multiple screens connected to your primary device. </li>
                    <li>Tracking refreshes, change of tabs or window during the screening</li>
                    <li>Monitor any suspicious eye and body movements, along with any external sounds besides your own</li>
                    <li>Please ensure that your face, hands, and desk are clearly visible during the assessment. Aim to have more than half of your body in view on camera</li>
                </ul>
            </div>
        </div>

        <div className="fixed-bottom text-center permission-footer">
            <div className="d-flex align-items-center justify-content-around">
                <div>
                    <p className="m-0">Grant permissions</p>
                    {/* <span>Allow</span> */}
                </div>
                <div>
                    <button className="btn btn-light mr-2">Go back</button>

                    {stepper == 0 && <button type="button" className="btn btn-success" onClick={grantPermissions}>Grant permission and take test</button>}

                    {stepper == 1 && <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => handleButtonClick("shareCamera", togglePiP)}
                    >
                        share cameraaa
                    </button>}

                    {stepper == 2 && <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => handleButtonClick("startRecording", () => {
                            console.log(isRecording)
                            if (isRecording) {
                                stopRecording();
                            } else {
                                startRecording();
                            }
                        })}
                    >
                        Record
                    </button>}

                    {stepper == 3 && <a href="/code" target="_blank" style={{ textDecoration: "none" }}> <button className="btn btn-success">Start Test</button></a>}

                </div>
            </div>
        </div>
    </>
}