import React from 'react';
import { IShopItem } from '../globals/shopItems';

interface ShopItemProps {
    product: IShopItem;
    imgFile: string;
}

const ShopItem = ({
    product,
    imgFile,
}: ShopItemProps) => {
    const price = `£${(product.price).toFixed(2)}`;
    const shopUrl = `http://hurricanecharlie.bigcartel.com/product/${product.shopUrl}`;

    return (
        <div className="shop-item">
            <a href={shopUrl} target="_blank" rel="noopener noreferrer">
                <img src={imgFile} alt={product.title} />
            </a>
            <p>{product.title}</p>
            <p><em>{product.desc}</em></p>
            <p><strong>{price}</strong></p>
            {product.soldOut && <div className="shop-status">sold out</div>}
        </div>
    ) 
}

export default ShopItem;