import React from 'react';
import { Link } from 'gatsby';
import Img, { FluidObject } from "gatsby-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { GalleryItemData } from '../pages/gallery';

interface ModalProps {
    selectedGalleryItem: GalleryItemData;
    modalHandler: (cmd: string) => void;
    modalLimit: number;
    imgData: FluidObject;
}

const GalleryModalContent = ({
    selectedGalleryItem,
    imgData,
    modalHandler,
    modalLimit,
}: ModalProps) => {
    const { name, id, shop, desc } = selectedGalleryItem;

    return (
        <div className="modal">
            <div className="modal-img">
                <Img fluid={imgData} alt={name} />
            </div>

            <div className="modal-data">
                <div>
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    {shop && <Link to="/shop">Buy in shop</Link>}
                </div>
        
                <div className="modal-btns">
                    <div onClick={() => modalHandler('prev')}>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} style={{ color: id >= 1 ? '#000' : 'lightgrey' }} />
                    </div>

                    <div onClick={() => modalHandler('close')}>
                        <FontAwesomeIcon icon={faTimes} style={{ color: '#000000' }} />
                    </div>
          
                    <div onClick={() => modalHandler('next')}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} style={{ color: id < modalLimit ? '#000' : 'lightgrey' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GalleryModalContent;