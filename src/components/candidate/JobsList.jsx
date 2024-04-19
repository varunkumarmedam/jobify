import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import image from "../jupiter.png";
import "./JobList.css";
import { FaRegMap } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function JobsList() {
    const totalJobs = [
        {
            "companyName": "Jobify Inc",
            "jobPostUUID": "487d05a8-f483-4d6a-9cc8-a44ca226af6a",
            "companyWebsiteUrl": "https://www.jobify.club/",
            "jobDescription": "This job post is for both backend and frontend developers. Please feel to apply, if you are eligible, we will send you an email consisting of a job ID, log in as a candidate later and you can participate in the test by entering this job ID from your email. Also just in case, check your spams too, and mark our email as \"Report not spam\". Thanks, Jobify Team.",
            "jobTitle": "Software Engineer(Backend/Frontend)",
            "ctcDetailsIfAny": "100,000 - 100,00,000",
            "jobLocationCity": "Banglore",
            "jobLocationCountry": "N/A",
            "recruiterExtraInfoMetadata": "N/A",
            "status": "not-applied"
        },
        {
            "companyName": "N/A",
            "jobPostUUID": "3cc1ad97-c2bd-41cd-8c53-15925d5563c4",
            "companyWebsiteUrl": "N/A",
            "jobDescription": "N/A",
            "jobTitle": "N/A",
            "ctcDetailsIfAny": "N/A",
            "jobLocationCity": "Hyderabad",
            "jobLocationCountry": "N/A",
            "recruiterExtraInfoMetadata": "N/A",
            "status": "applied"
        },
        {
            "companyName": "N/A",
            "jobPostUUID": "497a0d2b-d981-4c47-a253-02d79c399ce0",
            "companyWebsiteUrl": "N/A",
            "jobDescription": "N/A",
            "jobTitle": "N/A",
            "ctcDetailsIfAny": "N/A",
            "jobLocationCity": "Chennai",
            "jobLocationCountry": "N/A",
            "recruiterExtraInfoMetadata": "N/A",
            "status": "applied"
        },
        {
            "companyName": "N/A",
            "jobPostUUID": "10cad9d1-7e03-4c6e-8fdc-c1181afc1e99",
            "companyWebsiteUrl": "N/A",
            "jobDescription": "N/A",
            "jobTitle": "N/A",
            "ctcDetailsIfAny": "N/A",
            "jobLocationCity": "N/A",
            "jobLocationCountry": "N/A",
            "recruiterExtraInfoMetadata": "N/A",
            "status": "applied"
        },
        {
            "companyName": "N/A",
            "jobPostUUID": "386607c9-72cc-4716-981b-a32137bf4f24",
            "companyWebsiteUrl": "N/A",
            "jobDescription": "N/A",
            "jobTitle": "N/A",
            "ctcDetailsIfAny": "N/A",
            "jobLocationCity": "N/A",
            "jobLocationCountry": "N/A",
            "recruiterExtraInfoMetadata": "N/A",
            "status": "applied"
        },
        {
            "companyName": "Test Company",
            "jobPostUUID": "4541aa77-3e78-4f9d-8a9c-e456d7bc6683",
            "companyWebsiteUrl": "google.com",
            "jobDescription": "N/A",
            "jobTitle": "Super Hero",
            "ctcDetailsIfAny": "100 - 200",
            "jobLocationCity": "NY",
            "jobLocationCountry": "US",
            "recruiterExtraInfoMetadata": "N/A",
            "status": "not-applied"
        }
    ];
    const [data, setData] = useState(totalJobs);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [activeStatus, setActiveStatus] = useState("not-applied");
    const [activeLocations, setActiveLocations] = useState({ "all": true })
    const [isAllSelected, setIsAllSelected] = useState(true);

    useEffect(() => {
        // setIsLoading(true);
        // axiosInstance.get(`jobify/apis/jobs/list?token=${JSON.parse(localStorage.getItem("auth"))}`, {})
        //     .then((response) => {
        //         setData([
        //             {
        //                 "companyName": "Jobify Inc",
        //                 "jobPostUUID": "487d05a8-f483-4d6a-9cc8-a44ca226af6a",
        //                 "companyWebsiteUrl": "https://www.jobify.club/",
        //                 "jobDescription": "This job post is for both backend and frontend developers. Please feel to apply, if you are eligible, we will send you an email consisting of a job ID, log in as a candidate later and you can participate in the test by entering this job ID from your email. Also just in case, check your spams too, and mark our email as \"Report not spam\". Thanks, Jobify Team.",
        //                 "jobTitle": "Software Engineer(Backend/Frontend)",
        //                 "ctcDetailsIfAny": "100,000 - 100,00,000",
        //                 "jobLocationCity": "Bangalore/Remote",
        //                 "jobLocationCountry": "N/A",
        //                 "recruiterExtraInfoMetadata": "N/A"
        //             },
        //             {
        //                 "companyName": "N/A",
        //                 "jobPostUUID": "3cc1ad97-c2bd-41cd-8c53-15925d5563c4",
        //                 "companyWebsiteUrl": "N/A",
        //                 "jobDescription": "N/A",
        //                 "jobTitle": "N/A",
        //                 "ctcDetailsIfAny": "N/A",
        //                 "jobLocationCity": "N/A",
        //                 "jobLocationCountry": "N/A",
        //                 "recruiterExtraInfoMetadata": "N/A"
        //             },
        //             {
        //                 "companyName": "N/A",
        //                 "jobPostUUID": "497a0d2b-d981-4c47-a253-02d79c399ce0",
        //                 "companyWebsiteUrl": "N/A",
        //                 "jobDescription": "N/A",
        //                 "jobTitle": "N/A",
        //                 "ctcDetailsIfAny": "N/A",
        //                 "jobLocationCity": "N/A",
        //                 "jobLocationCountry": "N/A",
        //                 "recruiterExtraInfoMetadata": "N/A"
        //             },
        //             {
        //                 "companyName": "N/A",
        //                 "jobPostUUID": "10cad9d1-7e03-4c6e-8fdc-c1181afc1e99",
        //                 "companyWebsiteUrl": "N/A",
        //                 "jobDescription": "N/A",
        //                 "jobTitle": "N/A",
        //                 "ctcDetailsIfAny": "N/A",
        //                 "jobLocationCity": "N/A",
        //                 "jobLocationCountry": "N/A",
        //                 "recruiterExtraInfoMetadata": "N/A"
        //             },
        //             {
        //                 "companyName": "N/A",
        //                 "jobPostUUID": "386607c9-72cc-4716-981b-a32137bf4f24",
        //                 "companyWebsiteUrl": "N/A",
        //                 "jobDescription": "N/A",
        //                 "jobTitle": "N/A",
        //                 "ctcDetailsIfAny": "N/A",
        //                 "jobLocationCity": "N/A",
        //                 "jobLocationCountry": "N/A",
        //                 "recruiterExtraInfoMetadata": "N/A"
        //             },
        //             {
        //                 "companyName": "Test Company",
        //                 "jobPostUUID": "4541aa77-3e78-4f9d-8a9c-e456d7bc6683",
        //                 "companyWebsiteUrl": "google.com",
        //                 "jobDescription": "N/A",
        //                 "jobTitle": "Super Hero",
        //                 "ctcDetailsIfAny": "100 - 200",
        //                 "jobLocationCity": "NY",
        //                 "jobLocationCountry": "US",
        //                 "recruiterExtraInfoMetadata": "N/A"
        //             }
        //         ]);
        //     })
        //     .catch((error) => { console.log(error); })
        //     .finally(() => { setIsLoading(false) });

        let tempJobs = [...totalJobs];
        tempJobs = tempJobs.filter((job) => job.status == "not-applied")
        setData(tempJobs)
    }, []);

    const filterUpdate = (e) => {
        const { name, value, checked } = e.target;
        if (name == "jobLocationCity" && value == "all") {
            if (checked)
                setIsAllSelected(true)
            else
                setIsAllSelected(false)
        }

        let tempJobs = [...totalJobs];

        if (name == "status") {
            setActiveStatus(value)

            tempJobs = tempJobs.filter((job) => {
                if (job.status == value)
                    return true;
            })

            if (activeLocations.all != true)
                tempJobs = tempJobs.filter((job) => {
                    if (activeLocations[job.jobLocationCity] == true)
                        return true;
                })
        }

        if (name == "jobLocationCity") {
            tempJobs = tempJobs.filter((job) => {
                if ((job.jobLocationCity == value && checked == true) || (value == "all" && checked == true))
                    return true;
                if (job.jobLocationCity != value && activeLocations[job.jobLocationCity] == true)
                    return true;
            })
            tempJobs = tempJobs.filter((job) => {
                if (job.status == activeStatus)
                    return true;
            })
            setActiveLocations((prev) => { return { ...prev, [value]: checked } })
        }

        setData(tempJobs)

    }

    return <>
        <div className="col-12 d-flex justify-content-around job-list-body app-box">
            <div className="col-sm-12 col-md-3 mt-3 d-none d-md-block">
                <div className="filters-main-box">
                    <div className="filter-box shadow-box app-box">
                        <div className="f-head">
                            Filter by status
                        </div>
                        <div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="status" id="undecided" value="not-applied" onChange={filterUpdate} checked={activeStatus == 'not-applied'} />
                                <label class="form-check-label" for="undecided">
                                    Undecided
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="status" id="applied" value="applied" onChange={filterUpdate} checked={activeStatus == "applied"} />
                                <label class="form-check-label" for="applied">
                                    Applied
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="status" id="rejected" value="rejected" onChange={filterUpdate} checked={activeStatus == "rejected"} />
                                <label class="form-check-label" for="rejected">
                                    Not Intrested
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="filter-box shadow-box app-box">
                        <div className="f-head">
                            Filter by location
                        </div>
                        <div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="jobLocationCity" id="all" value="all" onChange={filterUpdate} checked={isAllSelected} />
                                <label class="form-check-label" for="all">
                                    All
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="jobLocationCity" id="hyd" value="Hyderabad" onChange={filterUpdate} disabled={isAllSelected} />
                                <label class="form-check-label" for="hyd">
                                    Hyderabad
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="jobLocationCity" id="bng" value="Banglore" onChange={filterUpdate} disabled={isAllSelected} />
                                <label class="form-check-label" for="bng">
                                    Banglore
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-8">
                {data.map((job, index) => (
                    <div className="job-card row d-flex col-sm-12 col-md-12 mt-3 shadow-box app-box">
                        <div className="col-1 d-none d-lg-block">
                            <img
                                src={image}
                                alt=""
                                srcset=""
                                height={"50px"}
                            />
                        </div>

                        <div className="col-sm-12 col-md-9">
                            <div className="row d-flex col-12">
                                <img
                                    className="d-sm-none col-2 p-0"
                                    src={image}
                                    alt=""
                                    srcset=""
                                />
                                <h5 className="col-10">{job.jobTitle}</h5>
                            </div>
                            <div className="row d-flex">
                                <div>
                                    <span style={{ color: "#3B82F6" }}>
                                        {job.companyName}
                                    </span>
                                    <span className="job-loc-box">
                                        &nbsp; | &nbsp;
                                        <FaRegMap className="mr-2" />
                                        <span className="job-loc">
                                            {job.jobLocationCity}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="job-chips mt-2">
                                {["5+", "Full time", "Remote"].map((item) => {
                                    return <>
                                        <div className="job-chip">
                                            {item}
                                        </div>
                                    </>
                                })}
                            </div>
                        </div>

                        <div className="d-flex col-sm-12 col-md-2 mt-3">
                            {job.status == "not-applied" && <div className="col-12 text-end">
                                <button
                                    type="button"
                                    className="btn btn-light"
                                    style={{ background: "#59B24F", color: "white" }}
                                // onClick={() => OpenModal(job.jobPostUUID)}
                                >
                                    Apply Now
                                </button>
                            </div>}
                            {job.status == "applied" && <div className="col-12">
                                <button
                                    type="button"
                                    className="btn btn-light"
                                    onClick={() => navigate("/starttest?exam-id=487d05a8-f483-4d6a-9cc8-a44ca226af6a")}
                                >
                                    Take Test
                                </button>
                            </div>}

                        </div>
                    </div>))}
            </div>
        </div>
    </>
}
