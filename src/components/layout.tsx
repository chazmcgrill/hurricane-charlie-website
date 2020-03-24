import React, { Fragment, ReactNode, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/main.sass";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

interface LayoutProps {
    children: ReactNode | ReactNode[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <Header />
            <main>{children}</main>
            <Footer />
        </ Fragment>
    );
}



export default Layout;
