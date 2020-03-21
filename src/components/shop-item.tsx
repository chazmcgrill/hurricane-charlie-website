import React from 'react';
import { IShopItem } from '../globals/shopItems';
import Image from './image';

interface ShopItemProps {
    product: IShopItem;
}

const ShopItem = ({
    product,
}: ShopItemProps) => {
    const price = `£${(product.price).toFixed(2)}`;
    const shopUrl = `https://hurricanecharlie.bigcartel.com/product/${product.shopUrl}`;

    return (
        <div className="shop-item">
            <a href={shopUrl} target="_blank" rel="noopener noreferrer">
                <Image />
            </a>
            <p>{product.title}</p>
            <p><em>{product.desc}</em></p>
            <p><strong>{price}</strong></p>
            {product.soldOut && <div className="shop-status">sold out</div>}
        </div>
    ) 
}

export default ShopItem;