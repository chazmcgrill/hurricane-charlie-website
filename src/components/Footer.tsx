import React from 'react';
import Navbar from './navbar';
import SocialIcons from './social-icons';

const Footer = () => (
    <footer>
        <Navbar />

        <div className="footer-icons">
            <SocialIcons />
        </div>

        <p><span>&copy;</span> 2018 Charlie Taylor all rights reserved.</p>
    </footer>
);

export default Footer