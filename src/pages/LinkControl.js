import React from 'react'
import Nav from '../components/Nav'
import { menuLinkCt } from '../Data/MenuData'

const LinkControl = () => {
    return (
        <div className='control-screen in-screen'>
            <div className='menu-head nav-link'>Link Control</div>
            <div className='main-menu height-220'>
                <nav className='nav in-nav '>
                    <Nav data={menuLinkCt} />
                </nav>
            </div>
            <div className='footer-menu'>Link Control</div>
        </div>
    ) 
}

export default LinkControl
