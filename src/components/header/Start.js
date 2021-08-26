import {Link} from 'react-router-dom';

const Start =  () => {
    const lgtBorder = (e) => {
        e.target.style.borderColor = '#3c3c3c';
    };
    
    const extBorder = (e)=> {
        e.target.style.borderColor = 'transparent'
    };

    return (
        <Link to='/' onMouseEnter={lgtBorder} onMouseLeave={extBorder}>Start</Link>
    )
};

export default Start;