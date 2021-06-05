import React from 'react'

const HeadScreen = () => {
    return (
        <div className='screen_head'>
            <div className='screen_head-block'>
                <div className='tag-name'>COG</div>
                <div><span className='tag-value'>127.86</span> &ordm;</div>
            </div>
            <div className='screen_head-block'>
                <div className='tag-name'>SOG, kn</div>
                <div><span className='tag-value'>0.0</span></div>
            </div>
            <div className='screen_head-block'>
                <div className='tag-name'>BRG</div>
                <div><span className='tag-value'>324.0</span> &ordm;</div>
            </div>
            <div className='screen_head-block'>
                <div className='tag-name'>RNG, NM</div>
                <div><span className='tag-value'>127.86</span></div>
            </div>
        </div>
    )
}

export default HeadScreen
