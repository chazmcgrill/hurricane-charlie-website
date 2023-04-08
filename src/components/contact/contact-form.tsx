import React, { Fragment } from 'react';
import { FormEventType, MessageState, MessageStatus, MouseEventType } from './types';

interface ContactFormProps {
    messageData: MessageState;
    messageStatus: MessageStatus;
    errorMessages: MessageState;
    handleInput: (e: FormEventType) => void;
    handleSubmit: (e: MouseEventType) => Promise<void>;
}

const ContactForm = ({ messageData, messageStatus, errorMessages, handleInput, handleSubmit }: ContactFormProps) => {
    const { name, email, message } = messageData;
    return (
        <Fragment>
            <h2>say hello...</h2>
            <form>
                {messageStatus.msg ? <p style={{ color: messageStatus.status }}>{messageStatus.msg}</p> : null}

                {errorMessages.name ? <p className="err-msg">{errorMessages.name}</p> : null}
                <input name="name" value={name} placeholder="your name" onChange={handleInput} />

                {errorMessages.email ? <p className="err-msg">{errorMessages.email}</p> : null}
                <input name="email" value={email} placeholder="your email" onChange={handleInput} />

                {errorMessages.message ? <p className="err-msg">{errorMessages.message}</p> : null}
                <textarea
                    name="message"
                    value={message}
                    cols={30}
                    rows={10}
                    placeholder="type your message here..."
                    onChange={handleInput}
                />

                <button onClick={handleSubmit}>send</button>
            </form>
        </Fragment>
    );
};

export default ContactForm;
