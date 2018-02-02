import React, { Component } from 'react';
import NavItem from './NavItem';

class Navbar extends Component {

  render() {
    const nav = this.props.navData.map(item => (
      <NavItem name={ item.name } key={ item.id } />
    ));
  
    return(
      <nav>
        { nav }
      </nav>
    )
  }
}

export default Navbar;