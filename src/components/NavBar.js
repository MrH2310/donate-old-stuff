import {Link} from 'react-scroll';

const NavBar = () => {
    const lgtBorder = (e) => {
        e.target.style.borderColor = '#3c3c3c';
    };

    const extBorder = (e)=> {
        e.target.style.borderColor = 'transparent'
    }

    return (
        <div className="nav-bar">
            <Link to='welcome' smooth={true} duration={200} onMouseEnter={lgtBorder} onMouseLeave={extBorder}>Start</Link>
            <Link to='what' smooth={true} duration={400} onMouseEnter={lgtBorder} onMouseLeave={extBorder}>O co chodzi?</Link>
            <Link to='about' smooth={true} duration={600} onMouseEnter={lgtBorder} onMouseLeave={extBorder}>O nas</Link>
            <Link to='organisations' smooth={true} duration={800} onMouseEnter={lgtBorder} onMouseLeave={extBorder}>Fundacja i organizacje</Link>
            <Link to='contact' smooth={true} duration={1000} onMouseEnter={lgtBorder} onMouseLeave={extBorder}>Kontakt</Link>
        </div>
    )
};

export default NavBar;