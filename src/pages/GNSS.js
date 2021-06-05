import React from 'react'
import '../Css/Gnss.css'

const GNSS = () => {
    return (
        <div className='gnss'>
            <div className='screen_head gnss-head'>
                PERSON OVERBOARD GNSS
            </div>
            <div className='main-screen'>
                <div className='coordinates'>
                    <span className='value longitude'>49&ordm;59&acute;07.18&acute;&acute;</span>
                    <span className='direction'>N</span>
                </div>
                <div className='coordinates'>
                    <span className='value latitude'>008&ordm;42&acute;18.10&acute;&acute;</span>
                    <span className='direction'>W</span>
                </div>
            </div>
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
                        <div className='blocks block-chars border-bt-0'>
                            <div className='block-char-2'>
                                <div className='in_footer-block'>
                                    <span className='tag-name'>COG</span>
                                    <span className='tag-value  font-size-12'>127.86</span> &ordm;
                                </div>
                                <div className='in_footer-block'>
                                    <span className='tag-name'>SOG</span>
                                    <span className='tag-value  font-size-12'>0.0</span>
                                </div>
                            </div>
                            <div className='block-char-2'>
                                <div className='in_footer-block'>
                                    <span className='tag-name'>BRG</span>
                                    <span className='tag-value font-size-12'>127.86</span> &ordm;
                                </div>
                                <div className='in_footer-block'>
                                    <span className='tag-name'>RMG</span>
                                    <span className='tag-value font-size-12'>00.000MN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='block-right'>
                        <div className='blocks block-chars'>
                            <div className='block-char-2'>3D</div>
                            <div className='block-char-2'>A</div>
                        </div>
                        <div className='block-rms'>
                            <div className='tag-name'>RMS</div>
                            <div className='value'><span className='tag-value'>2.3</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GNSS
