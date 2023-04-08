import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { GalleryItemData } from '@content/gallery';
import Image from 'next/image';
import Link from 'next/link';

interface ModalProps {
    selectedGalleryItem: GalleryItemData;
    modalHandler: (cmd: string) => void;
    modalLimit: number;
}

const GalleryModalContent = ({ selectedGalleryItem, modalHandler, modalLimit }: ModalProps) => {
    const { name, id, shop, desc } = selectedGalleryItem;

    return (
        <div className="modal-content">
            <div className="modal-header">
                <p className="no-user-select">{name}</p>
                <div onClick={() => modalHandler('close')} className="modal-icon modal-close-button">
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#333' }} />
                </div>
            </div>

            <div className="modal-body">
                <div className="modal-aside">
                    <div onClick={() => modalHandler('prev')} className="modal-icon">
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} style={{ color: id >= 1 ? '#000' : 'lightgrey' }} />
                    </div>
                </div>
                <div className="modal-image-wrapper no-user-select">
                    <Image style={{ objectFit: 'contain' }} src={`/images/modal-images/${selectedGalleryItem.modalImage}`} alt={name} fill />
                </div>
                <div className="modal-aside">
                    <div onClick={() => modalHandler('next')} className="modal-icon">
                        <FontAwesomeIcon icon={faArrowAltCircleRight} style={{ color: id < modalLimit ? '#000' : 'lightgrey' }} />
                    </div>
                </div>
            </div>

            <div className="modal-text no-user-select">
                <em>
                    {desc}
                    {shop && <Link href="/shop"> available to buy</Link>}
                </em>
            </div>
        </div>
    );
};

export default GalleryModalContent;
