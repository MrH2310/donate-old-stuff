import React from "react";
import {Link} from "react-router-dom";

const HomeHeader = () => {
    return(<>
        <div className="user-bar">
            <Link to='/login'><button>Zaloguj</button></Link>
            <Link to='/register'><button>Załóż konto</button></Link>
        </div>
        <ul className="nav-bar">
            <Link to='/'><li>Start</li></Link>
            <li>O co chodzi?</li>
            <li>O nas</li>
            <li>Fundacja i organizacje</li>
            <li>Kontakt</li>
        </ul>
        </>
    )
};

export default HomeHeader;