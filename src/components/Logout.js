import {Link} from 'react-router-dom';

import HomeHeader from './HomeHeader'

import Decoration from '../assets/Decoration.svg';

const Logout = () => {
    return (
        <>
            <HomeHeader/>
            <div>
                <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                <img src={Decoration} alt='decoration'/>
                <Link to='/'>Strona główna</Link>
            </div>
        </>
    )
};

export default Logout;