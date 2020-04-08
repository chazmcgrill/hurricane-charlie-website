import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ShopItem, { ShopItemData } from '../components/shop-item';
import Layout from '../components/layout';
import { fluidImageObjectFromArray, GatsbyFluidImageNode } from '../helpers/imageObjectFromArray';
import SEO from '../components/seo';

const combineDataAndImages = (images: GatsbyFluidImageNode[], data: ShopItemData[]) => {
    const flattendImageData = fluidImageObjectFromArray(images);
    return data.map((item) => ({
        ...item,
        image: flattendImageData[item.url],
    }));
}

const Shop = (): JSX.Element => {
    const { images, data } = useStaticQuery(graphql`
        query {
            images: allFile(filter: { relativeDirectory: { eq: "shop" } }) {
                nodes {
                    childImageSharp {
                        fluid {
                            originalName
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            data: shopYaml {
                shop {
                    desc
                    id
                    price
                    shopUrl
                    soldOut
                    title
                    url
                }
            }
        }
    `);

    const shopItems = combineDataAndImages(images.nodes, data.shop);

    return (
        <Layout>
            <SEO title="Shop" />
            <div className="shop-container">
                {shopItems.map((shopItem: ShopItemData) => (
                    <ShopItem key={shopItem.id} product={shopItem} />
                ))}
            </div>
        </Layout>
    );
}

export default Shop;
