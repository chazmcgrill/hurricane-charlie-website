import React, { Component } from 'react';
import CallToAction from '../components/call-to-action';
import socialItems from '../globals/socialItems';
import { formValidator, FormValidatorData } from '../helpers/validators';
import Layout from '../components/layout';

interface ContactState {
    data: FormValidatorData;
    errorMessages: FormValidatorData;
    msgStatus: MessageStatus;
}

interface MessageStatus {
    msg: string;
    status: string;
}

class Contact extends Component<{}, ContactState> {
    state = {
        data: { name: '', email: '', message: '' },
        errorMessages: { name: '', email: '', message: '' },
        msgStatus: { msg: '', status: '' },
    };

    handleInput = (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ 
            data: { 
                ...this.state.data, 
                [e.currentTarget.name]: e.currentTarget.value, 
            }, 
        });
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const { errorMessages, isValid } = formValidator(this.state.data);

        if (isValid) {
            const { data } = this.state;
            let { msgStatus } = this.state;
      
            try {
                const { ok } = await fetch('https://ct-core-api.herokuapp.com/hc-contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (ok) {
                    msgStatus = { msg: "message sent, speak to you soon...", status: "green" };
                }
            } catch (err) {
                msgStatus = { msg: "message failed! please retry.", status: "red" };
            }

            this.setState({
                data: { name: '', email: '', message: '' },
                errorMessages,
                msgStatus,
            });
  
        } else {
            this.setState({ errorMessages });
        }
    }

    render() {
        const { name, email, message } = this.state.data;
        const { errorMessages, msgStatus } = this.state;
        return (
            <Layout>
                <div className="contact-box">
                    <div className="contact-item">
                        <h2>say hello...</h2>
                        <form>
                            {msgStatus.msg ? <p style={{ color: msgStatus.status }}>{ msgStatus.msg }</p> : null}
                            {errorMessages.name ? <p className="err-msg">{errorMessages.name}</p> : null}
                            <input 
                                name="name"
                                value={name} 
                                placeholder="your name" 
                                onChange={this.handleInput} 
                            />
                            {errorMessages.email ? <p className="err-msg">{errorMessages.email}</p> : null}
                            <input 
                                name="email"
                                value={email} 
                                placeholder="your email" 
                                onChange={this.handleInput} 
                            />
                            {errorMessages.message ? <p className="err-msg">{errorMessages.message}</p> : null}
                            <textarea 
                                name="message"
                                value={message}
                                cols={30} rows={10} 
                                placeholder="type your message here..." 
                                onChange={this.handleInput} 
                            />
                            <button
                                onClick={this.handleSubmit}
                            >send</button>
                        </form>
                    </div>

                    <div className="contact-item contact-text">
                        <div>
                            <p>{`Please feel free to contact me with any questions. I'm open to commissions and exhibitions so do get in touch.`}</p>
                            <h2>social</h2>
                            <p>You can find me on these social platforms:</p>
                            <ul>
                                {socialItems.map(s => (
                                    <li key={s.id}>
                                        <a target="_blank" rel="noopener noreferrer" href={s.url}>
                                            <i className={`fab fa-${s.name}`}></i>{s.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <h2>coding</h2>
                            <p>I designed and coded this website. For more information please visit my web development portfolio <a target="_blank" rel="noopener noreferrer" href="http://charlietaylorcoder.com">here</a></p>
                        </div>
                    </div>
                </div>
                <CallToAction />
            </Layout>
        );
    }
}

export default Contact;