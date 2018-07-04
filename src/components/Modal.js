import React from 'react';
import { Link } from 'react-router-dom';
import { modalInfo } from '../globals/galleryData';
import imageImport from '../helpers/imageImport';

const images = imageImport(require.context('../images/modal-images', false, /\.(png|jpe?g|svg)$/));

const Modal = ({ modalData, modalHandler, modalLimit }) => {
  const imgSrc = `modal-0${modalData.id < 10 ? '0' : ''}${modalData.id}.jpg`;
  return(
    <div className="modal">
    
      <div className="modal-img">
        <img src={images[imgSrc]} alt={modalData.name}/>
      </div>

      <div className="modal-data">
        <div>
          <h2>{modalData.name}</h2>
          <p>{modalInfo[modalData.id].desc}</p>
          {modalData.shop ? <Link to="/shop">Buy in shop</Link> : null}
        </div>
        
        <div className="modal-btns">
          {modalData.id >= 1 
            ? <div onClick={() => modalHandler('prev')}><i className="fas fa-arrow-alt-circle-left"></i></div> 
            : <div><i className="fas fa-arrow-alt-circle-left inactive"></i></div>}

          <div onClick={() => modalHandler('close')}><i className="fas fa-times"></i></div>
          
          {modalData.id < modalLimit 
            ? <div onClick={() => modalHandler('next')}><i className="fas fa-arrow-alt-circle-right"></i></div> 
            : <div><i className="fas fa-arrow-alt-circle-right inactive"></i></div>}
        </div>

      </div>
    </div>
  );
}

export default Modal;