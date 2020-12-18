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
            "gatsby-plugin-sharp",
            "gatsby-transformer-sharp",
          ],
};
