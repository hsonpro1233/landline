import React from 'react'
import { Link } from 'react-router-dom'

const Limitation = () => {
    return (
        <div className='in-screen'>
            <div className='menu-head text-align-center font-size125 margin-b-1'>Limitation</div>
            <div className='in-para in-main padding-05'>
                <div className='classform'>
                    <span className='form-name'>1.Altitude</span>
                    <div>+<input type='numb' defaultValue='0000' className='form-input max-w-35' />m</div>
                </div>
                <div className='classform'>
                    <span className='form-name'>2.Elevation</span>
                    <div><input type='numb' defaultValue='07.5' className='form-input max-w-4' />&ordm;</div>
                </div>
                <div className='classform'>
                    <span className='form-name'>3.PDOP</span>
                    <input type='numb' defaultValue='07.5' className='form-input max-w-45 ' />
                </div>
                <div className='classform'>
                    <span className='form-name'>4.HDOP</span>
                    <input type='numb' defaultValue='07.5' className='form-input max-w-45 ' />
                </div>
                <div className='classform'>
                    <span className='form-name'>5.VDOP</span>
                    <input type='numb' defaultValue='07.5' className='form-input max-w-45 ' />
                </div>
                <div className='classform justify-content-center'>
                    <Link to='/menu/setup/control'>
                        <button className='border-0'>
                            ok
                        </button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Limitation
