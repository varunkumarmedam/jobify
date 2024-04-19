import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormFooter from './FormFooter';
import { FaTrash } from "react-icons/fa";

function FormExample({ formData, onDataChange, handleNext }) {
    const [validated, setValidated] = useState(false);
    const [image, setImage] = useState(null)

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
        onDataChange((prev) => { return { ...prev, [name]: value } });
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <div class="mb-3 h-100">
                        <label for="formFile" class="form-label">Select Company logo</label>
                        {image ? <div className='d-flex align-items-center justify-content-center h-100'>
                            <img src={image} height={'100px'} width={"100px"} style={{ borderRadius: "50px", marginTop: "-30px" }} />
                            <button className='btn btn-danger' style={{ marginTop: "-30px", marginLeft: "20px" }} type='button' onClick={() => {
                                setImage(null);
                                delete formData.company_logo
                            }}><FaTrash /> Remove</button>
                        </div> : <>
                            <input class="company_logo_upload" name='company_logo' onChange={handleChange} type="file" id="file" />
                        </>}
                    </div>
                </Form.Group>
                <Col>
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>Company name*</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="c_name"
                            value={formData.c_name}
                            onChange={handleChange}
                            placeholder="Company name"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="12" className='mt-3' controlId="validationCustom02">
                        <Form.Label>Company Size*</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="How many employees"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Company website*</Form.Label>
                    <Form.Control
                        required
                        type="url"
                        placeholder="URL"
                        defaultValue=""
                    />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Company linkedin*</Form.Label>
                    <Form.Control
                        required
                        type="url"
                        placeholder="Linkedin URL"
                        defaultValue=""
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Your name*</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                    />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Your email*</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="recruiter@company.com"
                        name="recruiter_email"
                        value={formData.recruiter_email}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Row>

            <hr className='divider' />

            <h6>Job location</h6>

            <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter city name"
                    />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter state name"
                    />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter country name"
                        defaultValue="India"
                    />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Provide work location"
                    />
                </Form.Group>
            </Row>

            <hr className='divider' />

            <h6>Company Location</h6>

            <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter city name"
                    />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter state name"
                    />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter country name"
                        defaultValue="India"
                    />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Company street address"
                    />
                </Form.Group>
            </Row>

            <FormFooter showPrev={false} />
        </Form>
    );
}

export default FormExample;