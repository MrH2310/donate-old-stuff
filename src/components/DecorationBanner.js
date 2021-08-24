import Decoration from '../assets/Decoration.svg';

const DecorationBanner = ({title, info}) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>{info}</h2>
            <img src={Decoration} alt='decoration'/>
        </>
    )
};

export default DecorationBanner;