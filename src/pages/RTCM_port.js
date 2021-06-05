import React from 'react'
import { Link } from 'react-router-dom'

const RTCM_port = () => {
    return (
        <div className='in-screen border height-screen padding-r-2'>
            <div className='menu-head letter-spacing-2 '>RTCM port settings</div>
            <div className='in-para in-main padding-05 padding-r-2'>
                <div className='classform'>
                    <span className='form-name ctrl'>Baud rate</span>
                    <select className='form-input select-bold'>
                        <option value="evem">2400</option>
                        <option value="odd">4800</option>
                        <option selected value="none">9600</option>
                    </select>
                </div>
                <div className='classform'>
                    <span className='form-name ctrl'>Parity</span>
                    <select className='form-input select-bold'>
                        <option selected value="evem">Even</option>
                        <option value="odd">Odd</option>
                        <option value="none">none</option>
                    </select>
                </div>
                <div className='classform'>
                    <span className='form-name ctrl'>Enable RTCM</span>
                    <select className='form-input select-bold'>
                        <option selected value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </div>
                <div className='classform flex-end margin-t-3'>
                    <Link to='/menu/setup/linkcontrol' className='border-0'>
                        ok
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RTCM_port
