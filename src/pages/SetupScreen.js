import React from 'react'
import Nav from '../components/Nav'
import { menuSetup } from '../Data/MenuData'

const SetupScreen = () => {
    return (
        <div className='setup-screen in-screen'>
            <div className='menu-head'>Setup</div>
            <div className='main-menu height-220'>
                <nav className='nav in-nav'>
                    <Nav data={menuSetup} />
                </nav>
            </div>
            <div className='footer-menu'>Setup</div>
        </div>
    )
}

export default SetupScreen
