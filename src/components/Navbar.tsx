import React from 'react';
import { Link } from "gatsby";
import { NavData } from '../globals/navData';

const activeNav = { borderBottom: "3px solid #FF2E63" };

interface NavbarProps {
    navData: NavData[];
}

const Navbar = ({
    navData,
}: NavbarProps) => (
    <nav>
        {navData.map(item => (
            <li key={item.id}>
                <Link to={item.url} activeStyle={activeNav}>
                    {item.name}
                </Link>
            </li>
        ))}
    </nav>
);

export default Navbar;