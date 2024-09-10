import React from 'react';
import img from '../../images/msg.gif';

const SendMessage = () => {
    
    const containerStyle = {
        height: '550px',
        backgroundColor: '#17a2b8', 
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
    };

    const headingStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '20px',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)'
    };

    const subheadingStyle = {
        fontSize: '1.5rem',
        marginBottom: '30px',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)'
    };

    const imgStyle = {
        width: '200px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        animation: 'pulse 2s infinite'
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Gotcha!</h1>
            <h3 style={subheadingStyle}>Got your message. Will get back to you soon</h3>
      
        </div>
    );
};

export default SendMessage;
