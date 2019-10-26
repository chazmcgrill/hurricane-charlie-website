import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Site = () => (
    <BrowserRouter>
        <Fragment>
            <Header />
            <Content />
            <Footer />
        </Fragment>
    </BrowserRouter>
);

export default Site;