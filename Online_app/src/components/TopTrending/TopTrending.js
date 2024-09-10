import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../hook/useCourses';
import TopCart from '../TopCart/TopCart';
import ViewCourses from '../ViewCourses/ViewCourses';

const TopTrending = () => {
    const [courses] = useCourses();

    return (
        <div className="container">
            <h1>Our Top Trending Career-Path Courses</h1>
            {courses.length && <Row xs={1} md={3} lg={4} className="g-4 mb-3">
                {courses.map(course => course.trend.includes("top") && <TopCart key={course._id} course={course} />)}
            </Row>}
            <ViewCourses />
        </div>
    );
};

export default TopTrending;