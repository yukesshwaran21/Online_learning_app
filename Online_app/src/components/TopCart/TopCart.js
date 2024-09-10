import React, { useState } from 'react';
import { Card, Col, Button, Accordion } from 'react-bootstrap';
import { useHistory } from 'react-router';
import CustomToggle from '../CustomToggle/CustomToggle';

const TopCart = (props) => {
    const { img, name, level, fee, instructor, company } = props.course;
    const history = useHistory();
    const [hover, setHover] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);

    const handleClick = () => {
        history.push('/entrolled');
    };

    const cardStyle = {
        backgroundColor: '#1e1e1e',
        color: 'black',
        transition: 'transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55), box-shadow 0.4s ease',
        transform: hover ? 'translateY(-15px) scale(1.05)' : 'translateY(0) scale(1)',
        boxShadow: hover
            ? '0 15px 30px rgba(0, 0, 0, 0.6)' 
            : '0 5px 10px rgba(0, 0, 0, 0.3)',
        border: hover ? '2px solid #0ef' : '2px solid transparent', 
    };

    
    const buttonStyle = {
        backgroundColor: buttonHover ? '#007bff' : '#343a40', 
        color: '#fff',
        transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
        transform: buttonHover ? 'scale(1.1)' : 'scale(1)',
        boxShadow: buttonHover ? '0 8px 16px rgba(0, 123, 255, 0.4)' : 'none', 
        border: 'none',
        borderRadius: '25px',
    };

    return (
        <div>
            <Col>
                <Card
                    className="bg-light"
                    style={cardStyle}
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                >
                    <Card.Img
                        className="d-block w-75 img-fluid mx-auto"
                        style={{ height: '200px', transition: 'opacity 0.4s ease-in-out' }}
                        variant="top"
                        src={img}
                    />
                    <Card.Body style={{ height: '100px' }}>
                        <Card.Title>Course Name: {name}</Card.Title>
                    
                    </Card.Body>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <CustomToggle eventKey="1">Learn More</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <p><b>Instructor: </b> {instructor}</p>
                                    <p><b>Course Fee: </b><span>₹</span>{fee}</p>
                                    <p><b>Duration: </b>{company}</p>
                                    <Button
                                        onClick={handleClick}
                                        style={buttonStyle}
                                        className="w-50 mx-auto mb-3"
                                        onMouseOver={() => setButtonHover(true)}
                                        onMouseOut={() => setButtonHover(false)}
                                    >
                                        Enroll Now
                                    </Button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Card>
            </Col>
        </div>
    );
};

export default TopCart;
