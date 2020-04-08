module.exports = {
    siteMetadata: {
        title: `Hurricane Charlie - The Art and Illustration of Charlie Taylor`,
        description: `Hurricane Charlie is the illustration and graphic art of Charlie Taylor.`,
        author: `Charlie Taylor`,
    },
    plugins: [
        `gatsby-plugin-eslint`,
        `gatsby-transformer-yaml`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `hurricane-charlie-portfolio`,
                short_name: `hc`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/hcicon.png`, // This path is relative to the root of the site.
            },
        },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    ],
}
