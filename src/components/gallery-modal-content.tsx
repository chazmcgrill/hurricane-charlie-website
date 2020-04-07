import React from 'react';
import { Link } from 'gatsby';
import Img, { FixedObject } from "gatsby-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { GalleryItemData } from '../pages/gallery';

interface ModalProps {
    selectedGalleryItem: GalleryItemData;
    modalHandler: (cmd: string) => void;
    modalLimit: number;
    imgData: FixedObject;
}

const GalleryModalContent = ({
    selectedGalleryItem,
    imgData,
    modalHandler,
    modalLimit,
}: ModalProps) => {
    const { name, id, shop, desc } = selectedGalleryItem;

    return (
        <div className="modal-content">
            <div className="modal-header">
                <p>{name}</p>
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
                <Img
                    fixed={imgData}
                    alt={name}
                    style={{ margin: '1rem', maxHeight: 'calc(70vh - 4rem)' }}
                    imgStyle={{ objectFit: 'contain' }}
                />
                <div className="modal-aside">
                    <div onClick={() => modalHandler('next')} className="modal-icon">
                        <FontAwesomeIcon icon={faArrowAltCircleRight} style={{ color: id < modalLimit ? '#000' : 'lightgrey' }} />
                    </div>
                </div>
            </div>

            <div className="modal-text">
                <em>{desc}{shop && <Link to="/shop"> available to buy</Link>}</em>
            </div>
        </div>
    );
}

export default GalleryModalContent;