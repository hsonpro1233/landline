import React from 'react'
import Nav from '../components/Nav'
import { menuGInfo } from '../Data/MenuData'

const GNSSinfo = () => {
    return (
        <div className='gnss-info in-screen'>
            <div className='menu-head'>GNSS Info</div>
            <div className='padding-0-5 font-size-125 height-220'>
                <nav className='nav in-nav'>
                    <Nav data={menuGInfo} />
                </nav>
            </div>
            <div className='footer-menu'>GNSS Info</div>
        </div>
    )
}

export default GNSSinfo
