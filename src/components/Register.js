import {Link} from 'react-router-dom';

import HomeHeader from "./HomeHeader";
import DecorationBanner from './DecorationBanner';

const Register = () => {
    const lgtBorder = (e) => {
        e.target.style.border = `1px #3c3c3c solid`;
    };

    const extBorder = (e)=> {
        e.target.style.borderColor = 'transparent'
    }

    return (
        <>
            <HomeHeader/>
            <div className='user-data'>
                <DecorationBanner title={'Załóż konto'}/>
                <form className='login-data'>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email'/>
                    <label htmlFor='password'>Hasło</label>
                    <input id='password' type='password'/>
                    <label htmlFor='repeat-password'>Powtórz hasło</label>
                    <input id='repeat-password' type='password'/>
                </form>
                <div className ='btns'>
                    <Link to ='/login' onMouseEnter={lgtBorder} onMouseLeave={extBorder}>Zaloguj się</Link>
                    <Link to ='/register'onMouseEnter={lgtBorder} onMouseLeave={extBorder}>Załóż konto</Link>
                </div>
            </div>
        </>
    )
};

export default Register;