import React from 'react';
import ShopItem from '@components/shop-item';
import Layout from '@components/layout';
import shop from '@content/shop';

const Shop = (): JSX.Element => {
    return (
        <Layout>
            <div className="shop-container">
                {shop.map((shopItem) => (
                    <ShopItem key={shopItem.id} product={shopItem} />
                ))}
            </div>
        </Layout>
    );
};

export default Shop;
