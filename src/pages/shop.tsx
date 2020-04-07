import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ShopItem, { ShopItemData } from '../components/shop-item';
import Layout from '../components/layout';
import { fluidImageObjectFromArray } from '../helpers/imageObjectFromArray';
import SEO from '../components/seo';

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

    const flattendImageData = fluidImageObjectFromArray(images.nodes);

    return (
        <Layout>
            <SEO title="Shop" />

            <div className="shop-container">
                {data.shop.map((shopItem: ShopItemData) => (
                    <ShopItem
                        key={shopItem.id}
                        product={shopItem}
                        imgData={flattendImageData[shopItem.url]}
                    />
                ))}
            </div>
        </Layout>
    );
}

export default Shop;
