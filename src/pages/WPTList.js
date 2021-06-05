import React from 'react'
import { WTPList, Ronglist } from '../Data/WTPdata';

const WPTList = () => {

    const rong = Ronglist.length - WTPList.length;

    return (
        <div className='in-screen border'>
            <div className='blocks'>
                <div className='block-left block-75'>
                    <div className='menu-head padding-0'>
                        <div className='blocks'>
                            <div className='block-left padding-05'>
                                <span className=''>WTP List</span>
                            </div>
                            <div className='block-right width-auto padding-0'>
                                <span className='border padding-05'>GC</span>
                                <span className='border padding-05'>997</span>
                                <span className='border padding-05 border-r-0'>01</span>
                            </div>
                        </div>
                        <div className='data list padding-05'>
                            <ul className='clear-list flex-box font-size-1 height-1664'>
                                {WTPList.map((WTPList, index) => {
                                    return (
                                        <li key={index} className={index === 0 ? 'ctrl width-3 ctrl line-1 active' : 'ctrl width-3 line-1 ctrl '}>
                                            {WTPList.name}
                                        </li>
                                    )
                                })}
                                {Ronglist.map((Ronglist, index) => {
                                    if(index < rong ){
                                        return (
                                            <li className='width-3 line-1'>
                                                {Ronglist.name}
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                        <div className='flex-box letter-spacing-2 font-size115 border border-r-0'>
                            <span >B</span>
                            <span > &ordm; R</span>
                            <span >NM</span>
                        </div>
                    </div>
                </div>
                <div className='block-right block-25'>
                    <div className='dechovui text-align-center font-size-12 padding-0-5'>
                        <div className>PgUp</div>
                        <div className='margin-b-05'>PgDn</div>
                    </div>
                    <div className='dechovui text-align-center font-size-14 border border-l-0 border-r-0 letter-spacing-2'>
                        <div className='padding-0-5'>Start</div>
                        <div className='padding-0-5'>Finish</div>
                    </div>
                    <div className='dechovui text-align-center font-size-14 border-bt letter-spacing-2'>
                        <div className=''>
                            <select className='form-input select-bold border-0 '>
                                <option defaultValue="time">TIME</option>
                                <option defaultValue="vtd">VTD</option>
                            </select>
                        </div>
                        <div className='text-align-center '>
                            <input type='numb' defaultValue='012' className='form-input margin-0 border-0 bit-rate max-w-25' />.
                            <input type='numb' defaultValue='23' className='form-input  margin-0 border-0 bit-rate max-w-25' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='blocks'>
                <div className='block-left block-65 border-r-0'>
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
                <div className='block-left block-35 font-size-12 border-r-0 letter-spacing-2'>
                    <div className='padding-05 border border-t-0 border-r-0'>VMG:
                        <span className='vmg'>006.23</span>
                    </div>
                    <div className='padding-05 '>WPT: <span className='wpt'></span></div>
                </div>
            </div>
            <div className='pop-up display-none'>
                <div className='popup-wrapper border font-size-12 padding-0-5'>
                    <div class="border padding-01 ">
                        <div class="">
                            <ul class=" clear-list letter-spacing-2">
                                <li id_item="108" class="item ctrl active"><a class="fix-1 nav-link font-size-11" href="/">Edit</a></li>
                                <li id_item="109" class="item ctrl "><a class="nav-link font-size-11 fix-1" href="/">Erase</a></li>
                                <li id_item="110" class="item ctrl border-bt-1 "><a class="nav-link font-size-11 fix-1" href="/trk/newwtp">New</a></li>
                                <li id_item="111" class="item ctrl "><a class="nav-link font-size-11 fix-1" href="/">Start</a></li>
                                <li id_item="112" class="item ctrl border-bt-1 "><a class="nav-link font-size-1 fix-1" href="/">Finish</a></li>
                                <li id_item="112" class="item ctrl "><a class="nav-link font-size-11 fix-1" href="/">Finish</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WPTList;
