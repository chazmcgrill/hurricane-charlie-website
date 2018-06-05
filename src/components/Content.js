import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Gallery from './Gallery';
import Contact from './Contact';
import Shop from './Shop';

const Content = ({ galleryData }) => {
  return (
    <section className="content-section">
      <Switch>
        <Redirect from="/" to="/gallery" exact />
        <Route
          path="/gallery"
          render={() => <Gallery galleryData={galleryData} />}
        />
        <Route path="/contact" component={Contact} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </section>
  );
}

export default Content;