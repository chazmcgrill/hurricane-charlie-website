import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavData } from '../globals/navData';

const activeNav = { borderBottom: "3px solid #FF2E63" };

interface NavbarProps {
  navData: NavData[];
}

const Navbar = ({
  navData
}: NavbarProps) => (
    <nav>
      {navData.map(item => (
        <li key={item.id}>
          <NavLink to={item.url} exact activeStyle={activeNav}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </nav>
);

export default Navbar;