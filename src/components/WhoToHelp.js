import Decoration from '../assets/Decoration.svg';

const WhoToHelp = () => {
    return (
        <div className='who-to-help' id='organisations'>
            <h1>Komu pomagamy?</h1>
            <img src={Decoration} alt='decoration'/>
            <ul>
                <li>Fundacjom</li>
                <li>Oragnizacjom pozarządowym</li>
                <li>Lokalnym zbiórkom</li>
            </ul>
            <p className='org-description'>
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
             </p>
            <div className='org-lists'>
                <div>
                    <h3>Fundacja “Dbam o Zdrowie”</h3>
                    <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                </div>
                <div>
                    <h3>Fundacja “Dla dzieci”</h3>
                    <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    <p>ubrania, meble, zabawki</p>
                </div>
                <div>
                    <h3>Fundacja “Bez domu”</h3>
                    <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    <p>ubrania, jedzenie, ciepłe koce</p>
                </div>
                {/* <div>
                    <h3>Fundacja “Bez domu”</h3>
                    <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    <p>ubrania, jedzenie, ciepłe koce</p>
                </div>
                <div>
                    <h3>Fundacja “Bez domu”</h3>
                    <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    <p>ubrania, jedzenie, ciepłe koce</p>
                </div>
                <div>
                    <h3>Fundacja “Bez domu”</h3>
                    <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    <p>ubrania, jedzenie, ciepłe koce</p>
                </div> */}
            </div>
        </div>
    )
};

export default WhoToHelp;