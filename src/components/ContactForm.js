import {useState} from 'react';

const ContactForm = ({submitContact}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    let infoName;
    if (name.value === (/^\S+/)) {
        infoName = ' ';
    } else {
        infoName = 'Podane imię jest nieprawidłowe!';
    };

    let infoEmail;
    if (email.value === (/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        infoEmail = ' ';
    } else {
        infoEmail = 'Podany email jest nieprawidłowy!';
    };

    let infoMessage;
    if (message.length === 120) {
        infoMessage = ' ';
    } else {
        infoMessage = 'Wiadomość musi mieć co najmniej 120 znaków!';
    };

    const errorStyle = {
        color: 'red',
    };

    const handleChange = (e) => {
        e.preventDefault();
        submitContact({
            name: name,
            email: email,
            message: message,
        })
    };

    return (
        <form onSubmit={handleChange}>
            <div>
                <label htmlFor='contact-name'>Wpisz swoje imię</label>
                <input type='text' placeholder='Andrzej' value={name} onChange={e => setName(e.target.value)}/>
                <p style={errorStyle}>{infoName}</p>
            </div>
            <div>
                <label htmlFor='contact-email'>Wpisz swój email</label>
                <input type='email' placeholder='abc@xyz.pl' value={email} onChange={e => setEmail(e.target.value)}/>
                <p style={errorStyle}>{infoEmail}</p>
            </div>
            <div>
                <label htmlFor='contact-message'>Wpisz swoją wiadomość</label>
                <textarea 
                    type='submit'  
                    placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <p style={errorStyle}>{infoMessage}</p>
            </div>
            <button type='submit'>Wyślij</button>
        </form>
    )
};

export default ContactForm;