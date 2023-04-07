import React, { useEffect, Fragment } from 'react';
import Header from '@components/header';
import Footer from '@components/footer';
import Modal from '@components/modal';
import HeadComponent, { PageMeta } from '@components/head';

export type ChildrenType = JSX.Element | JSX.Element[];

interface LayoutProps {
    children: ChildrenType;
    modalComponent?: ChildrenType;
    isModalOpen?: boolean;
    onOutsideClick?: () => void;
    pageMeta?: PageMeta;
}

const Layout = ({ children, modalComponent, isModalOpen, onOutsideClick, pageMeta }: LayoutProps): JSX.Element => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <HeadComponent pageMeta={pageMeta} />
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
