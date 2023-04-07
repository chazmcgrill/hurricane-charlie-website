import React, { useEffect, Fragment } from 'react';
import Header from '@components/header';
import Footer from '@components/footer';
import Modal from '@components/modal';

export type ChildrenType = JSX.Element | JSX.Element[];

interface LayoutProps {
    children: ChildrenType;
    modalComponent?: ChildrenType;
    isModalOpen?: boolean;
    onOutsideClick?: () => void;
}

const Layout = ({ children, modalComponent, isModalOpen, onOutsideClick }: LayoutProps): JSX.Element => {
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
        </Fragment>
    );
};

export default Layout;
