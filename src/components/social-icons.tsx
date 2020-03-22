import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export interface SocialItem {
    id: number;
    url: string;
    name: string;
}

const Footer = () => {
    const socialItems = useStaticQuery(graphql`
        query {
            socialYaml {
                social {
                    id
                    name
                    url
                }
            }
        }
    `);

    return (
        <Fragment>
            {socialItems.socialYaml.social.map((item: SocialItem) => (
                <a key={item.id} target="_blank" rel="noopener noreferrer" href={item.url}>
                    <i className={`fab fa-${item.name}`}></i>
                </a>
            ))}
        </Fragment>
    );
}

export default Footer