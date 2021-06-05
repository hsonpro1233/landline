import { Link } from 'react-router-dom';
import '../Css/Button.css'

export const NumbButton = ({
    numb_child,
    text_child,
}) => {
    return (
        <button 
            className='btn btn-numb flex-box justify-content-center '
        >
            <span className='numb_child'>{numb_child}</span>
            <div className='text_child padding-t-0-5 padding-l-0-5 max-width-2'>{text_child}</div>
        </button>
    );
}

export const Button = ({
    children,
    path,
    onClick
}) => {
    return (
        <Link to={path} className='btn-link'>
            <button 
                className='btn btn-func'
                onClick={onClick}
            >
                <span className='child'>{children}</span>
            </button>
        </Link>
    );
}

export const Evenbtn = ({
    children,
    path,
    onClick
}) => {
    return (
        <button 
            className='btn btn-func'
            onClick={onClick}
        >
            <span className='child'>{children}</span>
        </button>
    );
}
