import { IconDefinition, IconName } from '@fortawesome/fontawesome-svg-core';
import { faBehance, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export interface SocialItem {
    id: number;
    url: string;
    name: IconName;
    icon: IconDefinition;
}

const social: SocialItem[] = [
    {
        id: 0,
        url: 'http://twitter.com/hurricanechaz',
        name: 'twitter',
        icon: faTwitter,
    },
    {
        id: 2,
        url: 'http://www.instagram.com/hurricane.charlie',
        name: 'instagram',
        icon: faInstagram,
    },
    {
        id: 3,
        url: 'http://www.behance.net/chazhurricane',
        name: 'behance',
        icon: faBehance,
    },
];

export default social;
