import React from "react";

import { MdClose } from 'react-icons/md';

const Modal =({id ='modal', onClose = () => {}, children, image}) => {
    const handleOutsidClick = (e) => {
        if (e.target.id == id) onClose();
    };

    return(
        <div id={id} onClick={handleOutsidClick} className='modal'>
            <div className="ModalContainer">
                
                <div className="ModalWrapper">
                    <button onClick={onClose} className='close'>X</button>
              <img className="ModalImg" src={image} alt='camera' />
              <div className="ModalContent">
                {children}
                <button className="Modalbutton">Join Now</button>
              </div>
             
            </div>
            </div>
            
        </div>
    );
}

export default Modal;