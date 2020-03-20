module.exports = {
  siteMetadata: {
    title: `The Creative Office of Cole Orloff`,
    contact: `coleorloff@gmail.com`,
    description: `Cole Orloff's portfolio site`,
    author: `Shaun Axani`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images'
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://cole-cms.herokuapp.com",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "project",
          "user",
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1920,
            }, 
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
