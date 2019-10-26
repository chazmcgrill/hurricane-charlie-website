import React, { useState, useEffect } from 'react';
import ShopItem from './ShopItem';
import { shopItems } from '../globals/shopItems';
import { validateEmail } from '../helpers/validators';

import imageImport from '../helpers/imageImport';

const images = imageImport(require.context('../images/shop', false, /\.(png|jpe?g|svg)$/));

const Shop = () => {
    const [email, setEmail] = useState('');
    const [message, setMsg] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const mailListSubmit = async (): Promise<void> => {
        const isEmailValid = validateEmail(email);
        let newMessage = '';

        if (!isEmailValid) {
            try {
                await fetch(process.env.MAILER_URL!, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(email),
                })
                newMessage = 'You\'ve been added to the mailing list';
            } catch (error) {
                newMessage = 'Something went wrong, please try again.';
            }
        }

        setMsg(newMessage);
    }

    const mailListChange = (e: React.FormEvent<HTMLInputElement>): void => setEmail(e.currentTarget.value);
  
    const statusMsg = message && <p>{message}</p>;

    return (
        <div>
            <div className="shop-container">
                {shopItems.map((shopItem) => (
                    <ShopItem
                        key={shopItem.id}
                        product={shopItem}
                        imgFile={images[shopItem.url]}
                    />
                ))}
            </div>

            <div className="mailer-cta">
                <h2>Be the first to know about new items</h2>
                {statusMsg}
                <div className="mailer-form">
                    <input
                        value={email}
                        onChange={mailListChange}
                        type="email" placeholder="your email"
                    />
                    <button onClick={mailListSubmit}>join</button>
                </div>
            </div>
        </div>
    );
}

export default Shop;
