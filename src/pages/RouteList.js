import React from 'react'

const RouteList = () => {
    return (
        <div className='in-screen route-list'>
            <div className='menu-head'>Route list</div>
            <div className='padding-0-5 list-start'>
                <nav>
                    <div className='item rl-item ctrl active'>
                        <span className='numb margin-r-1'>01</span>
                        <span className='text'><input type='text' defaultValue='pob' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl '>
                        <span className='numb margin-r-1'>02</span>
                        <span className='text'><input type='text' defaultValue='xxxxxx' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl '>
                        <span className='numb margin-r-1'>03</span>
                        <span className='text'><input type='text' defaultValue='yyyyyyy' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl '>
                        <span className='numb margin-r-1'>04</span>
                        <span className='text'><input type='text' defaultValue='aaaa' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl '>
                        <span className='numb margin-r-1'>05</span>
                        <span className='text'><input type='text' defaultValue='bbbbbbbbb' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl '>
                        <span className='numb margin-r-1'>06</span>
                        <span className='text'><input type='text' defaultValue='cccccc' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl '>
                        <span className='numb margin-r-1'>07</span>
                        <span className='text'><input type='text' defaultValue='dddd' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl '>
                        <span className='numb margin-r-1'>08</span>
                        <span className='text'><input type='text' defaultValue='XXXXXXXXXX' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl '>
                        <span className='numb margin-r-1'>09</span>
                        <span className='text'><input type='text' defaultValue='son' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl '>
                        <span className='numb margin-r-1'>10</span>
                        <span className='text'><input type='text' defaultValue='XXXXXXXXXX' className='form-input bit-rate max-w-75' /></span>
                    </div>
                </nav>
                <nav>
                    <div className='item rl-item ctrl'>
                        <span className='numb margin-r-1'>11</span>
                        <span className='text'><input type='text' defaultValue='XXXXXXXXXX' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl'>
                        <span className='numb margin-r-1'>12</span>
                        <span className='text'><input type='text' defaultValue='XXXXXXXXXX' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl'>
                        <span className='numb margin-r-1'>13</span>
                        <span className='text'><input type='text' defaultValue='XXXXXXXXXX' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl'>
                        <span className='numb margin-r-1'>14</span>
                        <span className='text'><input type='text' defaultValue='XXXXXXXXXX' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl'>
                        <span className='numb margin-r-1'>15</span>
                        <span className='text'><input type='text' defaultValue='XXXXXXXXXX' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl'>
                        <span className='numb margin-r-1'>16</span>
                        <span className='text'><input type='text' defaultValue='XXXXXXXXXX' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl'>
                        <span className='numb margin-r-1'>17</span>
                        <span className='text'><input type='text' defaultValue='XXXXXXXXXX' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl'>
                        <span className='numb margin-r-1'>18</span>
                        <span className='text'><input type='text' defaultValue='XXXXXXXXXX' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl'>
                        <span className='numb margin-r-1'>19</span>
                        <span className='text'><input type='text' defaultValue='XXXXXXXXXX' className='form-input bit-rate max-w-75' /></span>
                    </div>
                    <div className='item rl-item ctrl'>
                        <span className='numb margin-r-1'>20</span>
                        <span className='text'><input type='text' defaultValue='XXXXXXXXXX' className='form-input bit-rate max-w-75' /></span>
                    </div>
                </nav>
            </div>
            <div className='pop-up display-none'>
                <div className='popup-wrapper border font-size-12 padding-0-5'>
                    <div className='border padding-01 '>
                        <div className='letter-spacing-1 border-bt-1'>Status data A</div>
                        <div class="">
                            <ul class=" clear-list">
                                <li id_item="103" class="item ctrl  active"><a class="fix-1 nav-link font-size-11" href="/trk/wtplist/routes">Vew/Edit</a></li>
                                <li id_item="104" class="item ctrl "><a class="fix-1 nav-link font-size-11" href="/">Forward</a></li>
                                <li id_item="105" class="item ctrl "><a class="fix-1 nav-link font-size-11" href="/">View</a></li>
                                <li id_item="106" class="item ctrl "><a class="fix-1 nav-link font-size-11" href="/">Off</a></li>
                                <li id_item="107" class="item ctrl "><a class="fix-1 nav-link font-size-11" href="/">Erase</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RouteList
