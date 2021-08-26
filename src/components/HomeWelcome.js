import {Link} from "react-router-dom";

import HomeHeroImage from '../assets/Home-Hero-Image.jpg';

import DecorationBanner from "./DecorationBanner";

const HomeWelcome = () => {
    return (
        <div className='home' id='welcome'>
            <img src={HomeHeroImage} alt='Old stuff near paper box'/>
            <div className='title' >
                <DecorationBanner 
                title='Zacznij pomagać!'
                info='Oddaj niechciane rzeczy w zaufane ręce'
                />
                <div className='nav-btn'>
                    <Link to='/login'><button className='donate'>Oddaj rzeczy</button></Link>
                    <Link to='/login'><button className='charity'>Zorganizuj zbiórkę</button></Link>
                </div>
            </div>
        </div>
    )
};

export default HomeWelcome;