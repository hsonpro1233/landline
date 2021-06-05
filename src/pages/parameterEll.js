import React from 'react'
import { Link } from 'react-router-dom'

const parameterEll = () => {
    return (
        <div className='in-screen ell'>
            <div className='menu-head letter-spacing-1 text-align-center font-size-125 margin-b-1 '>Parameter Ellipsoid</div>
            <div className='in-para in-main padding-05'>
                <div className='classform'>
                    <span className='form-name'>Major semiaxis</span>
                    <input type='numb' defaultValue='06739854.0' className='form-input' />
                </div>
                <div className='classform'>
                    <span className='form-name'>e2</span>
                    <input type='numb' defaultValue='07.5' className='form-input' />
                </div>
                <div className='classform'>
                    <span className='form-name'>Bias X</span>
                    <span>+<input type='numb' defaultValue='000.0' className='form-input ' /></span>
                </div>
                <div className='classform'>
                    <span className='form-name'>Bias Y</span>
                    <span>+<input type='numb' defaultValue='000.0' className='form-input ' /></span>
                </div>
                <div className='classform'>
                    <span className='form-name'>Bias Z</span>
                    <span>+<input type='numb' defaultValue='000.0' className='form-input ' /></span>
                </div>
                <div className='classform'>
                    <span className='form-name'>Angle X</span>
                    <span>+<input type='numb' defaultValue='0.000' className='form-input ' /></span>
                </div>
                <div className='classform'>
                    <span className='form-name'>Angle Y</span>
                    <span>+<input type='numb' defaultValue='0.000' className='form-input ' /></span>
                </div>
                <div className='classform'>
                    <span className='form-name'>Angle Z</span>
                    <span>+<input type='numb' defaultValue='0.000' className='form-input ' /></span>
                </div>
                <div className='classform'>
                    <span className='form-name'>Scale factor</span>
                    <span>+<input type='numb' defaultValue='0.000000' className='form-input ' /></span>
                </div>
                <div className='classform'>
                    <span className='font-size-125-i'>Base datum</span>
                    <Link to='/menu/setup/control'>
                        <button className='border-0'>
                            ok
                        </button>
                    </Link>
                    
                    <span className='font-size-125-i'>
                        <select className='form-input select-bold'>
                            <option selected value="WGS-84">WGS-84</option>
                            <option value="Π3-90">Π3-90 </option>
                        </select>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default parameterEll
