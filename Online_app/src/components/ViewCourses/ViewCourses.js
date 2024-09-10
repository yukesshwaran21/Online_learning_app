import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ViewCourses = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/career")
    }
    return (
        <div className="bg-image p-3 mb-2 rounded">
            
        </div>
    );
};

export default ViewCourses;