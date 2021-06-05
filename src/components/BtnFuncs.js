import React,{ useState } from 'react'
import { Button } from './Button'
import {GrSwim} from 'react-icons/gr'
import '../Css/BtnFuncs.css'
import CircularBtns from './CircularBtns'
import { Link } from 'react-router-dom'

 
const BtnFuncs = () => {
    const [numb, setCurrent] = useState(0);
    const [paths, setCurrents] = useState('/');
    
    const page = () => {
        if(numb === 0) {
            setCurrents(paths=> '/')
        } else if(numb === 1) {
            setCurrents(paths=> '/setup/beacon')
        } else {
            setCurrents(paths=> '/info/pkiinfo')
        }
        // console.log(paths)
        setCurrent(numb=> ( numb === 2 ? 0 : numb + 1 ))
    }

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
        var popup = document.getElementsByClassName('popup-defaul');
        if( popup.length > 0 ) {
            if(isOpen){
                popup[0].classList.remove("display-none");
            } else {
                popup[0].classList.add("display-none");
            }
        }
    }
    
    return (
        <div className='btn-funcs'>
            <div className='block-left btns-left'>
                <Button path='/' onClick={toggle}><GrSwim/></Button>
                <Button path='/menu/nav'>NAV</Button>
                <Button path='/menu'>MENU</Button>
                <Button path='/menu/trk'>TRK</Button>
                <Link to={paths} className='btn-link'>
                    <button 
                        className='btn btn-func '
                        onClick={page}
                    >
                        <span className='child'>PAGE</span>
                    </button>
                </Link>
            </div>
            <div className='block-right btns-right'>
                <div className='btn-wrapper'>
                    <CircularBtns/>
                </div>
            </div>
        </div>
    )
}

export default BtnFuncs
