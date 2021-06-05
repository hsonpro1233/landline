import React from 'react'
import Nav from '../components/Nav'
import {menu} from '../Data/MenuData'

const MenuScreen = () => {
    return (
        <div className='menu in-screen'>
            <nav className='nav '>
                <Nav data={menu} />
            </nav>
            <div className='main-menu height-220'></div>
            <div className='footer-menu'>Navigation</div>
        </div>
    )
}

export default MenuScreen
