import React from 'react'
import { Link } from 'react-router-dom'

const ICE = () => {
    return (
        <div className='in-screen border'>
            <div className='menu-head letter-spacing-2 '>IEC 61162 port settings</div>
            <div className='in-para in-main padding-05 padding-r-2 margin-r-2'>
                <div className='classform'>
                    <span className='form-name ctrl'>Baud rate</span>
                    <select className='form-input select-bold'>
                        <option value="odd">4800</option>
                        <option value="evem">9600</option>
                        <option selected value="none">38400</option>
                        <option selected value="none">115200</option>
                    </select>
                </div>
                <div className='classform'>
                    <span className='form-name ctrl'>Parity</span>
                    <select className='form-input select-bold'>
                        <option value="evem">Even</option>
                        <option value="odd">Odd</option>
                        <option selected value="none">none</option>
                    </select>
                </div>
                <div className='classform'>
                    <span className='form-name ctrl'>Enable ICE 61162</span>
                    <select className='form-input select-bold'>
                        <option selected value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </div>
            </div>
            <div className='list-checks flex-box font-size-11'>
                <div className='check'>
                    GGA <input 
                        type="checkbox" 
                        value='value1'
                        className='ctrl'
                    />        
                </div>
                <div className='check'>
                    GNS <input 
                        type="checkbox" 
                        value='value1'
                        className='ctrl'
                    />        
                </div>
                <div className='check'>
                    VTG <input 
                        type="checkbox" 
                        value='value1'
                        className='ctrl'
                    />        
                </div>
                <div className='check'>
                    GSA <input 
                        type="checkbox" 
                        value='value1'
                        className='ctrl'
                    />        
                </div>
                <div className='check'>
                    GSV <input 
                        type="checkbox" 
                        value='value1'
                        className='ctrl'
                    />        
                </div>
                <div className='check'>
                    DTM <input 
                        type="checkbox" 
                        value='value1'
                        className='ctrl'
                    />        
                </div>
                <div className='check'>
                    ZDA <input 
                        type="checkbox" 
                        value='value1'
                        className='ctrl'
                    />        
                </div>
                <div className='check'>
                    GBS <input 
                        type="checkbox" 
                        value='value1'
                        className='ctrl'
                    />        
                </div><div className='check'>
                    RMC <input 
                        type="checkbox" 
                        value='value1'
                        className='ctrl'
                    />        
                </div><div className='check'>
                    RMB <input 
                        type="checkbox" 
                        value='value1'
                        className='ctrl'
                    />        
                </div>
                <div className='check'>
                    GST <input 
                        type="checkbox" 
                        value='value1'
                        className='ctrl'
                    />        
                </div>
            </div>
            <div className='classform flex-end margin-b-15 margin-r-2'>
                <Link to='/menu/setup/linkcontrol'>
                    <button className='border-0'>
                        ok
                    </button>
                </Link>
                
            </div>
        </div>
    )
}

export default ICE
