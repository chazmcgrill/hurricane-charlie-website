import React, { useEffect } from 'react';
import { ChildrenType } from './layout';

interface ModalProps {
    children?: ChildrenType;
    isModalOpen?: boolean;
    onOutsideClick?: () => void;
}

const Modal = ({
    children,
    isModalOpen,
    onOutsideClick,
}: ModalProps): JSX.Element | null => {
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    }, [isModalOpen]);

    if (!isModalOpen) return null;

    return (
        <div className="modal-background" onClick={onOutsideClick}>
            <div className="modal">
                {children && children}
            </div>
        </div>
    );
}

export default Modal;