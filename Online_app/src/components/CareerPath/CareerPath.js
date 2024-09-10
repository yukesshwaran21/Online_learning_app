import React from 'react';
import { Row, Button, Spinner } from 'react-bootstrap';
import useCourses from '../../hook/useCourses';
import TopCart from '../TopCart/TopCart';
import TopEnrolled from '../TopEnrolled/TopEnrolled';

const CareerPath = () => {
    const [courses] = useCourses();
    return (
        <div className="container mb-3">
            <TopEnrolled />
            <h1>Explore All Career-path Courses</h1>
            {courses.length ? <Row xs={1} md={3} lg={4} className="g-4">
                {courses.map(course => <TopCart key={course._id} course={course} />)}
            </Row> :
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>}
        </div>
    );
};

export default CareerPath;