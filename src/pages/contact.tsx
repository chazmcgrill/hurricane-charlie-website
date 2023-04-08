import React, { useState } from 'react';
import CallToAction from '@components/shop/call-to-action';
import { formValidator } from '@components/contact/validators';
import Layout from '@components/layout';
import SocialIcons from '@components/social-icons';
import LoadingSpinner from '@components/loading-spinner';
import ContactForm from '@components/contact/contact-form';
import { PageMeta } from '@components/head';
import { FormEventType, MessageState, MessageStatus, MouseEventType } from '@components/contact/types';

const DEFAULT_MESSAGE_STATE = { name: '', email: '', message: '' };
const PAGE_META: PageMeta = {
    titleSuffix: 'Contact',
    description: 'Hurricane Charlie contact page - please get in touch.',
};

const Contact = () => {
    const [messageData, setMessageData] = useState<MessageState>(DEFAULT_MESSAGE_STATE);
    const [errorMessages, setErrorMessages] = useState<MessageState>(DEFAULT_MESSAGE_STATE);
    const [messageStatus, setMessageStatus] = useState<MessageStatus>({
        msg: '',
        status: '',
        isLoading: false,
    });

    const handleInput = (e: FormEventType): void => {
        setMessageData({
            ...messageData,
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };

    const handleSubmit = async (e: MouseEventType): Promise<void> => {
        e.preventDefault();
        const { errorMessages, isValid } = formValidator(messageData);

        if (isValid) {
            setMessageStatus({ ...messageStatus, isLoading: true });

            let newMessageStatus = { ...messageStatus };

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(messageData),
                });

                if (response.status === 200) {
                    newMessageStatus = {
                        msg: 'message sent, speak to you soon...',
                        status: 'green',
                    };
                } else {
                    newMessageStatus = {
                        msg: 'message failed! please retry.',
                        status: 'red',
                    };
                }
            } catch (err) {
                newMessageStatus = {
                    msg: 'message failed! please retry.',
                    status: 'red',
                };
            }

            setMessageData(DEFAULT_MESSAGE_STATE);
            setMessageStatus({ ...newMessageStatus, isLoading: false });
        }

        setErrorMessages(errorMessages);
    };

    return (
        <Layout pageMeta={PAGE_META}>
            <div className="contact-box">
                <div className="contact-item">
                    {messageStatus.isLoading ? (
                        <LoadingSpinner text="Sending message, please wait." />
                    ) : (
                        <ContactForm
                            messageData={messageData}
                            messageStatus={messageStatus}
                            errorMessages={errorMessages}
                            handleInput={handleInput}
                            handleSubmit={handleSubmit}
                        />
                    )}
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
                        <p>
                            I designed and coded this website. For more information please visit my web development portfolio{' '}
                            <a target="_blank" rel="noopener noreferrer" href="http://charlietaylorcoder.com">
                                here
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <CallToAction />
        </Layout>
    );
};

export default Contact;
