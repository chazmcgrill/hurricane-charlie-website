import React, { useState, useEffect } from 'react';
import logo from '../images/hclogo.png';
import Navbar from './Navbar';
import navData from '../globals/navData';

const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [width, setWidth] = useState(0);

    const updateWindowSize = () => setWidth(window.innerWidth);

    useEffect(() => {
        updateWindowSize();
        window.addEventListener('resize', updateWindowSize);
        return () => {
            window.removeEventListener('resize', updateWindowSize);
        };
    }, [])

    const burgerClass = `hamburger hamburger-spin ${burgerOpen ? 'is-active' : ''}`;
    const showHamburger = width < 640;
    const showNavBar = width > 640 || burgerOpen;

    return (
        <header>
            <img src={logo} alt="Hurricane Charlie Logo" />

            {showHamburger && (
                <div onClick={() => setBurgerOpen(!burgerOpen)} className="hamburger-container">
                    <div className={burgerClass}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>
                </div>
            )}

            {showNavBar && <Navbar navData={navData} />}
        </header>
    )
}

export default Header;