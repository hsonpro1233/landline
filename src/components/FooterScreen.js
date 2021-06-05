import React from 'react'

const FooterScreen = () => {
    return (
        <div className='footer_screen'>
            <div className='date-time'>
                <div>
                    <span className='name'>Date</span>
                    <span className='value date'>{new Date().toLocaleDateString()}</span>
                </div>
                <div>
                    <span className='name'>Time</span>
                    <span className='value time' id='time'>{new Date().toLocaleTimeString()}</span>
                </div>
            </div>
            <div className='blocks footer-block'>
                <div className='block-left'>
                    <div className='blocks block-checks'>
                        <div className='check'>
                            <input 
                                type="checkbox" 
                                value='value1'
                                className='ctrl'
                            /> GPS
                            <div className='block-char'>N</div>
                        </div>
                        <div className='check'>
                            <input 
                                type="checkbox" 
                                className='ctrl'
                                value='value1'
                            /> GLONASS
                            <div className='block-char'>N</div>
                        </div>
                        <div className='check'>
                            <input 
                                type="checkbox" 
                                className='ctrl'
                                value='value1'
                            /> S BAS
                            <div className='block-char'>N</div>
                        </div>
                    </div>
                    <div className='blocks block-map'>
                        <div className='block block-wgs ctrl'>
                            <select className='form-input select-bold'>
                                <option selected defaultValue="WGS-84">WGS-84</option>
                                <option defaultValue="Π3-90">Π3-90</option>
                                <option defaultValue="WGS-72">WGS-72</option>
                                <option defaultValue="CK-42">CK-42</option>
                                <option defaultValue="NAD-27">NAD-27</option>
                                <option defaultValue="NAD-83">NAD-83</option>
                                <option defaultValue="FINN">FINN</option>
                                <option defaultValue="FINN">FINN</option>
                                <option defaultValue="IND-75">IND-75</option>
                                <option defaultValue="CK-90">CK-90</option>
                                <option defaultValue="AL-CAN">AL-CAN</option>
                                <option defaultValue="EUR-79">EUR-79</option>
                                <option defaultValue="TOKYO">TOKYO</option>
                                <option defaultValue="ASTR84">ASTR84</option>
                                <option defaultValue="BRITAN">BRITAN</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='block-right'>
                    <div className='blocks block-chars'>
                        <div className='block-char-2'>3D</div>
                        <div className='block-char-2'>A</div>
                    </div>
                    <div className='block-rms'>
                        <div className='tag-name'>RMS, M</div>
                        <div className='value'><span className='tag-value'>2.3</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterScreen
