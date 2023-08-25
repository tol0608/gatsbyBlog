/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `오늘도 앞으로`,
    description: `미래를 위해 지금 생각하고, 기록하자`,
    author: `Jae Hyeon`,
    siteUrl: `https://tol0608.github.io/gatsbyBlog`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
  ],
}
