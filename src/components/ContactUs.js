import BackgroundContactForm from '../assets/Background-Contact-Form.jpg';
import Facebook from '../assets/Facebook.svg';
import Instagram  from '../assets/Instagram.svg';

import ContactForm from './ContactForm';
import DecorationBanner from './DecorationBanner';

const ContactUs = () => {
    const API = 'https://fer-api.coderslab.pl/v1/portfolio';

    const handleSubmit = (newForm) => {
        fetch(`${API}/contact`, {
            method: 'POST',
            body: JSON.stringify(newForm),
            headers: {
                'Content-Type': 'application/json' 
            }
        })

        .then(response => response.json())
        .then(data => {
            console.log(data);
        })

        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className='contact-us' id='contact'>
            <div className='contact-background'>
                <img src={BackgroundContactForm} alt='clothes'/>
            </div>
            <div className='contact'>
                <DecorationBanner title='Skontaktuj się z nami'/>
                <ContactForm submitContact={handleSubmit}/>
                <div className='socials'>
                    <p>Copyright by Coders Lab</p>
                    <img src={Facebook} alt='facebook'/>
                    <img src={Instagram} alt='instagram'/>
                </div>
            </div>
        </div>
    )
};

export default ContactUs;