import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';

const CallToAction = (): JSX.Element => {
    const { heroImage } = useStaticQuery(graphql`
        query {
            heroImage: file(relativePath: {eq: "hero.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <BackgroundImage
            fluid={heroImage.childImageSharp.fluid}
            style={{ backgroundPosition: 'top center' }}
            classId="shop-cta"
        >
            <div className="shop-cta-overlay"></div>
            <div className="shop-cta-box">
                <h2>Prints for your wall...</h2>
                <Link to="/shop">visit shop</Link>
            </div>
        </BackgroundImage>
    );
}

export default CallToAction;