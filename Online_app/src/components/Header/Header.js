import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    
    const bodyPadding = {
        paddingTop: '56px' 
    };

    const navbarStyle = {
        backgroundColor: '#1a1a1a', 
        zIndex: 1000,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' 
    };

    const brandStyle = {
        marginRight: '33%',
        fontWeight: 600,
        textDecoration: 'none',
        color: '#C4C4C4',
        transition: 'color 0.3s ease, transform 0.3s ease',
        display: 'flex',
        alignItems: 'center'
    };

    const brandHoverStyle = {
        transform: 'scale(1.1)'
    };

    const navLinkStyle = {
        textDecoration: 'none',
        marginRight: '25px',
        color: 'white', 
        fontWeight: 'normal',
        transition: 'color 0.3s ease, text-shadow 0.3s ease'
    };

    const navLinkHoverStyle = {
        color: '#01FFFF',
        textShadow: '0 0 5px rgba(1, 255, 255, 0.5)' 
    };

    const activeNavLinkStyle = {
        fontWeight: 'bold',
        color: '#DFFF00', 
        textShadow: '0 0 8px rgba(1, 255, 255, 0.5)' 
    };

    const handleTouchStart = (e) => {
        e.target.style.color = '#DFFF00'; 
    };

    const handleTouchEnd = (e) => {
        e.target.style.color = ''; 
    };

    return (
        <div style={bodyPadding}>
            <Navbar
                fixed="top"
                style={navbarStyle}
                expand="lg"
            >
                <Container fluid>
                    <Navbar.Brand
                        as={Link}
                        to="/home"
                        style={brandStyle}
                        onMouseOver={(e) => Object.assign(e.target.style, brandHoverStyle)}
                        onMouseOut={(e) => Object.assign(e.target.style, brandStyle)}
                    >
                        <i style={{ marginRight: '8px', color: '#FF4200' }}></i><u>InfoTech</u>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                            <NavLink
                                to="/home"
                                style={({ isActive }) => isActive ? { ...navLinkStyle, ...activeNavLinkStyle } : navLinkStyle}
                                onMouseOver={(e) => Object.assign(e.target.style, navLinkHoverStyle)}
                                onMouseOut={(e) => Object.assign(e.target.style, navLinkStyle)}
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                            >
                                HOME
                            </NavLink>
                            <NavLink
                                to="/career"
                                style={({ isActive }) => isActive ? { ...navLinkStyle, ...activeNavLinkStyle } : navLinkStyle}
                                onMouseOver={(e) => Object.assign(e.target.style, navLinkHoverStyle)}
                                onMouseOut={(e) => Object.assign(e.target.style, navLinkStyle)}
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                            >
                                COURSES
                            </NavLink>
                            <NavLink
                                to="/join"
                                style={({ isActive }) => isActive ? { ...navLinkStyle, ...activeNavLinkStyle } : navLinkStyle}
                                onMouseOver={(e) => Object.assign(e.target.style, navLinkHoverStyle)}
                                onMouseOut={(e) => Object.assign(e.target.style, navLinkStyle)}
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                            >
                                TEACHERS
                            </NavLink>
                            <NavLink
                                to="/about"
                                style={({ isActive }) => isActive ? { ...navLinkStyle, ...activeNavLinkStyle } : navLinkStyle}
                                onMouseOver={(e) => Object.assign(e.target.style, navLinkHoverStyle)}
                                onMouseOut={(e) => Object.assign(e.target.style, navLinkStyle)}
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                            >
                                ABOUT
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
