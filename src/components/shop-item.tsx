import React from 'react';
import { ShopItemData } from '@content/shop';
import Image from 'next/image';

interface ShopItemProps {
    product: ShopItemData;
}

const ShopItem = ({ product }: ShopItemProps) => {
    const price = `£${product.price.toFixed(2)}`;
    const shopUrl = `https://hurricanecharlie.bigcartel.com/product/${product.shopUrl}`;

    return (
        <div className="shop-item">
            <div className="shop-image-wrapper">
                <a href={shopUrl} target="_blank" rel="noopener noreferrer">
                    <Image
                        className="shop-image"
                        src={`/images/shop/${product.url}`}
                        alt={`Shop - ${product.title}`}
                        fill
                    />
                </a>
            </div>
            <p>{product.title}</p>
            <p>
                <em>{product.desc}</em>
            </p>
            <p>
                <strong>{price}</strong>
            </p>
            {product.soldOut && <div className="shop-status">sold out</div>}
        </div>
    );
};

export default ShopItem;
