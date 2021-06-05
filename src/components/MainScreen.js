import React from 'react'

const MainScreen = () => {
    return (
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
    )
}

export default MainScreen
