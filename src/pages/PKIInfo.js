import React from 'react'
import '../Css/PKIInfo.css'

const PKIInfo = () => {
    return (
        <div className='in-screen PKIInfo'>
            <div className='head-table row'>
                <span className='tag-name'>Freq</span>
                <span className='tag-name'>Rate</span>
                <span className='tag-name'>ID</span>
                <span className='tag-name'>SNR</span>
                <span className='tag-name'>SS</span>
                <span className='tag-name'>%</span>
            </div>
            <div className='row-item'>
                <span className='numb'>1</span>
                <div className='row border active'>
                    <span className='tag-name'>311.0</span>
                    <span className='tag-name'>100</span>
                    <span className='tag-name'>5</span>
                    <span className='tag-name'>8</span>
                    <span className='tag-name'>14</span>
                    <span className='tag-name'>100</span>
                </div>
            </div>
            <div className='row-item'>
                <span className='numb'>2</span>
                <div className='row border'>
                    <span className='tag-name'>311.0</span>
                    <span className='tag-name'>100</span>
                    <span className='tag-name'>5</span>
                    <span className='tag-name'>8</span>
                    <span className='tag-name'>14</span>
                    <span className='tag-name'>100</span>
                </div>
            </div>
            <div className='row-item'>
                <span className='numb'>3</span>
                <div className='row border'>
                    <span className='tag-name'>311.0</span>
                    <span className='tag-name'>100</span>
                    <span className='tag-name'>5</span>
                    <span className='tag-name'>8</span>
                    <span className='tag-name'>14</span>
                    <span className='tag-name'>100</span>
                </div>
            </div>
            <div className='row-item'>
                <span className='numb'></span>
                <div className='note row border'>
                    <div className='text'>Active channel name</div>
                    <div className='text name'>Shepelevkiy(2)</div>
                    <div className='text'>Freq:   311.0</div>
                </div>
            </div>
        </div>
    )
}

export default PKIInfo
