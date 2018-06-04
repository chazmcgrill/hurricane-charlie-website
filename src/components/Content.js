import React, { Component } from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Gallery from './Gallery';
import Contact from './Contact';
import Shop from './Shop';

class Content extends Component {
  // contentSwitch(name) {
  //   const contentMap = {
  //     gallery: <Gallery galleryData={this.props.galleryData} />,
  //     contact: <Contact />,
  //     shop: <Shop />,
  //   };
  //   return contentMap[name] || null;
  // }

  // render() {
  //   return (
  //     <section className="content-section">
  //       {this.contentSwitch(this.props.activeContent)}
  //     </section>
  //   )
  // }

  render() {
    return (
      <section className="content-section">
        {/* <BrowserRouter> */}
          <Switch>
            <Route 
              path="/" 
              render={() => <Gallery galleryData={this.props.galleryData}/>}
              exact 
            />
            <Route path="/contact" component={Contact} />
            <Route path="/shop" component={Shop} />
          </Switch>
        {/* </BrowserRouter> */}
      </section>
    )
  }
}

export default Content;