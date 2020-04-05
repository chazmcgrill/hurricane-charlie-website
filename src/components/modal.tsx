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

    const modalTransitions = useTransition(show, null, {
        from: { transform: 'translateY(100px)' },
        enter: { transform: 'translateY(0px)' },
        leave: { transform: 'translateY(100px)' },
    });

    const backgroundTransitions = useTransition(show, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
        setShow(Boolean(isModalOpen));
    }, [isModalOpen]);

    return backgroundTransitions.map(({ item, key, props }) => item && (
        <animated.div className="modal-background" style={props} key={key} onClick={onOutsideClick}>
            {modalTransitions.map(({ item, key, props}) => item && (
                <animated.div className="modal" style={props} key={key}>
                    {children && children}
                </animated.div>
            ))}
        </animated.div>
    ));
    
}

export default Modal;