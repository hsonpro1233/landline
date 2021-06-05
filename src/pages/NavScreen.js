import React from 'react'
import Nav from '../components/Nav'
import {menuNav} from '../Data/MenuData'

const NavScreen = (data) => {
    return (
        <div className='nav-screen in-screen'>
            <div className='menu-head nav-link'>NAV</div>
            <div className='main-menu height-220'>
                <nav className='nav in-nav'>
                    <Nav data={menuNav} />
                </nav>
            </div>
            <div className='footer-menu'>Navigation</div>
        </div>
    )
}

export default NavScreen
