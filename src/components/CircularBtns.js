import React,{ useState } from 'react'
import '../Css/Circular.css'
import {NavData} from '../Data/MenuData'

const CircularBtns = () => {
    const ctrl = document.getElementsByClassName("ctrl");
    const length = ctrl.length;
    const [current, setCurrent] = useState(0);
    //console.log(length);

    const next = () => {
        
        if( ctrl.length > 0 ){
            ctrl[current].classList.remove("active");
            if( current + 1 >= length ) {
                ctrl[0].classList.add("active");
            } else {
                ctrl[ current + 1 ].classList.add("active");
                
            }
            setCurrent(current=> ( current === length - 1 ? 0 : current + 1 ))
        }
    }

    const prev = () => {
        if( ctrl.length > 0 ) {
            ctrl[current].classList.remove("active");
            if( current <= 0 ) {
                ctrl[length - 1].classList.add("active");
            } else {
                ctrl[ current - 1 ].classList.add("active");
            }
            
            setCurrent(current=> ( current === 0 ? length - 1 : current - 1 ))
        }
    }


    const ent = () => {
        if(ctrl.length > 0) {
            const active = ctrl[current];
            // eslint-disable-next-line no-lone-blocks
            {NavData.map((NavData, index) => {
                var cr = index + 1
                if( cr.toString() === active.getAttribute('id_item') ) {
                    //console.log(active.getAttribute('id_item'))
                    window.location.href =  NavData.link;
                    setCurrent(current => 0)
                }
            })}
        }
    } 


    return (
        <div className="circular">
            <span className="item top">
                <button 
                    className='btn btn-func btn-ctrl'
                    onClick={prev}
                >
                </button>
            </span>
            <span className="item right">
                <button 
                    className='btn btn-func btn-ctrl'
                    onClick={next}
                >
                </button>
            </span>
            <span className="item left">
                <button 
                    className='btn btn-func btn-ctrl'
                    onClick={prev}
                >
                </button>
            </span>
            <span className="item bottom">
                <button 
                    className='btn btn-func btn-ctrl'
                    onClick={next}
                >
                </button>
            </span>
            <span className="center">
                <button 
                    className='btn btn-func btn-ctrl'
                    onClick={ent}
                >
                </button>
            </span>
        </div>
    )
}

export default CircularBtns
