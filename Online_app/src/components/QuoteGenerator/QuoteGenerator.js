import React from 'react';
import { Spinner } from 'react-bootstrap';
import useQuotes from '../../hook/useQuotes';
import Typical from 'react-typical';

const QuoteGenerator = () => {
    const [quotes] = useQuotes();
   
    const arrLen = quotes.length;
    let min = 0;
    let max = arrLen;
    let qt = quotes[Math.floor(Math.random() * (max - min) + min)];

    const containerStyle = {
        marginTop: '20px',
        textAlign: 'center'
    };

    const headerStyle = {
        position: 'relative',
        margin: '2% auto',
        borderRadius: '10%',
        backgroundColor: '#222',
        color: '#FFD100', 
        padding: '10px',
        textAlign: 'center',
        fontFamily: 'Book Antiqua', 
        fontWeight: 'bold',
        fontStyle: 'italic'
    };

    const blockStyle = {
        margin: '20px auto',
        textAlign: 'center'
    };

    const textStyle = {
        fontFamily: 'Book Antiqua', 
        fontSize: '1.3rem',
        color: '#FFD100', 
        fontWeight: 'bold',
        fontStyle: 'italic'
    };

    const authorStyle = {
        fontFamily: 'Book Antiqua',
        fontSize: '1rem',
        color: '#FFD100', 
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginTop: '5px'
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>
                HELLO! "Welcome to InfoTech Career-Path"
            </h1>
            {quotes.length ? (
                <blockquote style={blockStyle}>
                    <p style={textStyle}>{qt?.text}</p>
                    <footer style={authorStyle}></footer>
                </blockquote>
            ) : (
                <Spinner animation="grow" variant="info" />
            )}
        </div>
    );
};

export default QuoteGenerator;
