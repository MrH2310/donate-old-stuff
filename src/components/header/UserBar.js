import {Link} from "react-router-dom";

const UserBar = () => {

    const lgtBorder = (e) => {
        e.target.style.borderColor = '#fad648';
    };

    const extBorder = (e)=> {
        e.target.style.borderColor = 'transparent'
    }

    return (
        <div className='user-bar'>
            <Link to='/login' onMouseEnter={lgtBorder} onMouseLeave={extBorder}>Zaloguj</Link>
            <Link to='/register' onMouseEnter={lgtBorder} onMouseLeave={extBorder}>Załóż konto</Link>
        </div>
    )
};

export default UserBar;