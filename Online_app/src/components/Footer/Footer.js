import React from 'react';
import { useHistory } from 'react-router';

const Footer = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/registration');
    };

    const footerStyle = {
        backgroundColor: '#C0C0C0', 
        color: '#333', 
        padding: '20px 0',
        boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.2)',
        borderTop: '2px solid #e0e0e0',
    };

    const sectionStyle = {
        padding: '10px 0',
    };

    const buttonStyle = {
        backgroundColor: '#0a4275', 
        border: 'none',
        color: '#FFF4C0', 
        padding: '10px 20px',
        fontSize: '1rem',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };

    const buttonHoverStyle = {
        backgroundColor: '#082c4b', 
        transform: 'scale(1.05)', 
    };

    const copyrightStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.1)', 
        padding: '10px 0',
    };

    return (
        <footer className="text-center text-white" style={footerStyle}>
            <div className="container p-4 pb-0">
                <section style={sectionStyle}>
                    <p className="d-flex justify-content-center align-items-center">
                        <span className="me-3" style={{ fontSize: '1.2rem', color: '#333' }}>Register for free</span>
                        <button
                            onClick={() => handleClick()}
                            type="button"
                            className="btn btn-outline-light btn-rounded"
                            style={buttonStyle}
                            onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
                            onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
                        >
                            Sign up!
                        </button>
                    </p>
                </section>
            </div>
            <div className="text-center p-3" style={copyrightStyle}>
                © 2024 Copyright:
                <a className="text-dark" href="https://mdbootstrap.com/" style={{ textDecoration: 'none', fontWeight: 'bold' }}> <u>InfoTech.com</u></a>
            </div>
        </footer>
    );
};

export default Footer;
