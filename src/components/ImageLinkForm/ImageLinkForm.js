import React from 'react'
import './ImageLinkForm.css'

export default function ImageLinkForm({ onInputChange, onButtonSubmit }) {
    return (
        <div>
            <p className='f3'>
                {' This Magic brain will detect faces in your pictures.'}
            </p>
            <div className='center'>
                <div className='center pa4 br4 shadow-5 form bg-yellow'>
                    <input className='f4 pa2 w-70 center' type='text' placeholder='' onChange={onInputChange}/>
                    <button 
                        className='w-30 br3 grow f4 link ph3 pv2 dib white bg-light-purple pointer'
                        onClick={onButtonSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}
