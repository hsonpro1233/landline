import React from 'react'

const Real = () => {
    return (
        <div className='in-screen'>
            <div className='menu-head text-align-center font-size125 margin-b-1'>Set parameter rel track</div>
            <div className='in-para new-wpt in-main padding-05'>
                <div className='classform'>
                    <span className='form-name'>Record track of </span>
                    <select className='form-input select-bold'>
                        <option selected value="time">Time</option>
                        <option value="distance">Distance</option>
                    </select>
                </div>
                <div className='classform'>
                    <span className='form-name'>Step of time </span>
                    <input type='numb' defaultValue='00' className='form-input' />
                </div>
                <div className='classform'>
                    <span className='form-name'>Step of distance </span>
                    <input type='numb' defaultValue='00' className='form-input' />
                </div>
                <div className='classform'>
                    <span className='form-name'>Threshold accuracy</span>
                    <input type='numb' defaultValue='50' className='form-input' />
                </div>
                <div className='classform'>
                    <span className='form-name'>Order of records</span>
                    <input type='text' defaultValue='cyclic' className='form-input' />
                </div>
                <div className='classform'>
                    <span className='form-name'>reserved</span>
                    <input type='text' defaultValue='11790/11904' className='form-input' />
                </div>
                <div className='classform justify-content-center'>
                    <button className=''>
                        ok
                    </button>
                </div>
            </div>
            <div className='menu-head font-size125'>Record RT of tuime</div>
        </div>
    )
}

export default Real
