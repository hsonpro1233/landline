import React from 'react'
import Nav from '../components/Nav'
import { Gnsspopup } from '../Data/MenuData'

const Popup = () => {
    return (
        <div className='pop-up border font-size-12'>
            <div className='letter-spacing-1'></div>
            <div className='border'>
                <Nav data={Gnsspopup} />
            </div>
        </div>
    )
}

export default Popup
