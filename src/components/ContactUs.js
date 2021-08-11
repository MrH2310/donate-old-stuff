import BackgroundContactForm from '../assets/Background-Contact-Form.jpg';
import Decoration from '../assets/Decoration.svg';
import Facebook from '../assets/Facebook.svg';
import Instagram  from '../assets/Instagram.svg';

const ContactUs = () => {
    return (
        <div className='contact-us' id='contact'>
            <div className='contact-background'>
                <img src={BackgroundContactForm} alt='clothes'/>
            </div>
            <div className='contact-form'>
                <h1>Skontaktuj się z nami</h1>
                <img src={Decoration} alt='decoration'/>
                <form>
                    <div>
                        <label>Wpisz swoje imię</label>
                        <input type='text' name='name' placeholder='Andrzej'></input>
                    </div>
                    <div>
                        <label>Wpisz swój email</label>
                        <input type='email' name='email' placeholder='abc@xyz.pl'></input>
                    </div>
                    <div>
                        <label>Wpisz swoją wiadomość</label>
                        <textarea 
                            type='submit' 
                            name='message' 
                            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        />
                    </div>
                </form>
                <button>Wyślij</button>
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