import React from 'react';
import img from '../../images/entrolled.gif';

const Entrolled = () => {
    
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1d2b64, #f8cdda)',
        textAlign: 'center',
        padding: '20px'
    };

    const headingStyle = {
        fontSize: '3rem',
        color: 'white',
        background: 'linear-gradient(45deg, #ff6f61, #d500f9)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        transition: 'transform 0.3s ease, color 0.3s ease'
    };

    const subheadingStyle = {
        fontSize: '1.5rem',
        color: 'white',
        marginTop: '0',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
        transition: 'color 0.3s ease'
    };

    const handleMouseOver = (e) => {
        e.target.style.color = '#00e5ff'; 
    };

    const handleMouseOut = (e) => {
        e.target.style.color = 'white'; 
    };

    return (
        <div style={containerStyle}>
            <h1
                style={headingStyle}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                Successfully Enrolled!
            </h1>
            <h3 style={subheadingStyle}>
                Let's Do It Together.
            </h3>
        </div>
    );
};

export default Entrolled;
