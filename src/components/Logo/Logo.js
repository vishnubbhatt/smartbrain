import React from 'react'
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css'


export default function Logo() {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 65 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pad3"> <img style={{paddingTop: '10px'}} src={brain} alt='logo'/> </div>
            </Tilt>
        </div>
    )
}
