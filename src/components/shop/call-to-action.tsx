import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CallToAction = (): JSX.Element => {
    return (
        <>
            <div className="shop-cta">
                <Image
                    style={{ backgroundPosition: 'top center' }}
                    alt="Shop hero image lumberjack"
                    src="/images/hero.jpg"
                    fill
                />

                <div className="shop-cta-overlay"></div>
                <div className="shop-cta-box">
                    <h2>Prints for your wall...</h2>
                    <Link href="/shop">visit shop</Link>
                </div>
            </div>
        </>
    );
};

export default CallToAction;
