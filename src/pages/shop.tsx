import React from 'react';
import Layout from '@components/layout';
import shop from '@content/shop';
import { PageMeta } from '@components/head';
import ShopItem from '@components/shop/shop-item';

const PAGE_META: PageMeta = {
    titleSuffix: 'Shop',
    description: 'Hurricane Charlie Shop - buy prints and artwork here.',
};

const Shop = (): JSX.Element => {
    return (
        <Layout pageMeta={PAGE_META}>
            <div className="shop-container">
                {shop.map((shopItem) => (
                    <ShopItem key={shopItem.id} product={shopItem} />
                ))}
            </div>
        </Layout>
    );
};

export default Shop;
