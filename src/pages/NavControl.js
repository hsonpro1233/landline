import React from 'react'
import Nav from '../components/Nav'
import { menuControl } from '../Data/MenuData'

const LinkControl = () => {
    return (
        <div className='link-control in-screen'>
            <div className='menu-head'>Control</div>
            <div className='main-menu height-220'>
                <nav className='nav in-nav'>
                    <Nav data={menuControl} />
                </nav>
            </div>
            <div className='footer-menu'>Control</div>
        </div>
    )
}

export default LinkControl
