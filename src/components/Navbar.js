import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const nav = this.props.navData.map(item => (
      <li key={item.id} onClick={this.props.navClick}>{item.name}</li>
    ));
  
    return(
      <nav>
        { nav }
      </nav>
    )
  }
}

export default Navbar;