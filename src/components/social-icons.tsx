import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import social from '@content/social';

const SocialIcons = () => {
    return (
        <Fragment>
            {social.map((item) => (
                <a key={item.id} target="_blank" rel="noopener noreferrer" href={item.url}>
                    <FontAwesomeIcon icon={item.icon} style={{ color: '#333' }} size="1x" />
                </a>
            ))}
        </Fragment>
    );
};

export default SocialIcons;
