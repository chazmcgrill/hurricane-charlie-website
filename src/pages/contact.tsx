import React, { useState } from 'react';
import CallToAction from '../components/call-to-action';
import { formValidator } from '../helpers/validators';
import Layout from '../components/layout';
import SocialIcons from '../components/social-icons';
import SEO from '../components/seo';

const DEFAULT_MESSAGE_STATE = { name: '', email: '', message: '' };

const Contact = () => {
    const [data, setData] = useState(DEFAULT_MESSAGE_STATE);
    const [errorMessages, setErrorMessages] = useState(DEFAULT_MESSAGE_STATE);
    const [msgStatus, setMsgStatus] = useState({ msg: '', status: '' });

    const handleInput = (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const { errorMessages, isValid } = formValidator(data);

        if (isValid) {
            let newMessageStatus = { ...msgStatus };

            try {
                const { ok } = await fetch('https://ct-core-api.herokuapp.com/hc-contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (ok) {
                    newMessageStatus = {
                        msg: 'message sent, speak to you soon...',
                        status: 'green',
                    };
                }
            } catch (err) {
                newMessageStatus = {
                    msg: 'message failed! please retry.',
                    status: 'red',
                };
            }

            setData(DEFAULT_MESSAGE_STATE);
            setMsgStatus(newMessageStatus);
        }
        
        setErrorMessages(errorMessages);
    }

    const { name, email, message } = data;

    return (
        <Layout>
            <SEO title="404: Not found" />
            <div className="contact-box">
                <div className="contact-item">
                    <h2>say hello...</h2>
                    <form>
                        {msgStatus.msg ? <p style={{ color: msgStatus.status }}>{msgStatus.msg}</p> : null}

                        {errorMessages.name ? <p className="err-msg">{errorMessages.name}</p> : null}
                        <input
                            name="name"
                            value={name}
                            placeholder="your name"
                            onChange={handleInput}
                        />

                        {errorMessages.email ? <p className="err-msg">{errorMessages.email}</p> : null}
                        <input
                            name="email"
                            value={email}
                            placeholder="your email"
                            onChange={handleInput}
                        />

                        {errorMessages.message ? <p className="err-msg">{errorMessages.message}</p> : null}
                        <textarea
                            name="message"
                            value={message}
                            cols={30} rows={10}
                            placeholder="type your message here..."
                            onChange={handleInput}
                        />

                        <button onClick={handleSubmit}>send</button>
                    </form>
                </div>

                <div className="contact-item contact-text">
                    <div>
                        <p>{`Please feel free to contact me with any questions. I'm open to commissions and exhibitions so do get in touch.`}</p>
                        <h2>social</h2>
                        <p>You can find me on these social platforms:</p>
                        <div className="contact-icons">
                            <SocialIcons />
                        </div>
                        <h2>coding</h2>
                        <p>I designed and coded this website. For more information please visit my web development portfolio <a target="_blank" rel="noopener noreferrer" href="http://charlietaylorcoder.com">here</a></p>
                    </div>
                </div>
            </div>
        
            <CallToAction />
        </Layout>
    );
}

export default Contact;