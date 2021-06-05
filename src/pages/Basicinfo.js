import React from 'react'

const Basicinfo = () => {
    return (
        <div className='in-screen border'>
            <div className='menu-head text-align-center border-bt-1 padding-0-5 '>Basic infomation</div>
            <div className='blocks footer-block border-bt-0'>
                <div className='block-left widtr-65'>
                    <div className='table basic-pd letter-spacing-1'>
                        <table>
                        <tr>
                            <td></td>
                            <td>Nav</td>
                            <td>Viz</td>
                        </tr>
                        <tr>
                            <td>GLONASS</td>
                            <td>05</td>
                            <td>05</td>
                        </tr>
                        <tr>
                            <td>GPS</td>
                            <td>04</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>S BAS</td>
                            <td>00</td>
                            <td>03</td>
                        </tr>
                        </table>
                    </div>
                    <div className='letter-spacing-2 font-size-15 padding-25-2'>Min elvation 5.1</div>
                </div>
                <div className='block-right widtr-35'>
                    <div className='center'>
                        <div>PDOP=2.0</div>
                        <div className=' padding-0-5'>HDOP=1.3</div>
                        <div>vDOP=1.5</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basicinfo
