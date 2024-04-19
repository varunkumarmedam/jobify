import image from "../Logo.png";
import styles from "./AppNav.module.css";
import { FiArrowRight, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Toggle from "./ThemeToggleButton";
import { keepTheme } from "../utilities/themes";
import { useEffect, useState } from "react";
import { FaCircle, FaCog, FaPowerOff, FaRulerCombined, FaUser, FaWheelchair } from "react-icons/fa";

export default function AppNav({ setClassName }) {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    const handlesignout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return <>
        {showPopup &&
            <>
                <div className={styles.profilePopupBg} onClick={() => { setShowPopup(false) }}>
                </div>
                <div className={[styles.profilePopup, "app-box"].join(" ")}>
                    <h5>My account</h5>
                    <div className="d-flex align-items-center mt-3">
                        <FaUser className="mr-2" />
                        <div>
                            <b>Dummy Raja</b> <br />
                            <i>superman@google.com</i>
                        </div>
                    </div>
                    <hr />
                    <button type="button" onClick={handlesignout} className="btn">
                        <FaPowerOff className="m-2" />Signout
                    </button>
                </div>
            </>}

        <div className={[styles.appNav, "app-box"].join(" ")}>
            <div className="d-flex justify-content-between">
                <img src={image} alt="logo" style={{ height: "3rem" }} />
                <div className="d-flex align-items-center">
                    <Toggle setClassName={setClassName} />
                    |
                    <button className="btn" type="button" onClick={() => { setShowPopup((prev) => !prev) }}>
                        <FaCog />
                    </button>
                </div>
            </div>
        </div>
    </>
}
