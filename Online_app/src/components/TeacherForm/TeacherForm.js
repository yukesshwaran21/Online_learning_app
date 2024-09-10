import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './TeacherForm.css';

const TeacherForm = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/registered');
    };

    const containerStyle = {
        opacity: 0.9,
        backgroundColor: '#343a40', 
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        margin: '20px auto',
        maxWidth: '800px',
        minWidth: '300px',
    };

    const headingStyle = {
        color: '#ffffff',
        fontSize: '1.8rem',
        marginBottom: '20px',
        textAlign: 'center',
        fontWeight: 'bold',
    };

    const inputStyle = {
        borderRadius: '5px',
        border: '1px solid #ced4da',
        padding: '10px',
        fontSize: '1rem',
    };

    const buttonStyle = {
        backgroundColor: '#28a745', 
        border: 'none',
        color: '#ffffff',
        padding: '15px 20px',
        fontSize: '1.2rem',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        transition: 'background-color 0.3s ease',
    };

    const buttonHoverStyle = {
        backgroundColor: '#218838',  
    };

    return (
        <div className="container" style={containerStyle}>
            <form>
                <h3 style={headingStyle}>Registration for Apply</h3>

                <div className="form-group w-50 mx-auto mb-3">
                    <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="First name"
                        style={inputStyle}
                    />
                </div>

                <div className="form-group w-50 mx-auto mb-3">
                    <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Last name"
                        style={inputStyle}
                    />
                </div>

                <div className="form-group w-50 mx-auto mb-3">
                    <input
                        type="email"
                        required
                        className="form-control"
                        placeholder="Enter email"
                        style={inputStyle}
                    />
                </div>

                <div className="form-group w-50 mx-auto mb-3">
                    <input
                        type="password"
                        required
                        className="form-control"
                        placeholder="Enter new password"
                        style={inputStyle}
                    />
                </div>
                <div className="form-group w-50 mx-auto mb-3">
                    <input
                        type="password"
                        required
                        className="form-control"
                        placeholder="Confirm password"
                        style={inputStyle}
                    />
                </div>

                <Form.Group className="mb-3 w-50 mx-auto text-start" controlId="formBasicEmail">
                    <Row>
                        <Col>
                            <Form.Control
                                required
                                placeholder="City"
                                style={inputStyle}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                required
                                placeholder="State"
                                style={inputStyle}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                required
                                placeholder="Zip"
                                style={inputStyle}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="position-relative mb-3 w-50 mx-auto">
                    <Form.Label style={{ color: '#ffffff' }}>Add Photo</Form.Label>
                    <Form.Control
                        type="file"
                        required
                        name="file"
                        style={inputStyle}
                    />
                </Form.Group>

                <Form.Group style={{ color: '#ffffff' }} className="position-relative mb-3 w-25 mx-auto">
                    <Form.Check
                        required
                        name="terms"
                        label="Agree to terms and conditions"
                        id="validationFormik106"
                        feedbackTooltip
                        style={{ color: '#ffffff' }}
                    />
                </Form.Group>

                <button
                    onClick={() => handleClick()}
                    type="submit"
                    className="btn btn-dark btn-lg btn-block"
                    style={buttonStyle}
                    onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default TeacherForm;
