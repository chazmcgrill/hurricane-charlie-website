import React from 'react';
import Img, { FluidObject } from "gatsby-image";

export interface ShopItemData {
    id: number;
    url: string;
    title: string;
    price: number;
    desc: string;
    soldOut: boolean;
    shopUrl: string;
    image: FluidObject;
}

interface ShopItemProps {
    product: ShopItemData;
}

const ShopItem = ({
    product,
}: ShopItemProps) => {
    const price = `£${(product.price).toFixed(2)}`;
    const shopUrl = `https://hurricanecharlie.bigcartel.com/product/${product.shopUrl}`;

    return (
        <div className="shop-item">
            <a href={shopUrl} target="_blank" rel="noopener noreferrer">
                <Img fluid={product.image} alt={`Shop - ${product.title}`} />
            </a>
            <p>{product.title}</p>
            <p><em>{product.desc}</em></p>
            <p><strong>{price}</strong></p>
            {product.soldOut && <div className="shop-status">sold out</div>}
        </div>
    ) 
}

export default ShopItem;