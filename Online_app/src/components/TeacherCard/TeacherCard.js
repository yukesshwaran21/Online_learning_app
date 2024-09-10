import React from 'react';
import { Card, Col } from 'react-bootstrap';

const TeacherCard = (props) => {
    const { large } = props.teacher.picture;
    const { title, first, last } = props.teacher.name;
    const { expert } = props.teacher;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="d-block w-75 img-fluid mx-auto" style={{ height: '200px' }} variant="top" src={large} />
                    <Card.Body>
                        <Card.Title>{title} {first} {last} </Card.Title>
                        <Card.Text>
                            {expert}
                        </Card.Text>
                    </Card.Body>

                </Card>
            </Col>
        </div>
    );
};

export default TeacherCard;