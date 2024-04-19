import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';

import { FaBuilding, FaSuitcase, FaAddressBook, FaRegFileAlt } from 'react-icons/fa';
import Step1 from './job-form/Step1';
import Step2 from './job-form/Step2';
import Step3 from './job-form/Step3';
import Step4 from './job-form/Step4';
import "./CreateJob.css";
import JobPreview from './JobPreview';

import Modal from "react-modal";

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                "linear-gradient(95deg, rgb(16 0 186) 0%,  rgb(124 161 255) 50%, rgb(232 233 255) 100%)"
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                "linear-gradient(95deg, rgb(16 0 186) 100%, rgb(232 233 255) 0%)"
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        transform: "scale(1.3)",
        backgroundImage:
            "linear-gradient(136deg, rgb(206 235 255) 0%, rgb(13 110 253) 50%, rgb(0 5 131) 100%)",
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            "linear-gradient(136deg, rgb(13 110 253) 100%, rgb(0 5 131) 0%)",
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <FaBuilding />,
        2: <FaSuitcase />,
        3: <FaAddressBook />,
        4: <FaRegFileAlt />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export default function CustomizedSteppers() {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [showJobPreview, setShowJobPreview] = useState(false)

    const steps = ["Company details", "Job details", "Candidate details", "Job description"];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setFormData({});
    };

    const formUpdate = (data) => {

    }

    const previewJob = () => {
        setShowJobPreview(true)
    }

    const publishJob = () => {
        console.log("publishing job...")
    }

    const closePopup = () => {
        setShowJobPreview(false)
    }

    return (
        <div className={['job-main-box col-sm-12 col-md-8 mx-auto'].join(" ")}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel onClick={() => { }} StepIconComponent={ColorlibStepIcon}><h6>{label}</h6></StepLabel>
                    </Step>
                ))}
            </Stepper>

            <div className='create-job-form'>
                {activeStep == 0 && <Step1 formData={formData} onDataChange={setFormData} handleNext={handleNext} />}
                {activeStep == 1 && <Step2 formData={formData} onDataChange={setFormData} handleNext={handleNext} handleBack={handleBack} />}
                {activeStep == 2 && <Step3 formData={formData} onDataChange={setFormData} handleNext={handleNext} handleBack={handleBack} />}
                {activeStep == 3 && <Step4 formData={formData} onDataChange={setFormData} handleNext={handleNext} handleBack={handleBack} previewJob={previewJob} />}
            </div>

            <Modal
                style={{ zIndex: "100 !important" }}
                isOpen={showJobPreview}
                onRequestClose={closePopup}
                ariaHideApp={false}
                className="feedback-modal job-preview-modal"
                shouldCloseOnOverlayClick={true}
            >
                <JobPreview jobData={formData} canPublish={true} closePopup={closePopup} publishJob={publishJob} />
            </Modal>
        </div>
    );
}
