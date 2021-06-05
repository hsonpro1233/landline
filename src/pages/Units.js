import React from 'react'

const Units = () => {
    return (
        <div className='in-screen units'>
            <div className=' border in-main padding-05'>
                <div className='padding-05'>
                    <div className='font-size-125 letter-spacing-1'>Plotting options</div>
                    <div className='font-size-125 letter-spacing-1'>Distance/speed units</div>
                    <div className='classform'>
                        <div className='check margin-r-2'>
                            <input 
                                type="checkbox" 
                                value='value1'
                            /> NM,kn
                        </div>
                        <div className='check'>
                            <input 
                                type="checkbox" 
                                value='value1'
                            /> Km,Kmh
                        </div>
                    </div>
                    <div className='font-size-125 letter-spacing-1'>Coordinates format</div>
                    <div className=''>
                        <div className='check margin-r-2 letter-spacing-1'>
                            <input 
                                type="checkbox" 
                                value='value1'
                            /> __*__.____'
                        </div>
                        <div className='check letter-spacing-1'>
                            <input 
                                type="checkbox" 
                                value='value1'
                            /> __*__'__.__''
                        </div>
                    </div>
                    <div className='font-size-125 letter-spacing-1'>Wacth time</div>
                    <div className='font-size-125 letter-spacing-1'>Time scale UTC(US)</div>
                    <div className='font-size-125 '>
                        <span className='margin-r-1'>Offset</span>+
                        <input type='numb' defaultValue='00' className='margin-0 text-align-right form-input  font-size-125 border-0 bit-rate max-w-15' />:
                        <input type='numb' defaultValue='00' className='form-input  font-size-125 border-0 bit-rate max-w-25' />:
                        <input type='numb' defaultValue='00' className='form-input  font-size-125 border-0 bit-rate max-w-45' />
                    </div>
                </div>
            </div>
            <div className='border border-t-0 height-end'></div>
        </div>
    )
}

export default Units
