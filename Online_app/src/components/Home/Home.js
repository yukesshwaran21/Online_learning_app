import React from 'react';
import QuoteGenerator from '../QuoteGenerator/QuoteGenerator';
import SliderHome from '../SliderHome/SliderHome';
import TopTrending from '../TopTrending/TopTrending';

const Home = () => {
    return (
        <div>
            <QuoteGenerator />
            <SliderHome />
        </div>
    );
};

export default Home;