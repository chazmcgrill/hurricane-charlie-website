import React from 'react';
import { Link } from 'gatsby';
import Img from "gatsby-image";

import { IGalleryItem } from '../pages/gallery';

interface ModalProps {
    selectedGalleryItem: IGalleryItem;
    modalHandler: (cmd: string) => void;
    modalLimit: number;
    imgData: any;
}

const Modal = ({
    selectedGalleryItem,
    imgData,
    modalHandler,
    modalLimit,
}: ModalProps) => {
    const { name, id, shop, desc } = selectedGalleryItem;

    return (
        <div className="modal">
            <div className="modal-img">
                <Img fluid={imgData} />
            </div>

            <div className="modal-data">
                <div>
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    {shop && <Link to="/shop">Buy in shop</Link>}
                </div>
        
                <div className="modal-btns">
                    <div onClick={() => modalHandler('prev')}>
                        <i className={`fas fa-arrow-alt-circle-left ${id >= 1 ? null : "inactive"}`}/>
                    </div>

                    <div onClick={() => modalHandler('close')}><i className="fas fa-times"/></div>
          
                    <div onClick={() => modalHandler('next')}>
                        <i className={`fas fa-arrow-alt-circle-right ${id < modalLimit ? null : "inactive"}`}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;