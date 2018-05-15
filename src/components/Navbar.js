import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const { burgerOpen, navData } = this.props;
    const nav = navData.map(item => {
      const navClickedStyle = {
        borderBottom: item.active && !burgerOpen ? "3px solid coral" : "none",
        color: item.active && burgerOpen ? "coral" : "black"
      };
      return (
        <li 
          id={item.name} key={item.id} 
          onClick={this.props.navClick} 
          style={navClickedStyle} 
        >{item.name}</li>
      );
    });
  
    return(
      <nav>
        { nav }
      </nav>
    )
  }
}

export default Navbar;