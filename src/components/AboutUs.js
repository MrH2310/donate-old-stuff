import Signature from '../assets/Signature.svg';
import People from '../assets/People.jpg';
import Decoration from '../assets/Decoration.svg';

const AboutUs = () => {
    return (
        <div className='about-us' id='about'>
            <div className='explanation'>
                <h1>O nas</h1>
                <img src={Decoration} alt='decoration'/>
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