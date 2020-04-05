import React, { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
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
}: ModalProps) => {
    const [show, setShow] = useState(false);

    const transitions = useTransition(show, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
        setShow(Boolean(isModalOpen));
    }, [isModalOpen]);

    return transitions.map(({ item, key, props }) => item && (
        <animated.div className="modal-background" style={props} key={key} onClick={onOutsideClick}>
            <div className="modal">
                {children && children}
            </div>
        </animated.div>
    ));
    
}

export default Modal;