import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const activeNav = { borderBottom: "3px solid #FF2E63" };

const Navbar = ({ burgerOpen, navData }) => {
  return (
    <nav>
      {navData.map(item => (
        <li key={item.id}>
          <NavLink to={item.url} exact activeStyle={activeNav}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </nav>
  )
}

export default Navbar;