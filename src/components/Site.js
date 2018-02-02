import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class Site extends Component {
  constructor() {
    super()
    this.state = { 
      navData: [
        {id: 0, name: 'gallery'}, 
        {id: 1, name: 'contact'}, 
        {id: 2, name: 'shop'}
      ] 
    };
  }

  render() {
    return (
      <div>
        <Header navData={this.state.navData} />
        <Content />
        <Footer navData={this.state.navData} />
      </div>
    ) 
  }
}

export default Site