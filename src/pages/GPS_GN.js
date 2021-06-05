import React from 'react'
import { Link } from 'react-router-dom'

const GPS_GN = () => {
    return (
        <div className='in-screen border'>
            <div className='blocks padding-0-5 margin-01 letter-spacing-1'>
                <div className='block-left border margin-r-2 block-30'>
                    <div className='menu-head margin-b-05'>Use GNSS</div>
                    <div className='block-checks flex-colum'>
                        <div className='check margin-b-05'>
                            <input 
                                type="checkbox" 
                                value='value1'
                                className='ctrl'
                            /> GPS
                        </div>
                        <div className='check margin-b-05'>
                            <input 
                                type="checkbox" 
                                className='ctrl'
                                value='value1'
                            /> GLONASS
                        </div>
                        <div className='check margin-b-05'>
                            <input 
                                type="checkbox" 
                                className='ctrl'
                                value='value1'
                            /> S BAS
                        </div>
                    </div>
                </div>
                <div className='block-right block-65 letter-spacing-2 border padding-05 '>
                    <div className='menu-head margin-b-05'>Use diff.corr.</div>
                    <div className='block-checks flex-colum'>
                        <div className='check margin-b-05'>
                            <input 
                                type="checkbox" 
                                value='value1'
                                className='ctrl'
                            /> from S BAS
                        </div>
                        <div className='check margin-b-05'>
                            <input 
                                type="checkbox" 
                                className='ctrl'
                                value='value1'
                            /> from beacon
                        </div>
                    </div>
                </div>
            </div>
            <div className='in-para in-main padding-05 margin-b-05 padding-r-2 margin-01'>
                <div className='classform'>
                    <span className='form-name ctrl text-align-center'>GNSS mode</span>
                    <select className='form-input select-bold margin-r-2'>
                        <option value="evem">2D</option>
                        <option selected value="odd">3D</option>
                    </select>
                </div>
                <div className='classform'>
                    <span className='form-name ctrl'>Datum</span>
                    <select className="form-input select-bold">
                        <option value="WGS-84">WGS-84</option>
                        <option value="Π3-90">Π3-90</option>
                        <option value="WGS-72">WGS-72</option>
                        <option value="CK-42">CK-42</option><option value="NAD-27">NAD-27</option>
                        <option value="NAD-83">NAD-83</option><option value="FINN">FINN</option>
                        <option value="FINN">FINN</option><option value="IND-75">IND-75</option>
                        <option value="CK-90">CK-90</option><option value="AL-CAN">AL-CAN</option>
                        <option value="EUR-79">EUR-79</option><option value="TOKYO">TOKYO</option>
                        <option value="ASTR84">ASTR84</option><option value="BRITAN">BRITAN</option>
                    </select>
                </div>
                <div className='classform flex-end margin-t-2 margin-bt-75'>
                    <Link to='/' className='border padding-05'>
                        OK
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GPS_GN
