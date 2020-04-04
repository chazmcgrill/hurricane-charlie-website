import React, { Fragment, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/main.sass";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Modal from "./modal";

library.add(fab);

export type ChildrenType = JSX.Element | JSX.Element[];

interface LayoutProps {
    children: ChildrenType;
    modalComponent?: ChildrenType;
    isModalOpen?: boolean;
}

const Layout = ({ children, modalComponent, isModalOpen }: LayoutProps): JSX.Element => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <Header />
            <main>{children}</main>
            <Footer />
            <Modal isModalOpen={isModalOpen}>
                {modalComponent}
            </Modal>
        </ div>
    );
}

export default Layout;
