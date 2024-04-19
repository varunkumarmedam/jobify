import { FaDollarSign, FaGlobe, FaHeadSideCough, FaLinkedin, FaMoneyBill, FaPersonBooth, FaRegMap, FaUsers } from 'react-icons/fa';
import RichTextEditor from 'react-rte';
import "./JobPreview.css";
import image from "../jupiter.png";

export default function JobPreview({ id, jobData, canPublish, canApply, closePopup, publishJob }) {
    return <>
        <div className='d-flex'>
            <div className='job-prev-company-box'>
                <img src={image} height={"80px"} style={{ margin: "auto", marginRight: "16px" }} />
                {/* <div className='d-flex mb-1'>
                    Jupiter Inc
                </div>
                <div>
                    <FaGlobe className='m-1' />
                    <FaLinkedin className='m-1' />
                </div> */}
            </div>
            <div>
                <h5 className="col-10">Design System - UX</h5>
                <div className='d-flex'>
                    Jupiter Inc
                    <FaGlobe className='m-1' />
                    <FaLinkedin className='m-1' />
                </div>
                <div className='d-flex opacity-75'>
                    <div>
                        <FaRegMap className="mr-2" />
                        <span>Banglore&nbsp;|&nbsp;</span>
                    </div>
                    <div>
                        <FaUsers className="mr-2" />
                        20 - 50 employees &nbsp;|&nbsp;
                    </div>
                    <div>
                        <FaMoneyBill className="mr-2" />
                        24,000 - 80,000
                    </div>
                    <div className="job-chips ml-2">
                        {["5+", "Full time", "Remote"].map((item) => {
                            return <>
                                <div className="job-chip">
                                    {item}
                                </div>
                            </>
                        })}
                    </div>
                </div>
            </div>
        </div>
        <hr className='normal-divider' />
        {jobData && <div>
            <RichTextEditor
                value={jobData['job-description']}
                disabled
            />
        </div>}
        <h6 className='mt-4'>
            Skills
        </h6>
        <div className="job-chips">
            {["UX", "Designing", "Adobe XD", "Figma"].map((item) => {
                return <>
                    <div className="skill-chip">
                        {item}
                    </div>
                </>
            })}
        </div>
        
        {canPublish && <div className='d-flex align-items-center justify-content-center'>
            <button className='btn btn-light' type='button' onClick={closePopup}>Edit Job</button>
            <button type='button' onClick={publishJob}>Publish Job</button>
        </div>}

    </>
}
