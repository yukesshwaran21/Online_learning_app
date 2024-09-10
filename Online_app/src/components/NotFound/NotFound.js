import React from 'react';
import img from '../../images/error.gif'
const NotFound = () => {
    return (
        <div style={{ marginBottom: '200px' }}>
            <h1 style={{ color: 'red' }}>404</h1>
            <p>Page not found!</p>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;