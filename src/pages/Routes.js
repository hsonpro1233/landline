import React from 'react'
import { WTPList, Ronglist } from '../Data/WTPdata';

const Routes = () => {

    const rong = 10 - WTPList.length;
    return (
        <div className='in-screen border'>
            <div className='blocks'>
                <div className='block-left'>
                    <div className='block-head padding-05 font-size-125'>Route:<span className='margin-l-2'>mapw.1</span></div>
                    <nav className='list list-start list-route padding-0-3'>
                        <ul className='clear-list flex-box'>
                            {WTPList.map((WTPList, index) => {
                                    return (
                                        <div className='item rl-item ctrl margin-bt-75'>
                                            <span className='numb margin-r-1 font-size-125'>{index < 9 ? '0'+ (index + 1) : index + 1} </span>
                                            <span className='text font-size-125 '><input type='text' defaultValue={WTPList.name} className='form-input bit-rate max-w-75' /></span>
                                        </div>
                                    )
                                })}
                                {Ronglist.map((Ronglist, index) => {
                                    if(index < rong ){
                                        return (
                                            <div className='item rl-item ctrl margin-bt-75'>
                                                <span className='numb margin-r-1 font-size-125'>{index + WTPList.length < 9 ? '0'+ (index + WTPList.length + 1) : index + WTPList.length + 1} </span>
                                                <span className='text font-size-125 '><input type='text' defaultValue={Ronglist.name} className='form-input bit-rate max-w-75' /></span>
                                            </div>
                                        )
                                    }
                                })}
                        </ul>
                    </nav>
                </div>
                <div className='block-right start-end padding-2-1'>
                    <div className='text-align-center font-size-125'>PgUp</div>
                    <div className='text-align-center font-size-125'>PgDn</div>
                </div>
            </div>
            <div className='blocks border-t-1'>
                <div className='block-left block-40 font-size-12 border-r-0 letter-spacing-2'>
                    <div className='padding-05 '>WPT: <span className='wpt'></span></div>
                </div>
                <div className='block-right block-60 border-r-0'>
                    <div className='item  '>
                        <span className='margin-r-1'>Lat</span>
                        <span className='text'>
                            <input type='numb' defaultValue='12' className=' form-input text-align-right  border-0 bit-rate max-w-25' /> &ordm;
                            <input type='numb' defaultValue='34' className='form-input text-align-center border-0 bit-rate max-w-25' />.
                            <input type='numb' defaultValue='4567' className='form-input   border-0 bit-rate max-w-45' />'
                        </span>
                    </div>
                    <div className='item  '>
                        <span className='margin-r-1'>lon</span>
                        <span className='text'>
                            <input type='numb' defaultValue='012' className='form-input   border-0 bit-rate max-w-25' max='100' /> &ordm;
                            <input type='numb' defaultValue='23' className='form-input text-align-center border-0 bit-rate max-w-25' />.
                            <input type='numb' defaultValue='3450' className='form-input   border-0 bit-rate max-w-45' />'
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Routes
