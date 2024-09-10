import React from 'react';
import { Form, Button, FloatingLabel, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ContactUs = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/message')
    }
    return (
        <div>
            <Form className="bg-secondary my-5 text-start p-3 rounded">
                <h1 style={{ color: "white" }} >Contact Us</h1>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="number" placeholder="number" />
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
               
                </Form.Group>
                <Button onClick={() => handleClick()} className="bg-danger" variant="primary" type="submit">
                    Submit Message
                </Button>
            </Form>
        </div>
    );
};

export default ContactUs;