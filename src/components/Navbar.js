import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const { burgerOpen, navData } = this.props;
    const nav = navData.map(item => {
      const navClickedStyle = {
        borderBottom: item.active && !burgerOpen ? "3px solid #FF2E63" : "none",
        color: item.active && burgerOpen ? "#FF2E63" : "black"
      };
      return (
        // <li 
        //   id={item.name} key={item.id} 
        //   onClick={this.props.navClick} 
        //   style={navClickedStyle} 
        // >{item.name}</li>
        <NavLink key={item.id} to={item.url}>{item.name}</NavLink>
      );
    });

    // <NavLink to="/">Home</NavLink>
  
    return(
      <nav>
        { nav }
      </nav>
    )
  }
}

export default Navbar;