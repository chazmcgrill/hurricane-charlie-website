import React from 'react';
import { Link } from 'react-router-dom';
import { modalInfo } from '../globals/galleryData';
import imageImport from '../helpers/imageImport';

const images = imageImport(require.context('../images/modal-images', false, /\.(png|jpe?g|svg)$/));

const Modal = ({ modalData, modalHandler, modalLimit }) => {
  const imgSrc = `modal-0${modalData.id < 10 ? '0' : ''}${modalData.id}.jpg`;
  const {name, id, shop} = modalData;

  return(
    <div className="modal">
    
      <div className="modal-img">
        <img src={images[imgSrc]} alt={name}/>
      </div>

      <div className="modal-data">
        <div>
          <h2>{name}</h2>
          <p>{modalInfo[id].desc}</p>
          {shop ? <Link to="/shop">Buy in shop</Link> : null}
        </div>
        
        <div className="modal-btns">
          <div onClick={id >= 1 ? () => modalHandler('prev') : null}>
            <i className={`fas fa-arrow-alt-circle-left ${id >= 1 ? null : "inactive"}`}/>
          </div>

          <div onClick={() => modalHandler('close')}><i className="fas fa-times"/></div>
          
          <div onClick={id < modalLimit ? () => modalHandler('next') : null}>
            <i className={`fas fa-arrow-alt-circle-right ${id < modalLimit ? null : "inactive"}`}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Modal;