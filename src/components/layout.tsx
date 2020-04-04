import React, { useEffect, Fragment } from "react";
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
    onOutsideClick?: () => void;
}

const Layout = ({
    children,
    modalComponent,
    isModalOpen,
    onOutsideClick,
}: LayoutProps): JSX.Element => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <Header />
            <main>{children}</main>
            <Footer />
            <Modal isModalOpen={isModalOpen} onOutsideClick={onOutsideClick}>
                {modalComponent}
            </Modal>
        </ Fragment>
    );
}

export default Layout;
