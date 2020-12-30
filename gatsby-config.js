module.exports = {
  siteMetadata: {
    title: "Joey Steel",
  },
  plugins: ["gatsby-plugin-styled-components", 
            "gatsby-plugin-react-helmet",
            "gatsby-plugin-sass",
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
                name: `src`,
                path: `${__dirname}/src/`,
              },
            },
            "gatsby-plugin-sharp",
            "gatsby-transformer-sharp",
            "gatsby-transformer-remark",
          ],
};
