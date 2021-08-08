import HomeHeader from  './HomeHeader';
import HomeWelcome from './HomeWelcome';
import ThreeColumns from './ThreeColumns';
import SimpleSteps from "./SimpleSteps";
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeWelcome/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutUs/>
            <ContactUs/>
        </>
    )
};

export default Home;