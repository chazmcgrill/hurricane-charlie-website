import React from 'react';
import Img from "gatsby-image";

import { IShopItem } from '../globals/shopItems';

interface ShopItemProps {
    product: IShopItem;
    imgData: any;
}

const ShopItem = ({
    product,
    imgData,
}: ShopItemProps) => {
    const price = `£${(product.price).toFixed(2)}`;
    const shopUrl = `https://hurricanecharlie.bigcartel.com/product/${product.shopUrl}`;

    return (
        <div className="shop-item">
            <a href={shopUrl} target="_blank" rel="noopener noreferrer">
                <Img fluid={imgData} />
            </a>
            <p>{product.title}</p>
            <p><em>{product.desc}</em></p>
            <p><strong>{price}</strong></p>
            {product.soldOut && <div className="shop-status">sold out</div>}
        </div>
    ) 
}

export default ShopItem;