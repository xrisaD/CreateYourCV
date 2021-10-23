import './ContactMeAnonymously.css';
import { useState } from 'react';
import { send } from 'emailjs-com';

export function ContactMeAnonymously(props) {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Chrysa',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
        'SERVICE ID',
        'TEMPLATE ID',
        toSend,
        'USER ID'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('SUCCESS!');
        })
        .catch((err) => {
            console.log('FAILED...', err);
            alert('FAILED!')
        });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className="ContactMe">
            <h2 className="subtitle">Contact Me</h2>
            <div className="form_out">
                <p> {props.data} </p>
                <form onSubmit={onSubmit}>
                    <label for="from_name">Name</label>
                    <input
                        type='text'
                        name='from_name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />

                    <label for="reply_to">Email</label>
                    <input
                        type='email'
                        name='reply_to'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />

                    <textarea
                        className="message"
                        rows="5" cols="80"
                        type='text'
                        name='message'
                        placeholder="Write your message here..."
                        value={toSend.message}
                        onChange={handleChange}
                    />
                    <br></br>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}
