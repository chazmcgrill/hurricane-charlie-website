import React from 'react';
import Navbar from './navbar';
import socialItems from '../globals/socialItems';
import navData from '../globals/navData';

const Footer = () => (
    <footer>
        <Navbar navData={navData} />
        <div className="footer-icons">
            {socialItems.map(s => (
                <a key={s.id} target="_blank" rel="noopener noreferrer" href={s.url}>
                    <i className={`fab fa-${s.name}`}></i>
                </a>
            ))}
        </div>
        <p><span>&copy;</span> 2018 Charlie Taylor all rights reserved.</p>
    </footer>
);

export default Footer