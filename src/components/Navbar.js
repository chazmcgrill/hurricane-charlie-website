import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const nav = this.props.navData.map(item => {
      const border = item.active ? "3px solid coral" : "none";
      return (
        <li 
          id={item.name} key={item.id} 
          onClick={this.props.navClick} 
          style={{ borderBottom: border }} 
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