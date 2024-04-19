import axios from "axios";
import axiosInstance from "../../axiosInstance";

export const viewResume = async (email) => {
    try {
        // Send a POST request with the email, role, and entered OTP
        const response = await axios.get(
            // `http://ec2-3-70-52-108.eu-central-1.compute.amazonaws.com:8080/v1/apis/pre-signed-url?fileName=${selectedJobId}-${email}.pdf`
            fileUrl()
        );
        if (response.data) {
            console.log(response.data);
            // window.open(response.data, "_blank");
            return response.data;
            // setapplied(response.data);
        }
    } catch (error) {
        console.error("Failed to verify OTP", error);
    }

    function fileUrl() {
        return `https://jobify-backend-wrapper-7323fa1818eb.herokuapp.com/v1/jobify/apis/view-files?fileName=${email}`;
    }
};


export const viewVideo = async (email, jobid) => {
    try {
        // Send a POST request with the email, role, and entered OTP
        const response = await axios.get(
            // `http://ec2-3-70-52-108.eu-central-1.compute.amazonaws.com:8080/v1/apis/pre-signed-url?fileName=${selectedJobId}-${email}.webm`
            // `https://jobify-upload.onrender.com/api/viewvideo?jobId=${selectedJobId}&emailid=${email}`
            getViewVideoUrl()
        );
        if (response.data) {
            console.log(response.data);
            window.open(response.data, "_blank");

            // setapplied(response.data);
        }
    } catch (error) {
        console.error("Failed to verify OTP", error);
    }

    function getViewVideoUrl() {
        return `https://jobify-backend-wrapper-7323fa1818eb.herokuapp.com/v1/jobify/apis/view-files?fileName=${jobid}:${email}.webm
        `;
    }
};

export const getappliedcandidates = async (jobid) => {
    try {
        // Send a POST request with the email, role, and entered OTP
        return await axiosInstance.get(
            `jobify/apis/candidates/applied?jobPostUUID=${jobid}`
        ).then(response => response.data);
    } catch (error) {
        console.error("Failed to verify OTP", error);
    }
};

