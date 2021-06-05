import React from 'react'
import { Link } from 'react-router-dom'

const Beacon = () => {  
    return (
        <div className='beacon-screen in-screen'>
            <div className='menu-head'>BEACON</div>
            <div className='padding-0-5 font-size-125 border border-r-3 border-bt-3'>
                <nav className='nav-head nav'>
                    <ul>
                        <li className='item'>BEACON STATION</li>
                        <li className='item'>AUTO</li>
                    </ul>
                </nav>
                <div className='in-main padding-05'>
                    <div className='classform'>
                        <span className='form-name'>NAME:</span>
                        <input type='text' defaultValue='Shepe Levkiy' className='form-input' />
                    </div>
                    <div className='blocks'>
                        <div className='classform'>
                            <span className='form-name'>ID:</span>
                            <input type='numb' defaultValue='5' className='form-input' />
                        </div>
                        <div className='classform'>
                            <span className='form-name'>Freq:</span>
                            <input type='numb' defaultValue='3110' className='form-input width-35' />
                            <span className='form-tag'>kHz</span>
                        </div>
                    </div>
                    <div className='blocks flex-end'>
                        <div className='classform max-width'>
                            <span className='form-name letter-spacing-1 '>Bit Rate:</span>
                            <input type='numb' defaultValue='100' className='form-input bit-rate max-w-65' />
                            <span className='form-tag'>bps</span>
                        </div>
                    </div>
                    <div className='blocks'>
                        <div className='classform'>
                            <span className='form-name '>SS:</span>
                            <input type='numb' defaultValue='42' className='form-input max-w-35' />
                            <span className='form-tag'>dBuV/m</span>
                        </div>
                        <div className='classform flex-end pading-right-5'>
                            <span className='form-name'>SNR:</span>
                            <input type='numb' defaultValue='26' className='form-input max-w-35' />
                            <span className='form-tag'>dB</span>
                        </div>
                    </div>
                    <div className='blocks font-size-125 big-check'>
                        <div className='classform'>
                            <input 
                                type="checkbox" 
                                value='value1'
                            /> AUTO Freq
                        </div>
                        <div className='classform'>
                            <input 
                                type="checkbox" 
                                value='value1'
                            /> AUTO Bit Rate
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-screen padding-5'>
                <div className='blocks font-size-125 big-check'>
                    <div className='classform width-75'>
                        <span className='form-name'>NAME:</span>
                        <select className='form-input select-bold'>
                            <option selected value="demodulation">Demodulation</option>
                            <option value="search">Search</option>
                            <option value="manual">Manual</option>
                        </select>
                    </div>
                    <div className='classform width-25 flex-end'>
                        <Link to='/menu/setup'>
                            <button>
                                ok
                            </button>
                        </Link>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Beacon
