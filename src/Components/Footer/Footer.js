import React from 'react';
import './Footer.css';
import CitySection from './CitySection';
import BottomSection from './BottomSection';
import TopSection from './TopSection';

const Footer = () => {
    return (
        <div>
            <TopSection />
            <CitySection />
            <BottomSection />
        </div>
    );
};

export default Footer;