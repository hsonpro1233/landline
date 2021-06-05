import React from 'react'
import '../Css/Gnss.css'

const CurrentRoute = () => {
    return (
        <div className='current-route-screen in-screen'>
            <div className='blocks footer-block border-bt-0'>
                <div className='block-left block-70 border-bt-0'>
                    <div className='big-block padding-05 '>
                        <div className='block-head font-size-125'>Route:<span className='margin-l-2'>POP</span></div>
                        <div className='tags padding-l-2'>
                            <div className='tag-block'>
                                <span className='tag-name brg margin-r-2'>BRG</span>
                                <span className='tag-value'>127.86 &ordm;</span>
                            </div>
                            <div className='tag-block'>
                                <span className='tag-name margin-r-2'>RNG</span>
                                <span className='tag-value'>0.001</span><span>NM</span>
                            </div>
                        </div>
                        <div className='block-footer font-size-125  text-align-center'>WTP:<span className='margin-l-2'>POP</span></div>
                    </div>
                </div>
                <div className='block-right block-30 list-tag border-bt-0'>
                    <div className='screen-tag-block'>
                        <div className='tag-name'>XTE, MN</div>
                        <div><span className='tag-value'>0.00</span></div>
                    </div>
                    <div className='screen-tag-block'>
                        <div className='tag-name'>COG</div>
                        <div><span className='tag-value'>215.5</span> &ordm;</div>
                    </div>
                    <div className='screen-tag-block border-bt-0'>
                        <div className='tag-name'>SOG, kn</div>
                        <div><span className='tag-value'>0.0</span></div>
                    </div>
                </div>
            </div>
            <div className='blocks footer-block border-bt-0'>
                <div className='block-left block-70'>
                    <div className='coordinatess text-align-center'>
                        <div className='coordinate small'>
                            <span className='value longitude'>49&ordm;59`07.18``</span>
                            <span className='direction'>N</span>
                        </div>
                        <div className='coordinate small'>
                            <span className='value latitude'>08&ordm;42`18.10``</span>
                            <span className='direction'>W</span>
                        </div>
                    </div> 
                </div>
                <div className='block-right block-30 list-tag'>
                    <div className='screen-tag-block border-bt-0'>
                        <div className='tag-name'>TRIP, NM</div>
                        <div><span className='tag-value'>0.000</span></div>
                    </div>
                </div>
            </div>
            <div className='blocks footer-block '>
                <div className='block-left block-70'>
                    <div className='blocks'>
                        <div className='block-left block-50'>
                            <div className='date-time-2 letter-spacing-2 text-align-center'>
                                <div className='name'>Date/Time</div>
                                <div className='value date'>{new Date().toLocaleDateString()}</div>
                                <div className='value time'>{new Date().toLocaleTimeString()}</div>
                            </div>
                        </div>
                        <div className='block-right block-50'>
                            <div className='blocks block-chars height-50'>
                                <div className='block-char-2'>3D</div>
                                <div className='block-char-2'>A</div>
                            </div>
                            <div className='block-rms text-align-center'>
                                <div className='tag-name'>WGS-84</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='block-right block-30 list-tag'>
                    <div className='screen-tag-block border-bt-0'>
                        <div className='tag-name'>TTG</div>
                        <div><span className='tag-value'>XX:XX:XX</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentRoute
