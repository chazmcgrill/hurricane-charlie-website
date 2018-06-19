import React from 'react';

const Modal = ({ modalData, handleModal }) => {
  return(
    <div className="modal">
      <div className="modal-img">
        <img src={`assets/img/thumbs/${modalData.src}`} alt={modalData.name}/>
      </div>
      <div className="modal-data">
        <h2>{modalData.name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda maiores quaerat, porro praesentium nesciunt repudiandae eos! Error dolores quaerat non deleniti magni aliquam odit veniam eos. Architecto sapiente vero rerum?</p>
        <button>Buy in shop</button>
        {modalData.id >= 1 ? <div onClick={() => handleModal('prev')}>Prev</div> : null}
        {modalData.id < 27 ? <div onClick={() => handleModal('next')}>Next</div> : null}
      </div>
    </div>
  );
}

export default Modal;