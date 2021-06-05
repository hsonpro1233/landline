import React from 'react'
import FooterScreen from '../components/FooterScreen'
import HeadScreen from '../components/HeadScreen'
import MainScreen from '../components/MainScreen'
import Nav from '../components/Nav'
import { Gnsspopup } from '../Data/MenuData'

const DefaulScreen = () => {
    return (
        <div className='in-screen'>
            <HeadScreen/>
            <MainScreen/>
            <FooterScreen/>
            <div className='pop-up popup-defaul display-none'>
                <div className='popup-wrapper border font-size-12 padding-0-5'>
                    <div className='border padding-01 '>
                        <div className='letter-spacing-2  margin-b-05 border-bt-1'>Status data A</div>
                        <div className='letter-spacing-2'>
                            <Nav data={Gnsspopup} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefaulScreen
