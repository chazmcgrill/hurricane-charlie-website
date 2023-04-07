import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const SITE_URL = 'https://hurricanecharlie.co.uk';
const SITE_TITLE = 'Hurricane Charlie - The Art and Illustration of Charlie Taylor';
const SITE_DESCRIPTION = 'Hurricane Charlie is the illustration and graphic art of Charlie Taylor.';

export interface PageMeta {
    titleSuffix?: string;
    description?: string;
    articleDate?: string;
}

interface PageContainerProps {
    pageMeta?: PageMeta;
}

const HeadComponent = ({ pageMeta }: PageContainerProps) => {
    const router = useRouter();

    const siteTitle = `${SITE_TITLE} - ${pageMeta?.titleSuffix || 'Home'}`;
    const siteDescription = pageMeta?.description || SITE_DESCRIPTION;
    const articleDate = pageMeta?.articleDate;
    const currentRoute = `${SITE_URL}${router.asPath}`;

    return (
        <Head>
            <title>{siteTitle}</title>
            <meta name="robots" content="follow, index" />
            <meta name="description" content={siteDescription} />
            <link rel="icon" href="/favicon.ico" />
            <meta name="msapplication-config" content="none" />
            <link rel="canonical" href={currentRoute} />

            {/* facebook open graph meta data for social links */}
            <meta property="og:url" content={currentRoute} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SITE_TITLE} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:title" content={siteTitle} />
            {/* <meta property="og:image" content={config.meta.socialIconSrc} /> */}

            {/* twitter card meta data for social links */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@charlietdev" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            {/* <meta name="twitter:image" content={config.meta.socialIconSrc} /> */}

            {/* for use if we have dated articles (optional) */}
            {articleDate && <meta property="article:published_time" content={articleDate} />}
        </Head>
    );
};

export default HeadComponent;
