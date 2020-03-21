import React from 'react';
import { Link } from "gatsby";

const CallToAction = (): JSX.Element => (
    <div className="shop-cta">
        <div className="shop-cta-overlay"></div>
        <div className="shop-cta-box">
            <h2>Prints for your wall...</h2>
            <Link to="/shop">visit shop</Link>
        </div>
    </div>
);

export default CallToAction;