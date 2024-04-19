import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormFooter from './FormFooter';
import RichTextEditor from 'react-rte';

function FormExample({ formData, onDataChange, handleNext, handleBack, previewJob }) {
    const [validated, setValidated] = useState(false);
    const [description, setDescription] = useState(RichTextEditor.createEmptyValue());

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            handleNext();
        }
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
    };

    const onChange = (val) => {
        setDescription(val);
        onDataChange({ ['job-description']: val });
    }

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     onDataChange({ [name]: value });
    // }

    return (
        <>
            <RichTextEditor
                value={description}
                onChange={onChange}
                editorStyle={{ minHeight: "250px" }}
                autoFocus={true}
                name="job-description"
            />
            <FormFooter showPrev={true} isFinal={true} handleBack={handleBack} previewJob={previewJob} />
        </>
    );
}

export default FormExample;