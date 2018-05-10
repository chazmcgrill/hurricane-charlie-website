import React, { Component } from 'react';
import Gallery from './Gallery';
import Contact from './Contact';
import Shop from './Shop';

class Content extends Component {
  contentSwitch(name) {
    const contentMap = {
      gallery: <Gallery galleryData={this.props.galleryData} />,
      contact: <Contact />,
      shop: <Shop />,
    };
    return contentMap[name] || null;
  }
  
  render() {
    return (
      <section className="content-section">
        {this.contentSwitch(this.props.activeContent)}
      </section>
    )
  }
}

export default Content;