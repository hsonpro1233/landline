import React from 'react'
import { Link } from 'react-router-dom'
import { selectDatum } from '../Data/MenuData'
import { WTPList } from '../Data/WTPdata'

const NewWPT = () => {

    const addData = (e) => {
        e.preventDefault()
        const data = {
            name: document.getElementById('name_wtp').value,
            lat1: document.getElementById('lat1').value,
            lat2: document.getElementById('lat2').value,
            lat3: document.getElementById('lat3').value,
            lon1: document.getElementById('lon1').value,
            lon2: document.getElementById('lon2').value,
            lon3: document.getElementById('lon3').value,
            datum: document.getElementById('datum').value
        }
        WTPList.push(data)
        document.getElementById('go').click()
        
    }

    return (
        <div className='in-screen '>
            <div className='menu-head'>
                <nav className='nav-head nav'>
                    <ul>
                        <li className='item'>NEW WPT/Edit WPT</li>
                    </ul>
                </nav>
            </div>
            <div className='in-main padding-05 '>
                <div className='classform padding-0-5 margin-b-2 '>
                    <span className='form-name'>NAME:</span>
                    <input type='text' id='name_wtp' defaultValue='Shepe Levkiy' className='form-input' />
                </div>

                <div className='item margin-b-1'>
                    <span className='margin-r-1 font-size-125'>Datum</span>
                    <span className='text'>
                        <select className='form-input select-bold' name='datum' id='datum'>
                            {selectDatum.map((selectDatum, index) => {
                                if(index === 0){
                                    return (
                                        <option selected defaultValue={selectDatum.value}>
                                            {selectDatum.lable}
                                        </option>
                                    )
                                } else {
                                    return (
                                        <option defaultValue={selectDatum.value}>
                                            {selectDatum.lable}
                                        </option>
                                    )
                                }
                                
                            })}
                        </select>
                    </span>
                </div>
                <div className='item  font-size-125 margin-b-1'>
                    <span className='margin-r-1'>Lat</span>
                    <span className='text'>
                        <input type='numb' id='lat1' defaultValue='00' className='text-align-right form-input  font-size-125 border-0 bit-rate max-w-25' /> &ordm;
                        <input type='numb' id='lat2' defaultValue='00' className='form-input  font-size-125 border-0 bit-rate max-w-25' />.
                        <input type='numb' id='lat3' defaultValue='0000' className='form-input  font-size-125 border-0 bit-rate max-w-45' />'
                    </span>N
                </div>
                <div className='item  font-size-125'>
                    <span className='margin-r-1'>lon</span>
                    <span className='text'>
                        <input type='numb' id='lon1' defaultValue='000' className='form-input  font-size-125 border-0 bit-rate max-w-25' max='100' /> &ordm;
                        <input type='numb' id='lon2' defaultValue='00' className='form-input  font-size-125 border-0 bit-rate max-w-25' />.
                        <input type='numb' id='lon3' defaultValue='0000' className='form-input  font-size-125 border-0 bit-rate max-w-45' />'
                    </span>E
                </div>
            </div>
            <div className='menu-head'>
                <div className='classform width-100 flex-end'>
                    <Link to='/trk/wtplist' id='add' className='button border' onClick={addData}>ok</Link>
                    <Link to='/trk/wtplist' id='go'></Link>
                </div>
            </div>
        </div>
    )
}

export default NewWPT
