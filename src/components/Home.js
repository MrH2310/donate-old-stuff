import HomeHeader from  './HomeHeader';
import HomeWelcome from './HomeWelcome';
import ThreeColumns from './ThreeColumns';
import SimpleSteps from "./SimpleSteps";
import AboutUs from './AboutUs';
import WhoToHelp from './WhoToHelp';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeWelcome/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutUs/>
            <WhoToHelp/>
            <ContactUs/>
        </>
    )
};

export default Home;