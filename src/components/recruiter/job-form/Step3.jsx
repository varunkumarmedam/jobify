import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormFooter from './FormFooter';

function FormExample({ formData, onDataChange, handleNext, handleBack }) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            handleNext();
        }
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        onDataChange({ [name]: value });
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>How many hires do you require for this job?</Form.Label>
                    <Form.Control
                        type="number"
                        // name="c_name"
                        // value={formData.c_name}
                        // onChange={handleChange}
                        placeholder="Number of positions"
                    />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>How urgently do you need to make a hire?</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Urgent hire count"
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Monday-Saturday</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Working days"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Skills</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Provide skills with comma seperated"
                        defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <FormFooter showPrev={true} handleBack={handleBack} />
        </Form>
    );
}

export default FormExample;