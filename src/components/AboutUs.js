import Signature from '../assets/Signature.svg';
import People from '../assets/People.jpg';

import DecorationBanner from './DecorationBanner';

const AboutUs = () => {
    return (
        <div className='about-us' id='about'>
            <div className='explanation'>
                <DecorationBanner title='O nas'/>
                <p>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. 
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip
                </p>
                <img src={Signature} alt='signature'/>
            </div>
            <img src={People} alt='group of people'/>
        </div>
    )
};

export default AboutUs;