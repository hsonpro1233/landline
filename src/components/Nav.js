import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/NavScreen.css'

const Nav = ({data}) => {
    return (
        <ul className=' clear-list'>
            {data.map((data, index) => {
                return (
                <li id_item={data.id_item} className={index === 0 ? 'item ctrl  active' : 'item ctrl '}>
                    <Link to={data.link} className='nav-link'>{data.item}</Link>
                </li>
                );
            })}
        </ul>
    )
}

export default Nav
