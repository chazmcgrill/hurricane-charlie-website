import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Gallery from './Gallery';
import Contact from './Contact';
import Shop from './Shop';
import ErrorPage from './ErrorPage';

const Content = (): JSX.Element => (
    <section className="content-section">
        <Switch>
            <Redirect from="/" to="/gallery" exact />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route path="/shop" component={Shop} />
            <Route component={ErrorPage} />
        </Switch>
    </section>
);

export default Content;