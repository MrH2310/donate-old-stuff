import {Link} from "react-router-dom";

import HomeHeader from  './HomeHeader';
import ThreeColumns from './ThreeColumns';

import HomeHeroImage from '../assets/Home-Hero-Image.jpg';
import Decoration from "../assets/Decoration.svg";



const Home = () => {
    return(
        <>
            <HomeHeader/>
            <div className='home'>
                <img src={HomeHeroImage} alt='Old stuff near paper box'/>
                <div className='title' >
                    <h1>Zacznij pomagać!</h1>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img src ={Decoration} alt='Decoration'/>
                    <div className='nav-btn'>
                        <Link to='/login'><button className='donate'>Oddaj rzeczy</button></Link>
                        <Link to='/login'><button className='charity'>Zorganizuj zbiórkę</button></Link>
                    </div>
                </div>
            </div>
            <ThreeColumns/>
        </>
    )
};

export default Home;