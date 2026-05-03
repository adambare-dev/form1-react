import React, { useState } from 'react'
import './index.css'
function Modal({ onclose }) {
    const btnSTtyele = {}
   // const [isOpn, setIsOpen] = useState(true);
    return (
        <div className='modal-overlay'>

            <div className='modal'>
                <h2>sucsess</h2>
                <p>your from hus been submited succsessfully!!✅</p>
                <small className='modal-btn'
                    onClick={onclose} title='close'>&times;</small>
            </div>

        </div>
    )
}

export default Modal