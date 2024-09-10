import React from 'react';
import img from '../../images/registration.gif';

const Registered = () => {

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa', 
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        overflow: 'hidden'
    };

    const headingStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#28a745', 
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        marginBottom: '20px',
        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)'
    };

    const imgStyle = {
        width: '250px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        animation: 'fadeIn 2s ease-in-out'
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Successfully Registered</h1>
        </div>
    );
};

export default Registered;
