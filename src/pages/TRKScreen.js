import React from 'react'
import Nav from '../components/Nav'
import { menuWTP } from '../Data/MenuData'

const TRKScreen = () => {
    return (
        <div className='trk-screen in-screen'>
            <div className='menu-head'>WP/TRK</div>
            <div className='main-menu height-220'>
                <nav className='nav in-nav'>
                    <Nav data={menuWTP} />
                </nav>
            </div>
            <div className='footer-menu'>WP/TRK</div>
        </div>
    )
}

export default TRKScreen
