import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const activeNav = { borderBottom: "3px solid #FF2E63" };

class Navbar extends Component {
  render() {
    const { burgerOpen, navData } = this.props;
    const nav = navData.map(item => (
      <li key={item.id}>
        <NavLink to={item.url} exact activeStyle={activeNav}>
          {item.name}
        </NavLink>
      </li>
    ));
  
    return(
      <nav>
        { nav }
      </nav>
    )
  }
}

export default Navbar;