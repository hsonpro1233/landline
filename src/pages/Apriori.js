import React from 'react'
import { Link } from 'react-router-dom'

const Apriori = () => {
    return (
        <div className='in-screen apriori'>
            <div className=' border in-main padding-05'>
                <div className=''>
                    <div className="font-size-125 padding-05 letter-spacing-2">Entering  the  a  priori  data</div>
                    <div className="classform padding-0-5 margin-b-1 ">
                        <span className="form-name">Datum:</span>
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
                    <div className=' margin-b-1'>
                        <div className='item  font-size-125'>
                            <span className='margin-r-1'>Lat</span>
                            <span className='text'>
                                <input type='numb' defaultValue='00' className='text-align-right form-input  font-size-125 border-0 bit-rate max-w-25' /> &ordm;
                                <input type='numb' defaultValue='00' className='form-input  font-size-125 border-0 bit-rate max-w-25' />.
                                <input type='numb' defaultValue='0000' className='form-input  font-size-125 border-0 bit-rate max-w-45' />'
                            </span> N
                        </div>
                        <div className='item font-size-125'>
                            <span className='margin-r-1'>lon</span>
                            <span className='text'>
                                <input type='numb' defaultValue='000' className='form-input  font-size-125 border-0 bit-rate max-w-25' max='100' /> &ordm;
                                <input type='numb' defaultValue='00' className='form-input  font-size-125 border-0 bit-rate max-w-25' />.
                                <input type='numb' defaultValue='0000' className='form-input  font-size-125 border-0 bit-rate max-w-45' />'
                            </span> E
                        </div>
                    </div>
                    <div className=''>
                        <div className='font-size-125 item'>
                            <span className='margin-r-1'>Date</span>
                            <input type='numb' defaultValue='01' className='margin-0 text-align-right form-input  font-size-125 border-0 bit-rate max-w-15' />.
                            <input type='numb' defaultValue='01' className='form-input  font-size-125 border-0 bit-rate max-w-25' />.
                            <input type='numb' defaultValue='2006' className='form-input  font-size-125 border-0 bit-rate max-w-45' />
                        </div>
                        <div className='font-size-125 item'>
                            <span className='margin-r-1'>Time</span>
                            <input type='numb' defaultValue='00' className='margin-0 text-align-right form-input  font-size-125 border-0 bit-rate max-w-15' />:
                            <input type='numb' defaultValue='00' className='form-input  font-size-125 border-0 bit-rate max-w-25' />:
                            <input type='numb' defaultValue='00' className='form-input  font-size-125 border-0 bit-rate max-w-45' />
                        </div>
                    </div>
                    <div className='classform justify-content-center padding-25'>
                        <Link to='/menu/setup/control'>
                            <button className='border-0'>
                                ok
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
            <div className='border border-t-0 font-size-125'>WGS-84</div>
        </div>
    )
}

export default Apriori
