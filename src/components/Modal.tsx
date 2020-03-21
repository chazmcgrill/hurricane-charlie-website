import React from 'react';
// import { Link } from 'react-router-dom';
import { modalInfo, galleryData } from '../globals/galleryData';
import { Link } from 'gatsby';
import Image from './image';
// import imageImport from '../helpers/imageImport';

// const images = imageImport(require.context('../images/modal-images', false, /\.(png|jpe?g|svg)$/)) as { [key: string]: string };

interface ModalProps {
    selectedGalleryItemId: number;
    modalHandler: (cmd: string) => void;
    modalLimit: number;
}

const Modal = ({
    selectedGalleryItemId,
    modalHandler,
    modalLimit,
}: ModalProps) => {
    const modalData = galleryData[selectedGalleryItemId];
    // const imgSrc = `modal-0${modalData.id < 10 ? '0' : ''}${modalData.id}.jpg`;
    const {name, id, shop} = modalData;

    return (
        <div className="modal">
            <div className="modal-img">
                {/* <img src={images[imgSrc]} alt={name}/> */}
                <Image />
            </div>

            <div className="modal-data">
                <div>
                    <h2>{name}</h2>
                    <p>{modalInfo[id].desc}</p>
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