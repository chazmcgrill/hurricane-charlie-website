import React, { Fragment, ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/main.sass";

interface LayoutProps {
    children: ReactNode | ReactNode[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
    <Fragment>
        <Header />
        <main>{children}</main>
        <Footer />
    </ Fragment>
);

export default Layout;
