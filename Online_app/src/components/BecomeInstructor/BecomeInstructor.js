import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
const BecomeInstructor = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/registration")
    }
    return (
        <div className="bg-image p-5 mb-3 ">
        </div>
    );
};

export default BecomeInstructor;