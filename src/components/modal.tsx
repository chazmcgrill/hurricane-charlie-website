import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChildrenType } from './layout';

interface ModalProps {
    children?: ChildrenType;
    isModalOpen?: boolean;
    onOutsideClick?: () => void;
}

const Modal = ({ children, isModalOpen, onOutsideClick }: ModalProps): any => {
    // const [show, setShow] = useState(false);

    // const [modalTransitions] = useTransition(show, () => ({
    //     from: { transform: 'translateY(100px)' },
    //     enter: { transform: 'translateY(0px)' },
    //     leave: { transform: 'translateY(100px)' },
    // }));

    // const [backgroundTransitions] = useTransition(show, () => ({
    //     from: { opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 },
    // }));

    // const handleModalClick = (e: React.MouseEvent<HTMLElement>) => e.stopPropagation();

    // useEffect(() => {
    //     document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    //     setShow(Boolean(isModalOpen));
    // }, [isModalOpen]);

    return (
        <AnimatePresence>
            {isModalOpen && !!children && (
                <motion.div
                    className="modal-background"
                    onClick={onOutsideClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="modal"
                        // onClick={handleModalClick}
                        initial={{ transform: 'translateY(100px)' }}
                        animate={{ transform: 'translateY(0px)' }}
                        exit={{ transform: 'translateY(100px)' }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
