import React from 'react';
import { Link } from 'react-router-dom';
import { modalInfo } from '../globals/galleryData';

const Modal = ({ modalData, modalHandler, modalLimit }) => {
  return(
    <div className="modal">
    
      <div className="modal-img">
        <img src={`assets/img/thumbs/${modalData.src}`} alt={modalData.name}/>
      </div>

      <div className="modal-data">

        <h2>{modalData.name}</h2>
        <p>{modalInfo[modalData.id].desc}</p>

        {modalData.shop ? <Link to="/shop">Buy in shop</Link> : null}

        <div className="modal-btns">
          {modalData.id >= 1 ? <div onClick={() => modalHandler('prev')}>Prev</div> : null}
          {modalData.id < modalLimit ? <div onClick={() => modalHandler('next')}>Next</div> : null}
          <div onClick={() => modalHandler('close')}>Close</div>
        </div>

      </div>
    </div>
  );
}

export default Modal;