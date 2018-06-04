import React, { Component } from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Gallery from './Gallery';
import Contact from './Contact';
import Shop from './Shop';

const Content = ({ galleryData }) => {
  return (
    <section className="content-section">
      <Switch>
        <Route
          path="/"
          render={() => <Gallery galleryData={galleryData} />}
          exact
        />
        <Route path="/contact" component={Contact} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </section>
  );
}

export default Content;