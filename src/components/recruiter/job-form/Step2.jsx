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
                    <Form.Label>Job Title*</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        // name="c_name"
                        // value={formData.c_name}
                        // onChange={handleChange}
                        placeholder="Position Name"
                    />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Experience required*</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="In years"
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Job Type*</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Type"
                        defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>Compensation (From)*</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Minimum"
                    />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>Compensation (To)*</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Maximum"
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Contract type</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Type"
                    />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Additional compensation*</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Amount in numbers"
                    />
                </Form.Group>
            </Row>
            <FormFooter showPrev={true} handleBack={handleBack} />
        </Form>
    );
}

export default FormExample;