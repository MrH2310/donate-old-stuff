import {Link} from 'react-router-dom';

import HomeHeader from  '../header/HomeHeader';
import DecorationBanner from '../DecorationBanner';

const Logout = () => {
    return (
        <>
            <HomeHeader/>
            <div className='logout-view'>
                <DecorationBanner title='Wylogowanie nastąpiło pomyślnie!'/>
                <Link to='/'>Strona główna</Link>
            </div>
        </>
    )
};

export default Logout;