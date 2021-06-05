import React from 'react'

const Parametest = () => {
    return (
        <div className='in-screen'>
            <div className='menu-head text-align-center font-size125 margin-b-1'>Parametest</div>
            <div className='in-para in-main padding-05'>
                <div className='classform'>
                    <span className='form-name'>Arrival radius value</span>
                    <div><input type='numb' defaultValue='0050' className='form-input' />m</div>
                </div>
                <div className='classform'>
                    <span className='form-name'>Off track value</span>
                    <div><input type='numb' defaultValue='0050' className='form-input' />m</div>
                </div>
                <div className='classform'>
                    <span className='form-name'>Calculation</span>
                    <select className='form-input select-bold'>
                        <option selected value="Rhumb line">Rhumb line</option>
                        <option value="Great Circle">Great Circle</option>
                    </select>
                </div>
                <div className='classform'>
                    <span className='form-name'>Additional turn angle </span>
                    <div><input type='numb' defaultValue='02.00' className='form-input' />
                    <span className='form-name'> &ordm;</span>
                    </div>
                </div>
                <div className='classform justify-content-center'>
                    <button className='border-0'>
                        ok
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Parametest
