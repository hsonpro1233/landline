import React from 'react'
import Nav from '../components/Nav'
import { menuSound } from '../Data/MenuData'

const Sound = () => {
    return (
        <div className='sound-screen in-screen'>
            <div className='menu-head'>Sound</div>
            <div className='main-menu'>
                <nav className='nav in-nav'>
                    <Nav data={menuSound} />
                </nav>
            </div>
        </div>
    )
}

export default Sound
