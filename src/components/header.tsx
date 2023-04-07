import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './navbar';

const Header = (): JSX.Element => {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [width, setWidth] = useState(640);

    useEffect(() => {
        const updateWindowSize = () => setWidth(window.innerWidth);
        updateWindowSize();
        window.addEventListener('resize', updateWindowSize);
        return () => {
            window.removeEventListener('resize', updateWindowSize);
        };
    }, []);

    const burgerClass = `hamburger hamburger-spin ${burgerOpen ? 'is-active' : ''}`;
    const showHamburger = width < 640;
    const showNavBar = width >= 640 || burgerOpen;

    return (
        <header>
            <Image alt="Hurricane Charlie Icon" src={'/images/hcicon.png'} width={50} height={50} />

            {showHamburger && (
                <div onClick={() => setBurgerOpen(!burgerOpen)} className="hamburger-container">
                    <div className={burgerClass}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>
                </div>
            )}

            {showNavBar && <Navbar />}
        </header>
    );
};

export default Header;
