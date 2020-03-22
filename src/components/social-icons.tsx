import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface SocialItem {
    id: number;
    url: string;
    name: 'instagram' | 'twitter' | 'behance';
}

const SocialIcons = () => {
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
                    <FontAwesomeIcon icon={['fab', item.name]} style={{ color: '#000000' }} size="1x" />
                </a>
            ))}
        </Fragment>
    );
}

export default SocialIcons;