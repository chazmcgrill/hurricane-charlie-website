import React, { Component } from 'react';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';

class HurricaneCharlieSite extends Component {
  constructor(props) {
    super(props)
    this.state = {width: 0}
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth })
  }

  render() {
    return (
      <div>
        <Header width={this.state.width}/>
        <Gallery />
        <Footer />
      </div>
    ) 
  }
}

export default HurricaneCharlieSite