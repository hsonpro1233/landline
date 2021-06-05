import React from 'react'
import Nav from '../components/Nav'
import { menuInfo } from '../Data/MenuData'

const InfoScreen = () => {
    return (
        <div className='info-screen in-screen'>
            <div className='menu-head'>Info</div>
            <div className='padding-0-5 font-size-125 height-220'>
                <nav className='nav in-nav'>
                  <Nav data={menuInfo} />
                </nav>
            </div>
            <div className='footer-menu'>Infomation</div>
        </div>
    )
}

export default InfoScreen
