module.exports = {
  siteMetadata: {
    title: `Marianne Rowe`,
    description: `Marriage Counseling, Child Therapy, Family Therapy, Climate-Informed Therapy, Climate-Informed Therapist, Mindfulness Meditation
      Instruction, Monterey California`,
    author: `@tristangruener`,
    siteUrl: `http://www.mariannerowe.net/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marianne B. Rowe, MS`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Sorts Mill Goudy`,
          `serif`
        ]
      }
    },
    `gatsby-plugin-netlify`
  ],
}