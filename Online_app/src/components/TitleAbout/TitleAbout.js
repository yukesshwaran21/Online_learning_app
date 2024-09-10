import React, { useContext } from 'react';
import { CourseContext } from '../../App';

const TitleAbout = () => {

    const [learners, courses] = useContext(CourseContext);

    const containerStyle = {
        backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '30px',
        marginBottom: '20px',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        color: '#ffffff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
    };

    const headingStyle = {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#FFD100',
        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.6)',
        marginBottom: '20px'
    };

    const subheadingStyle = {
        fontSize: '1.25rem',
        lineHeight: '1.6',
        color: '#ffffff',
        marginBottom: '20px',
        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)'
    };

    const statsContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginTop: '20px'
    };

    const statStyle = {
        fontSize: '1.5rem',
        color: '#FFD100',
        fontWeight: 'bold'
    };

    const statValueStyle = {
        color: '#FF4500',
        fontSize: '2rem'
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>About Us</h1>
            <h3 style={subheadingStyle}>
                Welcome to "InfoTech", your gateway to a world of knowledge and skills. We are dedicated to <br />
                providing high-quality online education through a diverse range of courses tailored to your needs.<br />
                Our platform features expert instructors, interactive content, and flexible learning paths to ensure<br />
                you achieve your goals at your own pace. Whether you're looking to advance your career or explore <br />
                new interests, InfoTech offers engaging, accessible, and affordable learning experiences. Join our <br />
                community of learners and start your journey to success today.
            </h3>
          
        </div>
    );
};

export default TitleAbout;
