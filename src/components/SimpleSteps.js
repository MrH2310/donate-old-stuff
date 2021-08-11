import {Link} from "react-router-dom";

import Decoration from "../assets/Decoration.svg";
import Icon1 from '../assets/Icon-1.svg';
import Icon2 from '../assets/Icon-2.svg';
import Icon3 from '../assets/Icon-3.svg';
import Icon4 from '../assets/Icon-4.svg';

const SimpleSteps = () => {
    return (
        <div className='donate_banner' id='what'>
            <h1>Wystarczą 4 proste kroki</h1>
            <img src ={Decoration} alt='Decoration'/>
            {/* TODO część z krokami zmienić na komponent i przekazać dane przez propsy */}
            <div className='steps'>
                <div>
                    <img src ={Icon1} alt='Choose things to donate'/>
                    <h3>Wybierz rzeczy</h3>
                    <span></span>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div>
                <img src ={Icon2} alt='Pack it up'/>
                    <h3>Spakuj je</h3>
                    <span></span>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div>
                <img src ={Icon3} alt='Choose who to help'/>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <span></span>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div>
                <img src ={Icon4} alt='Order courier'/>
                    <h3>Zamów kuriera</h3>
                    <span></span>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <Link to='/login'><button className='donate'>Oddaj rzeczy</button></Link>
        </div>
    )
};

export default SimpleSteps;